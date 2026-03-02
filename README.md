# Pretty-Mails

Pretty-Mails to webowa aplikacja do tworzenia wiadomości e-mail HTML i wysyłki przez Apple Shortcuts -> Apple Mail.

## Funkcje

- edytor treści wiadomości z podglądem,
- obsługa załączników jako lokalnych przycisków pobierania (base64/data URL),
- jeden przycisk wysyłki: `Wyślij (Apple Mail)`,
- flow wysyłki: kopiowanie HTML do schowka -> uruchomienie skrótu Apple,
- opcjonalne pola odbiorców `Do` / `DW` / `UDW` przekazywane do skrótu,
- tryb załączników dla skrótu:
  - checkbox zaznaczony: skrót pyta o wybór plików,
  - checkbox odznaczony: załączniki lecą z appki jako base64 (bez pytania o wybór plików),
- przed wysyłką HTML jest inline-owany (style z `<style>` są przenoszone do `style=""` gdzie to możliwe),
- wszystkie szablony `templates/*.html` są zapisane bez `<style>` (inline `style=""`),
- wybór 2 głównych kolorów + szybkie presety palety,
- dodatkowe szablony: `Brief`, `Ribbon`,
- tryb Apple-only (iPhone/iPad/Mac), bez OAuth i bez backendu,
- wielojęzyczny interfejs (`pl`, `en`, `uk`),
- tryby motywu (`auto`, `light`, `dark`).

## Instalacja skrótu (użytkownik)

Jeśli nie masz skrótu, dodajesz go tylko z gotowego linku iCloud:

- link instalacyjny: https://www.icloud.com/shortcuts/aa52679fda8e4891a520592eacb61ca0

Kroki:

1. Otwórz link iCloud (najlepiej w Safari).
2. W aplikacji Shortcuts kliknij `Add Shortcut`.
3. Uruchom skrót raz i zaakceptuj uprawnienia.
4. Wróć do Pretty-Mails i kliknij `Wyślij (Apple Mail)`.

To wszystko. Użytkownik nie musi tworzyć skrótu ręcznie.

## Konfiguracja linku (deweloper)

W pliku `app.js` ustaw:

```js
const SHORTCUT_INSTALL_URL = "https://www.icloud.com/shortcuts/REPLACE_WITH_REAL_ID";
```

Przycisk `Zainstaluj skrót` w modalu korzysta z tego linku.

### Tworzenie skrótu (tylko dla dewelopera)

Ta sekcja jest tylko dla osoby utrzymującej projekt. Końcowy użytkownik ma tylko dodać gotowy skrót z linku iCloud.

Minimalny flow skrótu `PrettyMail`:

1. `Get Shortcut Input`
2. `Get Dictionary from Input`
3. Pobierz klucze: `to`, `cc`, `bcc`, `subject`, `pickFilesInShortcut`, `attachments`.
4. `Get Clipboard`
5. `Make Rich Text from HTML` -> zapisz jako `RichBody`.
6. `If pickFilesInShortcut is true`:
   - `Select Files` (Allow Multiple: ON) -> `FilesForEmail`
7. `Otherwise`:
   - utwórz pustą listę `FilesForEmail`
   - `Repeat with each item in attachments`:
     - pobierz `name`, `mimeType`, `base64`
     - zdekoduj base64 do pliku (`Base64 Encode` w trybie decode)
     - ustaw nazwę pliku na `name`
     - dodaj plik do `FilesForEmail`
8. `Email`:
   - `Message`: `RichBody`
   - `Recipients`: `to`
   - `Cc`: `cc` (opcjonalne)
   - `Bcc`: `bcc` (opcjonalne)
   - `Subject`: `subject`
   - `Attachments`: `FilesForEmail`
   - `Show Compose Sheet`: `ON`

Publikacja:

1. `Share` -> `Copy iCloud Link`
2. Podmień `SHORTCUT_INSTALL_URL` w `app.js`

### Czy trzeba zmieniać skrót?

Jeśli masz starszą wersję skrótu, sprawdź ten checklist:

1. W akcji `Email` pole `Message` musi brać wynik `Make Rich Text from HTML` (np. `RichBody`).
2. Między `Make Rich Text from HTML` a `Email` nie używaj akcji `Text` / `Get Text` dla treści wiadomości.
3. W akcji `Email` ustaw `Show Compose Sheet = ON`.
4. Obsługa załączników:
   - `pickFilesInShortcut = true` -> `Select Files`
   - `pickFilesInShortcut = false` -> dekoduj `attachments` z payloadu i dodaj do `FilesForEmail`.

