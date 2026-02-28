# Pretty-Mails OAuth Setup

Ten plik opisuje konfigurację wysyłki przez Google (Gmail API).

## 1. Gdzie ustawić zmienne

Edytuj plik:
- [`oauth-config.js`](/oauth-config.js)

Do uzupełnienia:
- `window.PRETTY_MAILS_GOOGLE_CLIENT_ID`
- `window.PRETTY_MAILS_ALLOWED_EMAIL` (opcjonalnie)

## 2. Google (Gmail API)

1. Wejdź do Google Cloud Console.
2. Utwórz projekt (lub użyj istniejącego).
3. Włącz `Gmail API`.
4. Skonfiguruj `OAuth consent screen`.
5. Utwórz `OAuth Client ID` typu `Web application`.
6. Dodaj `Authorized JavaScript origins`, np.:
- `http://localhost:5500`
- `https://twoja-domena.pl`
7. (Opcjonalnie) Dodaj `Authorized redirect URIs`, jeśli wymaga tego Twoja konfiguracja.
8. Wklej Client ID do:
- `window.PRETTY_MAILS_GOOGLE_CLIENT_ID`

Uwaga:
- Tu nie podajesz `client_secret`.
- `PRETTY_MAILS_ALLOWED_EMAIL` możesz zostawić puste, jeśli nie chcesz ograniczać kont.

## 3. Co zobaczy użytkownik

1. Kliknie `📨` (Gmail).
2. Pojawi się modal logowania.
3. Po autoryzacji wiadomość wyjdzie z jego konta.

## 4. Fallback bez OAuth

Jeśli nie ustawisz Client ID:
- Gmail otworzy szkic w web Gmail.
