const STORAGE_KEYS = {
  language: "prettyMails.language",
  themeMode: "prettyMails.themeMode",
  previewMode: "prettyMails.previewMode",
  draft: "prettyMails.draft.v2",
};

const TEMPLATE_INDEX_URL = new URL("./templates/templates.json", window.location.href).toString();
const MB = 1024 * 1024;
const WARN_MB = 15;
const DANGER_MB = 22;
const SHORTCUT_NAME = "PrettyMail";
// Developer setup:
// 1) Create the shortcut in Apple Shortcuts app.
// 2) Share -> Copy iCloud Link.
// 3) Paste the link below.
// Note: the web app cannot generate or publish the shortcut automatically.
const SHORTCUT_INSTALL_URL = "https://www.icloud.com/shortcuts/aa52679fda8e4891a520592eacb61ca0";
const SHORTCUT_RUN_BASE = "shortcuts://run-shortcut";
const DEFAULT_MAIN_PALETTE = Object.freeze({
  accent: "#2e7dff",
  accent2: "#59a3ff",
});
const SHORTCUT_MAX_URL_LENGTH = 7000;
const SHORTCUT_DIAGNOSTICS_ENABLED = true;
const SHORTCUT_DIAGNOSTICS_PREFIX = "[PrettyMail]";
const SHORTCUT_DIAGNOSTICS_SESSION = Math.random().toString(36).slice(2, 8);

const LANGUAGE_FLAGS = {
  pl: "🇵🇱",
  en: "🇬🇧",
  uk: "🇺🇦",
};

const OPTIONAL_DEFAULTS = {
  cc: false,
  bcc: false,
  subject: false,
  quote: false,
  greeting: false,
  content: false,
  closing: false,
  senderName: false,
  contactName: false,
  contactRole: false,
  contactCompany: false,
  contactLogo: false,
  contactPhone: false,
  contactEmail: false,
  contactWebsite: false,
  contactAddress: false,
  socials: false,
  sentAt: false,
  sentFrom: false,
};

const SOCIAL_NETWORKS = [
  { value: "linkedin", labelKey: "socialLinkedin", short: "in" },
  { value: "facebook", labelKey: "socialFacebook", short: "fb" },
  { value: "instagram", labelKey: "socialInstagram", short: "ig" },
  { value: "x", labelKey: "socialX", short: "x" },
  { value: "youtube", labelKey: "socialYoutube", short: "yt" },
  { value: "tiktok", labelKey: "socialTiktok", short: "tt" },
  { value: "github", labelKey: "socialGithub", short: "gh" },
  { value: "website", labelKey: "socialWebsite", short: "www" },
];

const I18N = {
  pl: {
    languageLabel: "Język",
    languageAria: "Język interfejsu",
    languagePl: "Polski",
    languageEn: "English",
    languageUk: "Українська",

    themeModeLabel: "Motyw",
    themeAuto: "Auto",
    themeLight: "Jasny",
    themeDark: "Ciemny",

    previewModeLabel: "Tryb podglądu",
    previewModeApp: "Jak na stronie",
    previewModeLight: "Jasny",
    previewModeDark: "Ciemny",
    previewModeBoth: "Oba",

    mobileTemplateLabel: "Szablon",
    mobileTemplateAria: "Wybierz szablon",

    editorTitle: "Edytor",
    sectionEnvelopeTitle: "Informacje wysyłkowe",
    sectionQuoteTitle: "Cytat",
    sectionGreetingTitle: "Przywitanie",
    sectionContentTitle: "Treść",
    sectionClosingTitle: "Pozdrowienie",
    sectionContactTitle: "Dane kontaktowe",
    sectionSentTitle: "Wysłano",

    fieldToLabel: "Do",
    fieldToShort: "Do",
    fieldToPlaceholder: "adres@example.com adres2@example.com",
    fieldCcLabel: "DW",
    fieldCcShort: "DW",
    fieldCcPlaceholder: "adres@example.com, drugi@example.com",
    fieldBccLabel: "UDW",
    fieldBccShort: "UDW",
    fieldBccPlaceholder: "adres@example.com",
    fieldSubjectLabel: "Temat",
    fieldSubjectShort: "Temat",
    fieldSubjectPlaceholder: "Temat wiadomości",

    fieldQuoteLabel: "Cytat odpowiedzi",
    fieldQuotePlaceholder: "Wklej cytowany fragment...",

    fieldGreetingLabel: "Przywitanie",
    fieldGreetingCustomLabel: "Własne przywitanie",
    fieldGreetingCustomPlaceholder: "Np. Cześć wszystkim",
    fieldGreetingRecipientLabel: "Adresat (w treści)",
    fieldGreetingRecipientPlaceholder: "Np. Aniu / Zespole",

    fieldContentLabel: "Treść wiadomości",
    fieldContentPlaceholder: "Wpisz treść wiadomości...",

    fieldClosingLabel: "Pozdrowienie",
    fieldClosingCustomLabel: "Własne pozdrowienie",
    fieldClosingCustomPlaceholder: "Np. Dzięki i do usłyszenia",

    fieldSenderNameLabel: "Nadawca",
    fieldSenderNamePlaceholder: "Imię i nazwisko",

    fieldContactNameLabel: "Imię i nazwisko",
    fieldContactNamePlaceholder: "Imię i nazwisko",
    fieldContactRoleLabel: "Stanowisko",
    fieldContactRolePlaceholder: "Stanowisko",
    fieldContactCompanyLabel: "Nazwa firmy",
    fieldContactCompanyPlaceholder: "Nazwa firmy",
    fieldContactLogoLabel: "Logo firmy (załącznik)",
    fieldContactLogoHint: "Logo pojawi się w podpisie wiadomości.",
    fieldContactPhoneLabel: "Numer telefonu",
    fieldContactPhonePlaceholder: "+48 000 000 000",
    fieldContactEmailLabel: "Adres e-mail",
    fieldContactEmailPlaceholder: "kontakt@firma.pl",
    fieldContactWebsiteLabel: "Strona WWW",
    fieldContactWebsitePlaceholder: "https://twojafirma.pl",
    fieldContactAddressLabel: "Adres fizyczny",
    fieldContactAddressPlaceholder: "Ulica, kod, miasto",

    fieldSocialsLabel: "Media społecznościowe",
    socialAddButton: "+ Dodaj social",
    socialRemoveButton: "Usuń",
    socialUrlPlaceholder: "https://...",
    socialsEmpty: "Brak dodanych profili.",

    fieldSentAtLabel: "Wysłano o",
    fieldSentAtHint: "Data i godzina są automatyczne.",
    fieldSentFromLabel: "Wysłano z",
    fieldSentFromHint: "Urządzenie rozpoznawane automatycznie.",

    toggleShow: "",

    rememberDraftLabel: "Zapamiętaj brudnopis lokalnie (bez załączników)",
    mutedNoteHtml: "Odznaczone pola nie będą widoczne w podglądzie ani eksporcie.",

    previewTitle: "Podgląd",
    previewEnvelopeTitle: "Informacje wysyłkowe",
    previewControlsTitle: "Układ i kolory",
    previewContentTitle: "Treść maila",
    previewFrameTitle: "Podgląd wiadomości",
    previewFrameDarkTitle: "Podgląd wiadomości - ciemny",
    accentColor1Label: "Kolor główny 1",
    accentColor2Label: "Kolor główny 2",
    colorPickerButton: "Kolory maila",
    colorModalTitle: "Kolory maila",
    huePaletteLabel: "Paleta hue",
    customColorLabel: "Własny kolor",
    colorModalClose: "Zamknij",

    openPreviewButton: "👁️",
    closePreviewButton: "✕",

    exportButton: "Wyślij (Apple Mail)",
    exportBusy: "Wysyłanie…",
    exportButtonAria: "Wyślij przez Skróty do Apple Mail",
    shortcutSendButton: "Wyślij (Apple Mail)",
    shortcutSendBusy: "Wysyłanie…",
    shortcutSendButtonAria: "Wyślij przez Skróty do Apple Mail",
    shortcutToastCopying: "Kopiuję HTML…",
    shortcutToastCopiedOpening: "Skopiowano. Otwieram Skróty…",
    shortcutToastClipboardError: "Schowek zablokowany. Otwórz Safari i spróbuj ponownie.",
    shortcutTitle: "Wymagany skrót Apple Mail",
    shortcutBody: "Aby wstawić wiadomość do Apple Mail, zainstaluj skrót.",
    shortcutReasonUnsupported: "Ten tryb działa tylko na iPhone/iPad/Mac.",
    shortcutReasonMaybeNotInstalled: "Jeśli nic się nie otworzyło, zainstaluj skrót i spróbuj ponownie.",
    shortcutReasonClipboard: "Nie udało się skopiować HTML do schowka.",
    shortcutReasonPayload: "Dane do skrótu są za duże.",
    shortcutStep1: "Kliknij „Zainstaluj skrót”.",
    shortcutStep2: "W aplikacji Skróty wybierz „Dodaj skrót”.",
    shortcutStep3: "Wróć tutaj i kliknij „Wyślij (Apple Mail)”.",
    shortcutInstall: "Zainstaluj skrót",
    shortcutClose: "Zamknij",
    shortcutAppleOnly: "Działa tylko na iPhone/iPad/Mac z Apple Mail.",
    shortcutSafariHint: "Dla najlepszego efektu użyj Safari.",
    shortcutPayloadTooLarge: "Za dużo danych do skrótu. Włącz wybór plików w Skrótach albo zmniejsz załączniki.",
    shortcutPickFilesLabel: "Załączniki wybiorę w Skrótach",
    shortcutPickFilesHint: "Włącz, aby pominąć lokalne załączniki i wybrać pliki bezpośrednio w Skrótach.",
    shortcutPickFilesEnvelope: "Załączniki zostaną wybrane w Skrótach.",
    shortcutProviderNote: "Konto nadawcy wybierasz w Apple Mail.",
    shortcutSetupSummary: "Jak dodać i uruchomić",
    shortcutSetup1: "Otwórz link iCloud przyciskiem poniżej.",
    shortcutSetup2: "Dodaj skrót PrettyMail w aplikacji Skróty.",
    shortcutSetup3: "Uruchom go raz i zezwól na uprawnienia.",
    shortcutSetup4: "Potem wróć do Pretty-Mails i kliknij Wyślij.",

    infoButtonAria: "Pokaż wskazówki",
    infoModalTitle: "ℹ️ Jak to działa",
    infoModalCloseAria: "Zamknij",
    infoLine1: "✉️ Wyślij kopiuje HTML wiadomości do schowka i uruchamia skrót Apple.",
    infoLine2: "📋 HTML jest w schowku, a Do/DW/UDW/Temat są przekazywane do skrótu jako tekst.",
    infoLine3: " Jeśli skrót nie jest dodany, kliknij „Zainstaluj skrót” i dodaj go w aplikacji Skróty.",
    infoLine4: "⚙️ Konto nadawcy wybierasz już bezpośrednio w Apple Mail.",

    attachmentsTitle: "Załączniki",
    addFilesButton: "Dodaj pliki",
    dropZoneText: "Przeciągnij i upuść pliki tutaj lub użyj przycisku „Dodaj pliki”.",
    dropZoneAria: "Przeciągnij i upuść pliki",
    attachmentsEmpty: "Brak załączników.",
    removeAttachment: "Usuń",
    attachmentTotal: "Suma plików: {size}",
    attachmentEstimated: "Szacowany rozmiar wiadomości: {size}",
    warningWarn: "Duża wiadomość. Wysyłka może potrwać dłużej.",
    warningDanger: "Bardzo duża wiadomość. Część skrzynek może ją odrzucić.",
    emptyMailDisabled: "Dodaj przynajmniej jedną treść lub załącznik, aby zapisać wiadomość.",

    addressValidationPrefix: "Uzupełnij lub popraw pola:",
    requiredToMissing: "Do: wpisz przynajmniej jeden poprawny adres e-mail.",
    requiredRecipientMissing: "Wpisz przynajmniej jednego odbiorcę (Do, DW lub UDW).",
    requiredSenderMissing: "Nadawca: wpisz imię i nazwisko.",
    invalidAddressList: "{label}: {list}",
    contactEmailInvalid: "Adres e-mail w danych kontaktowych jest niepoprawny.",
    contactWebsiteInvalid: "Adres strony WWW jest niepoprawny (użyj pełnego URL).",

    greetingPresetCasual: "Cześć",
    greetingPresetFormal: "Dzień dobry",
    greetingPresetNeutral: "Witam",
    greetingPresetHey: "Hej",
    closingPresetRegards: "Pozdrawiam",
    closingPresetSincerely: "Z poważaniem",
    closingPresetThanks: "Dziękuję",
    closingPresetBest: "Serdecznie",
    presetCustom: "Własne",

    sentAtPrefix: "Wysłano",
    sentAtTimePrefix: "o",
    sentFromPrefix: "Wysłano z",

    socialLinkedin: "LinkedIn",
    socialFacebook: "Facebook",
    socialInstagram: "Instagram",
    socialX: "X",
    socialYoutube: "YouTube",
    socialTiktok: "TikTok",
    socialGithub: "GitHub",
    socialWebsite: "WWW",

    logoPlaceholder: "logo-firmy.png",
    socialPlaceholder: "profil społecznościowy",

    templatesFetchError: "Nie udało się pobrać listy szablonów ({status})",
    templatesInvalidFormat: "templates.json ma niepoprawny format",
    templateFileFetchError: "Nie udało się pobrać pliku szablonu: {path}",
    noTemplateSelected: "Brak wybranego szablonu",
    bootFailed: "Nie udało się uruchomić aplikacji.",
    exportFailedAlert: "Nie udało się uruchomić wysyłki Apple Mail",
    copyEmptyAlert: "Brak treści do skopiowania.",

    fileKindFile: "PLIK",
    fileKindImage: "IMG",
    fileKindPdf: "PDF",
    fileKindAudio: "AUDIO",
    fileKindVideo: "VIDEO",
    fileKindLogo: "LOGO",
    fileWordForms: {
      one: "plik",
      few: "pliki",
      many: "plików",
      other: "pliku",
    },

    dateLocale: "pl-PL",
  },
  en: {
    languageLabel: "Language",
    languageAria: "Interface language",
    languagePl: "Polski",
    languageEn: "English",
    languageUk: "Українська",

    themeModeLabel: "Theme",
    themeAuto: "Auto",
    themeLight: "Light",
    themeDark: "Dark",

    previewModeLabel: "Preview mode",
    previewModeApp: "As page",
    previewModeLight: "Light",
    previewModeDark: "Dark",
    previewModeBoth: "Both",

    mobileTemplateLabel: "Template",
    mobileTemplateAria: "Choose template",

    editorTitle: "Editor",
    sectionEnvelopeTitle: "Sending info",
    sectionQuoteTitle: "Quote",
    sectionGreetingTitle: "Greeting",
    sectionContentTitle: "Content",
    sectionClosingTitle: "Closing",
    sectionContactTitle: "Contact details",
    sectionSentTitle: "Sent",

    fieldToLabel: "To",
    fieldToShort: "To",
    fieldToPlaceholder: "address@example.com address2@example.com",
    fieldCcLabel: "CC",
    fieldCcShort: "CC",
    fieldCcPlaceholder: "address@example.com, second@example.com",
    fieldBccLabel: "BCC",
    fieldBccShort: "BCC",
    fieldBccPlaceholder: "address@example.com",
    fieldSubjectLabel: "Subject",
    fieldSubjectShort: "Subject",
    fieldSubjectPlaceholder: "Message subject",

    fieldQuoteLabel: "Reply quote",
    fieldQuotePlaceholder: "Paste quoted text...",

    fieldGreetingLabel: "Greeting",
    fieldGreetingCustomLabel: "Custom greeting",
    fieldGreetingCustomPlaceholder: "e.g. Hello everyone",
    fieldGreetingRecipientLabel: "Recipient (in body)",
    fieldGreetingRecipientPlaceholder: "e.g. Anna / Team",

    fieldContentLabel: "Message content",
    fieldContentPlaceholder: "Type message content...",

    fieldClosingLabel: "Closing",
    fieldClosingCustomLabel: "Custom closing",
    fieldClosingCustomPlaceholder: "e.g. Thanks and talk soon",

    fieldSenderNameLabel: "Sender",
    fieldSenderNamePlaceholder: "First and last name",

    fieldContactNameLabel: "Full name",
    fieldContactNamePlaceholder: "Full name",
    fieldContactRoleLabel: "Job title",
    fieldContactRolePlaceholder: "Role",
    fieldContactCompanyLabel: "Company",
    fieldContactCompanyPlaceholder: "Company name",
    fieldContactLogoLabel: "Company logo (attachment)",
    fieldContactLogoHint: "Logo is embedded in the message signature.",
    fieldContactPhoneLabel: "Phone number",
    fieldContactPhonePlaceholder: "+1 000 000 000",
    fieldContactEmailLabel: "Email address",
    fieldContactEmailPlaceholder: "contact@company.com",
    fieldContactWebsiteLabel: "Website",
    fieldContactWebsitePlaceholder: "https://yourcompany.com",
    fieldContactAddressLabel: "Physical address",
    fieldContactAddressPlaceholder: "Street, ZIP, city",

    fieldSocialsLabel: "Social media",
    socialAddButton: "+ Add social",
    socialRemoveButton: "Remove",
    socialUrlPlaceholder: "https://...",
    socialsEmpty: "No profiles added.",

    fieldSentAtLabel: "Sent at",
    fieldSentAtHint: "Date and time are generated automatically.",
    fieldSentFromLabel: "Sent from",
    fieldSentFromHint: "Device is detected automatically.",

    toggleShow: "",

    rememberDraftLabel: "Remember draft locally (without attachments)",
    mutedNoteHtml: "Unchecked fields are hidden in preview and export.",

    previewTitle: "Preview",
    previewEnvelopeTitle: "Sending info",
    previewControlsTitle: "Layout and colors",
    previewContentTitle: "Mail body",
    previewFrameTitle: "Message preview",
    previewFrameDarkTitle: "Message preview - dark",
    accentColor1Label: "Main color 1",
    accentColor2Label: "Main color 2",
    colorPickerButton: "Mail colors",
    colorModalTitle: "Mail colors",
    huePaletteLabel: "Hue palette",
    customColorLabel: "Custom color",
    colorModalClose: "Close",

    openPreviewButton: "👁️",
    closePreviewButton: "✕",

    exportButton: "Send (Apple Mail)",
    exportBusy: "Sending…",
    exportButtonAria: "Send via Shortcuts to Apple Mail",
    shortcutSendButton: "Send (Apple Mail)",
    shortcutSendBusy: "Sending…",
    shortcutSendButtonAria: "Send via Shortcuts to Apple Mail",
    shortcutToastCopying: "Copying HTML…",
    shortcutToastCopiedOpening: "Copied. Opening Shortcuts…",
    shortcutToastClipboardError: "Clipboard blocked. Open Safari and try again.",
    shortcutTitle: "Apple Mail Shortcut required",
    shortcutBody: "To insert the email into Apple Mail, install the Shortcut.",
    shortcutReasonUnsupported: "This mode works only on iPhone/iPad/Mac.",
    shortcutReasonMaybeNotInstalled: "If nothing opened, install the Shortcut and try again.",
    shortcutReasonClipboard: "Could not copy HTML to clipboard.",
    shortcutReasonPayload: "Shortcut input is too large.",
    shortcutStep1: "Tap Install Shortcut.",
    shortcutStep2: "In Shortcuts, tap Add Shortcut.",
    shortcutStep3: "Return here and tap Send (Apple Mail).",
    shortcutInstall: "Install Shortcut",
    shortcutClose: "Close",
    shortcutAppleOnly: "This works only on iPhone/iPad/Mac with Apple Mail.",
    shortcutSafariHint: "For best results use Safari.",
    shortcutPayloadTooLarge: "Too much shortcut data. Enable file picking in Shortcuts or reduce attachments.",
    shortcutPickFilesLabel: "Pick attachments in Shortcuts",
    shortcutPickFilesHint: "Enable this to skip local attachments and choose files directly in Shortcuts.",
    shortcutPickFilesEnvelope: "Attachments will be selected in Shortcuts.",
    shortcutProviderNote: "Sender account is chosen in Apple Mail.",
    shortcutSetupSummary: "How to add and run",
    shortcutSetup1: "Open the iCloud link with the button below.",
    shortcutSetup2: "Add the PrettyMail shortcut in Shortcuts.",
    shortcutSetup3: "Run it once and allow permissions.",
    shortcutSetup4: "Then return to Pretty-Mails and tap Send.",

    infoButtonAria: "Show tips",
    infoModalTitle: "ℹ️ How it works",
    infoModalCloseAria: "Close",
    infoLine1: "✉️ Send copies the email HTML to clipboard and runs the Apple Shortcut.",
    infoLine2: "📋 HTML goes via clipboard; To/CC/BCC/Subject are passed to the shortcut as text.",
    infoLine3: " If not installed yet, tap Install Shortcut and add it in Shortcuts.",
    infoLine4: "⚙️ Sender account is selected in Apple Mail.",

    attachmentsTitle: "Attachments",
    addFilesButton: "Add files",
    dropZoneText: "Drag and drop files here or use the “Add files” button.",
    dropZoneAria: "Drag and drop files",
    attachmentsEmpty: "No attachments.",
    removeAttachment: "Remove",
    attachmentTotal: "Files total: {size}",
    attachmentEstimated: "Estimated message size: {size}",
    warningWarn: "Large message. Sending may take longer.",
    warningDanger: "Very large message. Some mailboxes may reject it.",
    emptyMailDisabled: "Add at least one content block or attachment to save the message.",

    addressValidationPrefix: "Complete or fix fields:",
    requiredToMissing: "To: enter at least one valid email address.",
    requiredRecipientMissing: "Enter at least one recipient (To, Cc or Bcc).",
    requiredSenderMissing: "Sender: enter full name.",
    invalidAddressList: "{label}: {list}",
    contactEmailInvalid: "Contact email address is invalid.",
    contactWebsiteInvalid: "Website URL is invalid (use full URL).",

    greetingPresetCasual: "Hi",
    greetingPresetFormal: "Good morning",
    greetingPresetNeutral: "Hello",
    greetingPresetHey: "Hey",
    closingPresetRegards: "Best regards",
    closingPresetSincerely: "Sincerely",
    closingPresetThanks: "Thanks",
    closingPresetBest: "Warm regards",
    presetCustom: "Custom",

    sentAtPrefix: "Sent",
    sentAtTimePrefix: "at",
    sentFromPrefix: "Sent from",

    socialLinkedin: "LinkedIn",
    socialFacebook: "Facebook",
    socialInstagram: "Instagram",
    socialX: "X",
    socialYoutube: "YouTube",
    socialTiktok: "TikTok",
    socialGithub: "GitHub",
    socialWebsite: "Website",

    logoPlaceholder: "company-logo.png",
    socialPlaceholder: "social profile",

    templatesFetchError: "Failed to fetch templates list ({status})",
    templatesInvalidFormat: "templates.json has invalid format",
    templateFileFetchError: "Failed to fetch template file: {path}",
    noTemplateSelected: "No template selected",
    bootFailed: "Failed to start application.",
    exportFailedAlert: "Failed to start Apple Mail send flow",
    copyEmptyAlert: "There is no content to copy.",

    fileKindFile: "FILE",
    fileKindImage: "IMG",
    fileKindPdf: "PDF",
    fileKindAudio: "AUDIO",
    fileKindVideo: "VIDEO",
    fileKindLogo: "LOGO",
    fileWordForms: {
      one: "file",
      other: "files",
    },

    dateLocale: "en-US",
  },
  uk: {
    languageLabel: "Мова",
    languageAria: "Мова інтерфейсу",
    languagePl: "Polski",
    languageEn: "English",
    languageUk: "Українська",

    themeModeLabel: "Тема",
    themeAuto: "Авто",
    themeLight: "Світла",
    themeDark: "Темна",

    previewModeLabel: "Режим перегляду",
    previewModeApp: "Як на сторінці",
    previewModeLight: "Світлий",
    previewModeDark: "Темний",
    previewModeBoth: "Обидва",

    mobileTemplateLabel: "Шаблон",
    mobileTemplateAria: "Оберіть шаблон",

    editorTitle: "Редактор",
    sectionEnvelopeTitle: "Дані відправлення",
    sectionQuoteTitle: "Цитата",
    sectionGreetingTitle: "Привітання",
    sectionContentTitle: "Текст",
    sectionClosingTitle: "Завершення",
    sectionContactTitle: "Контактні дані",
    sectionSentTitle: "Надіслано",

    fieldToLabel: "Кому",
    fieldToShort: "Кому",
    fieldToPlaceholder: "email@example.com email2@example.com",
    fieldCcLabel: "Копія",
    fieldCcShort: "Копія",
    fieldCcPlaceholder: "email@example.com, second@example.com",
    fieldBccLabel: "Прих. копія",
    fieldBccShort: "Прих. копія",
    fieldBccPlaceholder: "email@example.com",
    fieldSubjectLabel: "Тема",
    fieldSubjectShort: "Тема",
    fieldSubjectPlaceholder: "Тема листа",

    fieldQuoteLabel: "Цитата відповіді",
    fieldQuotePlaceholder: "Вставте цитований фрагмент...",

    fieldGreetingLabel: "Привітання",
    fieldGreetingCustomLabel: "Власне привітання",
    fieldGreetingCustomPlaceholder: "Напр. Вітаю всіх",
    fieldGreetingRecipientLabel: "Одержувач (у тексті)",
    fieldGreetingRecipientPlaceholder: "Напр. Анно / Командо",

    fieldContentLabel: "Текст повідомлення",
    fieldContentPlaceholder: "Введіть текст повідомлення...",

    fieldClosingLabel: "Завершення",
    fieldClosingCustomLabel: "Власне завершення",
    fieldClosingCustomPlaceholder: "Напр. Дякую і до зв'язку",

    fieldSenderNameLabel: "Відправник",
    fieldSenderNamePlaceholder: "Ім'я та прізвище",

    fieldContactNameLabel: "Ім'я та прізвище",
    fieldContactNamePlaceholder: "Ім'я та прізвище",
    fieldContactRoleLabel: "Посада",
    fieldContactRolePlaceholder: "Посада",
    fieldContactCompanyLabel: "Назва компанії",
    fieldContactCompanyPlaceholder: "Назва компанії",
    fieldContactLogoLabel: "Логотип компанії (вкладення)",
    fieldContactLogoHint: "Логотип вбудовується у підпис листа.",
    fieldContactPhoneLabel: "Номер телефону",
    fieldContactPhonePlaceholder: "+380 00 000 00 00",
    fieldContactEmailLabel: "Електронна пошта",
    fieldContactEmailPlaceholder: "contact@company.com",
    fieldContactWebsiteLabel: "Сайт",
    fieldContactWebsitePlaceholder: "https://yourcompany.com",
    fieldContactAddressLabel: "Фізична адреса",
    fieldContactAddressPlaceholder: "Вулиця, індекс, місто",

    fieldSocialsLabel: "Соцмережі",
    socialAddButton: "+ Додати соцмережу",
    socialRemoveButton: "Видалити",
    socialUrlPlaceholder: "https://...",
    socialsEmpty: "Профілі не додано.",

    fieldSentAtLabel: "Надіслано о",
    fieldSentAtHint: "Дата й час генеруються автоматично.",
    fieldSentFromLabel: "Надіслано з",
    fieldSentFromHint: "Пристрій визначається автоматично.",

    toggleShow: "",

    rememberDraftLabel: "Зберігати чернетку локально (без вкладень)",
    mutedNoteHtml: "Вимкнені поля не потрапляють у перегляд і експорт.",

    previewTitle: "Перегляд",
    previewEnvelopeTitle: "Дані відправлення",
    previewControlsTitle: "Макет і кольори",
    previewContentTitle: "Тіло листа",
    previewFrameTitle: "Перегляд листа",
    previewFrameDarkTitle: "Перегляд листа - темний",
    accentColor1Label: "Основний колір 1",
    accentColor2Label: "Основний колір 2",
    colorPickerButton: "Кольори листа",
    colorModalTitle: "Кольори листа",
    huePaletteLabel: "Палітра hue",
    customColorLabel: "Власний колір",
    colorModalClose: "Закрити",

    openPreviewButton: "👁️",
    closePreviewButton: "✕",

    exportButton: "Надіслати (Apple Mail)",
    exportBusy: "Надсилання…",
    exportButtonAria: "Надіслати через Shortcuts до Apple Mail",
    shortcutSendButton: "Надіслати (Apple Mail)",
    shortcutSendBusy: "Надсилання…",
    shortcutSendButtonAria: "Надіслати через Shortcuts до Apple Mail",
    shortcutToastCopying: "Копіюю HTML…",
    shortcutToastCopiedOpening: "Скопійовано. Відкриваю Shortcuts…",
    shortcutToastClipboardError: "Буфер обміну заблокований. Відкрийте Safari і спробуйте ще раз.",
    shortcutTitle: "Потрібен ярлик Apple Mail",
    shortcutBody: "Щоб вставити лист у Apple Mail, встановіть ярлик.",
    shortcutReasonUnsupported: "Цей режим працює лише на iPhone/iPad/Mac.",
    shortcutReasonMaybeNotInstalled: "Якщо нічого не відкрилося, встановіть ярлик і спробуйте ще раз.",
    shortcutReasonClipboard: "Не вдалося скопіювати HTML у буфер обміну.",
    shortcutReasonPayload: "Дані для ярлика занадто великі.",
    shortcutStep1: "Натисніть «Встановити ярлик».",
    shortcutStep2: "У Shortcuts натисніть «Додати ярлик».",
    shortcutStep3: "Поверніться сюди і натисніть «Надіслати (Apple Mail)».",
    shortcutInstall: "Встановити ярлик",
    shortcutClose: "Закрити",
    shortcutAppleOnly: "Працює лише на iPhone/iPad/Mac з Apple Mail.",
    shortcutSafariHint: "Для кращого результату використовуйте Safari.",
    shortcutPayloadTooLarge: "Забагато даних для ярлика. Увімкніть вибір файлів у Shortcuts або зменште вкладення.",
    shortcutPickFilesLabel: "Вибирати вкладення в Shortcuts",
    shortcutPickFilesHint: "Увімкніть, щоб пропустити локальні вкладення і вибирати файли прямо в Shortcuts.",
    shortcutPickFilesEnvelope: "Вкладення буде вибрано в Shortcuts.",
    shortcutProviderNote: "Акаунт відправника обирається в Apple Mail.",
    shortcutSetupSummary: "Як додати і запустити",
    shortcutSetup1: "Відкрийте iCloud-посилання кнопкою нижче.",
    shortcutSetup2: "Додайте ярлик PrettyMail у Shortcuts.",
    shortcutSetup3: "Запустіть його один раз і надайте дозволи.",
    shortcutSetup4: "Потім поверніться в Pretty-Mails і натисніть Надіслати.",

    infoButtonAria: "Показати підказки",
    infoModalTitle: "ℹ️ Як це працює",
    infoModalCloseAria: "Закрити",
    infoLine1: "✉️ Надіслати копіює HTML листа в буфер обміну і запускає ярлик Apple.",
    infoLine2: "📋 HTML у буфері обміну; Кому/Копія/Прих. копія/Тема передаються в ярлик як текст.",
    infoLine3: " Якщо ярлик ще не додано, натисніть «Встановити ярлик» і додайте його в Shortcuts.",
    infoLine4: "⚙️ Акаунт відправника обирається в Apple Mail.",

    attachmentsTitle: "Вкладення",
    addFilesButton: "Додати файли",
    dropZoneText: "Перетягніть файли сюди або натисніть «Додати файли».",
    dropZoneAria: "Перетягніть файли",
    attachmentsEmpty: "Вкладень немає.",
    removeAttachment: "Видалити",
    attachmentTotal: "Сума файлів: {size}",
    attachmentEstimated: "Орієнтовний розмір листа: {size}",
    warningWarn: "Великий лист. Надсилання може тривати довше.",
    warningDanger: "Дуже великий лист. Частина скриньок може відхилити.",
    emptyMailDisabled: "Додайте хоча б один блок тексту або вкладення, щоб зберегти лист.",

    addressValidationPrefix: "Заповніть або виправте поля:",
    requiredToMissing: "Кому: введіть хоча б одну коректну email-адресу.",
    requiredRecipientMissing: "Додайте хоча б одного одержувача (Кому, Копія або Прихована копія).",
    requiredSenderMissing: "Відправник: введіть ім'я та прізвище.",
    invalidAddressList: "{label}: {list}",
    contactEmailInvalid: "Контактна email-адреса некоректна.",
    contactWebsiteInvalid: "URL сайту некоректний (використайте повний URL).",

    greetingPresetCasual: "Привіт",
    greetingPresetFormal: "Добрий день",
    greetingPresetNeutral: "Вітаю",
    greetingPresetHey: "Доброго дня",
    closingPresetRegards: "З повагою",
    closingPresetSincerely: "Щиро",
    closingPresetThanks: "Дякую",
    closingPresetBest: "З найкращими побажаннями",
    presetCustom: "Власне",

    sentAtPrefix: "Надіслано",
    sentAtTimePrefix: "о",
    sentFromPrefix: "Надіслано з",

    socialLinkedin: "LinkedIn",
    socialFacebook: "Facebook",
    socialInstagram: "Instagram",
    socialX: "X",
    socialYoutube: "YouTube",
    socialTiktok: "TikTok",
    socialGithub: "GitHub",
    socialWebsite: "Сайт",

    logoPlaceholder: "logo-компанії.png",
    socialPlaceholder: "соцпрофіль",

    templatesFetchError: "Не вдалося завантажити список шаблонів ({status})",
    templatesInvalidFormat: "templates.json має некоректний формат",
    templateFileFetchError: "Не вдалося завантажити файл шаблону: {path}",
    noTemplateSelected: "Шаблон не вибрано",
    bootFailed: "Не вдалося запустити застосунок.",
    exportFailedAlert: "Не вдалося запустити відправку через Apple Mail",
    copyEmptyAlert: "Немає вмісту для копіювання.",

    fileKindFile: "ФАЙЛ",
    fileKindImage: "IMG",
    fileKindPdf: "PDF",
    fileKindAudio: "AUDIO",
    fileKindVideo: "VIDEO",
    fileKindLogo: "LOGO",
    fileWordForms: {
      one: "файл",
      few: "файли",
      many: "файлів",
      other: "файла",
    },

    dateLocale: "uk-UA",
  },
};

