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

const LANGUAGE_FLAGS = {
  pl: "🇵🇱",
  en: "🇬🇧",
  uk: "🇺🇦",
};

const OPTIONAL_DEFAULTS = {
  cc: false,
  bcc: false,
  subject: true,
  quote: false,
  greeting: true,
  content: true,
  closing: true,
  contactName: false,
  contactRole: false,
  contactCompany: false,
  contactLogo: false,
  contactPhone: false,
  contactEmail: false,
  contactWebsite: false,
  contactAddress: false,
  socials: false,
  sentAt: true,
  sentFrom: false,
};

const SOCIAL_NETWORKS = [
  { value: "linkedin", icon: "💼", labelKey: "socialLinkedin" },
  { value: "facebook", icon: "📘", labelKey: "socialFacebook" },
  { value: "instagram", icon: "📸", labelKey: "socialInstagram" },
  { value: "x", icon: "𝕏", labelKey: "socialX" },
  { value: "youtube", icon: "▶️", labelKey: "socialYoutube" },
  { value: "tiktok", icon: "🎵", labelKey: "socialTiktok" },
  { value: "github", icon: "🐙", labelKey: "socialGithub" },
  { value: "website", icon: "🌐", labelKey: "socialWebsite" },
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
    fieldContactRolePlaceholder: "Np. Project Manager",
    fieldContactCompanyLabel: "Nazwa firmy",
    fieldContactCompanyPlaceholder: "Nazwa firmy",
    fieldContactLogoLabel: "Logo firmy (załącznik)",
    fieldContactLogoHint: "Logo dodawane jest jako osobny załącznik.",
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

    toggleShow: "Pokaż",

    rememberDraftLabel: "Zapamiętaj brudnopis lokalnie (bez załączników)",
    mutedNoteHtml: "Odznaczone pola nie będą widoczne w podglądzie ani eksporcie.",

    previewTitle: "Podgląd",
    previewEnvelopeTitle: "Informacje wysyłkowe",
    previewContentTitle: "Treść maila",
    previewFrameTitle: "Podgląd wiadomości",
    previewFrameDarkTitle: "Podgląd wiadomości - ciemny",

    openPreviewButton: "👁️",
    closePreviewButton: "✕",

    exportButton: "💾",
    exportBusy: "💾…",
    shareButton: "📤",
    shareBusy: "📤…",
    exportButtonAria: "Zapisz plik .eml",
    shareButtonAria: "Udostępnij plik .eml",

    infoButtonAria: "Pokaż wskazówki",
    infoModalTitle: "ℹ️ Jak to działa",
    infoModalCloseAria: "Zamknij",
    infoLine1: "✉️ Aplikacja tworzy plik .eml z HTML i załącznikami.",
    infoLine2: "💾 „Zapisz” pobiera plik na urządzenie.",
    infoLine3: "📤 „Udostępnij” otwiera systemowe udostępnianie.",
    infoLine4: "📮 Wysłanie odbywa się z Twojej aplikacji pocztowej i Twojego konta.",

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

    addressValidationPrefix: "Uzupełnij lub popraw pola:",
    requiredToMissing: "Do: wpisz przynajmniej jeden poprawny adres e-mail.",
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
    exportFailedAlert: "Nie udało się wyeksportować pliku .eml",
    shareFailedAlert: "Nie udało się udostępnić pliku .eml. Zapisuję plik lokalnie.",

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
    fieldContactRolePlaceholder: "e.g. Project Manager",
    fieldContactCompanyLabel: "Company",
    fieldContactCompanyPlaceholder: "Company name",
    fieldContactLogoLabel: "Company logo (attachment)",
    fieldContactLogoHint: "Logo is added as a separate attachment.",
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

    toggleShow: "Show",

    rememberDraftLabel: "Remember draft locally (without attachments)",
    mutedNoteHtml: "Unchecked fields are hidden in preview and export.",

    previewTitle: "Preview",
    previewEnvelopeTitle: "Sending info",
    previewContentTitle: "Mail body",
    previewFrameTitle: "Message preview",
    previewFrameDarkTitle: "Message preview - dark",

    openPreviewButton: "👁️",
    closePreviewButton: "✕",

    exportButton: "💾",
    exportBusy: "💾…",
    shareButton: "📤",
    shareBusy: "📤…",
    exportButtonAria: "Save .eml file",
    shareButtonAria: "Share .eml file",

    infoButtonAria: "Show tips",
    infoModalTitle: "ℹ️ How it works",
    infoModalCloseAria: "Close",
    infoLine1: "✉️ The app builds an .eml file with HTML and attachments.",
    infoLine2: "💾 “Save” downloads the file to your device.",
    infoLine3: "📤 “Share” opens the system share sheet.",
    infoLine4: "📮 Sending happens in your mail app with your account.",

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

    addressValidationPrefix: "Complete or fix fields:",
    requiredToMissing: "To: enter at least one valid email address.",
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
    exportFailedAlert: "Failed to export .eml file",
    shareFailedAlert: "Could not share .eml file. Saving locally instead.",

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
    fieldContactRolePlaceholder: "Напр. Project Manager",
    fieldContactCompanyLabel: "Назва компанії",
    fieldContactCompanyPlaceholder: "Назва компанії",
    fieldContactLogoLabel: "Логотип компанії (вкладення)",
    fieldContactLogoHint: "Логотип додається як окреме вкладення.",
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

    toggleShow: "Показати",

    rememberDraftLabel: "Зберігати чернетку локально (без вкладень)",
    mutedNoteHtml: "Вимкнені поля не потрапляють у перегляд і експорт.",

    previewTitle: "Перегляд",
    previewEnvelopeTitle: "Дані відправлення",
    previewContentTitle: "Тіло листа",
    previewFrameTitle: "Перегляд листа",
    previewFrameDarkTitle: "Перегляд листа - темний",

    openPreviewButton: "👁️",
    closePreviewButton: "✕",

    exportButton: "💾",
    exportBusy: "💾…",
    shareButton: "📤",
    shareBusy: "📤…",
    exportButtonAria: "Зберегти файл .eml",
    shareButtonAria: "Поділитися файлом .eml",

    infoButtonAria: "Показати підказки",
    infoModalTitle: "ℹ️ Як це працює",
    infoModalCloseAria: "Закрити",
    infoLine1: "✉️ Застосунок створює файл .eml з HTML і вкладеннями.",
    infoLine2: "💾 «Зберегти» завантажує файл на пристрій.",
    infoLine3: "📤 «Поділитися» відкриває системне меню поширення.",
    infoLine4: "📮 Надсилання виконується у вашій поштовій програмі.",

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

    addressValidationPrefix: "Заповніть або виправте поля:",
    requiredToMissing: "Кому: введіть хоча б одну коректну email-адресу.",
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
    exportFailedAlert: "Не вдалося експортувати .eml файл",
    shareFailedAlert: "Не вдалося поділитися .eml файлом. Зберігаю локально.",

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
  isExporting: false,
  exportAction: "save",
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
  shareBtn: document.querySelector("#shareBtn"),

  infoBtn: document.querySelector("#infoBtn"),
  infoModal: document.querySelector("#infoModal"),
  infoModalClose: document.querySelector("#infoModalClose"),
  infoModalTitle: document.querySelector("#infoModalTitle"),
  infoModalList: document.querySelector("#infoModalList"),

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
  previewModeLabel: document.querySelector("#previewModeLabel"),
  previewMode: document.querySelector("#previewMode"),
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

boot().catch((error) => {
  console.error(error);
  ui.addressValidation.textContent = t("bootFailed");
});

async function boot() {
  bindEvents();
  restoreDraft();
  applyLanguage(state.language);
  applyThemeMode(state.themeMode, { persist: false, refreshEditors: false });
  syncInputsFromState();
  renderSocialRows();
  applyOptionalFieldStates();
  syncMobilePreviewMode();
  renderAttachments();
  validateAddressFields();
  updateActionButtons();
  await loadTemplates();
  await initTinyEditors();
  renderPreview();
  registerServiceWorker();
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
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeLanguageMenu();
    closeInfoModal();
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

    if (event.target.classList.contains("social-network")) {
      social.network = event.target.value;
    }

    if (event.target.classList.contains("social-url")) {
      social.url = event.target.value;
    }

    maybeSaveDraft();
    renderPreview();
  });

  ui.contactLogoInput.addEventListener("change", () => {
    const file = ui.contactLogoInput.files?.[0] || null;
    setLogoAttachment(file);
  });

  ui.addFilesBtn.addEventListener("click", () => {
    ui.fileInput.click();
  });

  ui.fileInput.addEventListener("change", () => {
    addAttachments(ui.fileInput.files);
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
    addAttachments(event.dataTransfer?.files || []);
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
    if (!validateAddressFields()) return;

    try {
      state.isExporting = true;
      state.exportAction = "save";
      updateActionButtons();
      await saveEmlFile();
    } catch (error) {
      console.error(error);
      alert(t("exportFailedAlert"));
    } finally {
      state.isExporting = false;
      state.exportAction = "save";
      updateActionButtons();
    }
  });

  ui.shareBtn.addEventListener("click", async () => {
    if (!validateAddressFields()) return;

    try {
      state.isExporting = true;
      state.exportAction = "share";
      updateActionButtons();
      await shareEmlFile();
    } catch (error) {
      console.error(error);
      alert(t("shareFailedAlert"));
      await saveEmlFile();
    } finally {
      state.isExporting = false;
      state.exportAction = "save";
      updateActionButtons();
    }
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

  ui.rememberDraftLabel.textContent = t("rememberDraftLabel");
  ui.mutedNote.innerHTML = t("mutedNoteHtml");

  ui.previewTitle.textContent = t("previewTitle");
  ui.previewEnvelopeTitle.textContent = t("previewEnvelopeTitle");
  ui.previewContentTitle.textContent = t("previewContentTitle");
  ui.previewFrame.title = t("previewFrameTitle");
  ui.previewFrameDark.title = t("previewFrameDarkTitle");

  ui.attachmentsTitle.textContent = t("attachmentsTitle");
  ui.addFilesBtn.textContent = t("addFilesButton");
  ui.dropZone.textContent = t("dropZoneText");
  ui.dropZone.setAttribute("aria-label", t("dropZoneAria"));

  ui.mobilePreviewToggleBtn.textContent = t("openPreviewButton");
  ui.exportBtn.setAttribute("aria-label", t("exportButtonAria"));
  ui.shareBtn.setAttribute("aria-label", t("shareButtonAria"));
  ui.exportBtn.title = t("exportButtonAria");
  ui.shareBtn.title = t("shareButtonAria");

  ui.infoBtn.setAttribute("aria-label", t("infoButtonAria"));
  ui.infoModalTitle.textContent = t("infoModalTitle");
  ui.infoModalClose.setAttribute("aria-label", t("infoModalCloseAria"));
  ui.infoModalList.innerHTML = "";
  ["infoLine1", "infoLine2", "infoLine3", "infoLine4"].forEach((key) => {
    const item = document.createElement("li");
    item.textContent = t(key);
    ui.infoModalList.append(item);
  });

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

function syncInputsFromState() {
  ui.themeMode.value = normalizeThemeMode(state.themeMode);
  ui.previewMode.value = normalizePreviewMode(state.previewMode);

  ui.rememberDraft.checked = state.rememberDraft;

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

    state.socials = Array.isArray(saved.socials)
      ? saved.socials
          .map((item) => ({
            id: item.id || crypto.randomUUID(),
            network: normalizeSocialNetwork(item.network),
            url: String(item.url || ""),
          }))
          .filter((item) => Boolean(item.network))
      : [];

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
    enabled: { ...state.enabled },
    fields: { ...state.fields },
    socials: state.socials.map((item) => ({ ...item })),
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
}

async function selectTemplate(templateId) {
  const template = getTemplateById(templateId);
  if (!template) return;

  state.selectedTemplateId = template.id;
  ui.mobileTemplateSelect.value = template.id;
  ui.previewTemplateName.textContent = localizedTemplateName(template);

  await ensureTemplateMarkup(template);
  renderPreview();
  maybeSaveDraft();
  void refreshTinyEditors();
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
      visible: true,
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

  const replacements = {
    greeting_block: buildGreetingBlockHtml({ showPlaceholders }),
    content_block: buildContentBlockHtml({ showPlaceholders }),
    quote_block: buildQuoteBlockHtml({ showPlaceholders }),
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

  const accent = template?.theme?.accent || "#2e7dff";
  const themeStyle = doc.createElement("style");
  themeStyle.textContent = `:root{--template-accent:${accent};}`;
  doc.head.append(themeStyle);

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
    return contentHtml;
  }

  if (!showPlaceholders) {
    return "";
  }

  return `<p class="app-placeholder">${escapeHtml(ui.fieldContent.placeholder)}</p>`;
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
      <p class="mail-quote-label">${escapeHtml(t("fieldQuoteLabel"))}</p>
      <div class="mail-quote-body">${body}</div>
    </section>
  `;
}

function buildSignatureBlockHtml(options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);

  const closingText = resolveClosingText();
  const senderName = normalizeInlineText(state.fields.senderName);
  const hasClosing = state.enabled.closing && Boolean(closingText || showPlaceholders);
  const hasSender = Boolean(senderName || showPlaceholders);

  const closingLine = hasClosing
    ? `<p class="mail-closing${closingText ? "" : " app-placeholder"}">${escapeHtml(
        closingText || t("closingPresetRegards")
      )}</p>`
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

function buildContactBlockHtml(options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);

  const defs = [
    {
      key: "contactName",
      label: t("fieldContactNameLabel"),
      value: normalizeInlineText(state.fields.contactName),
      placeholder: ui.fieldContactName.placeholder,
    },
    {
      key: "contactRole",
      label: t("fieldContactRoleLabel"),
      value: normalizeInlineText(state.fields.contactRole),
      placeholder: ui.fieldContactRole.placeholder,
    },
    {
      key: "contactCompany",
      label: t("fieldContactCompanyLabel"),
      value: normalizeInlineText(state.fields.contactCompany),
      placeholder: ui.fieldContactCompany.placeholder,
    },
    {
      key: "contactPhone",
      label: t("fieldContactPhoneLabel"),
      value: normalizeInlineText(state.fields.contactPhone),
      placeholder: ui.fieldContactPhone.placeholder,
    },
    {
      key: "contactEmail",
      label: t("fieldContactEmailLabel"),
      value: normalizeInlineText(state.fields.contactEmail),
      placeholder: ui.fieldContactEmail.placeholder,
    },
    {
      key: "contactWebsite",
      label: t("fieldContactWebsiteLabel"),
      value: normalizeInlineText(state.fields.contactWebsite),
      placeholder: ui.fieldContactWebsite.placeholder,
    },
    {
      key: "contactAddress",
      label: t("fieldContactAddressLabel"),
      value: normalizeMultilineText(state.fields.contactAddress),
      placeholder: ui.fieldContactAddress.placeholder,
    },
  ];

  const lines = [];

  defs.forEach((def) => {
    if (!state.enabled[def.key]) return;

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
        <div class="contact-line${isPlaceholder ? " app-placeholder" : ""}">
          <span class="contact-label">${escapeHtml(def.label)}:</span>
          <span class="contact-value"><a href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
        def.value
      )}</a></span>
        </div>
      `);
      return;
    }

    lines.push(`
      <div class="contact-line${isPlaceholder ? " app-placeholder" : ""}">
        <span class="contact-label">${escapeHtml(def.label)}:</span>
        <span class="contact-value">${escapeHtml(displayValue).replace(/\n/g, "<br>")}</span>
      </div>
    `);
  });

  if (state.enabled.contactLogo) {
    const logoName = state.logoAttachment?.file?.name || "";
    if (logoName || showPlaceholders) {
      lines.push(`
        <div class="contact-line${logoName ? "" : " app-placeholder"}">
          <span class="contact-label">${escapeHtml(t("fieldContactLogoLabel"))}:</span>
          <span class="contact-value">${escapeHtml(logoName || t("logoPlaceholder"))}</span>
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
        return `<a href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
          `${network.icon} ${t(network.labelKey)}`
        )}</a>`;
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

  const toAddresses = parseAddressList(state.fields.to);
  if (!toAddresses.length) {
    issues.push(t("requiredToMissing"));
    invalidInputs.add(ui.fieldTo);
  } else {
    const invalidTo = toAddresses.filter((address) => !isValidEmailAddress(address));
    if (invalidTo.length) {
      issues.push(t("invalidAddressList", { label: t("fieldToShort"), list: [...new Set(invalidTo)].join(", ") }));
      invalidInputs.add(ui.fieldTo);
    }
  }

  const optionalEmailDefs = [
    { key: "cc", label: t("fieldCcShort"), input: ui.fieldCc },
    { key: "bcc", label: t("fieldBccShort"), input: ui.fieldBcc },
  ];

  optionalEmailDefs.forEach((def) => {
    if (!state.enabled[def.key]) return;
    const value = state.fields[def.key];
    if (!normalizeInlineText(value)) return;

    const addresses = parseAddressList(value);
    const invalid = addresses.filter((address) => !isValidEmailAddress(address));
    if (invalid.length) {
      issues.push(t("invalidAddressList", { label: def.label, list: [...new Set(invalid)].join(", ") }));
      invalidInputs.add(def.input);
    }
  });

  if (!normalizeInlineText(state.fields.senderName)) {
    issues.push(t("requiredSenderMissing"));
    invalidInputs.add(ui.fieldSenderName);
  }

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

  invalidInputs.forEach((input) => {
    input?.setAttribute("aria-invalid", "true");
  });

  if (showMessage && issues.length) {
    ui.addressValidation.textContent = `${t("addressValidationPrefix")} ${issues.join("; ")}`;
  }

  return issues.length === 0;
}

function updateActionButtons() {
  ui.exportBtn.textContent =
    state.isExporting && state.exportAction === "save" ? t("exportBusy") : t("exportButton");
  ui.shareBtn.textContent =
    state.isExporting && state.exportAction === "share" ? t("shareBusy") : t("shareButton");

  if (state.isExporting) {
    ui.exportBtn.disabled = true;
    ui.shareBtn.disabled = true;
    return;
  }

  const canExport = collectValidationState().issues.length === 0;
  ui.exportBtn.disabled = !canExport;
  ui.shareBtn.disabled = !canExport;
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
        option.textContent = `${network.icon} ${t(network.labelKey)}`;
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

  applyOptionalFieldStates();
}

function setLogoAttachment(file) {
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
  state.logoAttachment = {
    id: "logo",
    file,
    previewUrl: isImage ? URL.createObjectURL(file) : "",
    kind: isImage ? "logo" : detectFileKind(file),
  };

  renderAttachments();
  renderPreview();
  maybeSaveDraft();
}

function addAttachments(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return;

  files.forEach((file) => {
    const isImage = file.type.startsWith("image/");
    state.attachments.push({
      id: crypto.randomUUID(),
      file,
      previewUrl: isImage ? URL.createObjectURL(file) : "",
      kind: detectFileKind(file),
    });
  });

  renderAttachments();
  renderPreview();
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
  const files = [...state.attachments];
  if (state.enabled.contactLogo && state.logoAttachment) {
    files.unshift(state.logoAttachment);
  }
  return files;
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

      if (attachment.kind === "image" || attachment.kind === "logo") {
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

      if (attachment.id === "logo") {
        removeButton.addEventListener("click", () => {
          clearLogoAttachment();
        });
      } else {
        removeButton.addEventListener("click", () => {
          removeAttachment(attachment.id);
        });
      }

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
  document.body.classList.add("modal-open");
}

function closeInfoModal() {
  ui.infoModal.hidden = true;
  document.body.classList.remove("modal-open");
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
      parts.push(`${t("fieldQuoteLabel")}:\n${quote}`);
    }
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

function buildSignaturePlainText() {
  const lines = [];

  const closing = resolveClosingText();
  if (state.enabled.closing && closing) {
    lines.push(closing);
  }

  const sender = normalizeInlineText(state.fields.senderName);
  if (sender) {
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
  const defs = [
    ["contactName", t("fieldContactNameLabel"), state.fields.contactName],
    ["contactRole", t("fieldContactRoleLabel"), state.fields.contactRole],
    ["contactCompany", t("fieldContactCompanyLabel"), state.fields.contactCompany],
    ["contactPhone", t("fieldContactPhoneLabel"), state.fields.contactPhone],
    ["contactEmail", t("fieldContactEmailLabel"), state.fields.contactEmail],
    ["contactWebsite", t("fieldContactWebsiteLabel"), state.fields.contactWebsite],
    ["contactAddress", t("fieldContactAddressLabel"), state.fields.contactAddress],
  ];

  defs.forEach(([key, label, value]) => {
    if (!state.enabled[key]) return;
    const normalized = normalizeMultilineText(value);
    if (!normalized) return;
    lines.push(`${label}: ${normalized.replace(/\n/g, ", ")}`);
  });

  if (state.enabled.contactLogo && state.logoAttachment?.file?.name) {
    lines.push(`${t("fieldContactLogoLabel")}: ${state.logoAttachment.file.name}`);
  }

  if (state.enabled.socials) {
    state.socials.forEach((item) => {
      const url = normalizeInlineText(item.url);
      if (!url) return;
      const network = SOCIAL_NETWORKS.find((entry) => entry.value === item.network) || SOCIAL_NETWORKS[0];
      lines.push(`${network.icon} ${t(network.labelKey)}: ${url}`);
    });
  }

  return lines;
}

async function saveEmlFile() {
  const { blob, filename } = await buildEmlFile();
  triggerDownload(blob, filename);
}

async function shareEmlFile() {
  const { blob, filename } = await buildEmlFile();
  const file = new File([blob], filename, { type: "message/rfc822" });

  if (typeof navigator.canShare === "function" && !navigator.canShare({ files: [file] })) {
    throw new Error("Navigator cannot share this file type");
  }

  if (typeof navigator.share !== "function") {
    throw new Error("Web Share API is unavailable");
  }

  await navigator.share({
    files: [file],
    title: filename,
  });
}

async function buildEmlFile() {
  const template = getTemplateById(state.selectedTemplateId);
  if (!template) {
    throw new Error(t("noTemplateSelected"));
  }

  const rawMarkup = await ensureTemplateMarkup(template);
  const htmlBody = buildTemplateHtml(rawMarkup, template, { forceMode: null, showPlaceholders: false });
  const plainTextBody = buildPlainTextBody();

  const mixedBoundary = `----=_PrettyMailsMixed_${Date.now().toString(16)}_${Math.random()
    .toString(16)
    .slice(2)}`;
  const alternativeBoundary = `----=_PrettyMailsAlt_${Date.now().toString(16)}_${Math.random()
    .toString(16)
    .slice(2)}`;

  const toAddresses = parseAddressList(state.fields.to);
  const ccAddresses = state.enabled.cc ? parseAddressList(state.fields.cc) : [];
  const bccAddresses = state.enabled.bcc ? parseAddressList(state.fields.bcc) : [];
  const subject = state.enabled.subject ? normalizeInlineText(state.fields.subject) : "";

  const lines = [];

  if (toAddresses.length) {
    lines.push(`To: ${toAddresses.join(", ")}`);
  }

  if (ccAddresses.length) {
    lines.push(`Cc: ${ccAddresses.join(", ")}`);
  }

  if (bccAddresses.length) {
    lines.push(`Bcc: ${bccAddresses.join(", ")}`);
  }

  if (subject) {
    lines.push(`Subject: ${encodeMimeHeader(subject)}`);
  }

  lines.push(`Date: ${new Date().toUTCString()}`);
  lines.push("MIME-Version: 1.0");
  lines.push(`Content-Type: multipart/mixed; boundary="${mixedBoundary}"`);
  lines.push("");

  lines.push(`--${mixedBoundary}`);
  lines.push(`Content-Type: multipart/alternative; boundary="${alternativeBoundary}"`);
  lines.push("");

  lines.push(`--${alternativeBoundary}`);
  lines.push('Content-Type: text/plain; charset="utf-8"');
  lines.push("Content-Transfer-Encoding: base64");
  lines.push("");
  lines.push(foldBase64(base64FromUtf8(plainTextBody)));
  lines.push("");

  lines.push(`--${alternativeBoundary}`);
  lines.push('Content-Type: text/html; charset="utf-8"');
  lines.push("Content-Transfer-Encoding: base64");
  lines.push("");
  lines.push(foldBase64(base64FromUtf8(htmlBody)));
  lines.push("");

  lines.push(`--${alternativeBoundary}--`);
  lines.push("");

  for (const attachment of getAllExportAttachments()) {
    const base64 = await fileToBase64(attachment.file);
    const mimeType = attachment.file.type || "application/octet-stream";
    const safeName = sanitizeFilenameForHeader(attachment.file.name);
    const encodedName = encodeURIComponent(attachment.file.name).replace(/'/g, "%27");

    lines.push(`--${mixedBoundary}`);
    lines.push(`Content-Type: ${mimeType}; name=\"${safeName}\"; name*=UTF-8''${encodedName}`);
    lines.push("Content-Transfer-Encoding: base64");
    lines.push(
      `Content-Disposition: attachment; filename=\"${safeName}\"; filename*=UTF-8''${encodedName}`
    );
    lines.push("");
    lines.push(foldBase64(base64));
    lines.push("");
  }

  lines.push(`--${mixedBoundary}--`);
  lines.push("");

  const emlContent = lines.join("\r\n");
  const blob = new Blob([emlContent], { type: "message/rfc822;charset=utf-8" });
  const filename = buildExportFilename();

  return { blob, filename };
}

