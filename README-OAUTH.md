# Pretty-Mails OAuth Setup

Ten plik opisuje konfigurację wysyłki przez:
- Google (Gmail API)
- Microsoft (Outlook / Graph API)

## 1. Gdzie ustawić zmienne

Edytuj plik:
- [`oauth-config.js`](/oauth-config.js)

Do uzupełnienia:
- `window.PRETTY_MAILS_GOOGLE_CLIENT_ID`
- `window.PRETTY_MAILS_ALLOWED_EMAIL` (opcjonalnie)
- `window.PRETTY_MAILS_OUTLOOK_CLIENT_ID`
- `window.PRETTY_MAILS_OUTLOOK_TENANT_ID`
- `window.PRETTY_MAILS_OUTLOOK_ALLOWED_EMAIL` (opcjonalnie)
- `window.PRETTY_MAILS_OUTLOOK_REDIRECT_URI` (opcjonalnie)

## 2. Google (Gmail API)

1. Wejdź do Google Cloud Console.
2. Utwórz projekt (lub użyj istniejącego).
3. Włącz `Gmail API`.
4. Skonfiguruj `OAuth consent screen`.
5. Utwórz `OAuth Client ID` typu `Web application`.
6. Dodaj `Authorized JavaScript origins`:
- np. `http://localhost:5500`
- produkcyjny origin, np. `https://twoja-domena.pl`
7. (Opcjonalnie) Dodaj `Authorized redirect URIs` jeśli wymagane przez Twoją konfigurację.
8. Wklej Client ID do:
- `window.PRETTY_MAILS_GOOGLE_CLIENT_ID`

Uwaga:
- Tu nie podajesz `client_secret`.
- `PRETTY_MAILS_ALLOWED_EMAIL` możesz zostawić pusty, jeśli nie chcesz blokować kont.

## 3. Outlook (Microsoft Graph)

1. Wejdź do Azure Portal -> `App registrations`.
2. Utwórz nową aplikację.
3. W `Authentication` dodaj platformę `Single-page application (SPA)`.
4. Dodaj Redirect URI:
- lokalnie, np. `http://localhost:5500/`
- produkcyjnie, np. `https://twoja-domena.pl/`
5. W `API permissions` dodaj delegowane uprawnienia:
- `Mail.Send`
- `User.Read`
- `openid`
- `profile`
- `email`
- `offline_access`
6. Kliknij `Grant admin consent` (jeśli wymagane w Twoim tenant).
7. Wklej `Application (client) ID` do:
- `window.PRETTY_MAILS_OUTLOOK_CLIENT_ID`
8. Ustaw tenant:
- `common` (najczęściej)
- `organizations` (tylko konta firmowe/szkolne)
- `consumers` (tylko konta prywatne)
- lub konkretny tenant id
9. Ustaw redirect (opcjonalnie):
- `window.PRETTY_MAILS_OUTLOOK_REDIRECT_URI`
- jeśli puste, app użyje bieżącego adresu strony.

Uwaga:
- Tu też nie podajesz `client_secret` (flow przeglądarkowy z PKCE).

## 4. Co zobaczy użytkownik

1. Kliknie `📨` (Gmail) albo `Ⓜ️` (Outlook).
2. Pojawi się modal logowania.
3. Po autoryzacji wiadomość wyjdzie z jego konta.

## 5. Fallback bez OAuth

Jeśli nie ustawisz Client ID:
- Gmail -> otworzy szkic w web Gmail
- Outlook -> otworzy szkic w Outlook Web