const state = {
  templates: [],
  templateMarkup: new Map(),
  mainPalette: {
    accent: DEFAULT_MAIN_PALETTE.accent,
    accent2: DEFAULT_MAIN_PALETTE.accent2,
    accent3: deriveAccent3(DEFAULT_MAIN_PALETTE.accent, DEFAULT_MAIN_PALETTE.accent2),
  },
  selectedTemplateId: null,
  language: detectInitialLanguage(),
  themeMode: localStorage.getItem(STORAGE_KEYS.themeMode) || "auto",
  previewMode: localStorage.getItem(STORAGE_KEYS.previewMode) || "app",
  resolvedTheme: "light",
  rememberDraft: false,
  enabled: { ...OPTIONAL_DEFAULTS },
  fields: {
    to: "",
    cc: "",
    bcc: "",
    subject: "",
    quote: "",
    greetingPreset: "casual",
    greetingCustom: "",
    greetingRecipient: "",
    content: "",
    closingPreset: "regards",
    closingCustom: "",
    senderName: "",
    contactName: "",
    contactRole: "",
    contactCompany: "",
    contactPhone: "",
    contactEmail: "",
    contactWebsite: "",
    contactAddress: "",
  },
  socials: [],
  logoAttachment: null,
  attachments: [],
  shortcutPickFiles: false,
  isExporting: false,
  mobilePreviewOpen: false,
};

const ui = {
  languageMenu: document.querySelector("#languageMenu"),
  languageMenuBtn: document.querySelector("#languageMenuBtn"),
  languageMenuList: document.querySelector("#languageMenuList"),
  languageFlag: document.querySelector("#languageFlag"),
  languageOptionPl: document.querySelector("#languageOptionPl"),
  languageOptionEn: document.querySelector("#languageOptionEn"),
  languageOptionUk: document.querySelector("#languageOptionUk"),
  languageModeLabel: document.querySelector("#languageModeLabel"),
  languageMode: document.querySelector("#languageMode"),

  themeModeLabel: document.querySelector("#themeModeLabel"),
  themeMode: document.querySelector("#themeMode"),

  mobileTemplateLabel: document.querySelector("#mobileTemplateLabel"),
  mobileTemplateSelect: document.querySelector("#mobileTemplateSelect"),

  mobilePreviewToggleBtn: document.querySelector("#mobilePreviewToggleBtn"),
  exportBtn: document.querySelector("#exportBtn"),

  infoBtn: document.querySelector("#infoBtn"),
  infoModal: document.querySelector("#infoModal"),
  infoModalClose: document.querySelector("#infoModalClose"),
  infoModalTitle: document.querySelector("#infoModalTitle"),
  infoModalList: document.querySelector("#infoModalList"),
  shortcutModal: document.querySelector("#shortcutModal"),
  shortcutModalClose: document.querySelector("#shortcutModalClose"),
  shortcutModalTitle: document.querySelector("#shortcutModalTitle"),
  shortcutModalBody: document.querySelector("#shortcutModalBody"),
  shortcutModalReason: document.querySelector("#shortcutModalReason"),
  shortcutStep1: document.querySelector("#shortcutStep1"),
  shortcutStep2: document.querySelector("#shortcutStep2"),
  shortcutStep3: document.querySelector("#shortcutStep3"),
  shortcutProviderNote: document.querySelector("#shortcutProviderNote"),
  shortcutSetupSummary: document.querySelector("#shortcutSetupSummary"),
  shortcutSetup1: document.querySelector("#shortcutSetup1"),
  shortcutSetup2: document.querySelector("#shortcutSetup2"),
  shortcutSetup3: document.querySelector("#shortcutSetup3"),
  shortcutSetup4: document.querySelector("#shortcutSetup4"),
  shortcutInstallBtn: document.querySelector("#shortcutInstallBtn"),
  colorModal: document.querySelector("#colorModal"),
  colorModalClose: document.querySelector("#colorModalClose"),
  colorModalTitle: document.querySelector("#colorModalTitle"),
  openColorModalBtn: document.querySelector("#openColorModalBtn"),
  mainColor1Label: document.querySelector("#mainColor1Label"),
  mainColor2Label: document.querySelector("#mainColor2Label"),
  huePalette1Label: document.querySelector("#huePalette1Label"),
  huePalette2Label: document.querySelector("#huePalette2Label"),
  customColor1Label: document.querySelector("#customColor1Label"),
  customColor2Label: document.querySelector("#customColor2Label"),
  toastHost: document.querySelector("#toastHost"),

  editorTitle: document.querySelector("#editorTitle"),
  sectionEnvelopeTitle: document.querySelector("#sectionEnvelopeTitle"),
  sectionQuoteTitle: document.querySelector("#sectionQuoteTitle"),
  sectionGreetingTitle: document.querySelector("#sectionGreetingTitle"),
  sectionContentTitle: document.querySelector("#sectionContentTitle"),
  sectionClosingTitle: document.querySelector("#sectionClosingTitle"),
  sectionContactTitle: document.querySelector("#sectionContactTitle"),
  sectionSentTitle: document.querySelector("#sectionSentTitle"),

  fieldToLabel: document.querySelector("#fieldToLabel"),
  fieldTo: document.querySelector("#fieldTo"),
  fieldCcLabel: document.querySelector("#fieldCcLabel"),
  fieldCc: document.querySelector("#fieldCc"),
  fieldBccLabel: document.querySelector("#fieldBccLabel"),
  fieldBcc: document.querySelector("#fieldBcc"),
  fieldSubjectLabel: document.querySelector("#fieldSubjectLabel"),
  fieldSubject: document.querySelector("#fieldSubject"),

  fieldQuoteLabel: document.querySelector("#fieldQuoteLabel"),
  fieldQuote: document.querySelector("#fieldQuote"),

  fieldGreetingLabel: document.querySelector("#fieldGreetingLabel"),
  fieldGreetingPreset: document.querySelector("#fieldGreetingPreset"),
  fieldGreetingCustomLabel: document.querySelector("#fieldGreetingCustomLabel"),
  fieldGreetingCustom: document.querySelector("#fieldGreetingCustom"),
  greetingCustomWrap: document.querySelector("#greetingCustomWrap"),
  fieldGreetingRecipientLabel: document.querySelector("#fieldGreetingRecipientLabel"),
  fieldGreetingRecipient: document.querySelector("#fieldGreetingRecipient"),

  fieldContentLabel: document.querySelector("#fieldContentLabel"),
  fieldContent: document.querySelector("#fieldContent"),

  fieldClosingLabel: document.querySelector("#fieldClosingLabel"),
  fieldClosingPreset: document.querySelector("#fieldClosingPreset"),
  fieldClosingCustomLabel: document.querySelector("#fieldClosingCustomLabel"),
  fieldClosingCustom: document.querySelector("#fieldClosingCustom"),
  closingCustomWrap: document.querySelector("#closingCustomWrap"),

  fieldSenderNameLabel: document.querySelector("#fieldSenderNameLabel"),
  fieldSenderName: document.querySelector("#fieldSenderName"),

  fieldContactNameLabel: document.querySelector("#fieldContactNameLabel"),
  fieldContactName: document.querySelector("#fieldContactName"),
  fieldContactRoleLabel: document.querySelector("#fieldContactRoleLabel"),
  fieldContactRole: document.querySelector("#fieldContactRole"),
  fieldContactCompanyLabel: document.querySelector("#fieldContactCompanyLabel"),
  fieldContactCompany: document.querySelector("#fieldContactCompany"),
  fieldContactLogoLabel: document.querySelector("#fieldContactLogoLabel"),
  contactLogoInput: document.querySelector("#contactLogoInput"),
  contactLogoHint: document.querySelector("#contactLogoHint"),
  fieldContactPhoneLabel: document.querySelector("#fieldContactPhoneLabel"),
  fieldContactPhone: document.querySelector("#fieldContactPhone"),
  fieldContactEmailLabel: document.querySelector("#fieldContactEmailLabel"),
  fieldContactEmail: document.querySelector("#fieldContactEmail"),
  fieldContactWebsiteLabel: document.querySelector("#fieldContactWebsiteLabel"),
  fieldContactWebsite: document.querySelector("#fieldContactWebsite"),
  fieldContactAddressLabel: document.querySelector("#fieldContactAddressLabel"),
  fieldContactAddress: document.querySelector("#fieldContactAddress"),

  fieldSocialsLabel: document.querySelector("#fieldSocialsLabel"),
  socialsList: document.querySelector("#socialsList"),
  addSocialBtn: document.querySelector("#addSocialBtn"),

  fieldSentAtLabel: document.querySelector("#fieldSentAtLabel"),
  fieldSentAtHint: document.querySelector("#fieldSentAtHint"),
  fieldSentFromLabel: document.querySelector("#fieldSentFromLabel"),
  fieldSentFromHint: document.querySelector("#fieldSentFromHint"),

  toggleCc: document.querySelector("#toggleCc"),
  toggleCcLabel: document.querySelector("#toggleCcLabel"),
  toggleBcc: document.querySelector("#toggleBcc"),
  toggleBccLabel: document.querySelector("#toggleBccLabel"),
  toggleSubject: document.querySelector("#toggleSubject"),
  toggleSubjectLabel: document.querySelector("#toggleSubjectLabel"),
  toggleQuote: document.querySelector("#toggleQuote"),
  toggleQuoteLabel: document.querySelector("#toggleQuoteLabel"),
  toggleGreeting: document.querySelector("#toggleGreeting"),
  toggleGreetingLabel: document.querySelector("#toggleGreetingLabel"),
  toggleContent: document.querySelector("#toggleContent"),
  toggleContentLabel: document.querySelector("#toggleContentLabel"),
  toggleClosing: document.querySelector("#toggleClosing"),
  toggleClosingLabel: document.querySelector("#toggleClosingLabel"),
  toggleSenderName: document.querySelector("#toggleSenderName"),
  toggleSenderNameLabel: document.querySelector("#toggleSenderNameLabel"),

  toggleContactName: document.querySelector("#toggleContactName"),
  toggleContactNameLabel: document.querySelector("#toggleContactNameLabel"),
  toggleContactRole: document.querySelector("#toggleContactRole"),
  toggleContactRoleLabel: document.querySelector("#toggleContactRoleLabel"),
  toggleContactCompany: document.querySelector("#toggleContactCompany"),
  toggleContactCompanyLabel: document.querySelector("#toggleContactCompanyLabel"),
  toggleContactLogo: document.querySelector("#toggleContactLogo"),
  toggleContactLogoLabel: document.querySelector("#toggleContactLogoLabel"),
  toggleContactPhone: document.querySelector("#toggleContactPhone"),
  toggleContactPhoneLabel: document.querySelector("#toggleContactPhoneLabel"),
  toggleContactEmail: document.querySelector("#toggleContactEmail"),
  toggleContactEmailLabel: document.querySelector("#toggleContactEmailLabel"),
  toggleContactWebsite: document.querySelector("#toggleContactWebsite"),
  toggleContactWebsiteLabel: document.querySelector("#toggleContactWebsiteLabel"),
  toggleContactAddress: document.querySelector("#toggleContactAddress"),
  toggleContactAddressLabel: document.querySelector("#toggleContactAddressLabel"),
  toggleSocials: document.querySelector("#toggleSocials"),
  toggleSocialsLabel: document.querySelector("#toggleSocialsLabel"),

  toggleSentAt: document.querySelector("#toggleSentAt"),
  toggleSentAtToggleLabel: document.querySelector("#toggleSentAtToggleLabel"),
  toggleSentFrom: document.querySelector("#toggleSentFrom"),
  toggleSentFromToggleLabel: document.querySelector("#toggleSentFromToggleLabel"),

  rememberDraft: document.querySelector("#rememberDraft"),
  rememberDraftLabel: document.querySelector("#rememberDraftLabel"),
  addressValidation: document.querySelector("#addressValidation"),
  mutedNote: document.querySelector("#mutedNote"),

  attachmentsTitle: document.querySelector("#attachmentsTitle"),
  attachmentsContent: document.querySelector("#attachmentsContent"),
  shortcutPickFiles: document.querySelector("#shortcutPickFiles"),
  shortcutPickFilesLabel: document.querySelector("#shortcutPickFilesLabel"),
  shortcutPickFilesHint: document.querySelector("#shortcutPickFilesHint"),
  addFilesBtn: document.querySelector("#addFilesBtn"),
  fileInput: document.querySelector("#fileInput"),
  dropZone: document.querySelector("#dropZone"),
  attachmentList: document.querySelector("#attachmentList"),
  attachmentCount: document.querySelector("#attachmentCount"),
  attachmentTotal: document.querySelector("#attachmentTotal"),
  attachmentEstimated: document.querySelector("#attachmentEstimated"),
  attachmentWarning: document.querySelector("#attachmentWarning"),

  previewTitle: document.querySelector("#previewTitle"),
  previewTemplateName: document.querySelector("#previewTemplateName"),
  previewControlsTitle: document.querySelector("#previewControlsTitle"),
  previewModeLabel: document.querySelector("#previewModeLabel"),
  previewMode: document.querySelector("#previewMode"),
  accentColor1: document.querySelector("#accentColor1"),
  accentColor2: document.querySelector("#accentColor2"),
  previewEnvelopeTitle: document.querySelector("#previewEnvelopeTitle"),
  previewContentTitle: document.querySelector("#previewContentTitle"),
  previewFields: document.querySelector("#previewFields"),
  mailCanvas: document.querySelector("#mailCanvas"),
  previewFrame: document.querySelector("#previewFrame"),
  previewFrameDark: document.querySelector("#previewFrameDark"),

  footerNote: document.querySelector("#footerNote"),
};

