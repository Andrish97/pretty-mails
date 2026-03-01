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

## Konfiguracja skrótu Apple (deweloper)

W pliku `app.js` ustaw stałe:

```js
const SHORTCUT_NAME = "PrettyMail";
const SHORTCUT_INSTALL_URL = "https://www.icloud.com/shortcuts/REPLACE_WITH_REAL_ID";
const SHORTCUT_RUN_BASE = "shortcuts://run-shortcut";
```

Uwaga: webapp nie tworzy skrótu automatycznie. Skrót trzeba utworzyć i opublikować ręcznie.

### Payload wejściowy do skrótu (JSON)

Webapp przekazuje do skrótu JSON:

```json
{
  "to": "user@example.com",
  "cc": "",
  "bcc": "",
  "subject": "Temat",
  "pickFilesInShortcut": false,
  "attachments": [
    {
      "name": "plik.pdf",
      "mimeType": "application/pdf",
      "base64": "JVBERi0xLjcKJc..."
    }
  ]
}
```

- `cc` i `bcc` są opcjonalne (mogą być puste).
- Gdy `pickFilesInShortcut = true`, traktuj `attachments` jako pomocnicze i użyj wyboru plików w skrócie.
- Gdy `pickFilesInShortcut = false`, nie pytaj o pliki - użyj `attachments` z payloadu.

### Krok po kroku: jak zbudować skrót PrettyMail (aktualny flow)

1. Otwórz aplikację **Shortcuts** i utwórz nowy skrót.
2. Ustaw nazwę skrótu dokładnie taką jak `SHORTCUT_NAME` (domyślnie `PrettyMail`).
3. Dodaj akcję `Get Shortcut Input`.
4. Dodaj akcję `Get Dictionary from Input` (parsowanie JSON do słownika).
5. Pobierz wartości kluczy:
   - `to`,
   - `cc`,
   - `bcc`,
   - `subject`,
   - `pickFilesInShortcut`,
   - `attachments`.
6. Dodaj akcję `Get Clipboard`.
7. Dodaj akcję `Make Rich Text from HTML` (na danych z clipboard) i zapisz wynik jako `RichBody`.
8. Dodaj warunek `If pickFilesInShortcut is true`:
   - **TRUE**: użyj `Select Files` (Allow Multiple: ON) i zapisz jako `FilesForEmail`.
   - **FALSE**:
     1. Utwórz pustą listę `FilesForEmail`.
     2. `Repeat with each item in attachments`:
        - pobierz `name`, `mimeType`, `base64`,
        - zdekoduj base64 do pliku (akcja `Base64 Encode` w trybie decode),
        - ustaw nazwę pliku na `name`,
        - dodaj plik do `FilesForEmail`.
9. Dodaj akcję `Email`:
   - `Message`: `RichBody`,
   - `Recipients`: `to`,
   - `Cc`: `cc` (opcjonalne),
   - `Bcc`: `bcc` (opcjonalne),
   - `Subject`: `subject`,
   - `Attachments`: `FilesForEmail` (gdy pusta lista, nic nie doda),
   - `Show Compose Sheet`: `ON` (koniecznie).
10. Zapisz skrót i uruchom go raz ręcznie, potwierdzając uprawnienia.

### Publikacja skrótu i podpięcie do aplikacji

1. W Shortcuts kliknij `Share`.
2. Wybierz `Copy iCloud Link`.
3. Wklej ten link jako `SHORTCUT_INSTALL_URL` w `app.js`.

### Test flow

1. Otwórz appkę w **Safari** na iPhone/iPad/Mac.
2. Kliknij `Wyślij (Apple Mail)`.
3. Powinno nastąpić: kopiowanie HTML -> uruchomienie skrótu -> ekran compose w Apple Mail.

### Najczęstsze problemy

- Brak reakcji po kliknięciu:
  - sprawdź, czy skrót ma identyczną nazwę jak `SHORTCUT_NAME`,
  - sprawdź, czy pierwszy run skrótu był wykonany ręcznie (uprawnienia),
  - sprawdź, czy testujesz w Safari (inne przeglądarki na iOS bywają bardziej restrykcyjne).
- Skrót pyta o wybór plików, mimo że nie chcesz:
  - sprawdź warunek `pickFilesInShortcut`,
  - gałąź `FALSE` musi iść po `attachments` z payloadu (bez `Select Files`).
- Skrót odpala się, ale mail bez stylu:
  - upewnij się, że akcja to `Make Rich Text from HTML`, a nie zwykły `Text`.
- Brak dostępu do schowka:
  - uruchamiaj przez `https` lub `http://localhost`,
  - zaakceptuj prompt Safari dotyczący clipboard.
- Za duży payload:
  - ogranicz rozmiar/ilość załączników albo zaznacz checkbox `Załączniki wybiorę w Skrótach`.

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
