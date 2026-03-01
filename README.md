# Pretty-Mails

Pretty-Mails to webowa aplikacja do tworzenia wiadomości e-mail HTML, eksportu do `.eml` i wysyłki przez Gmail OAuth.

## Funkcje

- edytor treści wiadomości z podglądem,
- obsługa załączników i osadzania logo,
- eksport gotowej wiadomości do `.eml`,
- wysyłka bezpośrednio przez Gmail API (OAuth),
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

## Konfiguracja OAuth

Szczegóły konfiguracji Gmail OAuth znajdziesz w:

- [`README-OAUTH.md`](./README-OAUTH.md)
- [`oauth-config.js`](./oauth-config.js)

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