const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
const mobileMedia = window.matchMedia("(max-width: 760px)");
const frameSrcdocCache = new WeakMap();

let tinyEditors = {
  content: null,
  quote: null,
};
let tinySignature = "";
let tinyInitPromise = null;
const customSelectInstances = [];
const customSelectMap = new WeakMap();
let customSelectGlobalsBound = false;
let shortcutFallbackTimer = null;
let shortcutVisibilityHandler = null;

const OPTIONAL_BINDINGS = {
  cc: { toggle: () => ui.toggleCc, controls: () => [ui.fieldCc] },
  bcc: { toggle: () => ui.toggleBcc, controls: () => [ui.fieldBcc] },
  subject: { toggle: () => ui.toggleSubject, controls: () => [ui.fieldSubject] },
  quote: { toggle: () => ui.toggleQuote, controls: () => [ui.fieldQuote] },
  greeting: {
    toggle: () => ui.toggleGreeting,
    controls: () => [ui.fieldGreetingPreset, ui.fieldGreetingCustom, ui.fieldGreetingRecipient],
  },
  content: { toggle: () => ui.toggleContent, controls: () => [ui.fieldContent] },
  closing: { toggle: () => ui.toggleClosing, controls: () => [ui.fieldClosingPreset, ui.fieldClosingCustom] },
  senderName: { toggle: () => ui.toggleSenderName, controls: () => [ui.fieldSenderName] },
  contactName: { toggle: () => ui.toggleContactName, controls: () => [ui.fieldContactName] },
  contactRole: { toggle: () => ui.toggleContactRole, controls: () => [ui.fieldContactRole] },
  contactCompany: { toggle: () => ui.toggleContactCompany, controls: () => [ui.fieldContactCompany] },
  contactLogo: { toggle: () => ui.toggleContactLogo, controls: () => [ui.contactLogoInput] },
  contactPhone: { toggle: () => ui.toggleContactPhone, controls: () => [ui.fieldContactPhone] },
  contactEmail: { toggle: () => ui.toggleContactEmail, controls: () => [ui.fieldContactEmail] },
  contactWebsite: { toggle: () => ui.toggleContactWebsite, controls: () => [ui.fieldContactWebsite] },
  contactAddress: { toggle: () => ui.toggleContactAddress, controls: () => [ui.fieldContactAddress] },
  socials: { toggle: () => ui.toggleSocials, controls: () => [ui.addSocialBtn] },
  sentAt: { toggle: () => ui.toggleSentAt, controls: () => [] },
  sentFrom: { toggle: () => ui.toggleSentFrom, controls: () => [] },
};

function diagInfo(eventName, details) {
  if (!SHORTCUT_DIAGNOSTICS_ENABLED) return;
  console.info(`${SHORTCUT_DIAGNOSTICS_PREFIX} ${eventName}`, {
    session: SHORTCUT_DIAGNOSTICS_SESSION,
    ...details,
  });
}

function diagWarn(eventName, details) {
  if (!SHORTCUT_DIAGNOSTICS_ENABLED) return;
  console.warn(`${SHORTCUT_DIAGNOSTICS_PREFIX} ${eventName}`, {
    session: SHORTCUT_DIAGNOSTICS_SESSION,
    ...details,
  });
}

function diagError(eventName, error, details) {
  if (!SHORTCUT_DIAGNOSTICS_ENABLED) return;
  console.error(`${SHORTCUT_DIAGNOSTICS_PREFIX} ${eventName}`, {
    session: SHORTCUT_DIAGNOSTICS_SESSION,
    name: error?.name || null,
    message: error?.message || String(error),
    stack: error?.stack || null,
    ...details,
  });
}

boot().catch((error) => {
  diagError("boot:failed", error);
  console.error(error);
  ui.addressValidation.textContent = t("bootFailed");
});

async function boot() {
  diagInfo("boot:start", {
    ua: navigator.userAgent,
    platform: navigator.platform,
    maxTouchPoints: Number(navigator.maxTouchPoints || 0),
    exportBtnFound: Boolean(ui.exportBtn),
    shortcutModalFound: Boolean(ui.shortcutModal),
    toastHostFound: Boolean(ui.toastHost),
  });
  bindEvents();
  restoreDraft();
  applyLanguage(state.language);
  applyThemeMode(state.themeMode, { persist: false, refreshEditors: false });
  syncInputsFromState();
  syncShortcutAttachmentModeUi();
  renderSocialRows();
  initCustomSelects(document);
  refreshAllCustomSelects();
  applyOptionalFieldStates();
  syncMobilePreviewMode();
  renderAttachments();
  validateAddressFields();
  updateActionButtons();
  await loadTemplates();
  await initTinyEditors();
  renderPreview();
  registerServiceWorker();
  diagInfo("boot:ready", {
    templateCount: state.templates.length,
    selectedTemplateId: state.selectedTemplateId,
    shortcutPickFiles: state.shortcutPickFiles,
  });
}

function bindEvents() {
  ui.languageMenuBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleLanguageMenu();
  });

  ui.languageMenuList.addEventListener("click", (event) => {
    const option = event.target.closest(".language-option");
    if (!option) return;
    const nextLanguage = normalizeLanguage(option.dataset.lang);
    if (!nextLanguage) return;

    closeLanguageMenu();
    applyLanguage(nextLanguage);
    maybeSaveDraft();
  });

  document.addEventListener("click", (event) => {
    if (!ui.languageMenu.contains(event.target)) {
      closeLanguageMenu();
    }
    const target = event.target instanceof Element ? event.target : null;
    if (!target || !target.closest(".custom-select")) {
      closeAllCustomSelects();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeLanguageMenu();
    closeAllCustomSelects();
    closeInfoModal();
    closeShortcutModal();
    closeColorModal();
    if (state.mobilePreviewOpen) {
      state.mobilePreviewOpen = false;
      syncMobilePreviewMode();
    }
  });

  ui.languageMode.addEventListener("change", () => {
    const nextLanguage = normalizeLanguage(ui.languageMode.value);
    if (!nextLanguage) return;
    applyLanguage(nextLanguage);
    maybeSaveDraft();
  });

  ui.themeMode.addEventListener("change", () => {
    applyThemeMode(ui.themeMode.value, { persist: true, refreshEditors: true });
    renderPreview();
    maybeSaveDraft();
  });

  themeMedia.addEventListener("change", () => {
    if (state.themeMode !== "auto") return;
    applyThemeMode("auto", { persist: false, refreshEditors: true });
    renderPreview();
  });

  mobileMedia.addEventListener("change", () => {
    syncMobilePreviewMode();
    void refreshTinyEditors();
  });

  ui.mobileTemplateSelect.addEventListener("change", async () => {
    const templateId = ui.mobileTemplateSelect.value;
    if (!templateId) return;
    await selectTemplate(templateId);
  });

  ui.previewMode.addEventListener("change", () => {
    state.previewMode = normalizePreviewMode(ui.previewMode.value);
    localStorage.setItem(STORAGE_KEYS.previewMode, state.previewMode);
    renderPreview();
    maybeSaveDraft();
  });

  [ui.accentColor1, ui.accentColor2].forEach((input, index) => {
    input.addEventListener("input", () => {
      const palette = ensureTemplatePalette();
      const key = index === 0 ? "accent" : "accent2";
      palette[key] = normalizeHexColor(input.value, palette[key]);
      palette.accent3 = deriveAccent3(palette.accent, palette.accent2);
      syncHuePaletteSelection();
      maybeSaveDraft();
      renderPreview();
    });
  });

  if (ui.openColorModalBtn) {
    ui.openColorModalBtn.addEventListener("click", () => {
      openColorModal();
    });
  }

  if (ui.colorModalClose) {
    ui.colorModalClose.addEventListener("click", () => {
      closeColorModal();
    });
  }

  if (ui.colorModal) {
    ui.colorModal.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLElement)) return;

      if (event.target.closest("[data-color-close]")) {
        closeColorModal();
        return;
      }

      const swatch = event.target.closest(".hue-swatch[data-color-target][data-color-value]");
      if (!swatch) return;

      const target = swatch.dataset.colorTarget;
      const value = swatch.dataset.colorValue;
      if (target !== "accent" && target !== "accent2") return;

      const palette = ensureTemplatePalette();
      palette[target] = normalizeHexColor(value, palette[target]);
      palette.accent3 = deriveAccent3(palette.accent, palette.accent2);
      syncPaletteInputs();
      maybeSaveDraft();
      renderPreview();
    });
  }

  ui.mobilePreviewToggleBtn.addEventListener("click", () => {
    if (!mobileMedia.matches) return;
    state.mobilePreviewOpen = !state.mobilePreviewOpen;
    syncMobilePreviewMode();
  });

  bindOptionalToggleEvents();
  bindFieldEvents();

  ui.fieldGreetingPreset.addEventListener("change", () => {
    state.fields.greetingPreset = ui.fieldGreetingPreset.value;
    syncCustomPresetVisibility();
    applyOptionalFieldStates();
    maybeSaveDraft();
    renderPreview();
  });

  ui.fieldClosingPreset.addEventListener("change", () => {
    state.fields.closingPreset = ui.fieldClosingPreset.value;
    syncCustomPresetVisibility();
    applyOptionalFieldStates();
    maybeSaveDraft();
    renderPreview();
  });

  ui.addSocialBtn.addEventListener("click", () => {
    addSocialEntry();
  });

  ui.socialsList.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-social]");
    if (!removeButton) return;
    const socialId = removeButton.dataset.removeSocial;
    removeSocialEntry(socialId);
  });

  ui.socialsList.addEventListener("input", (event) => {
    const row = event.target.closest(".social-row");
    if (!row) return;
    const socialId = row.dataset.socialId;
    const social = state.socials.find((item) => item.id === socialId);
    if (!social) return;

    if (event.target.classList.contains("social-url")) {
      social.url = event.target.value;
    }

    maybeSaveDraft();
    renderPreview();
  });

  ui.socialsList.addEventListener("change", (event) => {
    const row = event.target.closest(".social-row");
    if (!row) return;
    const socialId = row.dataset.socialId;
    const social = state.socials.find((item) => item.id === socialId);
    if (!social) return;

    if (event.target.classList.contains("social-network")) {
      social.network = event.target.value;
      maybeSaveDraft();
      renderPreview();
    }
  });

  ui.contactLogoInput.addEventListener("change", async () => {
    const file = ui.contactLogoInput.files?.[0] || null;
    try {
      await setLogoAttachment(file);
    } catch (error) {
      console.error(error);
      clearLogoAttachment();
    }
  });

  if (ui.shortcutPickFiles) {
    ui.shortcutPickFiles.addEventListener("change", () => {
      state.shortcutPickFiles = Boolean(ui.shortcutPickFiles.checked);
      syncShortcutAttachmentModeUi();
      validateAddressFields();
      updateActionButtons();
      renderAttachments();
      renderPreview();
      maybeSaveDraft();
    });
  }

  ui.addFilesBtn.addEventListener("click", () => {
    ui.fileInput.click();
  });

  ui.fileInput.addEventListener("change", () => {
    void addAttachments(ui.fileInput.files);
    ui.fileInput.value = "";
  });

  ui.dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    ui.dropZone.classList.add("drag-over");
  });

  ui.dropZone.addEventListener("dragleave", () => {
    ui.dropZone.classList.remove("drag-over");
  });

  ui.dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    ui.dropZone.classList.remove("drag-over");
    void addAttachments(event.dataTransfer?.files || []);
  });

  ui.dropZone.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    ui.fileInput.click();
  });

  ui.rememberDraft.addEventListener("change", () => {
    state.rememberDraft = ui.rememberDraft.checked;
    if (state.rememberDraft) {
      saveDraft();
    } else {
      localStorage.removeItem(STORAGE_KEYS.draft);
    }
  });

  ui.exportBtn.addEventListener("click", async () => {
    const validation = collectValidationState();
    const hasData = hasAnyExportData();
    diagInfo("send:button_clicked", {
      disabled: Boolean(ui.exportBtn.disabled),
      isExporting: state.isExporting,
      hasData,
      issueCount: validation.issues.length,
      issues: validation.issues,
      to: normalizeInlineText(state.fields.to),
      ccEnabled: Boolean(state.enabled.cc),
      bccEnabled: Boolean(state.enabled.bcc),
      subjectEnabled: Boolean(state.enabled.subject),
      shortcutPickFiles: Boolean(state.shortcutPickFiles),
      attachmentCount: getAllExportAttachments().length,
      visibilityState: document.visibilityState,
    });

    if (!validateAddressFields()) {
      const validationMessage = validation.issues.length
        ? `${t("addressValidationPrefix")} ${validation.issues.join("; ")}`
        : !hasData
          ? t("emptyMailDisabled")
          : t("shortcutReasonClipboard");
      showToast(validationMessage, "error", 3200);
      diagWarn("send:blocked_by_validation", {
        hasData,
        issues: validation.issues,
        validationMessage,
      });
      return;
    }

    await sendAppleMail();
  });

  ui.infoBtn.addEventListener("click", () => {
    openInfoModal();
  });

  ui.infoModalClose.addEventListener("click", () => {
    closeInfoModal();
  });

  ui.infoModal.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLElement)) return;
    if (event.target.closest("[data-modal-close]")) {
      closeInfoModal();
    }
  });

  if (ui.shortcutModalClose) {
    ui.shortcutModalClose.addEventListener("click", () => {
      closeShortcutModal();
    });
  }

  if (ui.shortcutModal) {
    ui.shortcutModal.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      if (event.target.closest("[data-shortcut-close]")) {
        closeShortcutModal();
      }
    });
  }
}

function bindOptionalToggleEvents() {
  Object.keys(OPTIONAL_BINDINGS).forEach((key) => {
    const toggle = OPTIONAL_BINDINGS[key].toggle();
    if (!toggle) return;

    toggle.addEventListener("change", () => {
      state.enabled[key] = Boolean(toggle.checked);
      applyOptionalFieldStates();
      validateAddressFields();
      updateActionButtons();
      maybeSaveDraft();
      renderPreview();
      renderAttachments();
    });
  });
}

function bindFieldEvents() {
  const textBindings = [
    { input: ui.fieldTo, key: "to" },
    { input: ui.fieldCc, key: "cc" },
    { input: ui.fieldBcc, key: "bcc" },
    { input: ui.fieldSubject, key: "subject" },
    { input: ui.fieldQuote, key: "quote" },
    { input: ui.fieldGreetingCustom, key: "greetingCustom" },
    { input: ui.fieldGreetingRecipient, key: "greetingRecipient" },
    { input: ui.fieldContent, key: "content" },
    { input: ui.fieldClosingCustom, key: "closingCustom" },
    { input: ui.fieldSenderName, key: "senderName" },
    { input: ui.fieldContactName, key: "contactName" },
    { input: ui.fieldContactRole, key: "contactRole" },
    { input: ui.fieldContactCompany, key: "contactCompany" },
    { input: ui.fieldContactPhone, key: "contactPhone" },
    { input: ui.fieldContactEmail, key: "contactEmail" },
    { input: ui.fieldContactWebsite, key: "contactWebsite" },
    { input: ui.fieldContactAddress, key: "contactAddress" },
  ];

  textBindings.forEach(({ input, key }) => {
    if (!input) return;
    input.addEventListener("input", () => {
      if (key === "content" && tinyEditors.content) return;
      if (key === "quote" && tinyEditors.quote) return;

      state.fields[key] = input.value;
      validateAddressFields();
      updateActionButtons();
      maybeSaveDraft();
      renderPreview();
      renderAttachments();
    });
  });
}

function initCustomSelects(root = document) {
  if (!root || typeof root.querySelectorAll !== "function") return;

  bindCustomSelectGlobals();

  root.querySelectorAll("select").forEach((selectElement) => {
    if (selectElement.classList.contains("visually-hidden")) return;
    if (selectElement.dataset.nativeSelect === "true") return;
    if (customSelectMap.has(selectElement)) return;
    createCustomSelect(selectElement);
  });
}

function bindCustomSelectGlobals() {
  if (customSelectGlobalsBound) return;
  customSelectGlobalsBound = true;

  window.addEventListener("resize", () => {
    closeAllCustomSelects();
  });

  window.addEventListener("scroll", () => {
    closeAllCustomSelects();
  });
}

