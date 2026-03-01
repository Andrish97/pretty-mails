# Pretty-Mails

Pretty-Mails to webowa aplikacja do tworzenia wiadomości e-mail HTML i wysyłki przez Apple Shortcuts -> Apple Mail.

## Funkcje

- edytor treści wiadomości z podglądem,
- obsługa załączników jako lokalnych przycisków pobierania (base64/data URL),
- jeden przycisk wysyłki: `Wyślij (Apple Mail)`,
- flow wysyłki: kopiowanie HTML do schowka -> uruchomienie skrótu Apple,
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

`SHORTCUT_INSTALL_URL`:
1. Utwórz skrót w aplikacji Shortcuts.
2. Wybierz Share -> Copy iCloud Link.
3. Wklej link do `SHORTCUT_INSTALL_URL`.

Uwaga: webapp nie tworzy skrótu automatycznie. Skrót trzeba utworzyć i opublikować raz ręcznie.

Wymagane akcje skrótu:
1. `Get Clipboard`
2. `Make Rich Text from HTML`
3. `Email` (`Show Compose Sheet` = ON)

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
