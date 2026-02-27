/*
  Pretty-Mails OAuth config
  Edytuj tylko ten plik, żeby ustawić integracje Google i Outlook.
  Uwaga: tu podajemy tylko CLIENT_ID / ustawienia publiczne (bez secretów).
*/

// Google OAuth (Gmail API)
window.PRETTY_MAILS_GOOGLE_CLIENT_ID = "";
// Opcjonalnie: ogranicz logowanie do jednego konta
window.PRETTY_MAILS_ALLOWED_EMAIL = "";

// Microsoft OAuth (Outlook / Microsoft Graph)
window.PRETTY_MAILS_OUTLOOK_CLIENT_ID = "";
// common / organizations / consumers / konkretny tenant-id
window.PRETTY_MAILS_OUTLOOK_TENANT_ID = "common";
// Opcjonalnie: ogranicz logowanie do jednego konta
window.PRETTY_MAILS_OUTLOOK_ALLOWED_EMAIL = "";
// Opcjonalnie: jeśli puste, aplikacja użyje bieżącego URL (bez query/hash)
window.PRETTY_MAILS_OUTLOOK_REDIRECT_URI = "";