function createCustomSelect(selectElement) {
  const wrapper = document.createElement("div");
  wrapper.className = "custom-select";

  selectElement.parentNode.insertBefore(wrapper, selectElement);
  wrapper.append(selectElement);
  selectElement.classList.add("custom-select-native");

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "custom-select-trigger";
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");

  const value = document.createElement("span");
  value.className = "custom-select-value";

  const caret = document.createElement("span");
  caret.className = "custom-select-caret";
  caret.textContent = "▾";
  caret.setAttribute("aria-hidden", "true");

  trigger.append(value, caret);

  const list = document.createElement("div");
  list.className = "custom-select-list";
  list.setAttribute("role", "listbox");
  list.hidden = true;

  wrapper.append(trigger, list);

  const instance = {
    selectElement,
    wrapper,
    trigger,
    value,
    list,
    observer: null,
  };

  const syncFromSelect = () => {
    const selectedOption = selectElement.selectedOptions?.[0] || selectElement.options[0] || null;
    value.textContent = selectedOption?.textContent?.trim() || "—";

    list.querySelectorAll(".custom-select-option").forEach((optionButton) => {
      const isActive = optionButton.dataset.value === selectElement.value;
      optionButton.classList.toggle("is-active", isActive);
      optionButton.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    const isDisabled = selectElement.disabled || selectElement.options.length === 0;
    trigger.disabled = isDisabled;
    wrapper.classList.toggle("is-disabled", isDisabled);
  };

  const rebuildOptions = () => {
    list.innerHTML = "";

    Array.from(selectElement.options).forEach((option) => {
      const optionButton = document.createElement("button");
      optionButton.type = "button";
      optionButton.className = "custom-select-option";
      optionButton.setAttribute("role", "option");
      optionButton.dataset.value = option.value;
      optionButton.textContent = option.textContent;
      optionButton.disabled = option.disabled;
      list.append(optionButton);
    });

    syncFromSelect();
  };

  const close = () => {
    wrapper.classList.remove("is-open");
    list.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
  };

  const open = (focusSelected = false) => {
    if (trigger.disabled) return;
    closeAllCustomSelects(instance);
    wrapper.classList.add("is-open");
    list.hidden = false;
    trigger.setAttribute("aria-expanded", "true");

    if (focusSelected) {
      const selectedButton = list.querySelector(".custom-select-option.is-active:not(:disabled)");
      const fallbackButton = list.querySelector(".custom-select-option:not(:disabled)");
      (selectedButton || fallbackButton)?.focus();
    }
  };

  const selectValue = (nextValue) => {
    if (selectElement.value !== nextValue) {
      selectElement.value = nextValue;
      selectElement.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      syncFromSelect();
    }
    close();
    trigger.focus();
  };

  trigger.addEventListener("click", () => {
    if (wrapper.classList.contains("is-open")) {
      close();
    } else {
      open();
    }
  });

  trigger.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open(true);
    }
  });

  list.addEventListener("click", (event) => {
    const optionButton = event.target.closest(".custom-select-option");
    if (!optionButton || optionButton.disabled) return;
    selectValue(optionButton.dataset.value);
  });

  list.addEventListener("keydown", (event) => {
    const enabledOptions = Array.from(list.querySelectorAll(".custom-select-option:not(:disabled)"));
    if (!enabledOptions.length) return;

    const currentIndex = enabledOptions.indexOf(document.activeElement);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = currentIndex < 0 ? 0 : Math.min(enabledOptions.length - 1, currentIndex + 1);
      enabledOptions[nextIndex].focus();
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const nextIndex = currentIndex < 0 ? enabledOptions.length - 1 : Math.max(0, currentIndex - 1);
      enabledOptions[nextIndex].focus();
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      enabledOptions[0].focus();
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      enabledOptions[enabledOptions.length - 1].focus();
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      close();
      trigger.focus();
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const activeButton = document.activeElement.closest(".custom-select-option");
      if (activeButton && !activeButton.disabled) {
        selectValue(activeButton.dataset.value);
      }
    }
  });

  selectElement.addEventListener("change", () => {
    syncFromSelect();
  });

  instance.observer = new MutationObserver(() => {
    rebuildOptions();
  });

  instance.observer.observe(selectElement, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["disabled"],
  });

  instance.rebuildOptions = rebuildOptions;
  instance.syncFromSelect = syncFromSelect;
  instance.close = close;

  customSelectMap.set(selectElement, instance);
  customSelectInstances.push(instance);
  rebuildOptions();
}

function refreshCustomSelect(selectElement) {
  const instance = customSelectMap.get(selectElement);
  if (!instance || !instance.selectElement.isConnected) return;
  instance.rebuildOptions();
}

function refreshAllCustomSelects() {
  for (let index = customSelectInstances.length - 1; index >= 0; index -= 1) {
    const instance = customSelectInstances[index];
    if (!instance.selectElement.isConnected) {
      instance.observer?.disconnect();
      customSelectInstances.splice(index, 1);
      continue;
    }
    instance.rebuildOptions();
  }
}

function closeAllCustomSelects(exceptInstance = null) {
  customSelectInstances.forEach((instance) => {
    if (!instance.selectElement.isConnected) return;
    if (exceptInstance && instance === exceptInstance) return;
    instance.close();
  });
}

function t(key, vars = {}) {
  const dictionary = I18N[state.language] || I18N.pl;
  const fallbackDictionary = I18N.pl;

  let value = dictionary[key];
  if (value === undefined) {
    value = fallbackDictionary[key];
  }

  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\{([a-zA-Z0-9_]+)\}/g, (_, token) => {
    return vars[token] !== undefined ? String(vars[token]) : "";
  });
}

function detectInitialLanguage() {
  const saved = normalizeLanguage(localStorage.getItem(STORAGE_KEYS.language));
  if (saved) return saved;

  const browser = normalizeLanguage(navigator.language);
  return browser || "pl";
}

function normalizeLanguage(value) {
  const short = String(value || "").toLowerCase().slice(0, 2);
  return ["pl", "en", "uk"].includes(short) ? short : null;
}

function normalizeThemeMode(value) {
  const normalized = String(value || "").toLowerCase();
  return ["auto", "light", "dark"].includes(normalized) ? normalized : "auto";
}

function normalizePreviewMode(value) {
  const normalized = String(value || "").toLowerCase();
  return ["app", "light", "dark", "both"].includes(normalized) ? normalized : "app";
}

function normalizeHexColor(value, fallback = "#2e7dff") {
  const raw = String(value || "").trim();
  if (/^#[0-9a-f]{6}$/i.test(raw)) {
    return raw.toLowerCase();
  }
  return String(fallback || "#2e7dff");
}

function hexToRgb(hex) {
  const normalized = normalizeHexColor(hex, "#2e7dff");
  return {
    r: Number.parseInt(normalized.slice(1, 3), 16),
    g: Number.parseInt(normalized.slice(3, 5), 16),
    b: Number.parseInt(normalized.slice(5, 7), 16),
  };
}