### Najczęstsze problemy

- Brak reakcji po kliknięciu:
  - upewnij się, że skrót jest dodany z linku iCloud,
  - uruchom skrót raz ręcznie i zaakceptuj uprawnienia,
  - sprawdź, czy testujesz w Safari (inne przeglądarki na iOS bywają bardziej restrykcyjne).
- Skrót pyta o wybór plików, mimo że nie chcesz:
  - sprawdź warunek `pickFilesInShortcut`,
  - gałąź `FALSE` musi dekodować `attachments` z payloadu.
- Skrót odpala się, ale mail bez stylu:
  - zainstaluj ponownie skrót z linku iCloud (aktualna wersja),
  - sprawdź checklistę z sekcji `Czy trzeba zmieniać skrót?`,
  - upewnij się, że używasz Safari.
- Brak dostępu do schowka:
  - uruchamiaj przez `https` lub `http://localhost`,
  - zaakceptuj prompt Safari dotyczący clipboard.
- Za duży payload:
  - ogranicz rozmiar/ilość załączników albo zaznacz checkbox `Załączniki wybiorę w Skrótach`.

### Diagnostyka przycisku `Wyślij (Apple Mail)`

W `app.js` jest włączone logowanie diagnostyczne:

```js
const SHORTCUT_DIAGNOSTICS_ENABLED = true;
```

Logi w konsoli mają prefiks `[PrettyMail]` i `session` (ID pojedynczej sesji).

Najważniejsze eventy:

- `send:button_clicked` - klik przycisku został wykryty,
- `send:blocked_by_validation` - klik został zatrzymany przez walidację (zobacz `issues`),
- `send:start` - start flow wysyłki,
- `clipboard:copy_start` / `clipboard:copy_method` - próba i metoda kopiowania HTML,
- `shortcut:payload_ready` - payload JSON gotowy (rozmiar + liczba załączników),
- `shortcut:build_url` - długość URL `shortcuts://`,
- `shortcut:url_too_long` - payload jest za duży do uruchomienia skrótu przez URL,
- `shortcut:launch_attempt` - podjęta próba uruchomienia skrótu,
- `shortcut:no_visibility_change_show_modal` - przeglądarka nie przeszła w tło, więc skrót prawdopodobnie się nie otworzył,
- `shortcut:modal_open` - otwarcie modala pomocy.

Szybkie mapowanie problemów:

- „Klikam i nic”:
  - sprawdź `send:blocked_by_validation` (najczęstsze),
  - sprawdź czy pojawia się `send:start`; jeśli nie, event click może nie dochodzić.
- „Skopiowało, ale skrót się nie otwiera”:
  - sprawdź `shortcut:launch_attempt`,
  - jeśli potem jest `shortcut:no_visibility_change_show_modal`, iOS/Safari zablokował `shortcuts://` lub skrót nie jest poprawnie zainstalowany.
- „Modal payload error”:
  - szukaj `shortcut:url_too_long`; zmniejsz załączniki lub użyj `pickFilesInShortcut=true`.

Jak zebrać logi do analizy:

1. Otwórz narzędzia deweloperskie (konsola).
2. Przefiltruj po `[PrettyMail]`.
3. Kliknij `Wyślij (Apple Mail)`.
4. Skopiuj 10-30 linii od `send:button_clicked` do końca flow.

## Uruchomienie lokalne

Projekt jest statyczny, więc wystarczy serwer plików:

```bash
cd /Users/andrish97/Dokumenty/pretty-mails
python3 -m http.server 5500
```

Następnie otwórz:

- `http://localhost:5500/`

## Polityka prywatności i warunki

Podstrona legal:

- [`legal.html`](./legal.html)

Link do tej podstrony jest też dostępny w stopce strony głównej.

## Struktura

- `index.html` - główna aplikacja,
- `app.js` - logika aplikacji,
- `app.css` - stylowanie,
- `legal.html`, `legal.js` - polityka prywatności i warunki,
- `sw.js` - service worker (cache app shell),
- `templates/` - szablony wiadomości.

## Licencja

Projekt jest udostępniony na licencji MIT.
Zobacz: [`LICENSE`](./LICENSE)