function buildExportFilename() {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  return `mail-${year}${month}${day}-${hour}${minute}.eml`;
}

function sanitizeFilenameForHeader(filename) {
  return String(filename || "file").replace(/["\\\r\n]/g, "_");
}

function encodeMimeHeader(value) {
  if (/^[\x20-\x7e]*$/.test(value)) {
    return value;
  }
  return `=?UTF-8?B?${base64FromUtf8(value)}?=`;
}

function base64FromUtf8(value) {
  const bytes = new TextEncoder().encode(String(value || ""));
  let binary = "";
  const chunkSize = 0x8000;

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return btoa(binary);
}

function foldBase64(base64) {
  return String(base64 || "").replace(/.{1,76}/g, "$&\r\n").trim();
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => reject(reader.error || new Error("FileReader failed"));
    reader.onload = () => {
      const result = String(reader.result || "");
      const [, base64 = ""] = result.split(",");
      resolve(base64);
    };

    reader.readAsDataURL(file);
  });
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
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
        height: 320,
      });

      await initSingleTinyEditor({
        target: ui.fieldQuote,
        key: "quote",
        height: 210,
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

  const editors = await window.tinymce.init({
    target: config.target,
    license_key: "gpl",
    menubar: false,
    branding: false,
    statusbar: false,
    promotion: false,
    height: config.height,
    resize: true,
    toolbar_mode: "wrap",
    skin: isDark ? "oxide-dark" : "oxide",
    content_css: isDark ? "dark" : "default",
    content_style: `
      body {
        font-family: ${bodyFont};
        color: ${isDark ? "#e7eef5" : "#12202a"};
        background: transparent;
      }
      h1,h2,h3,h4 {
        font-family: ${headingFont};
      }
      blockquote {
        border-left: 3px solid #8ca7be;
        margin-left: 0;
        padding-left: 10px;
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

function buildExportBodyHtml() {
  const template = getTemplateById(state.selectedTemplateId);
  const rawMarkup = template ? state.templateMarkup.get(template.id) : "";
  if (!rawMarkup || !template) return "";
  return buildTemplateHtml(rawMarkup, template, { forceMode: null, showPlaceholders: false });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("SW registration failed", error);
    });
  });
}