function rgbToHex({ r, g, b }) {
  const clamp = (value) => Math.max(0, Math.min(255, Math.round(value)));
  const toHex = (value) => clamp(value).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function mixHexColors(left, right, weight = 0.5) {
  const a = hexToRgb(left);
  const b = hexToRgb(right);
  const alpha = Math.max(0, Math.min(1, Number(weight)));
  return rgbToHex({
    r: a.r * (1 - alpha) + b.r * alpha,
    g: a.g * (1 - alpha) + b.g * alpha,
    b: a.b * (1 - alpha) + b.b * alpha,
  });
}

function deriveAccent3(accent, accent2) {
  const blended = mixHexColors(accent, accent2, 0.35);
  return mixHexColors(blended, "#101522", 0.28);
}

function buildTemplateColorTheme(palette, mode) {
  if (mode === "dark") {
    const bg = mixHexColors(palette.accent3, "#0f1422", 0.76);
    const surface = mixHexColors(palette.accent3, "#1a2436", 0.66);
    const surfaceSoft = mixHexColors(palette.accent2, "#25354a", 0.8);
    const border = mixHexColors(palette.accent2, "#4b6079", 0.52);
    const text = mixHexColors(palette.accent2, "#edf3ff", 0.86);
    const muted = mixHexColors(text, "#9fb0c6", 0.52);
    const surfaceGradient = `linear-gradient(140deg, ${mixHexColors(surface, bg, 0.22)}, ${mixHexColors(
      surfaceSoft,
      bg,
      0.45,
    )})`;
    return { bg, surface, surfaceSoft, border, text, muted, surfaceGradient };
  }

  const bg = mixHexColors(palette.accent, "#f4f8ff", 0.88);
  const surface = mixHexColors(palette.accent, "#ffffff", 0.95);
  const surfaceSoft = mixHexColors(palette.accent2, "#ffffff", 0.86);
  const border = mixHexColors(palette.accent, "#cad9ec", 0.62);
  const text = mixHexColors(palette.accent3, "#1a2a3e", 0.8);
  const muted = mixHexColors(text, "#6f8197", 0.56);
  const surfaceGradient = `linear-gradient(140deg, ${mixHexColors(surfaceSoft, "#ffffff", 0.24)}, ${mixHexColors(
    surface,
    "#ffffff",
    0.16,
  )})`;
  return { bg, surface, surfaceSoft, border, text, muted, surfaceGradient };
}

function parseCssColor(value) {
  const raw = String(value || "").trim();
  const hexMatch = raw.match(/#([0-9a-f]{3}|[0-9a-f]{6})\b/i);
  if (hexMatch) {
    const token = hexMatch[1];
    if (token.length === 3) {
      return {
        r: Number.parseInt(`${token[0]}${token[0]}`, 16),
        g: Number.parseInt(`${token[1]}${token[1]}`, 16),
        b: Number.parseInt(`${token[2]}${token[2]}`, 16),
      };
    }
    return {
      r: Number.parseInt(token.slice(0, 2), 16),
      g: Number.parseInt(token.slice(2, 4), 16),
      b: Number.parseInt(token.slice(4, 6), 16),
    };
  }

  const rgbMatch = raw.match(
    /rgba?\(\s*([0-9]{1,3})(?:\s*,\s*|\s+)([0-9]{1,3})(?:\s*,\s*|\s+)([0-9]{1,3})/i,
  );
  if (rgbMatch) {
    return {
      r: Number.parseInt(rgbMatch[1], 10),
      g: Number.parseInt(rgbMatch[2], 10),
      b: Number.parseInt(rgbMatch[3], 10),
    };
  }

  return null;
}

function relativeLuminance(rgb) {
  if (!rgb) return null;
  const normalize = (channel) => {
    const value = Math.max(0, Math.min(255, Number(channel))) / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };
  const r = normalize(rgb.r);
  const g = normalize(rgb.g);
  const b = normalize(rgb.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function colorLuminance(value) {
  return relativeLuminance(parseCssColor(value));
}

function containsTemplateAccentToken(value) {
  return /var\(--template-accent/i.test(String(value || ""));
}

function isTransparentCssValue(value) {
  return /transparent|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*0(?:\.0+)?\s*\)/i.test(String(value || ""));
}

function pickRetintBackground(value, theme, mode) {
  const source = String(value || "");
  if (/url\(/i.test(source)) return source;
  if (/gradient/i.test(source)) return theme.surfaceGradient;
  if (isTransparentCssValue(source)) return source;

  const luminance = colorLuminance(source);
  if (luminance === null) return theme.surface;

  if (mode === "dark") {
    if (luminance > 0.85) return theme.surface;
    if (luminance > 0.55) return theme.surfaceSoft;
    return mixHexColors(theme.surfaceSoft, theme.bg, 0.28);
  }

  if (luminance > 0.9) return theme.surface;
  if (luminance > 0.7) return theme.surfaceSoft;
  if (luminance > 0.45) return mixHexColors(theme.surfaceSoft, theme.surface, 0.38);
  return mixHexColors(theme.surface, theme.bg, 0.24);
}

function retintTemplateInlineStyles(doc, theme, mode) {
  if (!doc?.body) return;

  doc.body.style.background = theme.bg;
  doc.body.style.color = theme.text;

  const styledElements = doc.querySelectorAll("[style]");
  styledElements.forEach((element) => {
    if (!(element instanceof HTMLElement)) return;
    if (element.closest(".mail-content, .mail-quote-body")) return;

    const style = element.style;

    const background = style.getPropertyValue("background");
    if (background && !containsTemplateAccentToken(background)) {
      style.setProperty("background", pickRetintBackground(background, theme, mode));
    }

    const backgroundColor = style.getPropertyValue("background-color");
    if (backgroundColor && !containsTemplateAccentToken(backgroundColor) && !isTransparentCssValue(backgroundColor)) {
      style.setProperty("background-color", pickRetintBackground(backgroundColor, theme, mode));
    }

    const hasAccentBackground =
      containsTemplateAccentToken(style.getPropertyValue("background")) ||
      containsTemplateAccentToken(style.getPropertyValue("background-color"));

    ["border-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color"].forEach(
      (property) => {
        const value = style.getPropertyValue(property);
        if (!value || containsTemplateAccentToken(value) || isTransparentCssValue(value)) return;
        style.setProperty(property, theme.border);
      },
    );

    ["border", "border-top", "border-right", "border-bottom", "border-left"].forEach((property) => {
      const value = style.getPropertyValue(property);
      if (!value || containsTemplateAccentToken(value) || isTransparentCssValue(value)) return;
      if (!/(solid|dashed|dotted|double)/i.test(value)) return;

      const parts = value.trim().split(/\s+/);
      if (parts.length < 2) return;
      style.setProperty(property, `${parts[0]} ${parts[1]} ${theme.border}`);
    });

    const color = style.getPropertyValue("color");
    if (color && !containsTemplateAccentToken(color)) {
      const colorLum = colorLuminance(color);
      const keepLightOnAccent = hasAccentBackground && colorLum !== null && colorLum > 0.8;
      style.setProperty("color", keepLightOnAccent ? "#ffffff" : theme.text);
    }

    const shadow = style.getPropertyValue("box-shadow");
    if (shadow && !containsTemplateAccentToken(shadow)) {
      style.setProperty(
        "box-shadow",
        mode === "dark" ? "0 16px 34px rgba(0, 0, 0, 0.4)" : "0 12px 28px rgba(12, 30, 50, 0.1)",
      );
    }
  });

  doc.querySelectorAll('table[role="presentation"]').forEach((table) => {
    if (!(table instanceof HTMLElement)) return;
    if (!containsTemplateAccentToken(table.style.background) && !containsTemplateAccentToken(table.style.backgroundColor)) {
      table.style.background = theme.surface;
    }
    table.style.borderColor = table.style.borderColor || theme.border;
    table.style.color = table.style.color || theme.text;
  });
}

function resolveTemplateColorTokens(doc, palette, theme) {
  if (!doc) return;

  const replacements = [
    ["--template-accent-1", palette.accent],
    ["--template-accent-2", palette.accent2],
    ["--template-accent-3", palette.accent3],
    ["--template-accent", palette.accent],
    ["--template-bg", theme.bg],
    ["--template-surface-soft", theme.surfaceSoft],
    ["--template-surface", theme.surface],
    ["--template-border", theme.border],
    ["--template-text", theme.text],
    ["--template-muted", theme.muted],
  ];

  const applyReplacements = (value) => {
    let next = String(value || "");
    replacements.forEach(([name, color]) => {
      const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const pattern = new RegExp(`var\\(${escaped}(?:\\s*,\\s*[^)]+)?\\)`, "gi");
      next = next.replace(pattern, color);
    });
    return next;
  };

  doc.querySelectorAll("[style]").forEach((element) => {
    if (!(element instanceof HTMLElement)) return;
    const current = element.getAttribute("style");
    if (!current || !current.includes("var(--template-")) return;
    element.setAttribute("style", applyReplacements(current));
  });

  doc.querySelectorAll("style").forEach((styleNode) => {
    const current = styleNode.textContent || "";
    if (!current.includes("var(--template-")) return;
    styleNode.textContent = applyReplacements(current);
  });
}

function getTemplateDefaultPalette() {
  const accent = normalizeHexColor(state.mainPalette?.accent, DEFAULT_MAIN_PALETTE.accent);
  const accent2 = normalizeHexColor(state.mainPalette?.accent2, DEFAULT_MAIN_PALETTE.accent2);
  const accent3 = deriveAccent3(accent, accent2);
  return { accent, accent2, accent3 };
}

function ensureTemplatePalette() {
  const palette = getTemplateDefaultPalette();
  state.mainPalette = { ...palette };
  return state.mainPalette;
}

function getTemplatePalette() {
  return ensureTemplatePalette();
}

function applyLanguage(language) {
  state.language = normalizeLanguage(language) || "pl";
  localStorage.setItem(STORAGE_KEYS.language, state.language);
  document.documentElement.lang = state.language;

  ui.languageMode.value = state.language;
  ui.languageModeLabel.textContent = t("languageLabel");
  ui.languageMode.setAttribute("aria-label", t("languageAria"));
  ui.languageMenuBtn.setAttribute("aria-label", t("languageAria"));

  setSelectOptionLabel(ui.languageMode, "pl", t("languagePl"));
  setSelectOptionLabel(ui.languageMode, "en", t("languageEn"));
  setSelectOptionLabel(ui.languageMode, "uk", t("languageUk"));
  ui.languageOptionPl.textContent = t("languagePl");
  ui.languageOptionEn.textContent = t("languageEn");
  ui.languageOptionUk.textContent = t("languageUk");
  updateLanguageMenuUi();

  ui.themeModeLabel.textContent = t("themeModeLabel");
  setSelectOptionLabel(ui.themeMode, "auto", t("themeAuto"));
  setSelectOptionLabel(ui.themeMode, "light", t("themeLight"));
  setSelectOptionLabel(ui.themeMode, "dark", t("themeDark"));

  ui.previewModeLabel.textContent = t("previewModeLabel");
  setSelectOptionLabel(ui.previewMode, "app", t("previewModeApp"));
  setSelectOptionLabel(ui.previewMode, "light", t("previewModeLight"));
  setSelectOptionLabel(ui.previewMode, "dark", t("previewModeDark"));
  setSelectOptionLabel(ui.previewMode, "both", t("previewModeBoth"));

  ui.mobileTemplateLabel.textContent = t("mobileTemplateLabel");
  ui.mobileTemplateSelect.setAttribute("aria-label", t("mobileTemplateAria"));

  ui.editorTitle.textContent = t("editorTitle");
  ui.sectionEnvelopeTitle.textContent = t("sectionEnvelopeTitle");
  ui.sectionQuoteTitle.textContent = t("sectionQuoteTitle");
  ui.sectionGreetingTitle.textContent = t("sectionGreetingTitle");
  ui.sectionContentTitle.textContent = t("sectionContentTitle");
  ui.sectionClosingTitle.textContent = t("sectionClosingTitle");
  ui.sectionContactTitle.textContent = t("sectionContactTitle");
  ui.sectionSentTitle.textContent = t("sectionSentTitle");

  ui.fieldToLabel.textContent = t("fieldToLabel");
  ui.fieldTo.placeholder = t("fieldToPlaceholder");
  ui.fieldCcLabel.textContent = t("fieldCcLabel");
  ui.fieldCc.placeholder = t("fieldCcPlaceholder");
  ui.fieldBccLabel.textContent = t("fieldBccLabel");
  ui.fieldBcc.placeholder = t("fieldBccPlaceholder");
  ui.fieldSubjectLabel.textContent = t("fieldSubjectLabel");
  ui.fieldSubject.placeholder = t("fieldSubjectPlaceholder");

  ui.fieldQuoteLabel.textContent = t("fieldQuoteLabel");
  ui.fieldQuote.placeholder = t("fieldQuotePlaceholder");

  ui.fieldGreetingLabel.textContent = t("fieldGreetingLabel");
  ui.fieldGreetingCustomLabel.textContent = t("fieldGreetingCustomLabel");
  ui.fieldGreetingCustom.placeholder = t("fieldGreetingCustomPlaceholder");
  ui.fieldGreetingRecipientLabel.textContent = t("fieldGreetingRecipientLabel");
  ui.fieldGreetingRecipient.placeholder = t("fieldGreetingRecipientPlaceholder");

  ui.fieldContentLabel.textContent = t("fieldContentLabel");
  ui.fieldContent.placeholder = t("fieldContentPlaceholder");

  ui.fieldClosingLabel.textContent = t("fieldClosingLabel");
  ui.fieldClosingCustomLabel.textContent = t("fieldClosingCustomLabel");
  ui.fieldClosingCustom.placeholder = t("fieldClosingCustomPlaceholder");

  ui.fieldSenderNameLabel.textContent = t("fieldSenderNameLabel");
  ui.fieldSenderName.placeholder = t("fieldSenderNamePlaceholder");

  ui.fieldContactNameLabel.textContent = t("fieldContactNameLabel");
  ui.fieldContactName.placeholder = t("fieldContactNamePlaceholder");
  ui.fieldContactRoleLabel.textContent = t("fieldContactRoleLabel");
  ui.fieldContactRole.placeholder = t("fieldContactRolePlaceholder");
  ui.fieldContactCompanyLabel.textContent = t("fieldContactCompanyLabel");
  ui.fieldContactCompany.placeholder = t("fieldContactCompanyPlaceholder");
  ui.fieldContactLogoLabel.textContent = t("fieldContactLogoLabel");
  ui.contactLogoHint.textContent = t("fieldContactLogoHint");
  ui.fieldContactPhoneLabel.textContent = t("fieldContactPhoneLabel");
  ui.fieldContactPhone.placeholder = t("fieldContactPhonePlaceholder");
  ui.fieldContactEmailLabel.textContent = t("fieldContactEmailLabel");
  ui.fieldContactEmail.placeholder = t("fieldContactEmailPlaceholder");
  ui.fieldContactWebsiteLabel.textContent = t("fieldContactWebsiteLabel");
  ui.fieldContactWebsite.placeholder = t("fieldContactWebsitePlaceholder");
  ui.fieldContactAddressLabel.textContent = t("fieldContactAddressLabel");
  ui.fieldContactAddress.placeholder = t("fieldContactAddressPlaceholder");

  ui.fieldSocialsLabel.textContent = t("fieldSocialsLabel");
  ui.addSocialBtn.textContent = t("socialAddButton");

  ui.fieldSentAtLabel.textContent = t("fieldSentAtLabel");
  ui.fieldSentAtHint.textContent = t("fieldSentAtHint");
  ui.fieldSentFromLabel.textContent = t("fieldSentFromLabel");
  ui.fieldSentFromHint.textContent = t("fieldSentFromHint");

  [
    ui.toggleCcLabel,
    ui.toggleBccLabel,
    ui.toggleSubjectLabel,
    ui.toggleQuoteLabel,
    ui.toggleGreetingLabel,
    ui.toggleContentLabel,
    ui.toggleClosingLabel,
    ui.toggleSenderNameLabel,
    ui.toggleContactNameLabel,
    ui.toggleContactRoleLabel,
    ui.toggleContactCompanyLabel,
    ui.toggleContactLogoLabel,
    ui.toggleContactPhoneLabel,
    ui.toggleContactEmailLabel,
    ui.toggleContactWebsiteLabel,
    ui.toggleContactAddressLabel,
    ui.toggleSocialsLabel,
    ui.toggleSentAtToggleLabel,
    ui.toggleSentFromToggleLabel,
  ].forEach((labelNode) => {
    if (labelNode) labelNode.textContent = t("toggleShow");
  });

  [
    [ui.toggleCc, t("fieldCcLabel")],
    [ui.toggleBcc, t("fieldBccLabel")],
    [ui.toggleSubject, t("fieldSubjectLabel")],
    [ui.toggleQuote, t("fieldQuoteLabel")],
    [ui.toggleGreeting, t("fieldGreetingLabel")],
    [ui.toggleContent, t("fieldContentLabel")],
    [ui.toggleClosing, t("fieldClosingLabel")],
    [ui.toggleSenderName, t("fieldSenderNameLabel")],
    [ui.toggleContactName, t("fieldContactNameLabel")],
    [ui.toggleContactRole, t("fieldContactRoleLabel")],
    [ui.toggleContactCompany, t("fieldContactCompanyLabel")],
    [ui.toggleContactLogo, t("fieldContactLogoLabel")],
    [ui.toggleContactPhone, t("fieldContactPhoneLabel")],
    [ui.toggleContactEmail, t("fieldContactEmailLabel")],
    [ui.toggleContactWebsite, t("fieldContactWebsiteLabel")],
    [ui.toggleContactAddress, t("fieldContactAddressLabel")],
    [ui.toggleSocials, t("fieldSocialsLabel")],
    [ui.toggleSentAt, t("fieldSentAtLabel")],
    [ui.toggleSentFrom, t("fieldSentFromLabel")],
  ].forEach(([toggle, label]) => {
    if (toggle) {
      toggle.setAttribute("aria-label", label);
    }
  });

  ui.rememberDraftLabel.textContent = t("rememberDraftLabel");
  ui.mutedNote.innerHTML = t("mutedNoteHtml");

  ui.previewTitle.textContent = t("previewTitle");
  ui.previewEnvelopeTitle.textContent = t("previewEnvelopeTitle");
  ui.previewControlsTitle.textContent = t("previewControlsTitle");
  ui.previewContentTitle.textContent = t("previewContentTitle");
  ui.previewFrame.title = t("previewFrameTitle");
  ui.previewFrameDark.title = t("previewFrameDarkTitle");
  if (ui.openColorModalBtn) ui.openColorModalBtn.textContent = t("colorPickerButton");
  if (ui.colorModalTitle) ui.colorModalTitle.textContent = t("colorModalTitle");
  if (ui.mainColor1Label) ui.mainColor1Label.textContent = t("accentColor1Label");
  if (ui.mainColor2Label) ui.mainColor2Label.textContent = t("accentColor2Label");
  if (ui.huePalette1Label) ui.huePalette1Label.textContent = t("huePaletteLabel");
  if (ui.huePalette2Label) ui.huePalette2Label.textContent = t("huePaletteLabel");
  if (ui.customColor1Label) ui.customColor1Label.textContent = t("customColorLabel");
  if (ui.customColor2Label) ui.customColor2Label.textContent = t("customColorLabel");
  if (ui.colorModalClose) ui.colorModalClose.textContent = t("colorModalClose");

  ui.attachmentsTitle.textContent = t("attachmentsTitle");
  if (ui.shortcutPickFilesLabel) ui.shortcutPickFilesLabel.textContent = t("shortcutPickFilesLabel");
  if (ui.shortcutPickFilesHint) ui.shortcutPickFilesHint.textContent = t("shortcutPickFilesHint");
  ui.addFilesBtn.textContent = t("addFilesButton");
  ui.dropZone.textContent = t("dropZoneText");
  ui.dropZone.setAttribute("aria-label", t("dropZoneAria"));

  ui.mobilePreviewToggleBtn.textContent = t("openPreviewButton");
  ui.exportBtn.setAttribute("aria-label", t("shortcutSendButtonAria"));
  ui.exportBtn.title = t("shortcutSendButtonAria");

  ui.infoBtn.setAttribute("aria-label", t("infoButtonAria"));
  ui.infoModalTitle.textContent = t("infoModalTitle");
  ui.infoModalClose.setAttribute("aria-label", t("infoModalCloseAria"));
  ui.infoModalList.innerHTML = "";
  ["infoLine1", "infoLine2", "infoLine3", "infoLine4"].forEach((key) => {
    const item = document.createElement("li");
    item.textContent = t(key);
    ui.infoModalList.append(item);
  });

  if (ui.shortcutModalTitle) ui.shortcutModalTitle.textContent = t("shortcutTitle");
  if (ui.shortcutModalBody) ui.shortcutModalBody.textContent = t("shortcutBody");
  if (ui.shortcutStep1) ui.shortcutStep1.textContent = t("shortcutStep1");
  if (ui.shortcutStep2) ui.shortcutStep2.textContent = t("shortcutStep2");
  if (ui.shortcutStep3) ui.shortcutStep3.textContent = t("shortcutStep3");
  if (ui.shortcutProviderNote) ui.shortcutProviderNote.textContent = t("shortcutProviderNote");
  if (ui.shortcutSetupSummary) ui.shortcutSetupSummary.textContent = t("shortcutSetupSummary");
  if (ui.shortcutSetup1) ui.shortcutSetup1.textContent = t("shortcutSetup1");
  if (ui.shortcutSetup2) ui.shortcutSetup2.textContent = t("shortcutSetup2");
  if (ui.shortcutSetup3) ui.shortcutSetup3.textContent = t("shortcutSetup3");
  if (ui.shortcutSetup4) ui.shortcutSetup4.textContent = t("shortcutSetup4");
  if (ui.shortcutInstallBtn) {
    ui.shortcutInstallBtn.textContent = t("shortcutInstall");
    ui.shortcutInstallBtn.href = SHORTCUT_INSTALL_URL;
    ui.shortcutInstallBtn.setAttribute("rel", "noopener noreferrer");
    ui.shortcutInstallBtn.setAttribute("target", "_blank");
  }
  if (ui.shortcutModalClose) {
    ui.shortcutModalClose.textContent = t("shortcutClose");
    ui.shortcutModalClose.setAttribute("aria-label", t("shortcutClose"));
  }
  if (ui.shortcutModalReason) {
    const reason = ui.shortcutModal?.dataset.reason || "maybeNotInstalled";
    ui.shortcutModalReason.textContent = t(shortcutReasonKey(reason));
  }

  buildPresetOptions();
  renderTemplateSelectOptions();
  renderSocialRows();
  renderAttachments();
  renderPreview();
  validateAddressFields();
  updateActionButtons();
  syncMobilePreviewMode();
  void refreshTinyEditors();
}

function setSelectOptionLabel(selectElement, value, text) {
  const option = selectElement.querySelector(`option[value="${value}"]`);
  if (option) {
    option.textContent = text;
    refreshCustomSelect(selectElement);
  }
}

function buildPresetOptions() {
  const greetingOptions = [
    { value: "casual", label: t("greetingPresetCasual") },
    { value: "formal", label: t("greetingPresetFormal") },
    { value: "neutral", label: t("greetingPresetNeutral") },
    { value: "hey", label: t("greetingPresetHey") },
    { value: "custom", label: t("presetCustom") },
  ];

  const closingOptions = [
    { value: "regards", label: t("closingPresetRegards") },
    { value: "sincerely", label: t("closingPresetSincerely") },
    { value: "thanks", label: t("closingPresetThanks") },
    { value: "best", label: t("closingPresetBest") },
    { value: "custom", label: t("presetCustom") },
  ];

  fillSelectWithOptions(ui.fieldGreetingPreset, greetingOptions, state.fields.greetingPreset);
  fillSelectWithOptions(ui.fieldClosingPreset, closingOptions, state.fields.closingPreset);

  syncCustomPresetVisibility();
}

function fillSelectWithOptions(selectElement, options, selectedValue) {
  if (!selectElement) return;
  const currentValue = options.some((item) => item.value === selectedValue)
    ? selectedValue
    : options[0]?.value || "";

  selectElement.innerHTML = "";
  options.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    if (item.value === currentValue) {
      option.selected = true;
    }
    selectElement.append(option);
  });

  refreshCustomSelect(selectElement);

  return currentValue;
}

function syncCustomPresetVisibility() {
  const greetingCustom = state.fields.greetingPreset === "custom";
  const closingCustom = state.fields.closingPreset === "custom";

  ui.greetingCustomWrap.hidden = !greetingCustom;
  ui.closingCustomWrap.hidden = !closingCustom;
}

function updateLanguageMenuUi() {
  ui.languageFlag.textContent = LANGUAGE_FLAGS[state.language] || "🏳️";

  ui.languageMenuList.querySelectorAll(".language-option").forEach((option) => {
    const isActive = option.dataset.lang === state.language;
    option.classList.toggle("active", isActive);
    option.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function toggleLanguageMenu() {
  const shouldOpen = ui.languageMenuList.hidden;
  ui.languageMenuList.hidden = !shouldOpen;
  ui.languageMenuBtn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
}

function closeLanguageMenu() {
  ui.languageMenuList.hidden = true;
  ui.languageMenuBtn.setAttribute("aria-expanded", "false");
}

function applyThemeMode(mode, options = {}) {
  const persist = options.persist !== false;
  const refreshEditors = options.refreshEditors !== false;

  state.themeMode = normalizeThemeMode(mode);
  if (persist) {
    localStorage.setItem(STORAGE_KEYS.themeMode, state.themeMode);
  }

  state.resolvedTheme =
    state.themeMode === "auto" ? (themeMedia.matches ? "dark" : "light") : state.themeMode;

  document.documentElement.dataset.themeMode = state.themeMode;
  document.documentElement.dataset.resolvedTheme = state.resolvedTheme;
  ui.themeMode.value = state.themeMode;
  refreshCustomSelect(ui.themeMode);

  if (refreshEditors) {
    void refreshTinyEditors();
  }
}

function syncMobilePreviewMode() {
  if (!mobileMedia.matches) {
    state.mobilePreviewOpen = false;
  }

  const open = mobileMedia.matches && state.mobilePreviewOpen;
  document.body.classList.toggle("mobile-preview-open", open);

  ui.mobilePreviewToggleBtn.textContent = open ? t("closePreviewButton") : t("openPreviewButton");
  ui.mobilePreviewToggleBtn.setAttribute("aria-pressed", open ? "true" : "false");

  if (open) {
    renderPreview();
  }
}

function syncShortcutAttachmentModeUi() {
  const pickFilesInShortcut = Boolean(state.shortcutPickFiles);
  if (ui.shortcutPickFiles) {
    ui.shortcutPickFiles.checked = pickFilesInShortcut;
  }
  if (ui.attachmentsContent) {
    ui.attachmentsContent.hidden = pickFilesInShortcut;
  }
}

function syncInputsFromState() {
  ui.themeMode.value = normalizeThemeMode(state.themeMode);
  ui.previewMode.value = normalizePreviewMode(state.previewMode);

  ui.rememberDraft.checked = state.rememberDraft;
  if (ui.shortcutPickFiles) {
    ui.shortcutPickFiles.checked = Boolean(state.shortcutPickFiles);
  }

  ui.fieldTo.value = state.fields.to;
  ui.fieldCc.value = state.fields.cc;
  ui.fieldBcc.value = state.fields.bcc;
  ui.fieldSubject.value = state.fields.subject;
  ui.fieldQuote.value = state.fields.quote;
  ui.fieldGreetingCustom.value = state.fields.greetingCustom;
  ui.fieldGreetingRecipient.value = state.fields.greetingRecipient;
  ui.fieldContent.value = state.fields.content;
  ui.fieldClosingCustom.value = state.fields.closingCustom;
  ui.fieldSenderName.value = state.fields.senderName;

  ui.fieldContactName.value = state.fields.contactName;
  ui.fieldContactRole.value = state.fields.contactRole;
  ui.fieldContactCompany.value = state.fields.contactCompany;
  ui.fieldContactPhone.value = state.fields.contactPhone;
  ui.fieldContactEmail.value = state.fields.contactEmail;
  ui.fieldContactWebsite.value = state.fields.contactWebsite;
  ui.fieldContactAddress.value = state.fields.contactAddress;

  ui.fieldGreetingPreset.value = state.fields.greetingPreset;
  ui.fieldClosingPreset.value = state.fields.closingPreset;

  Object.keys(OPTIONAL_BINDINGS).forEach((key) => {
    const toggle = OPTIONAL_BINDINGS[key].toggle();
    if (toggle) {
      toggle.checked = Boolean(state.enabled[key]);
    }
  });

  syncCustomPresetVisibility();
  applyOptionalFieldStates();
  refreshAllCustomSelects();
}

function applyOptionalFieldStates() {
  Object.keys(OPTIONAL_BINDINGS).forEach((key) => {
    const enabled = Boolean(state.enabled[key]);
    const toggle = OPTIONAL_BINDINGS[key].toggle();
    const controls = OPTIONAL_BINDINGS[key].controls();

    if (toggle) {
      toggle.checked = enabled;
    }

    document.querySelectorAll(`[data-optional-key="${key}"]`).forEach((block) => {
      block.classList.toggle("is-disabled", !enabled);
    });

    controls.forEach((control) => {
      if (!control) return;
      control.disabled = !enabled;
      control.setAttribute("aria-disabled", !enabled ? "true" : "false");
    });
  });

  syncCustomPresetVisibility();

  if (tinyEditors.content?.mode?.set) {
    tinyEditors.content.mode.set(state.enabled.content ? "design" : "readonly");
  }
  if (tinyEditors.quote?.mode?.set) {
    tinyEditors.quote.mode.set(state.enabled.quote ? "design" : "readonly");
  }

  ui.addSocialBtn.disabled = !state.enabled.socials;
  ui.socialsList.querySelectorAll("select,input,button").forEach((control) => {
    control.disabled = !state.enabled.socials;
  });
  refreshAllCustomSelects();
}

function restoreDraft() {
  const raw = localStorage.getItem(STORAGE_KEYS.draft);
  if (!raw) return;

  try {
    const saved = JSON.parse(raw);
    state.rememberDraft = Boolean(saved.rememberDraft);

    const lang = normalizeLanguage(saved.language);
    if (lang) state.language = lang;

    state.themeMode = normalizeThemeMode(saved.themeMode || state.themeMode);
    state.previewMode = normalizePreviewMode(saved.previewMode || state.previewMode);

    state.enabled = {
      ...OPTIONAL_DEFAULTS,
      ...(saved.enabled || {}),
    };

    state.fields = {
      ...state.fields,
      ...(saved.fields || {}),
    };
    state.shortcutPickFiles = Boolean(saved.shortcutPickFiles);

    state.socials = Array.isArray(saved.socials)
      ? saved.socials
          .map((item) => ({
            id: item.id || crypto.randomUUID(),
            network: normalizeSocialNetwork(item.network),
            url: String(item.url || ""),
          }))
          .filter((item) => Boolean(item.network))
      : [];

    const legacyPalette =
      saved.templatePalettes &&
      typeof saved.templatePalettes === "object" &&
      (saved.templatePalettes[saved.selectedTemplateId] || Object.values(saved.templatePalettes)[0]);

    const draftPaletteSource =
      saved.mainPalette && typeof saved.mainPalette === "object" ? saved.mainPalette : legacyPalette;
    if (draftPaletteSource && typeof draftPaletteSource === "object") {
      const accent = normalizeHexColor(draftPaletteSource.accent, DEFAULT_MAIN_PALETTE.accent);
      const accent2 = normalizeHexColor(draftPaletteSource.accent2, DEFAULT_MAIN_PALETTE.accent2);
      state.mainPalette = {
        accent,
        accent2,
        accent3: deriveAccent3(accent, accent2),
      };
    }

    if (saved.selectedTemplateId) {
      state.selectedTemplateId = String(saved.selectedTemplateId);
    }
  } catch (error) {
    console.warn("Could not restore draft", error);
    localStorage.removeItem(STORAGE_KEYS.draft);
  }
}

function saveDraft() {
  const draft = {
    rememberDraft: state.rememberDraft,
    language: state.language,
    themeMode: state.themeMode,
    previewMode: state.previewMode,
    selectedTemplateId: state.selectedTemplateId,
    shortcutPickFiles: state.shortcutPickFiles,
    enabled: { ...state.enabled },
    fields: { ...state.fields },
    socials: state.socials.map((item) => ({ ...item })),
    mainPalette: {
      accent: state.mainPalette.accent,
      accent2: state.mainPalette.accent2,
    },
  };

  localStorage.setItem(STORAGE_KEYS.draft, JSON.stringify(draft));
}

function maybeSaveDraft() {
  if (!state.rememberDraft) return;
  saveDraft();
}

async function loadTemplates() {
  const response = await fetch(TEMPLATE_INDEX_URL, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(t("templatesFetchError", { status: response.status }));
  }

  const templates = await response.json();
  if (!Array.isArray(templates)) {
    throw new Error(t("templatesInvalidFormat"));
  }

  state.templates = templates.map((template) => ({
    ...template,
    templateResolvedUrl: new URL(template.templateUrl, TEMPLATE_INDEX_URL).toString(),
  }));

  if (!state.selectedTemplateId || !state.templates.some((item) => item.id === state.selectedTemplateId)) {
    state.selectedTemplateId = state.templates[0]?.id || null;
  }

  renderTemplateSelectOptions();

  if (state.selectedTemplateId) {
    await selectTemplate(state.selectedTemplateId);
  }
}

function renderTemplateSelectOptions() {
  const previousValue = state.selectedTemplateId;
  ui.mobileTemplateSelect.innerHTML = "";

  state.templates.forEach((template) => {
    const option = document.createElement("option");
    option.value = template.id;
    option.textContent = localizedTemplateName(template);
    ui.mobileTemplateSelect.append(option);
  });

  if (previousValue && state.templates.some((item) => item.id === previousValue)) {
    ui.mobileTemplateSelect.value = previousValue;
  }

  refreshCustomSelect(ui.mobileTemplateSelect);
}

async function selectTemplate(templateId) {
  const template = getTemplateById(templateId);
  if (!template) return;

  state.selectedTemplateId = template.id;
  ui.mobileTemplateSelect.value = template.id;
  refreshCustomSelect(ui.mobileTemplateSelect);
  ui.previewTemplateName.textContent = localizedTemplateName(template);
  syncPaletteInputs();

  await ensureTemplateMarkup(template);
  renderPreview();
  maybeSaveDraft();
  void refreshTinyEditors();
}

function syncPaletteInputs() {
  const palette = getTemplatePalette();
  ui.accentColor1.value = palette.accent;
  ui.accentColor2.value = palette.accent2;
  syncHuePaletteSelection();
}

function syncHuePaletteSelection() {
  if (!ui.colorModal) return;
  const palette = ensureTemplatePalette();
  const current = {
    accent: normalizeHexColor(palette.accent, ""),
    accent2: normalizeHexColor(palette.accent2, ""),
  };

  ui.colorModal.querySelectorAll(".hue-swatch[data-color-target][data-color-value]").forEach((button) => {
    const target = button.dataset.colorTarget;
    const value = normalizeHexColor(button.dataset.colorValue, "");
    const isActive = (target === "accent" || target === "accent2") && current[target] === value;
    button.classList.toggle("is-active", Boolean(isActive));
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function localizedTemplateName(template) {
  const fromI18n = template?.i18n?.[state.language]?.name;
  if (typeof fromI18n === "string" && fromI18n.trim()) return fromI18n;
  return template?.name || template?.id || t("noTemplateSelected");
}

function getTemplateById(templateId) {
  return state.templates.find((template) => template.id === templateId) || null;
}

async function ensureTemplateMarkup(template) {
  if (state.templateMarkup.has(template.id)) {
    return state.templateMarkup.get(template.id);
  }

  const response = await fetch(template.templateResolvedUrl);
  if (!response.ok) {
    throw new Error(t("templateFileFetchError", { path: template.templateUrl }));
  }

  const markup = await response.text();
  state.templateMarkup.set(template.id, markup);
  return markup;
}

function setFrameSrcdoc(frame, html) {
  if (!frame) return;
  const nextHtml = html || "";
  if (frameSrcdocCache.get(frame) === nextHtml) return;
  frame.srcdoc = nextHtml;
  frameSrcdocCache.set(frame, nextHtml);
}

function renderPreview() {
  const template = getTemplateById(state.selectedTemplateId);
  if (!template) {
    setFrameSrcdoc(ui.previewFrame, "");
    setFrameSrcdoc(ui.previewFrameDark, "");
    ui.previewFields.innerHTML = "";
    ui.previewTemplateName.textContent = t("noTemplateSelected");
    return;
  }

  const rawMarkup = state.templateMarkup.get(template.id);
  if (!rawMarkup) return;

  const mode = normalizePreviewMode(state.previewMode);

  if (mode === "both") {
    ui.mailCanvas.dataset.mode = "both";
    const htmlLight = buildTemplateHtml(rawMarkup, template, { forceMode: "light", showPlaceholders: true });
    const htmlDark = buildTemplateHtml(rawMarkup, template, { forceMode: "dark", showPlaceholders: true });
    setFrameSrcdoc(ui.previewFrame, htmlLight);
    setFrameSrcdoc(ui.previewFrameDark, htmlDark);
  } else {
    ui.mailCanvas.dataset.mode = "single";
    const forceMode = mode === "app" ? state.resolvedTheme : mode;
    const html = buildTemplateHtml(rawMarkup, template, { forceMode, showPlaceholders: true });
    setFrameSrcdoc(ui.previewFrame, html);
    setFrameSrcdoc(ui.previewFrameDark, "");
  }

  renderPreviewFields();
  ui.previewTemplateName.textContent = localizedTemplateName(template);
}

function buildEnvelopeRows(options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);
  const rows = [
    {
      visible: true,
      label: t("fieldToShort"),
      value: normalizeInlineText(state.fields.to),
      placeholder: ui.fieldTo.placeholder,
    },
    {
      visible: state.enabled.cc,
      label: t("fieldCcShort"),
      value: normalizeInlineText(state.fields.cc),
      placeholder: ui.fieldCc.placeholder,
    },
    {
      visible: state.enabled.bcc,
      label: t("fieldBccShort"),
      value: normalizeInlineText(state.fields.bcc),
      placeholder: ui.fieldBcc.placeholder,
    },
    {
      visible: state.enabled.subject,
      label: t("fieldSubjectShort"),
      value: normalizeInlineText(state.fields.subject),
      placeholder: ui.fieldSubject.placeholder,
    },
    {
      visible: !state.shortcutPickFiles,
      label: t("attachmentsTitle"),
      value: buildAttachmentEnvelopeValue(),
      placeholder: t("attachmentsEmpty"),
    },
  ];

  return rows
    .filter((row) => row.visible)
    .map((row) => {
      const hasValue = Boolean(row.value);
      return {
        ...row,
        displayValue: hasValue ? row.value : showPlaceholders ? row.placeholder : "",
        isPlaceholder: !hasValue && showPlaceholders,
      };
    });
}

function renderPreviewFields() {
  ui.previewFields.innerHTML = "";
  const fragment = document.createDocumentFragment();

  buildEnvelopeRows({ showPlaceholders: true }).forEach((row) => {
    const node = document.createElement("div");
    node.className = "preview-field-row";

    const label = document.createElement("span");
    label.className = "preview-field-label";
    label.textContent = row.label;

    const value = document.createElement("span");
    value.className = "preview-field-value";
    value.textContent = row.displayValue || "";
    if (row.isPlaceholder) {
      value.classList.add("placeholder");
    }

    node.append(label, value);
    fragment.append(node);
  });

  ui.previewFields.append(fragment);
}

function buildTemplateHtml(rawMarkup, template, options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);
  const attachmentLinkMode = options.attachmentLinkMode || (showPlaceholders ? "preview" : "cid");

  const replacements = {
    greeting_block: buildGreetingBlockHtml({ showPlaceholders }),
    content_block: buildContentBlockHtml({ showPlaceholders }),
    quote_block: buildQuoteBlockHtml({ showPlaceholders }),
    attachments_block: buildAttachmentsBlockHtml({
      showPlaceholders,
      linkMode: attachmentLinkMode,
    }),
    signature_block: buildSignatureBlockHtml({ showPlaceholders }),
  };

  const htmlWithTokens = rawMarkup.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (_, key) => {
    return Object.prototype.hasOwnProperty.call(replacements, key) ? replacements[key] : "";
  });

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlWithTokens, "text/html");
  const root = doc.documentElement;

  root.classList.remove("forced-light", "forced-dark");
  if (options.forceMode === "light") root.classList.add("forced-light");
  if (options.forceMode === "dark") root.classList.add("forced-dark");

  const palette = getTemplatePalette();
  const renderMode = options.forceMode === "dark" ? "dark" : options.forceMode === "light" ? "light" : state.resolvedTheme;
  const theme = buildTemplateColorTheme(palette, renderMode);
  retintTemplateInlineStyles(doc, theme, renderMode);

  const themeStyle = doc.createElement("style");
  themeStyle.textContent = `
    :root{
      --template-accent:${palette.accent};
      --template-accent-1:${palette.accent};
      --template-accent-2:${palette.accent2};
      --template-accent-3:${palette.accent3};
      --template-bg:${theme.bg};
      --template-surface:${theme.surface};
      --template-surface-soft:${theme.surfaceSoft};
      --template-border:${theme.border};
      --template-text:${theme.text};
      --template-muted:${theme.muted};
    }
    html,
    body{
      background: var(--template-bg) !important;
      color: var(--template-text) !important;
    }
    .forced-light{
      color-scheme: light;
    }
    .forced-dark{
      color-scheme: dark;
    }
    .mail-content > :first-child,
    .mail-quote-body > :first-child{
      margin-top: 0;
    }
    .mail-content > :last-child,
    .mail-quote-body > :last-child{
      margin-bottom: 0;
    }
    .mail-main,
    .mail-stack,
    .mail-grid,
    .mail-content-wrap,
    .mail-inner,
    .mail-shell-inner{
      gap: 10px !important;
      row-gap: 10px !important;
      column-gap: 10px !important;
    }
    .mail-greeting,
    .mail-content,
    .mail-quote,
    .mail-attachments,
    .mail-signature-block{
      margin: 0 !important;
    }
    .mail-signature-block{
      gap: 0 !important;
      row-gap: 0 !important;
    }
    .mail-greeting{
      padding: 0 !important;
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      background: transparent !important;
      color: inherit !important;
      font-size: 1em !important;
      font-weight: inherit !important;
      letter-spacing: normal !important;
      text-transform: none !important;
      line-height: inherit !important;
    }
    .mail-greeting::before,
    .mail-greeting::after{
      content: none !important;
      display: none !important;
    }
    .mail-signature-block > *{
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .mail-signature-block > .mail-sender{
      margin-top: 4px !important;
    }
    .mail-signature-block > .mail-contact-block,
    .mail-signature-block > .mail-sent-block{
      margin-top: 8px !important;
    }
    .mail-attachments-list{
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .mail-attachment-name{
      color: inherit;
      text-decoration: none;
      word-break: break-word;
    }
    .mail-attachment-button{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 5px 10px;
      border-radius: 999px;
      border: 1px solid currentColor;
      color: inherit;
      font-size: 0.87em;
      font-weight: 600;
      text-decoration: none;
      line-height: 1.25;
      word-break: break-word;
    }
    .mail-attachment-button:hover{
      opacity: .86;
    }
    .mail-attachment-name[href]{
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .mail-attachment-name,
    .contact-chip-value{
      word-break: break-word;
    }
    .contact-chip-plain{
      grid-template-columns: 1fr !important;
    }
    .contact-chip-plain .contact-chip-tag{
      display: none !important;
    }
    .contact-logo-img{
      max-height: 56px;
      width: auto;
      max-width: 220px;
      display: block;
      border-radius: 6px;
    }
    .contact-social-link svg{
      width: 14px;
      height: 14px;
      display: block;
    }
    .app-placeholder{
      opacity: .9;
      color: var(--template-muted) !important;
    }
  `;
  doc.head.append(themeStyle);
  resolveTemplateColorTokens(doc, palette, theme);

  return `<!doctype html>\n${doc.documentElement.outerHTML}`;
}

function buildGreetingBlockHtml(options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);
  if (!state.enabled.greeting) {
    return "";
  }

  const greetingText = resolveGreetingText();
  const recipient = normalizeInlineText(state.fields.greetingRecipient);

  if (!greetingText && !showPlaceholders) {
    return "";
  }

  const base = greetingText || t("greetingPresetCasual");
  const line = recipient ? `${base} ${recipient},` : `${base},`;
  const placeholder = !greetingText && showPlaceholders;

  return `<p class="mail-greeting${placeholder ? " app-placeholder" : ""}">${escapeHtml(line)}</p>`;
}

function resolveGreetingText() {
  if (state.fields.greetingPreset === "custom") {
    return normalizeInlineText(state.fields.greetingCustom);
  }

  const map = {
    casual: t("greetingPresetCasual"),
    formal: t("greetingPresetFormal"),
    neutral: t("greetingPresetNeutral"),
    hey: t("greetingPresetHey"),
  };

  return map[state.fields.greetingPreset] || "";
}

function buildContentBlockHtml(options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);
  if (!state.enabled.content) {
    return "";
  }

  const contentHtml = normalizeEditorHtml(state.fields.content);
  if (contentHtml) {
    return `<section class="mail-content">${contentHtml}</section>`;
  }

  if (!showPlaceholders) {
    return "";
  }

  return `<section class="mail-content"><p class="app-placeholder">${escapeHtml(
    ui.fieldContent.placeholder
  )}</p></section>`;
}

function buildQuoteBlockHtml(options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);
  if (!state.enabled.quote) {
    return "";
  }

  const quoteHtml = normalizeEditorHtml(state.fields.quote);
  if (!quoteHtml && !showPlaceholders) {
    return "";
  }

  const body = quoteHtml || `<p class="app-placeholder">${escapeHtml(ui.fieldQuote.placeholder)}</p>`;
  return `
    <section class="mail-quote">
      <div class="mail-quote-body">${body}</div>
    </section>
  `;
}

function buildAttachmentsBlockHtml(options = {}) {
  const linkMode = options.linkMode || "none";
  const attachments = getAllExportAttachments();

  if (!attachments.length) {
    return "";
  }

  const items = attachments
    .map((item, index) => {
      const kind = fileKindLabel(item.kind);
      const name = escapeHtml(item.file.name);
      const size = escapeHtml(formatBytes(item.file.size));
      const previewHref = item.dataUrl || item.previewUrl;
      const href =
        linkMode === "preview"
          ? previewHref
          : linkMode === "cid"
            ? `cid:${buildAttachmentContentId(item, index)}`
            : "";
      const nameNode = href
        ? `<a class="${linkMode === "preview" ? "mail-attachment-button" : "mail-attachment-name"}" href="${escapeHtml(
            href
          )}"${
            linkMode === "preview"
              ? ` download="${name}" target="_blank" rel="noopener noreferrer"`
              : ""
          }>${name}</a>`
        : `<span class="mail-attachment-name">${name}</span>`;
      return `
        <li class="mail-attachment-item">
          <span class="mail-attachment-kind">${kind}</span>
          ${nameNode}
          <span class="mail-attachment-size">${size}</span>
        </li>
      `;
    })
    .join("");

  return `
    <section class="mail-attachments">
      <ul class="mail-attachments-list">${items}</ul>
    </section>
  `;
}

function buildSignatureBlockHtml(options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);

  const closingText = resolveClosingText();
  const senderName = normalizeInlineText(state.fields.senderName);
  const hasClosing = state.enabled.closing && Boolean(closingText || showPlaceholders);
  const hasSender = state.enabled.senderName && Boolean(senderName || showPlaceholders);
  const closingLineText = appendClosingComma(closingText || t("closingPresetRegards"));

  const closingLine = hasClosing
    ? `<p class="mail-closing${closingText ? "" : " app-placeholder"}">${escapeHtml(closingLineText)}</p>`
    : "";

  const senderLine = hasSender
    ? `<p class="mail-sender${senderName ? "" : " app-placeholder"}">${escapeHtml(
        senderName || ui.fieldSenderName.placeholder
      )}</p>`
    : "";

  const contactBlock = buildContactBlockHtml({ showPlaceholders });
  const sentBlock = buildSentBlockHtml({ showPlaceholders });

  if (!closingLine && !senderLine && !contactBlock && !sentBlock) {
    return "";
  }

  return `
    <section class="mail-signature-block">
      ${closingLine}
      ${senderLine}
      ${contactBlock}
      ${sentBlock}
    </section>
  `;
}

function resolveClosingText() {
  if (!state.enabled.closing) {
    return "";
  }

  if (state.fields.closingPreset === "custom") {
    return normalizeInlineText(state.fields.closingCustom);
  }

  const map = {
    regards: t("closingPresetRegards"),
    sincerely: t("closingPresetSincerely"),
    thanks: t("closingPresetThanks"),
    best: t("closingPresetBest"),
  };

  return map[state.fields.closingPreset] || "";
}

function appendClosingComma(value) {
  const normalized = normalizeInlineText(value);
  if (!normalized) return "";
  if (/[,:;.!?]$/.test(normalized)) return normalized;
  return `${normalized},`;
}

function buildContactBlockHtml(options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);
  const senderValue = state.enabled.senderName ? normalizeInlineText(state.fields.senderName) : "";

  const defs = [
    {
      key: "contactName",
      shortLabel: "",
      value: normalizeInlineText(state.fields.contactName),
      placeholder: ui.fieldContactName.placeholder,
    },
    {
      key: "contactRole",
      shortLabel: "",
      value: normalizeInlineText(state.fields.contactRole),
      placeholder: ui.fieldContactRole.placeholder,
    },
    {
      key: "contactCompany",
      shortLabel: "",
      value: normalizeInlineText(state.fields.contactCompany),
      placeholder: ui.fieldContactCompany.placeholder,
    },
    {
      key: "contactPhone",
      shortLabel: "tel",
      value: normalizeInlineText(state.fields.contactPhone),
      placeholder: ui.fieldContactPhone.placeholder,
    },
    {
      key: "contactEmail",
      shortLabel: "mail",
      value: normalizeInlineText(state.fields.contactEmail),
      placeholder: ui.fieldContactEmail.placeholder,
    },
    {
      key: "contactWebsite",
      shortLabel: "www",
      value: normalizeInlineText(state.fields.contactWebsite),
      placeholder: ui.fieldContactWebsite.placeholder,
    },
    {
      key: "contactAddress",
      shortLabel: "adr",
      value: normalizeMultilineText(state.fields.contactAddress),
      placeholder: ui.fieldContactAddress.placeholder,
    },
  ];

  const lines = [];

  defs.forEach((def) => {
    if (!state.enabled[def.key]) return;
    if (def.key === "contactName" && def.value && senderValue && valuesLikelyDuplicate(def.value, senderValue)) return;

    if (!def.value && !showPlaceholders) return;

    let displayValue = def.value;
    let isPlaceholder = false;

    if (!displayValue) {
      displayValue = def.placeholder;
      isPlaceholder = true;
    }

    if (def.key === "contactWebsite" && def.value) {
      const safeUrl = normalizeWebsiteUrl(def.value);
      lines.push(`
        <div class="contact-line contact-chip${def.shortLabel ? "" : " contact-chip-plain"}${isPlaceholder ? " app-placeholder" : ""}">
          ${def.shortLabel ? `<span class="contact-chip-tag">${escapeHtml(def.shortLabel)}</span>` : ""}
          <a class="contact-chip-value" href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
            def.value
          )}</a>
        </div>
      `);
      return;
    }

    lines.push(`
      <div class="contact-line contact-chip${def.shortLabel ? "" : " contact-chip-plain"}${isPlaceholder ? " app-placeholder" : ""}">
        ${def.shortLabel ? `<span class="contact-chip-tag">${escapeHtml(def.shortLabel)}</span>` : ""}
        <span class="contact-chip-value">${escapeHtml(displayValue).replace(/\n/g, "<br>")}</span>
      </div>
    `);
  });

  if (state.enabled.contactLogo) {
    const logoUrl = state.logoAttachment?.dataUrl || "";
    if (logoUrl || showPlaceholders) {
      const logo = logoUrl
        ? `<img src="${escapeHtml(logoUrl)}" alt="${escapeHtml(t("fieldContactLogoLabel"))}" class="contact-logo-img">`
        : `<span class="app-placeholder">${escapeHtml(t("logoPlaceholder"))}</span>`;
      lines.push(`
        <div class="contact-line contact-logo-wrap${logoUrl ? "" : " app-placeholder"}">
          ${logo}
        </div>
      `);
    }
  }

  if (state.enabled.socials) {
    const socials = state.socials
      .map((item) => {
        const url = normalizeInlineText(item.url);
        if (!url) return null;
        const network = SOCIAL_NETWORKS.find((entry) => entry.value === item.network) || SOCIAL_NETWORKS[0];
        const safeUrl = normalizeWebsiteUrl(url);
        return `
          <a class="contact-social-link" href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">
            ${socialIconSvg(network.value)}
            <span>${escapeHtml(t(network.labelKey))}</span>
          </a>
        `;
      })
      .filter(Boolean);

    if (socials.length) {
      lines.push(`<div class="contact-socials">${socials.join(" ")}</div>`);
    } else if (showPlaceholders) {
      lines.push(`<div class="contact-socials app-placeholder">${escapeHtml(t("socialPlaceholder"))}</div>`);
    }
  }

  if (!lines.length) {
    return "";
  }

  return `<div class="mail-contact-block">${lines.join("")}</div>`;
}

function buildSentBlockHtml(options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);
  const lines = [];

  if (state.enabled.sentAt) {
    const value = buildSentAtValue();
    if (value || showPlaceholders) {
      lines.push(`<p class="mail-sent-line">${escapeHtml(value)}</p>`);
    }
  }

  if (state.enabled.sentFrom) {
    const value = `${t("sentFromPrefix")}: ${detectDeviceLabel()}`;
    if (value || showPlaceholders) {
      lines.push(`<p class="mail-sent-line">${escapeHtml(value)}</p>`);
    }
  }

  if (!lines.length) {
    return "";
  }

  return `<div class="mail-sent-block">${lines.join("")}</div>`;
}

