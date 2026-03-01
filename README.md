# Pretty-Mails

Pretty-Mails to webowa aplikacja do tworzenia wiadomości e-mail HTML i eksportu roboczych wiadomości `.eml`.

## Funkcje

- edytor treści wiadomości z podglądem,
- obsługa załączników jako lokalnych przycisków pobierania (base64/data URL),
- jeden tryb eksportu: `Pobierz szkic .eml` (Apple Mail draft template),
- nagłówki draftu: `X-Unsent: 1` i `X-Uniform-Type-Identifier: com.apple.mail-draft`,
- MIME `multipart/alternative` (`text/plain` + `text/html`),
- wielojęzyczny interfejs (`pl`, `en`, `uk`),
- tryby motywu (`auto`, `light`, `dark`).

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