function buildSentAtValue() {
  const date = new Intl.DateTimeFormat(t("dateLocale"), {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());

  const time = new Intl.DateTimeFormat(t("dateLocale"), {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

  return `${t("sentAtPrefix")}: ${date} (${t("sentAtTimePrefix")} ${time})`;
}

function detectDeviceLabel() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("iphone")) return "iPhone";
  if (ua.includes("ipad")) return "iPad";
  if (ua.includes("android")) return "Android";
  if (ua.includes("mac os") || ua.includes("macintosh")) return "macOS";
  if (ua.includes("windows")) return "Windows";
  if (ua.includes("linux")) return "Linux";
  return "Browser";
}

function clearAddressValidation() {
  ui.addressValidation.textContent = "";
  [
    ui.fieldTo,
    ui.fieldCc,
    ui.fieldBcc,
    ui.fieldSenderName,
    ui.fieldContactEmail,
    ui.fieldContactWebsite,
  ].forEach((input) => {
    input.setAttribute("aria-invalid", "false");
  });
}

function collectValidationState() {
  const issues = [];
  const invalidInputs = new Set();

  const emailDefs = [
    { key: "to", label: t("fieldToShort"), input: ui.fieldTo, enabled: true },
    { key: "cc", label: t("fieldCcShort"), input: ui.fieldCc, enabled: state.enabled.cc },
    { key: "bcc", label: t("fieldBccShort"), input: ui.fieldBcc, enabled: state.enabled.bcc },
  ];

  emailDefs.forEach((def) => {
    if (!def.enabled) return;
    const value = state.fields[def.key];
    if (!normalizeInlineText(value)) return;

    const addresses = parseAddressList(value);
    const invalid = addresses.filter((address) => !isValidEmailAddress(address));
    if (invalid.length) {
      issues.push(t("invalidAddressList", { label: def.label, list: [...new Set(invalid)].join(", ") }));
      invalidInputs.add(def.input);
    }
  });

  if (state.enabled.contactEmail) {
    const contactEmail = normalizeInlineText(state.fields.contactEmail);
    if (contactEmail && !isValidEmailAddress(contactEmail)) {
      issues.push(t("contactEmailInvalid"));
      invalidInputs.add(ui.fieldContactEmail);
    }
  }

  if (state.enabled.contactWebsite) {
    const website = normalizeInlineText(state.fields.contactWebsite);
    if (website && !isLikelyUrl(website)) {
      issues.push(t("contactWebsiteInvalid"));
      invalidInputs.add(ui.fieldContactWebsite);
    }
  }

  return { issues, invalidInputs };
}

function validateAddressFields(showMessage = true) {
  clearAddressValidation();

  const { issues, invalidInputs } = collectValidationState();
  const hasData = hasAnyExportData();

  invalidInputs.forEach((input) => {
    input?.setAttribute("aria-invalid", "true");
  });

  if (showMessage) {
    if (issues.length) {
      ui.addressValidation.textContent = `${t("addressValidationPrefix")} ${issues.join("; ")}`;
    } else if (!hasData) {
      ui.addressValidation.textContent = t("emptyMailDisabled");
    }
  }

  return issues.length === 0 && hasData;
}

function hasAnyExportData() {
  const envelopeFilled =
    Boolean(normalizeInlineText(state.fields.to)) ||
    (state.enabled.cc && Boolean(normalizeInlineText(state.fields.cc))) ||
    (state.enabled.bcc && Boolean(normalizeInlineText(state.fields.bcc))) ||
    (state.enabled.subject && Boolean(normalizeInlineText(state.fields.subject)));

  const bodyFilled = Boolean(normalizeMultilineText(buildPlainTextBody()));
  const attachmentFilled = getAllExportAttachments().length > 0;
  const logoFilled = state.enabled.contactLogo && Boolean(state.logoAttachment?.dataUrl);
  const shortcutPickFilesMode = Boolean(state.shortcutPickFiles);

  return envelopeFilled || bodyFilled || attachmentFilled || logoFilled || shortcutPickFilesMode;
}

function updateActionButtons() {
  ui.exportBtn.textContent = state.isExporting ? t("shortcutSendBusy") : t("shortcutSendButton");

  if (state.isExporting) {
    ui.exportBtn.disabled = true;
    return;
  }
  ui.exportBtn.disabled = false;
}

function hasAnyRecipient() {
  const toAddresses = parseAddressList(state.fields.to);
  const ccAddresses = state.enabled.cc ? parseAddressList(state.fields.cc) : [];
  const bccAddresses = state.enabled.bcc ? parseAddressList(state.fields.bcc) : [];
  return toAddresses.length + ccAddresses.length + bccAddresses.length > 0;
}

function parseAddressList(rawValue) {
  return String(rawValue || "")
    .trim()
    .split(/[\s,;]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function isValidEmailAddress(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(email);
}

function isLikelyUrl(value) {
  const raw = String(value || "").trim();
  return /^https?:\/\/[\w.-]+(?:\.[\w.-]+)+(?:[/?#].*)?$/i.test(raw);
}

function normalizeWebsiteUrl(value) {
  const raw = String(value || "").trim();
  if (/^https?:\/\//i.test(raw)) return raw;
  return `https://${raw}`;
}

function normalizeInlineText(value) {
  return String(value || "").trim();
}

function normalizeMultilineText(value) {
  return String(value || "").replace(/\r\n?/g, "\n").trim();
}

function valuesLikelyDuplicate(left, right) {
  const normalize = (value) => normalizeInlineText(value).toLowerCase().replace(/\s+/g, " ");
  const a = normalize(left);
  const b = normalize(right);
  return Boolean(a) && a === b;
}

function socialIconSvg(networkValue) {
  const icons = {
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM0 8h5v16H0Zm8 0h4.8v2.2h.07c.67-1.27 2.32-2.6 4.78-2.6 5.1 0 6.05 3.36 6.05 7.73V24h-5v-7.67c0-1.83-.03-4.19-2.55-4.19-2.56 0-2.95 2-2.95 4.06V24H8Z"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.12 11.93v-8.44H7.08v-3.5h3.04V9.41c0-3.03 1.79-4.7 4.54-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.5 0-1.97.94-1.97 1.9v2.28h3.35l-.54 3.5h-2.81V24C19.61 23.1 24 18.1 24 12.07Z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95Zm8.9 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.9 2H22l-6.77 7.73L23 22h-6.1l-4.77-6.23L6.67 22H3.55l7.24-8.27L1 2h6.25l4.3 5.67L18.9 2Zm-1.07 18h1.69L6.33 3.9H4.52Z"/></svg>',
    youtube:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.5 7.2a3 3 0 0 0-2.1-2.12C19.52 4.5 12 4.5 12 4.5s-7.52 0-9.4.58A3 3 0 0 0 .5 7.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.12c1.88.58 9.4.58 9.4.58s7.52 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-4.8ZM9.6 15.3V8.7l6 3.3-6 3.3Z"/></svg>',
    tiktok:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.2 2h3.05c.2 1.7 1.17 3.1 2.75 3.86v3.07a7.8 7.8 0 0 1-2.77-.73v6.3a6.5 6.5 0 1 1-6.49-6.5c.45 0 .9.05 1.33.15v3.2a3.3 3.3 0 0 0-1.33-.28 3.35 3.35 0 1 0 3.45 3.35V2Z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12.27c0 5.2 3.36 9.6 8.02 11.15.58.1.79-.26.79-.57v-2.2c-3.26.73-3.95-1.6-3.95-1.6-.53-1.38-1.3-1.75-1.3-1.75-1.07-.75.08-.73.08-.73 1.18.09 1.8 1.23 1.8 1.23 1.05 1.84 2.76 1.3 3.43 1 .1-.78.41-1.3.74-1.6-2.6-.3-5.33-1.33-5.33-5.93 0-1.3.46-2.37 1.22-3.2-.12-.3-.53-1.53.12-3.18 0 0 1-.33 3.3 1.23a11.15 11.15 0 0 1 6 0c2.3-1.56 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.76.83 1.22 1.9 1.22 3.2 0 4.62-2.74 5.62-5.35 5.92.42.37.8 1.08.8 2.2v3.24c0 .32.2.68.8.57a11.78 11.78 0 0 0 8.01-11.15A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    website:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.9 9h-3.1a15.7 15.7 0 0 0-1.5-6A8.23 8.23 0 0 1 19.9 11ZM12 4.05c.95 1.14 1.8 3.22 2.05 5.95H9.95C10.2 7.27 11.05 5.2 12 4.05ZM4.1 13h3.1c.15 2.13.67 4.24 1.5 6A8.23 8.23 0 0 1 4.1 13Zm3.1-2H4.1A8.23 8.23 0 0 1 8.7 5a15.7 15.7 0 0 0-1.5 6Zm4.8 8.95c-.95-1.14-1.8-3.22-2.05-5.95h4.1c-.25 2.73-1.1 4.8-2.05 5.95Zm2.27-6.95H9.73a19.84 19.84 0 0 1 0-2h4.54a19.84 19.84 0 0 1 0 2Zm1.03 6c.83-1.76 1.35-3.87 1.5-6h3.1a8.23 8.23 0 0 1-4.6 6Z"/></svg>',
  };

  return icons[networkValue] || icons.website;
}

function addSocialEntry() {
  state.socials.push({
    id: crypto.randomUUID(),
    network: "linkedin",
    url: "",
  });
  renderSocialRows();
  applyOptionalFieldStates();
  maybeSaveDraft();
  renderPreview();
}

function removeSocialEntry(socialId) {
  const index = state.socials.findIndex((item) => item.id === socialId);
  if (index === -1) return;
  state.socials.splice(index, 1);
  renderSocialRows();
  applyOptionalFieldStates();
  maybeSaveDraft();
  renderPreview();
}

function normalizeSocialNetwork(value) {
  return SOCIAL_NETWORKS.some((entry) => entry.value === value) ? value : "linkedin";
}

function renderSocialRows() {
  ui.socialsList.innerHTML = "";

  if (!state.socials.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("socialsEmpty");
    ui.socialsList.append(empty);
  } else {
    const fragment = document.createDocumentFragment();

    state.socials.forEach((item) => {
      const row = document.createElement("div");
      row.className = "social-row";
      row.dataset.socialId = item.id;

      const networkSelect = document.createElement("select");
      networkSelect.className = "social-network";
      SOCIAL_NETWORKS.forEach((network) => {
        const option = document.createElement("option");
        option.value = network.value;
        option.textContent = t(network.labelKey);
        option.selected = network.value === item.network;
        networkSelect.append(option);
      });

      const urlInput = document.createElement("input");
      urlInput.className = "social-url";
      urlInput.type = "url";
      urlInput.placeholder = t("socialUrlPlaceholder");
      urlInput.value = item.url;

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "button";
      removeButton.dataset.removeSocial = item.id;
      removeButton.textContent = t("socialRemoveButton");

      row.append(networkSelect, urlInput, removeButton);
      fragment.append(row);
    });

    ui.socialsList.append(fragment);
  }

  initCustomSelects(ui.socialsList);
  refreshAllCustomSelects();
  applyOptionalFieldStates();
}

async function setLogoAttachment(file) {
  if (state.logoAttachment?.previewUrl) {
    URL.revokeObjectURL(state.logoAttachment.previewUrl);
  }

  if (!file) {
    state.logoAttachment = null;
    renderAttachments();
    renderPreview();
    maybeSaveDraft();
    return;
  }

  const isImage = file.type.startsWith("image/");
  const dataUrl = isImage ? await readFileAsDataUrl(file) : "";
  state.logoAttachment = {
    file,
    previewUrl: isImage ? URL.createObjectURL(file) : "",
    dataUrl,
    kind: isImage ? "image" : detectFileKind(file),
  };

  renderAttachments();
  renderPreview();
  maybeSaveDraft();
}

async function addAttachments(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return;

  const nextAttachments = await Promise.all(
    files.map(async (file) => {
      const dataUrl = await readFileAsDataUrl(file);
      return {
        id: crypto.randomUUID(),
        file,
        dataUrl,
        previewUrl: file.type.startsWith("image/") ? URL.createObjectURL(file) : "",
        kind: detectFileKind(file),
      };
    })
  );

  nextAttachments.forEach((attachment) => {
    state.attachments.push(attachment);
  });

  renderAttachments();
  renderPreview();
  maybeSaveDraft();
}

function detectFileKind(file) {
  if (file.type.startsWith("image/")) return "image";
  if (file.type === "application/pdf") return "pdf";
  if (file.type.startsWith("audio/")) return "audio";
  if (file.type.startsWith("video/")) return "video";
  return "file";
}

function removeAttachment(attachmentId) {
  const index = state.attachments.findIndex((attachment) => attachment.id === attachmentId);
  if (index === -1) return;

  const [removed] = state.attachments.splice(index, 1);
  if (removed.previewUrl) {
    URL.revokeObjectURL(removed.previewUrl);
  }

  renderAttachments();
  renderPreview();
}

function clearLogoAttachment() {
  if (state.logoAttachment?.previewUrl) {
    URL.revokeObjectURL(state.logoAttachment.previewUrl);
  }

  state.logoAttachment = null;
  ui.contactLogoInput.value = "";

  renderAttachments();
  renderPreview();
}

function getAllExportAttachments() {
  if (state.shortcutPickFiles) return [];
  return [...state.attachments];
}

function buildAttachmentEnvelopeValue() {
  const attachments = getAllExportAttachments();
  if (!attachments.length) return "";

  const totalBytes = attachments.reduce((sum, item) => sum + item.file.size, 0);
  const names = attachments.slice(0, 3).map((item) => item.file.name);
  const remaining = attachments.length - names.length;
  const suffix = remaining > 0 ? ` +${remaining}` : "";

  return `${formatFileCount(attachments.length)} (${formatBytes(totalBytes)}): ${names.join(", ")}${suffix}`;
}

function renderAttachments() {
  ui.attachmentList.innerHTML = "";
  const attachments = getAllExportAttachments();

  if (!attachments.length) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = t("attachmentsEmpty");
    ui.attachmentList.append(empty);
  } else {
    const fragment = document.createDocumentFragment();

    attachments.forEach((attachment) => {
      const tile = document.createElement("li");
      tile.className = "attachment-tile";

      const visual = document.createElement("div");
      visual.className = "attachment-visual";

      if (attachment.kind === "image") {
        const image = document.createElement("img");
        image.src = attachment.previewUrl;
        image.alt = attachment.file.name;
        visual.append(image);
      } else {
        const badge = document.createElement("span");
        badge.className = "file-badge";
        badge.textContent = fileKindLabel(attachment.kind);
        visual.append(badge);
      }

      const meta = document.createElement("div");
      meta.className = "attachment-meta";

      const name = document.createElement("div");
      name.className = "attachment-name";
      name.textContent = attachment.file.name;

      const size = document.createElement("div");
      size.className = "attachment-size";
      size.textContent = formatBytes(attachment.file.size);

      meta.append(name, size);

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "button remove-attachment";
      removeButton.textContent = t("removeAttachment");
      removeButton.addEventListener("click", () => {
        removeAttachment(attachment.id);
      });

      tile.append(visual, meta, removeButton);
      fragment.append(tile);
    });

    ui.attachmentList.append(fragment);
  }

  const totalBytes = attachments.reduce((sum, item) => sum + item.file.size, 0);
  const estimatedBytes = estimateExportSizeBytes();

  ui.attachmentCount.textContent = formatFileCount(attachments.length);
  ui.attachmentTotal.textContent = t("attachmentTotal", { size: formatBytes(totalBytes) });
  ui.attachmentEstimated.textContent = t("attachmentEstimated", { size: formatBytes(estimatedBytes) });

  ui.attachmentWarning.className = "warning-text";
  ui.attachmentWarning.textContent = "";

  if (estimatedBytes >= DANGER_MB * MB) {
    ui.attachmentWarning.classList.add("danger");
    ui.attachmentWarning.textContent = t("warningDanger");
  } else if (estimatedBytes >= WARN_MB * MB) {
    ui.attachmentWarning.classList.add("warn");
    ui.attachmentWarning.textContent = t("warningWarn");
  }
}

function estimateExportSizeBytes() {
  let htmlBytes = 800;

  const template = getTemplateById(state.selectedTemplateId);
  if (template) {
    const markup = state.templateMarkup.get(template.id);
    if (markup) {
      htmlBytes = new TextEncoder().encode(
        buildTemplateHtml(markup, template, { forceMode: null, showPlaceholders: false })
      ).length;
    }
  }

  const plainBytes = new TextEncoder().encode(buildPlainTextBody()).length;
  const attachmentsBytes = getAllExportAttachments().reduce((sum, attachment) => {
    return sum + estimateBase64TransferBytes(attachment.file.size) + 260;
  }, 0);

  const overhead = 1800;
  return (
    overhead +
    estimateBase64TransferBytes(plainBytes) +
    estimateBase64TransferBytes(htmlBytes) +
    attachmentsBytes
  );
}

function estimateBase64TransferBytes(rawBytes) {
  if (!rawBytes || rawBytes <= 0) return 0;
  const encodedBytes = Math.ceil(rawBytes / 3) * 4;
  const lines = Math.ceil(encodedBytes / 76);
  return encodedBytes + lines * 2;
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes < 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;

  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  const fraction = value >= 100 ? 0 : value >= 10 ? 1 : 2;
  return `${value.toFixed(fraction)} ${units[unitIndex]}`;
}

function formatFileCount(count) {
  const forms = (I18N[state.language] || I18N.pl).fileWordForms || I18N.pl.fileWordForms;
  const pluralRule = new Intl.PluralRules(state.language);
  const category = pluralRule.select(count);
  const word = forms[category] || forms.other || forms.one;
  return `${count} ${word}`;
}

function fileKindLabel(kind) {
  switch (kind) {
    case "image":
      return t("fileKindImage");
    case "pdf":
      return t("fileKindPdf");
    case "audio":
      return t("fileKindAudio");
    case "video":
      return t("fileKindVideo");
    case "logo":
      return t("fileKindLogo");
    default:
      return t("fileKindFile");
  }
}

function openInfoModal() {
  ui.infoModal.hidden = false;
  syncModalBodyState();
}

function closeInfoModal() {
  ui.infoModal.hidden = true;
  syncModalBodyState();
}

function showShortcutModal(options = {}) {
  if (!ui.shortcutModal) return;
  const reason = options.reason || "maybeNotInstalled";
  diagInfo("shortcut:modal_open", { reason });
  ui.shortcutModal.dataset.reason = reason;
  if (ui.shortcutModalReason) {
    ui.shortcutModalReason.textContent = t(shortcutReasonKey(reason));
  }
  ui.shortcutModal.hidden = false;
  syncModalBodyState();
}

function closeShortcutModal() {
  if (!ui.shortcutModal) return;
  diagInfo("shortcut:modal_close", { reason: ui.shortcutModal.dataset.reason || null });
  clearShortcutFallbackTimer();
  ui.shortcutModal.hidden = true;
  syncModalBodyState();
}

function openColorModal() {
  if (!ui.colorModal) return;
  syncPaletteInputs();
  ui.colorModal.hidden = false;
  syncModalBodyState();
}

function closeColorModal() {
  if (!ui.colorModal) return;
  ui.colorModal.hidden = true;
  syncModalBodyState();
}

function shortcutReasonKey(reason) {
  switch (reason) {
    case "unsupported":
      return "shortcutReasonUnsupported";
    case "clipboard":
      return "shortcutReasonClipboard";
    case "payload":
      return "shortcutReasonPayload";
    default:
      return "shortcutReasonMaybeNotInstalled";
  }
}

function clearShortcutFallbackTimer() {
  const hadTimer = Boolean(shortcutFallbackTimer);
  const hadVisibilityHandler = Boolean(shortcutVisibilityHandler);
  if (shortcutFallbackTimer) {
    window.clearTimeout(shortcutFallbackTimer);
    shortcutFallbackTimer = null;
  }
  if (shortcutVisibilityHandler) {
    document.removeEventListener("visibilitychange", shortcutVisibilityHandler);
    shortcutVisibilityHandler = null;
  }
  if (hadTimer || hadVisibilityHandler) {
    diagInfo("shortcut:fallback_cleared", {
      hadTimer,
      hadVisibilityHandler,
    });
  }
}

function syncModalBodyState() {
  const anyModalOpen =
    (ui.infoModal && !ui.infoModal.hidden) ||
    (ui.shortcutModal && !ui.shortcutModal.hidden) ||
    (ui.colorModal && !ui.colorModal.hidden);
  document.body.classList.toggle("modal-open", anyModalOpen);
}

function setTopbarSendLoading(nextState) {
  state.isExporting = Boolean(nextState);
  diagInfo("send:loading_state", { isExporting: state.isExporting });
  if (ui.exportBtn) {
    ui.exportBtn.classList.toggle("is-loading", state.isExporting);
    ui.exportBtn.setAttribute("aria-busy", state.isExporting ? "true" : "false");
  }
  updateActionButtons();
}

async function sendAppleMail() {
  clearShortcutFallbackTimer();
  diagInfo("send:start", {
    applePlatform: isApplePlatform(),
    safari: isSafari(),
    visibilityState: document.visibilityState,
    shortcutPickFiles: Boolean(state.shortcutPickFiles),
    attachmentCount: getAllExportAttachments().length,
  });

  if (!isApplePlatform()) {
    diagWarn("send:unsupported_platform", {
      ua: navigator.userAgent,
      platform: navigator.platform,
    });
    showToast(t("shortcutAppleOnly"), "error");
    showShortcutModal({ reason: "unsupported" });
    return;
  }

  const safariBrowser = isSafari();
  if (!safariBrowser) {
    diagWarn("send:not_safari", { ua: navigator.userAgent });
    showToast(t("shortcutSafariHint"), "info");
  }

  const to = parseAddressList(state.fields.to).join(", ");
  const cc = state.enabled.cc ? parseAddressList(state.fields.cc).join(", ") : "";
  const bcc = state.enabled.bcc ? parseAddressList(state.fields.bcc).join(", ") : "";
  const subject = state.enabled.subject ? normalizeInlineText(state.fields.subject) : "";

  setTopbarSendLoading(true);
  try {
    let html = buildExportBodyHtmlSync({
      forceMode: null,
      showPlaceholders: false,
      attachmentLinkMode: "none",
    });

    if (!normalizeInlineText(html)) {
      diagWarn("send:sync_html_empty_fallback_async", {});
      html = await buildExportBodyHtml({
        forceMode: null,
        showPlaceholders: false,
        attachmentLinkMode: "none",
      });
    }

    if (!normalizeInlineText(html)) {
      throw new Error("empty html");
    }

    diagInfo("send:html_built", {
      htmlLengthBeforeInline: html.length,
    });

    const inlinedHtml = inlineCssForEmail(html, { mode: state.resolvedTheme });
    if (normalizeInlineText(inlinedHtml)) {
      html = inlinedHtml;
    }
    diagInfo("send:html_inlined", {
      htmlLengthAfterInline: html.length,
      resolvedTheme: state.resolvedTheme,
    });

    const shortcutHtml = toShortcutClipboardHtml(html);
    if (!normalizeInlineText(shortcutHtml)) {
      throw new Error("empty shortcut html");
    }
    diagInfo("send:shortcut_html_ready", {
      shortcutHtmlLength: shortcutHtml.length,
      shortcutHtmlPreview: shortcutHtml.slice(0, 180),
    });

    showToast(t("shortcutToastCopying"), "info", 1200);
    let copyResult = null;
    if (safariBrowser) {
      // Safari may block shortcuts:// launch after awaited async operations.
      // Prefer sync copy first so launch stays tightly tied to the click.
      const copiedSync = copyHtmlToClipboardExecCommand(shortcutHtml);
      diagInfo("clipboard:execCommand_sync_attempt", { copiedSync });
      if (!copiedSync) {
        copyResult = await copyHtmlToClipboard(shortcutHtml);
      } else {
        copyResult = { method: "execCommand-sync" };
      }
    } else {
      copyResult = await copyHtmlToClipboard(shortcutHtml);
    }
    diagInfo("clipboard:copy_success", copyResult || { method: "unknown" });

    const payloadText = buildShortcutInputPayload({ to, cc, bcc, subject });
    let payloadMeta = {
      payloadLength: payloadText.length,
    };
    try {
      const parsedPayload = JSON.parse(payloadText);
      payloadMeta = {
        ...payloadMeta,
        toLength: String(parsedPayload.to || "").length,
        ccLength: String(parsedPayload.cc || "").length,
        bccLength: String(parsedPayload.bcc || "").length,
        subjectLength: String(parsedPayload.subject || "").length,
        pickFilesInShortcut: Boolean(parsedPayload.pickFilesInShortcut),
        attachmentCount: Array.isArray(parsedPayload.attachments) ? parsedPayload.attachments.length : 0,
      };
    } catch (payloadParseError) {
      diagWarn("shortcut:payload_parse_failed", {
        message: payloadParseError?.message || String(payloadParseError),
      });
    }
    diagInfo("shortcut:payload_ready", payloadMeta);

    const shortcutResult = runShortcut({ payloadText });
    diagInfo("shortcut:run_result", shortcutResult);
    if (shortcutResult.tooLong) {
      throw new Error("shortcut_payload_too_large");
    }

    showToast(t("shortcutToastCopiedOpening"), "success");

    let switchedAway = false;
    shortcutVisibilityHandler = () => {
      if (document.visibilityState === "hidden") {
        diagInfo("shortcut:visibility_hidden", {});
        switchedAway = true;
      }
    };
    document.addEventListener("visibilitychange", shortcutVisibilityHandler);

    shortcutFallbackTimer = window.setTimeout(() => {
      if (shortcutVisibilityHandler) {
        document.removeEventListener("visibilitychange", shortcutVisibilityHandler);
        shortcutVisibilityHandler = null;
      }
      setTopbarSendLoading(false);
      if (!switchedAway) {
        diagWarn("shortcut:no_visibility_change_show_modal", {});
        showShortcutModal({ reason: "maybeNotInstalled" });
      }
      shortcutFallbackTimer = null;
    }, 1200);
  } catch (error) {
    diagError("send:failed", error);
    console.error(error);
    setTopbarSendLoading(false);
    if (error?.message === "shortcut_payload_too_large") {
      showToast(t("shortcutPayloadTooLarge"), "error", 3200);
      showShortcutModal({ reason: "payload" });
    } else {
      showToast(t("shortcutToastClipboardError"), "error");
      showShortcutModal({ reason: "clipboard" });
    }
  }
}

function isApplePlatform() {
  const ua = navigator.userAgent || "";
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && Number(navigator.maxTouchPoints || 0) > 1);
  const isMac = /Macintosh/.test(ua);
  return isIOS || isMac;
}

function isSafari() {
  const ua = navigator.userAgent || "";
  return /Safari/.test(ua) && !/Chrome|CriOS|Edg|OPR|FxiOS|Firefox/.test(ua);
}

async function copyHtmlToClipboard(html) {
  if (!html || !String(html).trim()) {
    throw new Error("empty html");
  }

  const plain = stripHtml(html);
  diagInfo("clipboard:copy_start", {
    htmlLength: String(html).length,
    plainLength: plain.length,
    hasClipboardApi: Boolean(navigator.clipboard),
    hasClipboardItem: Boolean(window.ClipboardItem),
  });

  if (navigator.clipboard && window.ClipboardItem) {
    try {
      const item = new ClipboardItem({
        "text/html": new Blob([html], { type: "text/html" }),
        "text/plain": new Blob([plain], { type: "text/plain" }),
      });
      await navigator.clipboard.write([item]);
      diagInfo("clipboard:copy_method", { method: "clipboardItem" });
      return { method: "clipboardItem" };
    } catch (error) {
      diagWarn("clipboard:clipboardItem_failed", {
        message: error?.message || String(error),
      });
    }
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(html);
      diagInfo("clipboard:copy_method", { method: "writeText" });
      return { method: "writeText" };
    } catch (error) {
      diagWarn("clipboard:writeText_failed", {
        message: error?.message || String(error),
      });
    }
  }

  const copied = copyHtmlToClipboardExecCommand(html);
  if (!copied) {
    diagWarn("clipboard:execCommand_failed", {});
    throw new Error("execCommand copy failed");
  }

  diagInfo("clipboard:copy_method", { method: "execCommand" });
  return { method: "execCommand" };
}

function copyHtmlToClipboardExecCommand(html) {
  if (typeof document.execCommand !== "function") {
    diagWarn("clipboard:execCommand_unavailable", {});
    return false;
  }

  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  tmp.style.position = "fixed";
  tmp.style.left = "-9999px";
  tmp.style.top = "0";
  tmp.style.opacity = "0";
  tmp.setAttribute("contenteditable", "true");
  document.body.appendChild(tmp);

  const range = document.createRange();
  range.selectNodeContents(tmp);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (error) {
    diagWarn("clipboard:execCommand_exception", {
      message: error?.message || String(error),
    });
    copied = false;
  }

  selection?.removeAllRanges();
  tmp.remove();
  return Boolean(copied);
}

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = String(html || "");
  return normalizeMultilineText(div.textContent || div.innerText || "");
}

function toShortcutClipboardHtml(html) {
  const source = String(html || "").trim();
  if (!source) return "";

  try {
    const parsed = new DOMParser().parseFromString(source, "text/html");
    const bodyFragment = String(parsed.body?.innerHTML || "").trim();
    const base = bodyFragment || source;

    const safeDoc = document.implementation.createHTMLDocument("");
    const wrapper = safeDoc.createElement("div");
    wrapper.innerHTML = base;
    wrapper.querySelectorAll("script,style,meta,link,title,base").forEach((node) => node.remove());

    const cleaned = wrapper.innerHTML.replace(/<!doctype[^>]*>/gi, "").trim();
    return cleaned || base;
  } catch (error) {
    diagWarn("send:shortcut_html_parse_failed", {
      message: error?.message || String(error),
    });
    return source;
  }
}

function buildShortcutInputPayload({ to, cc, bcc, subject }) {
  const payload = {
    to: to || "",
    cc: cc || "",
    bcc: bcc || "",
    subject: subject || "",
    pickFilesInShortcut: Boolean(state.shortcutPickFiles),
    attachments: [],
  };

  if (!state.shortcutPickFiles) {
    payload.attachments = buildShortcutAttachmentPayload();
  }

  return JSON.stringify(payload);
}

function buildShortcutAttachmentPayload() {
  return getAllExportAttachments()
    .map((attachment) => {
      const parsed = parseBase64DataUrl(attachment.dataUrl);
      if (!parsed) return null;
      return {
        name: attachment.file.name,
        mimeType: parsed.mimeType,
        base64: parsed.base64,
      };
    })
    .filter(Boolean);
}

function parseBase64DataUrl(dataUrl) {
  const raw = String(dataUrl || "");
  const match = raw.match(/^data:([^;,]+)?(?:;charset=[^;,]+)?;base64,(.+)$/i);
  if (!match) return null;
  return {
    mimeType: normalizeInlineText(match[1]) || "application/octet-stream",
    base64: match[2] || "",
  };
}

function runShortcut({ payloadText }) {
  const name = encodeURIComponent(SHORTCUT_NAME);
  const encodedPayload = encodeURIComponent(String(payloadText || ""));
  const withInputUrl = `${SHORTCUT_RUN_BASE}?name=${name}&input=text&text=${encodedPayload}`;
  diagInfo("shortcut:build_url", {
    withInputUrlLength: withInputUrl.length,
    maxLength: SHORTCUT_MAX_URL_LENGTH,
  });

  if (withInputUrl.length > SHORTCUT_MAX_URL_LENGTH) {
    diagWarn("shortcut:url_too_long", {
      withInputUrlLength: withInputUrl.length,
      maxLength: SHORTCUT_MAX_URL_LENGTH,
    });
    return { withInput: false, tooLong: true };
  }

  launchShortcutUrl(withInputUrl);
  return { withInput: true, tooLong: false };
}

function launchShortcutUrl(url) {
  const targetUrl = String(url || "").trim();
  if (!targetUrl) {
    diagWarn("shortcut:launch_skipped_empty_url", {});
    return;
  }

  const safari = isSafari();
  diagInfo("shortcut:launch_attempt", {
    safari,
    targetUrlLength: targetUrl.length,
  });

  if (safari) {
    const link = document.createElement("a");
    link.href = targetUrl;
    link.style.position = "fixed";
    link.style.left = "-9999px";
    link.style.top = "0";
    document.body.appendChild(link);
    link.click();
    link.remove();
    diagInfo("shortcut:launch_anchor_click", {});
    return;
  }

  window.location.href = targetUrl;
  diagInfo("shortcut:launch_location_href", {});
}

function showToast(message, type = "info", duration = 2200) {
  if (!ui.toastHost || !message) return;
  diagInfo("toast:show", {
    type,
    duration,
    message: String(message),
  });

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = String(message);
  ui.toastHost.append(toast);

  while (ui.toastHost.children.length > 3) {
    ui.toastHost.firstElementChild?.remove();
  }

  window.setTimeout(() => {
    toast.classList.add("is-leaving");
    window.setTimeout(() => {
      toast.remove();
    }, 160);
  }, Math.max(1000, duration));
}

function inlineCssForEmail(html, options = {}) {
  const source = String(html || "").trim();
  if (!source) return "";

  const doc = new DOMParser().parseFromString(source, "text/html");
  const styleNodes = [...doc.querySelectorAll("style")];
  if (!styleNodes.length) {
    return source;
  }

  const mode = options.mode === "dark" ? "dark" : "light";
  const cssText = styleNodes.map((node) => node.textContent || "").join("\n");
  const sandbox = document.implementation.createHTMLDocument("");
  const styleElement = sandbox.createElement("style");
  styleElement.textContent = cssText;
  sandbox.head.append(styleElement);
  const parsedRules = styleElement.sheet?.cssRules;
  if (!parsedRules) {
    return source;
  }

  const root = doc.documentElement;
  const varMap = {};

  const applyDeclarations = (element, declaration) => {
    for (let i = 0; i < declaration.length; i += 1) {
      const property = declaration[i];
      if (!property) continue;
      const priority = declaration.getPropertyPriority(property);
      const rawValue = declaration.getPropertyValue(property).trim();
      if (!rawValue) continue;
      const value = resolveCssVars(rawValue, varMap);
      element.style.setProperty(property, value, priority);
      if (property.startsWith("--")) {
        varMap[property] = value;
      }
    }
  };

  const applyStyleRule = (rule) => {
    const selectors = String(rule.selectorText || "")
      .split(",")
      .map((selector) => selector.trim())
      .filter(Boolean);
    if (!selectors.length) return;

    selectors.forEach((selector) => {
      if (isRootStyleSelector(selector, mode)) {
        applyDeclarations(root, rule.style);
        return;
      }

      if (selector.includes(":")) return;
      if (selector.includes("::")) return;

      let elements = [];
      try {
        elements = [...doc.querySelectorAll(selector)];
      } catch (error) {
        elements = [];
      }
      elements.forEach((element) => {
        applyDeclarations(element, rule.style);
      });
    });
  };

  const walkCssRules = (rules) => {
    if (!rules) return;
    for (const rule of rules) {
      if (!rule) continue;
      if (rule.type === CSSRule.STYLE_RULE) {
        applyStyleRule(rule);
        continue;
      }

      if (rule.type === CSSRule.MEDIA_RULE && mediaRuleMatchesMode(rule.media?.mediaText, mode)) {
        walkCssRules(rule.cssRules);
      }
    }
  };

  walkCssRules(parsedRules);

  doc.querySelectorAll("[style]").forEach((element) => {
    const inlineStyle = element.getAttribute("style");
    if (!inlineStyle) return;
    const resolvedStyle = resolveCssVars(inlineStyle, varMap);
    if (resolvedStyle) {
      element.setAttribute("style", resolvedStyle);
    }
  });

  styleNodes.forEach((node) => node.remove());

  return `<!doctype html>\n${doc.documentElement.outerHTML}`;
}

function resolveCssVars(value, vars) {
  let output = String(value || "");
  const maxPasses = 6;

  for (let pass = 0; pass < maxPasses; pass += 1) {
    if (!output.includes("var(")) break;
    output = output.replace(/var\(\s*(--[a-zA-Z0-9-_]+)\s*(?:,\s*([^)]+))?\)/g, (_, token, fallback) => {
      if (Object.prototype.hasOwnProperty.call(vars, token)) {
        return vars[token];
      }
      return String(fallback || "").trim();
    });
  }

  return output.trim();
}

function isRootStyleSelector(selector, mode) {
  const normalized = String(selector || "").trim().toLowerCase();
  if (!normalized) return false;
  if (normalized === ":root" || normalized === "html") return true;
  if (normalized === "html.forced-dark") return mode === "dark";
  if (normalized === "html.forced-light") return mode === "light";
  return false;
}

function mediaRuleMatchesMode(mediaText, mode) {
  const media = String(mediaText || "").toLowerCase();
  if (!media) return true;
  if (!media.includes("prefers-color-scheme")) return false;
  if (media.includes("dark")) return mode === "dark";
  if (media.includes("light")) return mode === "light";
  return false;
}

function buildPlainTextBody() {
  const parts = [];

  const greeting = buildGreetingPlainText();
  if (greeting) parts.push(greeting);

  if (state.enabled.content) {
    const content = richHtmlToPlainText(state.fields.content);
    if (content) parts.push(content);
  }

  if (state.enabled.quote) {
    const quote = richHtmlToPlainText(state.fields.quote);
    if (quote) {
      parts.push(quote);
    }
  }

  const attachmentsText = buildAttachmentsPlainText();
  if (attachmentsText) {
    parts.push(attachmentsText);
  }

  const signature = buildSignaturePlainText();
  if (signature) parts.push(signature);

  return parts.join("\n\n").trim();
}

function buildGreetingPlainText() {
  if (!state.enabled.greeting) return "";
  const greeting = resolveGreetingText();
  if (!greeting) return "";
  const recipient = normalizeInlineText(state.fields.greetingRecipient);
  return recipient ? `${greeting} ${recipient},` : `${greeting},`;
}

function buildAttachmentsPlainText() {
  const attachments = getAllExportAttachments();
  if (!attachments.length) return "";
  const lines = attachments.map((attachment) => `${attachment.file.name} (${formatBytes(attachment.file.size)})`);
  return lines.join("\n");
}

function buildSignaturePlainText() {
  const lines = [];

  const closing = resolveClosingText();
  if (state.enabled.closing && closing) {
    lines.push(appendClosingComma(closing));
  }

  const sender = normalizeInlineText(state.fields.senderName);
  if (state.enabled.senderName && sender) {
    lines.push(sender);
  }

  const contactLines = buildContactPlainLines();
  if (contactLines.length) {
    lines.push(...contactLines);
  }

  if (state.enabled.sentAt) {
    lines.push(buildSentAtValue());
  }

  if (state.enabled.sentFrom) {
    lines.push(`${t("sentFromPrefix")}: ${detectDeviceLabel()}`);
  }

  return lines.join("\n").trim();
}

function buildContactPlainLines() {
  const lines = [];
  const senderValue = state.enabled.senderName ? normalizeInlineText(state.fields.senderName) : "";
  const defs = [
    ["contactName", state.fields.contactName],
    ["contactRole", state.fields.contactRole],
    ["contactCompany", state.fields.contactCompany],
    ["contactPhone", state.fields.contactPhone],
    ["contactEmail", state.fields.contactEmail],
    ["contactWebsite", state.fields.contactWebsite],
    ["contactAddress", state.fields.contactAddress],
  ];

  defs.forEach(([key, value]) => {
    if (!state.enabled[key]) return;
    const normalized = normalizeMultilineText(value);
    if (!normalized) return;
    if (key === "contactName" && senderValue && valuesLikelyDuplicate(normalized, senderValue)) return;
    lines.push(normalized.replace(/\n/g, ", "));
  });

  if (state.enabled.socials) {
    state.socials.forEach((item) => {
      const url = normalizeInlineText(item.url);
      if (!url) return;
      const network = SOCIAL_NETWORKS.find((entry) => entry.value === item.network) || SOCIAL_NETWORKS[0];
      lines.push(`${t(network.labelKey)} ${url}`);
    });
  }

  return lines;
}

function buildAttachmentContentId(attachment, index) {
  const fallback = `file-${index + 1}`;
  const source = attachment?.id || attachment?.file?.name || fallback;
  const normalized = String(source)
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
  return `pm-${normalized || fallback}@pretty-mails.local`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error || new Error("FileReader failed"));
    reader.onload = () => resolve(String(reader.result || ""));
    reader.readAsDataURL(file);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeEditorHtml(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";

  if (!/[<>]/.test(raw)) {
    return plainTextToSafeHtml(raw);
  }

  return sanitizeRichHtml(raw);
}

function plainTextToSafeHtml(text) {
  const normalized = normalizeMultilineText(text);
  if (!normalized) return "";

  return normalized
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br>")}</p>`)
    .join("\n");
}

function richHtmlToPlainText(value) {
  const html = normalizeEditorHtml(value);
  if (!html) return "";

  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${html}</div>`, "text/html");
  const root = doc.body.firstElementChild || doc.body;

  root.querySelectorAll("br").forEach((node) => {
    node.replaceWith("\n");
  });

  root.querySelectorAll("p,div,li,blockquote,h1,h2,h3,h4,h5,h6,tr").forEach((node) => {
    node.append("\n");
  });

  return normalizeMultilineText(root.textContent || "");
}

function sanitizeRichHtml(rawHtml) {
  const parser = new DOMParser();
  const sourceDoc = parser.parseFromString(`<div>${rawHtml}</div>`, "text/html");
  const wrapper = sourceDoc.body.firstElementChild || sourceDoc.body;

  const cleanDoc = document.implementation.createHTMLDocument("");
  const cleanWrapper = cleanDoc.createElement("div");

  wrapper.childNodes.forEach((node) => {
    cleanWrapper.append(sanitizeRichNode(node, cleanDoc));
  });

  return cleanWrapper.innerHTML.trim();
}

function sanitizeRichNode(node, doc) {
  if (node.nodeType === Node.TEXT_NODE) {
    return doc.createTextNode(node.textContent || "");
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return doc.createDocumentFragment();
  }

  const tag = node.tagName.toLowerCase();
  const blockedTags = new Set([
    "script",
    "style",
    "iframe",
    "object",
    "embed",
    "form",
    "input",
    "button",
    "meta",
    "link",
  ]);

  if (blockedTags.has(tag)) {
    return doc.createDocumentFragment();
  }

  const allowedTags = new Set([
    "p",
    "br",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "s",
    "strike",
    "span",
    "ul",
    "ol",
    "li",
    "blockquote",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "a",
    "table",
    "thead",
    "tbody",
    "tr",
    "td",
    "th",
    "img",
  ]);

  const element = allowedTags.has(tag) ? doc.createElement(tag) : doc.createDocumentFragment();

  if (element.nodeType === Node.ELEMENT_NODE) {
    [...node.attributes].forEach((attr) => {
      const attrName = attr.name.toLowerCase();
      const attrValue = attr.value || "";

      if (attrName.startsWith("on")) return;

      if (attrName === "style") {
        const cleanStyle = sanitizeInlineStyle(attrValue);
        if (cleanStyle) element.setAttribute("style", cleanStyle);
        return;
      }

      if (tag === "a" && attrName === "href") {
        const cleanHref = sanitizeUrl(attrValue, { allowDataImage: false });
        if (cleanHref) {
          element.setAttribute("href", cleanHref);
          element.setAttribute("target", "_blank");
          element.setAttribute("rel", "noopener noreferrer");
        }
        return;
      }

      if (tag === "img" && attrName === "src") {
        const cleanSrc = sanitizeUrl(attrValue, { allowDataImage: true });
        if (cleanSrc) {
          element.setAttribute("src", cleanSrc);
        }
        return;
      }

      const allowedGlobalAttrs = new Set(["class", "title", "alt", "colspan", "rowspan", "width", "height"]);
      if (allowedGlobalAttrs.has(attrName)) {
        element.setAttribute(attrName, attrValue);
      }
    });
  }

  node.childNodes.forEach((child) => {
    element.append(sanitizeRichNode(child, doc));
  });

  return element;
}

function sanitizeInlineStyle(styleValue) {
  const allowedProperties = new Set([
    "color",
    "background",
    "background-color",
    "font-size",
    "font-family",
    "font-weight",
    "font-style",
    "text-decoration",
    "text-transform",
    "letter-spacing",
    "text-align",
    "line-height",
    "border",
    "border-left",
    "border-right",
    "border-top",
    "border-bottom",
    "border-radius",
    "padding",
    "padding-left",
    "padding-right",
    "padding-top",
    "padding-bottom",
    "margin",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-bottom",
    "display",
    "width",
    "height",
    "max-width",
    "min-width",
    "vertical-align",
  ]);

  return String(styleValue || "")
    .split(";")
    .map((pair) => pair.trim())
    .filter(Boolean)
    .map((pair) => {
      const [rawName, ...rest] = pair.split(":");
      const name = String(rawName || "").trim().toLowerCase();
      const value = rest.join(":").trim();

      if (!allowedProperties.has(name)) return "";
      if (!value) return "";
      if (/url\(|expression|javascript:/i.test(value)) return "";
      return `${name}: ${value}`;
    })
    .filter(Boolean)
    .join("; ");
}

function sanitizeUrl(value, options = {}) {
  const raw = String(value || "").trim();
  if (!raw) return "";

  if (/^https?:\/\//i.test(raw)) return raw;
  if (/^\//.test(raw)) return raw;
  if (/^#/.test(raw)) return raw;
  if (/^mailto:/i.test(raw)) return raw;
  if (/^tel:/i.test(raw)) return raw;
  if (options.allowDataImage && /^data:image\//i.test(raw)) return raw;

  return "";
}

async function initTinyEditors(options = {}) {
  const force = Boolean(options.force);
  if (!window.tinymce) return;

  if (tinyInitPromise) {
    await tinyInitPromise;
    return;
  }

  const signature = buildTinySignature();
  if (!force && tinyEditors.content && tinyEditors.quote && tinySignature === signature) {
    return;
  }

  tinyInitPromise = (async () => {
    try {
      const preservedContent = state.fields.content;
      const preservedQuote = state.fields.quote;

      if (tinyEditors.content) {
        tinyEditors.content.remove();
        tinyEditors.content = null;
      }
      if (tinyEditors.quote) {
        tinyEditors.quote.remove();
        tinyEditors.quote = null;
      }

      await initSingleTinyEditor({
        target: ui.fieldContent,
        key: "content",
        height: mobileMedia.matches ? 560 : 440,
      });

      await initSingleTinyEditor({
        target: ui.fieldQuote,
        key: "quote",
        height: mobileMedia.matches ? 420 : 300,
      });

      if (tinyEditors.content) {
        tinyEditors.content.setContent(preservedContent || "");
        state.fields.content = normalizeEditorHtml(tinyEditors.content.getContent({ format: "html" }));
      }

      if (tinyEditors.quote) {
        tinyEditors.quote.setContent(preservedQuote || "");
        state.fields.quote = normalizeEditorHtml(tinyEditors.quote.getContent({ format: "html" }));
      }

      tinySignature = signature;
      applyOptionalFieldStates();
      renderPreview();
    } catch (error) {
      console.warn("TinyMCE initialization failed; using plain textarea.", error);
    }
  })();

  try {
    await tinyInitPromise;
  } finally {
    tinyInitPromise = null;
  }
}

async function refreshTinyEditors() {
  await initTinyEditors({ force: true });
}

function buildTinySignature() {
  const template = getTemplateById(state.selectedTemplateId);
  const bodyFont = template?.editorFonts?.body || '"Helvetica Neue", Arial, sans-serif';
  const headingFont = template?.editorFonts?.headings || bodyFont;
  return [state.resolvedTheme, state.language, bodyFont, headingFont].join("|");
}

async function initSingleTinyEditor(config) {
  if (!window.tinymce || !config?.target) return;

  const template = getTemplateById(state.selectedTemplateId);
  const bodyFont = template?.editorFonts?.body || '"Helvetica Neue", Arial, sans-serif';
  const headingFont = template?.editorFonts?.headings || bodyFont;
  const isDark = state.resolvedTheme === "dark";
  const editorTextColor = isDark ? "#e8f0f7" : "#12202a";
  const editorBackground = isDark ? "#15232d" : "#ffffff";
  const placeholderColor = isDark ? "#97adbf" : "#6f8190";
  const editorPlaceholder = config?.target?.getAttribute("placeholder") || "";

  const editors = await window.tinymce.init({
    target: config.target,
    license_key: "gpl",
    menubar: false,
    branding: false,
    statusbar: false,
    promotion: false,
    height: config.height,
    resize: true,
    placeholder: editorPlaceholder,
    toolbar_mode: "wrap",
    skin: isDark ? "oxide-dark" : "oxide",
    content_css: isDark ? "dark" : "default",
    content_style: `
      body {
        font-family: ${bodyFont};
        color: ${editorTextColor};
        background-color: ${editorBackground};
      }
      h1,h2,h3,h4 {
        font-family: ${headingFont};
      }
      blockquote {
        border-left: 3px solid #8ca7be;
        margin-left: 0;
        padding-left: 10px;
      }
      body.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before{
        color: ${placeholderColor};
        opacity: 1;
      }
    `,
    plugins:
      "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
    toolbar:
      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
    block_formats: "Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;Quote=blockquote",
    setup: (editor) => {
      const sync = () => {
        state.fields[config.key] = normalizeEditorHtml(editor.getContent({ format: "html" }));
        validateAddressFields();
        updateActionButtons();
        maybeSaveDraft();
        renderPreview();
      };

      editor.on("change input undo redo keyup SetContent", sync);
    },
  });

  const instance = editors?.[0] || window.tinymce.get(config.target.id) || null;
  if (!instance) return;

  tinyEditors[config.key] = instance;
}

function buildExportBodyHtmlSync(options = {}) {
  const template = getTemplateById(state.selectedTemplateId);
  if (!template) return "";

  const rawMarkup = state.templateMarkup.get(template.id);
  if (!rawMarkup) return "";

  return buildTemplateHtml(rawMarkup, template, {
    forceMode: options.forceMode ?? null,
    showPlaceholders: Boolean(options.showPlaceholders),
    attachmentLinkMode: options.attachmentLinkMode,
  });
}

async function buildExportBodyHtml(options = {}) {
  const template = getTemplateById(state.selectedTemplateId);
  if (!template) return "";
  const rawMarkup = await ensureTemplateMarkup(template);
  return buildTemplateHtml(rawMarkup, template, {
    forceMode: options.forceMode ?? null,
    showPlaceholders: Boolean(options.showPlaceholders),
    attachmentLinkMode: options.attachmentLinkMode,
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("SW registration failed", error);
    });
  });
}
