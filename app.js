const STORAGE_KEYS = {
  language: "mailTemplatesPwa.language",
  draft: "mailTemplatesPwa.draft.v1",
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
const OPTIONAL_FIELD_DEFAULTS = {
  to: true,
  cc: false,
  bcc: false,
  replyTo: false,
  subject: true,
  content: true,
  quote: false,
  signatureName: true,
  date: true,
  time: false,
};

const I18N = {
  pl: {
    languageLabel: "Język",
    languageAria: "Język interfejsu",
    languagePl: "Polski",
    languageEn: "English",
    languageUk: "Українська",
    subtitleHtml:
      "Szablony, podgląd, załączniki i eksport wiadomości do pliku <code>.eml</code>.",
    themeLabel: "Motyw aplikacji",
    themeAuto: "Auto",
    themeLight: "Jasny",
    themeDark: "Ciemny",
    exportButton: "💾 Zapisz",
    exportBusy: "💾 Zapis...",
    shareButton: "📤 Udostępnij",
    shareBusy: "📤 Wysyłanie...",
    infoButtonAria: "Pokaż wskazówki",
    infoModalTitle: "ℹ️ Jak to działa",
    infoModalCloseAria: "Zamknij",
    infoLine1: "✉️ Aplikacja tworzy plik .eml z HTML i załącznikami.",
    infoLine2: "💾 „Zapisz .eml” pobiera plik na urządzenie.",
    infoLine3: "📤 „Udostępnij .eml” otwiera systemowe udostępnianie.",
    infoLine4: "📮 Wysłanie odbywa się z Twojej aplikacji pocztowej i Twojego konta.",
    templatesTitle: "Szablony",
    mobileTemplateLabel: "Szablon",
    mobileTemplateAria: "Wybierz szablon",
    templateSearchPlaceholder: "Szukaj po nazwie lub opisie",
    templateListAria: "Lista szablonów",
    templateSearchEmpty: "Brak wyników wyszukiwania.",
    editorTitle: "Edycja",
    fieldToLabel: "Adresat",
    fieldToShort: "Do",
    fieldToPlaceholder: "adres@example.com",
    fieldCcLabel: "DW",
    fieldCcShort: "DW",
    fieldCcPlaceholder: "adres@example.com, drugi@example.com",
    fieldBccLabel: "UDW",
    fieldBccShort: "UDW",
    fieldBccPlaceholder: "adres@example.com",
    fieldReplyToLabel: "Adres odpowiedzi",
    fieldReplyToShort: "Adres odpowiedzi",
    fieldReplyToPlaceholder: "adres@example.com",
    fieldSubjectLabel: "Temat",
    fieldSubjectShort: "Temat",
    fieldSubjectPlaceholder: "Temat wiadomości",
    fieldContentLabel: "Treść",
    fieldContentPlaceholder: "Wpisz treść wiadomości...",
    toggleToLabel: "Pokaż",
    toggleCcLabel: "Pokaż",
    toggleBccLabel: "Pokaż",
    toggleReplyToLabel: "Pokaż",
    toggleSubjectLabel: "Pokaż",
    toggleContentLabel: "Pokaż",
    toggleQuoteLabel: "Pokaż",
    toggleSignatureLabel: "Pokaż podpis (opcjonalny)",
    toggleDateLabel: "Pokaż",
    toggleDateHint: "Data jest automatyczna i nie ma pola edycji.",
    toggleTimeLabel: "Pokaż",
    toggleTimeHint: "Godzina jest automatyczna i nie ma pola edycji.",
    replyModeLabel: "Pokaż",
    fieldQuoteLabel: "Cytat",
    fieldQuoteShort: "Cytat",
    fieldQuotePlaceholder: "Wklej cytowany fragment, jeśli to odpowiedź...",
    fieldSignatureLabel: "Nadawca",
    fieldSignatureShort: "Nadawca",
    fieldSignaturePlaceholder: "Twoje imię",
    fieldDateShort: "Data",
    fieldTimeShort: "Godzina",
    fieldSentAtShort: "Wysłano",
    sentAtPrefix: "Wysłano",
    sentAtTimePrefix: "o",
    rememberDraftLabel: "Zapamiętaj brudnopis lokalnie (bez załączników)",
    mutedNoteHtml:
      "Pola opcjonalne włączasz checkboxami. Aktywne puste pola pokazują placeholder tylko w podglądzie; eksport używa wyłącznie wpisanych wartości.",
    addressValidationPrefix: "Uzupełnij lub popraw pola:",
    requiredToMissing: "Adresat: wpisz poprawny adres e-mail.",
    requiredSignatureMissing: "Nadawca: wpisz imię lub podpis.",
    replyToSingleAddress: "Pole Adres do odpowiedzi może zawierać tylko jeden adres.",
    previewTitle: "Podgląd",
    previewFrameTitle: "Podgląd wiadomości",
    previewFrameDarkTitle: "Podgląd wiadomości - ciemny",
    templateThemeSwitchLabel: "Motyw szablonu",
    previewModeLabel: "Tryb podglądu",
    previewModeApp: "Jak w aplikacji",
    previewModeLight: "Jasny",
    previewModeDark: "Ciemny",
    previewModeSplit: "Jasny + Ciemny",
    openPreviewButton: "👁️",
    closePreviewButton: "✕",
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
    footerNoteHtml:
      "<strong>Uwaga:</strong> <code>mailto:</code> nie wspiera HTML i załączników, dlatego użyj eksportu <code>.eml</code>.",
    bootFailed: "Nie udało się uruchomić aplikacji.",
    exportFailedAlert: "Nie udało się wyeksportować pliku .eml",
    shareFailedAlert: "Nie udało się udostępnić pliku .eml. Zapisuję plik lokalnie.",
    noTemplateSelected: "Brak wybranego szablonu",
    greeting: "Cześć,",
    closing: "Pozdrawiam,",
    templateHeader: "Wiadomość prywatna",
    replyHeader: "Odpowiedź na wiadomość",
    quoteLabel: "Cytat poprzedniej wiadomości",
    quotePlaceholder: "Tutaj możesz wkleić oryginalny fragment wiadomości, na który odpowiadasz.",
    templatesFetchError: "Nie udało się pobrać listy szablonów ({status})",
    templatesInvalidFormat: "templates.json ma niepoprawny format",
    templateFileFetchError: "Nie udało się pobrać pliku szablonu: {path}",
    fileKindFile: "PLIK",
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
    subtitleHtml:
      "Templates, preview, attachments, and message export to <code>.eml</code>.",
    themeLabel: "App theme",
    themeAuto: "Auto",
    themeLight: "Light",
    themeDark: "Dark",
    exportButton: "💾 Save",
    exportBusy: "💾 Saving...",
    shareButton: "📤 Share",
    shareBusy: "📤 Sharing...",
    infoButtonAria: "Show tips",
    infoModalTitle: "ℹ️ How it works",
    infoModalCloseAria: "Close",
    infoLine1: "✉️ The app builds an .eml file with HTML and attachments.",
    infoLine2: "💾 “Save .eml” downloads the file to your device.",
    infoLine3: "📤 “Share .eml” opens the system share sheet.",
    infoLine4: "📮 Sending is done by your mail app and your account.",
    templatesTitle: "Templates",
    mobileTemplateLabel: "Template",
    mobileTemplateAria: "Choose template",
    templateSearchPlaceholder: "Search by name or description",
    templateListAria: "Template list",
    templateSearchEmpty: "No matching templates.",
    editorTitle: "Editor",
    fieldToLabel: "Recipient",
    fieldToShort: "To",
    fieldToPlaceholder: "address@example.com",
    fieldCcLabel: "CC",
    fieldCcShort: "CC",
    fieldCcPlaceholder: "address@example.com, second@example.com",
    fieldBccLabel: "BCC",
    fieldBccShort: "BCC",
    fieldBccPlaceholder: "address@example.com",
    fieldReplyToLabel: "Reply address",
    fieldReplyToShort: "Reply-To",
    fieldReplyToPlaceholder: "address@example.com",
    fieldSubjectLabel: "Subject",
    fieldSubjectShort: "Subject",
    fieldSubjectPlaceholder: "Message subject",
    fieldContentLabel: "Content",
    fieldContentPlaceholder: "Type message content...",
    toggleToLabel: "Show",
    toggleCcLabel: "Show",
    toggleBccLabel: "Show",
    toggleReplyToLabel: "Show",
    toggleSubjectLabel: "Show",
    toggleContentLabel: "Show",
    toggleQuoteLabel: "Show",
    toggleSignatureLabel: "Show signature (optional)",
    toggleDateLabel: "Show",
    toggleDateHint: "Date is generated automatically and cannot be edited.",
    toggleTimeLabel: "Show",
    toggleTimeHint: "Time is generated automatically and cannot be edited.",
    replyModeLabel: "Show",
    fieldQuoteLabel: "Quote",
    fieldQuoteShort: "Quote",
    fieldQuotePlaceholder: "Paste quoted message fragment for reply...",
    fieldSignatureLabel: "Sender",
    fieldSignatureShort: "Sender",
    fieldSignaturePlaceholder: "Your name",
    fieldDateShort: "Date",
    fieldTimeShort: "Time",
    fieldSentAtShort: "Sent",
    sentAtPrefix: "Sent",
    sentAtTimePrefix: "at",
    rememberDraftLabel: "Remember draft locally (without attachments)",
    mutedNoteHtml:
      "Optional fields are controlled with checkboxes. Active empty fields show placeholders only in preview; export uses only entered values.",
    addressValidationPrefix: "Complete or fix fields:",
    requiredToMissing: "Recipient: enter a valid email address.",
    requiredSignatureMissing: "Sender: enter a name or signature.",
    replyToSingleAddress: "Reply-To can contain only one address.",
    previewTitle: "Preview",
    previewFrameTitle: "Message preview",
    previewFrameDarkTitle: "Message preview - dark",
    templateThemeSwitchLabel: "Template theme",
    previewModeLabel: "Preview mode",
    previewModeApp: "As app",
    previewModeLight: "Light",
    previewModeDark: "Dark",
    previewModeSplit: "Light + Dark",
    openPreviewButton: "👁️",
    closePreviewButton: "✕",
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
    footerNoteHtml:
      "<strong>Note:</strong> <code>mailto:</code> does not support HTML or attachments, so use <code>.eml</code> export.",
    bootFailed: "Failed to start the application.",
    exportFailedAlert: "Failed to export the .eml file",
    shareFailedAlert: "Could not share the .eml file. Saving it locally instead.",
    noTemplateSelected: "No template selected",
    greeting: "Hi,",
    closing: "Best regards,",
    templateHeader: "Private message",
    replyHeader: "Reply to message",
    quoteLabel: "Quoted previous message",
    quotePlaceholder: "You can paste the original message fragment you are replying to here.",
    templatesFetchError: "Failed to fetch template list ({status})",
    templatesInvalidFormat: "templates.json has invalid format",
    templateFileFetchError: "Failed to fetch template file: {path}",
    fileKindFile: "FILE",
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
    subtitleHtml:
      "Шаблони, попередній перегляд, вкладення та експорт повідомлення у <code>.eml</code>.",
    themeLabel: "Тема застосунку",
    themeAuto: "Авто",
    themeLight: "Світла",
    themeDark: "Темна",
    exportButton: "💾 Зберегти",
    exportBusy: "💾 Збереження...",
    shareButton: "📤 Поділитися",
    shareBusy: "📤 Поширення...",
    infoButtonAria: "Показати підказки",
    infoModalTitle: "ℹ️ Як це працює",
    infoModalCloseAria: "Закрити",
    infoLine1: "✉️ Застосунок створює файл .eml з HTML і вкладеннями.",
    infoLine2: "💾 «Зберегти .eml» завантажує файл на пристрій.",
    infoLine3: "📤 «Поділитися .eml» відкриває системне меню поширення.",
    infoLine4: "📮 Надсилання виконує ваша поштова програма з вашого акаунта.",
    templatesTitle: "Шаблони",
    mobileTemplateLabel: "Шаблон",
    mobileTemplateAria: "Оберіть шаблон",
    templateSearchPlaceholder: "Пошук за назвою або описом",
    templateListAria: "Список шаблонів",
    templateSearchEmpty: "Шаблони не знайдено.",
    editorTitle: "Редактор",
    fieldToLabel: "Одержувач",
    fieldToShort: "Кому",
    fieldToPlaceholder: "email@example.com",
    fieldCcLabel: "Копія",
    fieldCcShort: "Копія",
    fieldCcPlaceholder: "email@example.com, second@example.com",
    fieldBccLabel: "Прих. копія",
    fieldBccShort: "Прих. копія",
    fieldBccPlaceholder: "email@example.com",
    fieldReplyToLabel: "Адреса відповіді",
    fieldReplyToShort: "Адреса відповіді",
    fieldReplyToPlaceholder: "email@example.com",
    fieldSubjectLabel: "Тема",
    fieldSubjectShort: "Тема",
    fieldSubjectPlaceholder: "Тема листа",
    fieldContentLabel: "Текст",
    fieldContentPlaceholder: "Введіть текст повідомлення...",
    toggleToLabel: "Показати",
    toggleCcLabel: "Показати",
    toggleBccLabel: "Показати",
    toggleReplyToLabel: "Показати",
    toggleSubjectLabel: "Показати",
    toggleContentLabel: "Показати",
    toggleQuoteLabel: "Показати",
    toggleSignatureLabel: "Показати підпис (необов'язково)",
    toggleDateLabel: "Показати",
    toggleDateHint: "Дата генерується автоматично й не редагується.",
    toggleTimeLabel: "Показати",
    toggleTimeHint: "Час генерується автоматично й не редагується.",
    replyModeLabel: "Показати",
    fieldQuoteLabel: "Цитата",
    fieldQuoteShort: "Цитата",
    fieldQuotePlaceholder: "Вставте цитований фрагмент, якщо це відповідь...",
    fieldSignatureLabel: "Відправник",
    fieldSignatureShort: "Відправник",
    fieldSignaturePlaceholder: "Ваше ім'я",
    fieldDateShort: "Дата",
    fieldTimeShort: "Час",
    fieldSentAtShort: "Надіслано",
    sentAtPrefix: "Надіслано",
    sentAtTimePrefix: "о",
    rememberDraftLabel: "Зберігати чернетку локально (без вкладень)",
    mutedNoteHtml:
      "Необов'язкові поля вмикаються чекбоксами. Активні порожні поля показують плейсхолдер тільки в перегляді; експорт бере лише введені значення.",
    addressValidationPrefix: "Заповніть або виправте поля:",
    requiredToMissing: "Одержувач: введіть коректну email-адресу.",
    requiredSignatureMissing: "Відправник: введіть ім'я або підпис.",
    replyToSingleAddress: "Поле Адреса для відповіді може містити лише одну адресу.",
    previewTitle: "Попередній перегляд",
    previewFrameTitle: "Попередній перегляд листа",
    previewFrameDarkTitle: "Попередній перегляд листа - темний",
    templateThemeSwitchLabel: "Тема шаблону",
    previewModeLabel: "Режим перегляду",
    previewModeApp: "Як у застосунку",
    previewModeLight: "Світлий",
    previewModeDark: "Темний",
    previewModeSplit: "Світлий + Темний",
    openPreviewButton: "👁️",
    closePreviewButton: "✕",
    attachmentsTitle: "Вкладення",
    addFilesButton: "Додати файли",
    dropZoneText: "Перетягніть файли сюди або натисніть «Додати файли».",
    dropZoneAria: "Перетягніть файли",
    attachmentsEmpty: "Вкладень немає.",
    removeAttachment: "Видалити",
    attachmentTotal: "Сума файлів: {size}",
    attachmentEstimated: "Орієнтовний розмір листа: {size}",
    warningWarn: "Великий лист. Надсилання може тривати довше.",
    warningDanger: "Дуже великий лист. Деякі скриньки можуть його відхилити.",
    footerNoteHtml:
      "<strong>Увага:</strong> <code>mailto:</code> не підтримує HTML і вкладення, тому використовуйте експорт <code>.eml</code>.",
    bootFailed: "Не вдалося запустити застосунок.",
    exportFailedAlert: "Не вдалося експортувати файл .eml",
    shareFailedAlert: "Не вдалося поділитися файлом .eml. Зберігаю його локально.",
    noTemplateSelected: "Шаблон не вибрано",
    greeting: "Привіт,",
    closing: "З повагою,",
    templateHeader: "Приватне повідомлення",
    replyHeader: "Відповідь на повідомлення",
    quoteLabel: "Цитата попереднього повідомлення",
    quotePlaceholder: "Тут можна вставити фрагмент оригінального повідомлення, на яке ви відповідаєте.",
    templatesFetchError: "Не вдалося завантажити список шаблонів ({status})",
    templatesInvalidFormat: "templates.json має некоректний формат",
    templateFileFetchError: "Не вдалося завантажити файл шаблону: {path}",
    fileKindFile: "ФАЙЛ",
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
  resolvedTheme: "light",
  language: detectInitialLanguage(),
  rememberDraft: false,
  enabled: { ...OPTIONAL_FIELD_DEFAULTS },
  isExporting: false,
  exportAction: "save",
  fields: {
    to: "",
    cc: "",
    bcc: "",
    replyTo: "",
    subject: "",
    content: "",
    quote: "",
    signatureName: "",
  },
  attachments: [],
  searchQuery: "",
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
  templateSearch: document.querySelector("#templateSearch"),
  mobileTemplateLabel: document.querySelector("#mobileTemplateLabel"),
  mobileTemplateSelect: document.querySelector("#mobileTemplateSelect"),
  templateList: document.querySelector("#templateList"),
  templatesTitle: document.querySelector("#templatesTitle"),
  editorTitle: document.querySelector("#editorTitle"),
  fieldToLabel: document.querySelector("#fieldToLabel"),
  fieldCcLabel: document.querySelector("#fieldCcLabel"),
  fieldBccLabel: document.querySelector("#fieldBccLabel"),
  fieldReplyToLabel: document.querySelector("#fieldReplyToLabel"),
  fieldSubjectLabel: document.querySelector("#fieldSubjectLabel"),
  fieldContentLabel: document.querySelector("#fieldContentLabel"),
  toggleCcLabel: document.querySelector("#toggleCcLabel"),
  toggleBccLabel: document.querySelector("#toggleBccLabel"),
  toggleReplyToLabel: document.querySelector("#toggleReplyToLabel"),
  toggleSubjectLabel: document.querySelector("#toggleSubjectLabel"),
  toggleContentLabel: document.querySelector("#toggleContentLabel"),
  replyModeLabel: document.querySelector("#replyModeLabel"),
  toggleDateLabel: document.querySelector("#toggleDateLabel"),
  toggleDateHint: document.querySelector("#toggleDateHint"),
  toggleTimeLabel: document.querySelector("#toggleTimeLabel"),
  toggleTimeHint: document.querySelector("#toggleTimeHint"),
  fieldQuoteLabel: document.querySelector("#fieldQuoteLabel"),
  fieldSignatureLabel: document.querySelector("#fieldSignatureLabel"),
  toggleCc: document.querySelector("#toggleCc"),
  toggleBcc: document.querySelector("#toggleBcc"),
  toggleReplyTo: document.querySelector("#toggleReplyTo"),
  toggleSubject: document.querySelector("#toggleSubject"),
  toggleContent: document.querySelector("#toggleContent"),
  fieldTo: document.querySelector("#fieldTo"),
  fieldCc: document.querySelector("#fieldCc"),
  fieldBcc: document.querySelector("#fieldBcc"),
  fieldReplyTo: document.querySelector("#fieldReplyTo"),
  fieldSubject: document.querySelector("#fieldSubject"),
  fieldContent: document.querySelector("#fieldContent"),
  replyMode: document.querySelector("#replyMode"),
  fieldQuote: document.querySelector("#fieldQuote"),
  fieldSignatureName: document.querySelector("#fieldSignatureName"),
  toggleDate: document.querySelector("#toggleDate"),
  toggleTime: document.querySelector("#toggleTime"),
  rememberDraft: document.querySelector("#rememberDraft"),
  rememberDraftLabel: document.querySelector("#rememberDraftLabel"),
  addressValidation: document.querySelector("#addressValidation"),
  mutedNote: document.querySelector("#mutedNote"),
  previewTitle: document.querySelector("#previewTitle"),
  openPreviewModalTopBtn: document.querySelector("#openPreviewModalTopBtn"),
  openPreviewModalBtn: document.querySelector("#openPreviewModalBtn"),
  previewFields: document.querySelector("#previewFields"),
  previewTemplateName: document.querySelector("#previewTemplateName"),
  mailCanvas: document.querySelector("#mailCanvas"),
  previewFrame: document.querySelector("#previewFrame"),
  previewModal: document.querySelector("#previewModal"),
  previewModalClose: document.querySelector("#previewModalClose"),
  previewModalTitle: document.querySelector("#previewModalTitle"),
  previewModalCanvas: document.querySelector("#previewModalCanvas"),
  previewModalFrame: document.querySelector("#previewModalFrame"),
  shareBtn: document.querySelector("#shareBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  infoBtn: document.querySelector("#infoBtn"),
  infoModal: document.querySelector("#infoModal"),
  infoModalClose: document.querySelector("#infoModalClose"),
  infoModalTitle: document.querySelector("#infoModalTitle"),
  infoModalList: document.querySelector("#infoModalList"),
  attachmentsTitle: document.querySelector("#attachmentsTitle"),
  addFilesBtn: document.querySelector("#addFilesBtn"),
  fileInput: document.querySelector("#fileInput"),
  dropZone: document.querySelector("#dropZone"),
  attachmentList: document.querySelector("#attachmentList"),
  attachmentCount: document.querySelector("#attachmentCount"),
  attachmentTotal: document.querySelector("#attachmentTotal"),
  attachmentEstimated: document.querySelector("#attachmentEstimated"),
  attachmentWarning: document.querySelector("#attachmentWarning"),
  footerNote: document.querySelector("#footerNote"),
  fields: [...document.querySelectorAll("[data-field]")],
};

const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
const mobileLayoutMedia = window.matchMedia("(max-width: 760px)");
let richTextEditor = null;
let richTextConfigSignature = null;
let richTextReinitPromise = null;
const frameSrcdocCache = new WeakMap();

boot().catch((error) => {
  console.error(error);
  ui.previewTemplateName.textContent = t("bootFailed");
});

async function boot() {
  bindEvents();
  restoreDraft();
  applyLanguage(state.language);
  applySystemTheme();
  syncFieldInputs();
  syncMobilePreviewMode();
  await initContentEditor();
  applyTemplateFieldVisibility();
  clearAddressValidation();
  renderAttachments();
  await loadTemplates();
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

    const language = normalizeLanguage(option.dataset.lang);
    if (!language) return;

    closeLanguageMenu();
    applyLanguage(language);
    maybeSaveDraft();
  });

  document.addEventListener("click", (event) => {
    if (!ui.languageMenu.contains(event.target)) {
      closeLanguageMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLanguageMenu();
      closeInfoModal();
      closePreviewModal();
      if (state.mobilePreviewOpen) {
        state.mobilePreviewOpen = false;
        syncMobilePreviewMode();
      }
    }
  });

  ui.languageMode.addEventListener("change", () => {
    applyLanguage(ui.languageMode.value);
    maybeSaveDraft();
  });

  themeMedia.addEventListener("change", () => {
    applySystemTheme();
    renderPreview();
    renderAttachments();
  });

  mobileLayoutMedia.addEventListener("change", () => {
    syncMobilePreviewMode();
  });

  ui.templateSearch.addEventListener("input", () => {
    state.searchQuery = ui.templateSearch.value.trim().toLowerCase();
    renderTemplateList();
  });

  ui.mobileTemplateSelect.addEventListener("change", async () => {
    const templateId = ui.mobileTemplateSelect.value;
    if (!templateId) return;
    await selectTemplate(templateId);
  });

  ui.toggleCc.addEventListener("change", () => {
    state.enabled.cc = ui.toggleCc.checked;
    applyTemplateFieldVisibility();
    validateAddressFields();
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.toggleBcc.addEventListener("change", () => {
    state.enabled.bcc = ui.toggleBcc.checked;
    applyTemplateFieldVisibility();
    validateAddressFields();
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.toggleReplyTo.addEventListener("change", () => {
    state.enabled.replyTo = ui.toggleReplyTo.checked;
    applyTemplateFieldVisibility();
    validateAddressFields();
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.toggleSubject.addEventListener("change", () => {
    state.enabled.subject = ui.toggleSubject.checked;
    applyTemplateFieldVisibility();
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.toggleContent.addEventListener("change", () => {
    state.enabled.content = ui.toggleContent.checked;
    applyTemplateFieldVisibility();
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.fieldTo.addEventListener("input", () => {
    state.fields.to = ui.fieldTo.value;
    validateAddressFields();
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.fieldCc.addEventListener("input", () => {
    state.fields.cc = ui.fieldCc.value;
    validateAddressFields();
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.fieldBcc.addEventListener("input", () => {
    state.fields.bcc = ui.fieldBcc.value;
    validateAddressFields();
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.fieldReplyTo.addEventListener("input", () => {
    state.fields.replyTo = ui.fieldReplyTo.value;
    validateAddressFields();
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.fieldSubject.addEventListener("input", () => {
    state.fields.subject = ui.fieldSubject.value;
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.fieldContent.addEventListener("input", () => {
    if (richTextEditor) {
      return;
    }
    state.fields.content = ui.fieldContent.value;
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.replyMode.addEventListener("change", () => {
    state.enabled.quote = ui.replyMode.checked;
    applyTemplateFieldVisibility();
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.fieldQuote.addEventListener("input", () => {
    state.fields.quote = ui.fieldQuote.value;
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.fieldSignatureName.addEventListener("input", () => {
    state.fields.signatureName = ui.fieldSignatureName.value;
    validateAddressFields();
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.toggleDate.addEventListener("change", () => {
    state.enabled.date = ui.toggleDate.checked;
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.toggleTime.addEventListener("change", () => {
    state.enabled.time = ui.toggleTime.checked;
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.openPreviewModalBtn.addEventListener("click", () => {
    openPreviewModal();
  });
  ui.openPreviewModalTopBtn?.addEventListener("click", () => {
    if (mobileLayoutMedia.matches) {
      state.mobilePreviewOpen = !state.mobilePreviewOpen;
      syncMobilePreviewMode();
      return;
    }
    openPreviewModal();
  });

  ui.previewModal.addEventListener("click", (event) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.closest("[data-preview-close]") !== null
    ) {
      closePreviewModal();
    }
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
    if (!validateAddressFields()) {
      return;
    }

    try {
      state.isExporting = true;
      state.exportAction = "save";
      updateExportButtonLabel();
      ui.shareBtn.disabled = true;
      ui.exportBtn.disabled = true;
      await saveEmlFile();
    } catch (error) {
      console.error(error);
      alert(t("exportFailedAlert"));
    } finally {
      state.isExporting = false;
      state.exportAction = "save";
      ui.shareBtn.disabled = false;
      ui.exportBtn.disabled = false;
      updateExportButtonLabel();
    }
  });

  ui.shareBtn.addEventListener("click", async () => {
    if (!validateAddressFields()) {
      return;
    }

    try {
      state.isExporting = true;
      state.exportAction = "share";
      updateExportButtonLabel();
      ui.shareBtn.disabled = true;
      ui.exportBtn.disabled = true;
      await shareEmlFile();
    } catch (error) {
      console.error(error);
      alert(t("shareFailedAlert"));
      await saveEmlFile();
    } finally {
      state.isExporting = false;
      state.exportAction = "save";
      ui.shareBtn.disabled = false;
      ui.exportBtn.disabled = false;
      updateExportButtonLabel();
    }
  });

  ui.infoBtn.addEventListener("click", () => {
    openInfoModal();
  });

  ui.infoModalClose.addEventListener("click", () => {
    closeInfoModal();
  });

  ui.infoModal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.modalClose !== undefined) {
      closeInfoModal();
    }
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
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      ui.fileInput.click();
    }
  });
}

async function initContentEditor(options = {}) {
  if (richTextEditor) return;
  if (richTextReinitPromise) {
    await richTextReinitPromise;
    return;
  }

  richTextReinitPromise = (async () => {
    try {
      if (!window.tinymce) return;

      const selectedTemplate = getTemplateById(state.selectedTemplateId);
      const templateFonts = resolveEditorFonts(selectedTemplate);
      const isDark = state.resolvedTheme === "dark";
      const initialContent =
        options.initialContent !== undefined ? options.initialContent : state.fields.content || "";

      const editors = await window.tinymce.init({
        target: ui.fieldContent,
        license_key: "gpl",
        menubar: false,
        branding: false,
        statusbar: false,
        height: 260,
        resize: true,
        promotion: false,
        skin: isDark ? "oxide-dark" : "oxide",
        content_css: isDark ? "dark" : "default",
        content_style: buildTinyContentStyle(isDark, templateFonts),
        plugins:
          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
        toolbar:
          "undo redo | blocks styles | fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
        style_formats_merge: true,
        style_formats: buildTinyStyleFormats(),
        block_formats: "Akapit=p;Nagłówek 2=h2;Nagłówek 3=h3;Nagłówek 4=h4;Cytat=blockquote",
        font_family_formats: buildTinyFontFamilyFormats(templateFonts),
        placeholder: t("fieldContentPlaceholder"),
        setup: (editor) => {
          const syncContent = () => {
            state.fields.content = normalizeEditorHtml(editor.getContent({ format: "html" }));
            maybeSaveDraft();
            renderPreview();
            renderAttachments();
          };

          editor.on("change input undo redo keyup SetContent", syncContent);
        },
      });

      richTextEditor = editors?.[0] || window.tinymce.get(ui.fieldContent.id) || null;
      if (!richTextEditor) return;

      richTextConfigSignature = buildEditorConfigSignature(state.resolvedTheme, templateFonts);
      richTextEditor.setContent(initialContent || "");
      state.fields.content = normalizeEditorHtml(richTextEditor.getContent({ format: "html" }));
      renderPreview();
    } catch (error) {
      console.warn("TinyMCE initialization failed; using plain textarea.", error);
    }
  })();

  try {
    await richTextReinitPromise;
  } finally {
    richTextReinitPromise = null;
  }
}

async function refreshContentEditorAppearance() {
  if (!richTextEditor || !window.tinymce) return;

  const selectedTemplate = getTemplateById(state.selectedTemplateId);
  const templateFonts = resolveEditorFonts(selectedTemplate);
  const nextSignature = buildEditorConfigSignature(state.resolvedTheme, templateFonts);
  if (richTextConfigSignature === nextSignature) return;

  const preservedContent = normalizeEditorHtml(richTextEditor.getContent({ format: "html" }));
  state.fields.content = preservedContent;
  richTextEditor.remove();
  richTextEditor = null;
  richTextConfigSignature = null;

  await initContentEditor({ initialContent: preservedContent });
}

function buildEditorConfigSignature(resolvedTheme, fonts) {
  return `${resolvedTheme}|${fonts.body}|${fonts.headings}`;
}

function resolveEditorFonts(template) {
  const defaults = {
    body: '"Helvetica Neue", Arial, sans-serif',
    headings: '"Helvetica Neue", Arial, sans-serif',
  };

  const fromTemplate = template?.editorFonts || {};
  const body = String(fromTemplate.body || defaults.body).trim();
  const headings = String(fromTemplate.headings || fromTemplate.body || defaults.headings).trim();
  return { body, headings };
}

function buildTinyFontFamilyFormats(fonts) {
  return [
    `Template Body=${fonts.body}`,
    `Template Headings=${fonts.headings}`,
    "Arial=arial,helvetica,sans-serif",
    "Georgia=georgia,palatino,serif",
    "Tahoma=tahoma,arial,sans-serif",
    "Verdana=verdana,geneva,sans-serif",
    "Courier New=courier new,courier,monospace",
    "Times New Roman=times new roman,times,serif",
    "Trebuchet MS=trebuchet ms,helvetica,sans-serif",
  ].join(";");
}

function buildTinyContentStyle(isDark, fonts) {
  const palette = isDark
    ? {
        bg: "#17212b",
        text: "#e8eef5",
        muted: "#b5c4d4",
        border: "#3c5267",
        quoteBg: "#1f2d3a",
      }
    : {
        bg: "#ffffff",
        text: "#1f2937",
        muted: "#5b6b7d",
        border: "#d2dce8",
        quoteBg: "#f5f8fc",
      };

  return `
    body {
      font-family: ${fonts.body};
      font-size: 16px;
      line-height: 1.6;
      color: ${palette.text};
      background: ${palette.bg};
      margin: 14px;
    }

    p { margin: 0 0 12px; }
    h1,h2,h3,h4 {
      margin: 0 0 10px;
      line-height: 1.35;
      color: ${palette.text};
      font-family: ${fonts.headings};
    }
    ul,ol { margin: 0 0 12px 22px; }
    blockquote {
      margin: 12px 0;
      padding: 10px 12px;
      border-left: 3px solid ${palette.border};
      background: ${palette.quoteBg};
      color: ${palette.muted};
      font-style: italic;
    }
    a { color: ${isDark ? "#7cc4ff" : "#0b65c6"}; }
    table { border-collapse: collapse; width: 100%; margin: 12px 0; }
    th,td { border: 1px solid ${palette.border}; padding: 8px; text-align: left; }
    hr { border: 0; border-top: 1px solid ${palette.border}; margin: 14px 0; }
  `;
}

function buildTinyStyleFormats() {
  return [
    {
      title: "Mail - lead",
      block: "p",
      styles: {
        "font-size": "18px",
        "font-weight": "600",
        "line-height": "1.55",
        margin: "0 0 14px 0",
      },
    },
    {
      title: "Mail - normalny akapit",
      block: "p",
      styles: {
        "font-size": "16px",
        "line-height": "1.6",
        margin: "0 0 12px 0",
      },
    },
    {
      title: "Mail - mała notka",
      block: "p",
      styles: {
        "font-size": "13px",
        color: "#6b7280",
        "line-height": "1.5",
      },
    },
    {
      title: "Mail - cytat",
      block: "blockquote",
      styles: {
        margin: "12px 0",
        padding: "10px 12px",
        "border-left": "3px solid #94a3b8",
        "font-style": "italic",
      },
    },
    {
      title: "Mail - przycisk CTA (link)",
      selector: "a",
      styles: {
        display: "inline-block",
        padding: "10px 14px",
        "background-color": "#1d4ed8",
        color: "#ffffff",
        "text-decoration": "none",
        "border-radius": "8px",
        "font-weight": "600",
      },
    },
  ];
}

function detectInitialLanguage() {
  const saved = normalizeLanguage(localStorage.getItem(STORAGE_KEYS.language));
  if (saved) return saved;

  const browserLangs = Array.isArray(navigator.languages)
    ? navigator.languages
    : [navigator.language || "pl"];

  for (const lang of browserLangs) {
    const normalized = normalizeLanguage(lang);
    if (normalized) {
      return normalized;
    }
  }

  return "pl";
}

function normalizeLanguage(language) {
  if (!language) return null;
  const lower = String(language).toLowerCase();
  if (lower.startsWith("pl")) return "pl";
  if (lower.startsWith("en")) return "en";
  if (lower.startsWith("uk") || lower.startsWith("ua")) return "uk";
  return null;
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

  ui.templatesTitle.textContent = t("templatesTitle");
  ui.mobileTemplateLabel.textContent = t("mobileTemplateLabel");
  ui.mobileTemplateSelect.setAttribute("aria-label", t("mobileTemplateAria"));
  ui.templateSearch.placeholder = t("templateSearchPlaceholder");
  ui.templateList.setAttribute("aria-label", t("templateListAria"));

  ui.editorTitle.textContent = t("editorTitle");
  ui.fieldToLabel.textContent = t("fieldToLabel");
  ui.fieldTo.placeholder = t("fieldToPlaceholder");
  ui.fieldCcLabel.textContent = t("fieldCcLabel");
  ui.fieldCc.placeholder = t("fieldCcPlaceholder");
  ui.fieldBccLabel.textContent = t("fieldBccLabel");
  ui.fieldBcc.placeholder = t("fieldBccPlaceholder");
  ui.fieldReplyToLabel.textContent = t("fieldReplyToLabel");
  ui.fieldReplyTo.placeholder = t("fieldReplyToPlaceholder");
  ui.fieldSubjectLabel.textContent = t("fieldSubjectLabel");
  ui.fieldSubject.placeholder = t("fieldSubjectPlaceholder");
  ui.fieldContentLabel.textContent = t("fieldContentLabel");
  ui.fieldContent.placeholder = t("fieldContentPlaceholder");
  if (richTextEditor) {
    try {
      richTextEditor.options?.set?.("placeholder", t("fieldContentPlaceholder"));
    } catch (error) {
      console.warn("Could not update TinyMCE placeholder", error);
    }
  }
  ui.toggleCcLabel.textContent = t("toggleCcLabel");
  ui.toggleBccLabel.textContent = t("toggleBccLabel");
  ui.toggleReplyToLabel.textContent = t("toggleReplyToLabel");
  ui.toggleSubjectLabel.textContent = t("toggleSubjectLabel");
  ui.toggleContentLabel.textContent = t("toggleContentLabel");
  ui.replyModeLabel.textContent = t("toggleQuoteLabel");
  ui.toggleDateLabel.textContent = t("toggleDateLabel");
  ui.toggleDateHint.textContent = t("toggleDateHint");
  ui.toggleTimeLabel.textContent = t("toggleTimeLabel");
  ui.toggleTimeHint.textContent = t("toggleTimeHint");
  ui.fieldQuoteLabel.textContent = t("fieldQuoteLabel");
  ui.fieldQuote.placeholder = t("fieldQuotePlaceholder");
  ui.fieldSignatureLabel.textContent = t("fieldSignatureLabel");
  ui.fieldSignatureName.placeholder = t("fieldSignaturePlaceholder");
  ui.rememberDraftLabel.textContent = t("rememberDraftLabel");
  ui.mutedNote.innerHTML = t("mutedNoteHtml");

  ui.previewTitle.textContent = t("previewTitle");
  ui.previewFrame.title = t("previewFrameTitle");
  ui.openPreviewModalBtn.textContent = t("openPreviewButton");
  updateMobilePreviewToggleButton();
  ui.previewModalTitle.textContent = t("previewTitle");
  ui.previewModalFrame.title = t("previewFrameTitle");

  ui.attachmentsTitle.textContent = t("attachmentsTitle");
  ui.addFilesBtn.textContent = t("addFilesButton");
  ui.dropZone.textContent = t("dropZoneText");
  ui.dropZone.setAttribute("aria-label", t("dropZoneAria"));

  ui.footerNote.innerHTML = t("footerNoteHtml");
  ui.infoBtn.setAttribute("aria-label", t("infoButtonAria"));
  ui.infoModalTitle.textContent = t("infoModalTitle");
  ui.infoModalClose.setAttribute("aria-label", t("infoModalCloseAria"));
  ui.infoModalList.innerHTML = "";
  ["infoLine1", "infoLine2", "infoLine3", "infoLine4"].forEach((key) => {
    const item = document.createElement("li");
    item.textContent = t(key);
    ui.infoModalList.append(item);
  });

  validateAddressFields();

  updateExportButtonLabel();

  if (state.templates.length) {
    renderTemplateList();
    renderPreview();
  }
  renderAttachments();
}

function setSelectOptionLabel(selectElement, value, text) {
  const option = selectElement.querySelector(`option[value="${value}"]`);
  if (option) {
    option.textContent = text;
  }
}

function languageFlag(lang) {
  return LANGUAGE_FLAGS[lang] || "🏳️";
}

function updateLanguageMenuUi() {
  ui.languageFlag.textContent = languageFlag(state.language);

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

function updateExportButtonLabel() {
  ui.exportBtn.textContent =
    state.isExporting && state.exportAction === "save" ? t("exportBusy") : t("exportButton");
  ui.shareBtn.textContent =
    state.isExporting && state.exportAction === "share" ? t("shareBusy") : t("shareButton");
}

function applySystemTheme() {
  state.resolvedTheme = themeMedia.matches ? "dark" : "light";
  document.documentElement.dataset.themeMode = "auto";
  document.documentElement.dataset.resolvedTheme = state.resolvedTheme;
  if (richTextEditor) {
    void refreshContentEditorAppearance();
  }
}

function openInfoModal() {
  ui.infoModal.hidden = false;
  syncBodyModalState();
}

function closeInfoModal() {
  ui.infoModal.hidden = true;
  syncBodyModalState();
}

function openPreviewModal() {
  ui.previewModal.hidden = false;
  syncBodyModalState();
  renderPreview();
  ui.previewModalClose?.focus();
}

function closePreviewModal() {
  ui.previewModal.hidden = true;
  syncBodyModalState();
}

function syncMobilePreviewMode() {
  if (!mobileLayoutMedia.matches) {
    state.mobilePreviewOpen = false;
  }

  const mobilePreviewOpen = mobileLayoutMedia.matches && state.mobilePreviewOpen;
  document.body.classList.toggle("mobile-preview-open", mobilePreviewOpen);
  updateMobilePreviewToggleButton();

  if (mobilePreviewOpen) {
    closePreviewModal();
    renderPreview();
  }
}

function updateMobilePreviewToggleButton() {
  if (!ui.openPreviewModalTopBtn) return;
  const isOpen = mobileLayoutMedia.matches && state.mobilePreviewOpen;
  ui.openPreviewModalTopBtn.textContent = isOpen ? t("closePreviewButton") : t("openPreviewButton");
  ui.openPreviewModalTopBtn.setAttribute("aria-pressed", isOpen ? "true" : "false");
}

function syncBodyModalState() {
  const modalOpen = !ui.infoModal.hidden || !ui.previewModal.hidden;
  document.body.classList.toggle("modal-open", modalOpen);
}

function restoreDraft() {
  const raw = localStorage.getItem(STORAGE_KEYS.draft);
  if (!raw) return;

  try {
    const saved = JSON.parse(raw);
    state.rememberDraft = Boolean(saved.rememberDraft);
    state.fields.to = saved.fields?.to || "";
    state.fields.cc = saved.fields?.cc || "";
    state.fields.bcc = saved.fields?.bcc || "";
    state.fields.replyTo = saved.fields?.replyTo || "";
    state.fields.subject = saved.fields?.subject || "";
    state.fields.content = saved.fields?.content || "";
    state.fields.quote = saved.fields?.quote || "";
    state.fields.signatureName = saved.fields?.signatureName || "";
    state.enabled = {
      ...OPTIONAL_FIELD_DEFAULTS,
      ...(saved.enabled || {}),
    };
    state.enabled.to = true;
    state.enabled.signatureName = true;

    if (saved.isReply !== undefined && saved.enabled?.quote === undefined) {
      state.enabled.quote = Boolean(saved.isReply);
    }

    if (saved.selectedTemplateId) {
      state.selectedTemplateId = saved.selectedTemplateId;
    }

    const draftLanguage = normalizeLanguage(saved.language);
    if (draftLanguage) {
      state.language = draftLanguage;
    }
  } catch (error) {
    console.warn("Could not restore draft", error);
    localStorage.removeItem(STORAGE_KEYS.draft);
  }
}

function saveDraft() {
  const draft = {
    rememberDraft: state.rememberDraft,
    selectedTemplateId: state.selectedTemplateId,
    language: state.language,
    enabled: { ...state.enabled },
    fields: { ...state.fields },
  };
  localStorage.setItem(STORAGE_KEYS.draft, JSON.stringify(draft));
}

function maybeSaveDraft() {
  if (state.rememberDraft) {
    saveDraft();
  }
}

function syncFieldInputs() {
  state.enabled.to = true;
  state.enabled.signatureName = true;
  ui.rememberDraft.checked = state.rememberDraft;
  ui.toggleCc.checked = Boolean(state.enabled.cc);
  ui.toggleBcc.checked = Boolean(state.enabled.bcc);
  ui.toggleReplyTo.checked = Boolean(state.enabled.replyTo);
  ui.toggleSubject.checked = Boolean(state.enabled.subject);
  ui.toggleContent.checked = Boolean(state.enabled.content);
  ui.replyMode.checked = Boolean(state.enabled.quote);
  ui.toggleDate.checked = Boolean(state.enabled.date);
  ui.toggleTime.checked = Boolean(state.enabled.time);
  ui.fieldTo.value = state.fields.to;
  ui.fieldCc.value = state.fields.cc;
  ui.fieldBcc.value = state.fields.bcc;
  ui.fieldReplyTo.value = state.fields.replyTo;
  ui.fieldSubject.value = state.fields.subject;
  ui.fieldContent.value = state.fields.content;
  ui.fieldQuote.value = state.fields.quote;
  ui.fieldSignatureName.value = state.fields.signatureName;
  applyTemplateFieldVisibility();
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

  if (!state.selectedTemplateId || !state.templates.some((tpl) => tpl.id === state.selectedTemplateId)) {
    state.selectedTemplateId = state.templates[0]?.id || null;
  }

  renderTemplateList();

  if (state.selectedTemplateId) {
    await selectTemplate(state.selectedTemplateId);
  }
}

function renderTemplateList() {
  const sortedTemplates = [...state.templates].sort((a, b) =>
    localizedTemplateName(a).localeCompare(localizedTemplateName(b), state.language)
  );

  renderMobileTemplateOptions(sortedTemplates);

  ui.templateList.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const visibleTemplates = sortedTemplates.filter((template) => {
    if (!state.searchQuery) return true;
    const haystack = `${localizedTemplateName(template)} ${localizedTemplateDescription(template)}`.toLowerCase();
    return haystack.includes(state.searchQuery);
  });

  if (!visibleTemplates.length) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = t("templateSearchEmpty");
    fragment.append(empty);
    ui.templateList.append(fragment);
    return;
  }

  visibleTemplates.forEach((template) => {
    const item = document.createElement("li");
    item.className = "template-item";
    item.tabIndex = 0;
    if (template.id === state.selectedTemplateId) {
      item.classList.add("active");
    }

    item.innerHTML = `
      <div class="template-row">
        <div class="template-name"></div>
        <span class="theme-dot" aria-hidden="true"></span>
      </div>
      <div class="template-desc"></div>
    `;

    item.querySelector(".template-name").textContent = localizedTemplateName(template) || template.id;
    item.querySelector(".template-desc").textContent = localizedTemplateDescription(template);
    item.querySelector(".theme-dot").style.background = template.theme?.accent || "#2e7dff";

    const activate = async () => {
      await selectTemplate(template.id);
    };

    item.addEventListener("click", activate);
    item.addEventListener("keydown", async (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        await activate();
      }
    });

    fragment.append(item);
  });

  ui.templateList.append(fragment);
}

function renderMobileTemplateOptions(templates) {
  ui.mobileTemplateSelect.innerHTML = "";
  templates.forEach((template) => {
    const option = document.createElement("option");
    option.value = template.id;
    option.textContent = localizedTemplateName(template);
    ui.mobileTemplateSelect.append(option);
  });

  if (state.selectedTemplateId) {
    ui.mobileTemplateSelect.value = state.selectedTemplateId;
  }
}

function localizedTemplateName(template) {
  return localizedTemplateField(template, "name") || template.id;
}

function localizedTemplateDescription(template) {
  return localizedTemplateField(template, "description") || "";
}

function localizedTemplateField(template, fieldName) {
  const fromI18n = template?.i18n?.[state.language]?.[fieldName];
  if (typeof fromI18n === "string" && fromI18n.trim()) {
    return fromI18n;
  }

  const fromFallback = template?.[fieldName];
  if (typeof fromFallback === "string" && fromFallback.trim()) {
    return fromFallback;
  }

  return "";
}

async function selectTemplate(templateId) {
  const template = getTemplateById(templateId);
  if (!template) return;

  state.selectedTemplateId = template.id;
  await ensureTemplateMarkup(template);
  applyTemplateFieldVisibility();
  ui.mobileTemplateSelect.value = template.id;
  await refreshContentEditorAppearance();
  ui.previewTemplateName.textContent = localizedTemplateName(template);

  renderTemplateList();
  renderPreview();
  renderAttachments();
  maybeSaveDraft();
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

function applyTemplateFieldVisibility() {
  state.enabled.to = true;
  state.enabled.signatureName = true;

  ui.fields.forEach((node) => {
    const field = node.dataset.field;
    const enabled = field === "to" || field === "signatureName" ? true : Boolean(state.enabled[field]);

    node.hidden = false;
    node.classList.toggle("is-disabled", !enabled);

    node.querySelectorAll("input, textarea, select").forEach((control) => {
      control.disabled = !enabled;
      control.setAttribute("aria-disabled", !enabled ? "true" : "false");
    });

    const row = node.closest(".field-toggle-row");
    if (row) {
      row.classList.toggle("is-disabled", !enabled);
    }
  });

  if (richTextEditor) {
    richTextEditor.mode?.set?.(state.enabled.content ? "design" : "readonly");
  }
}

function getTemplateById(templateId) {
  return state.templates.find((template) => template.id === templateId) || null;
}

function setFrameSrcdoc(frame, html) {
  if (!frame) return;
  const nextHtml = html || "";
  if (frameSrcdocCache.get(frame) === nextHtml) {
    return;
  }
  frame.srcdoc = nextHtml;
  frameSrcdocCache.set(frame, nextHtml);
}

function renderPreview() {
  const template = getTemplateById(state.selectedTemplateId);
  if (!template) {
    setFrameSrcdoc(ui.previewFrame, "");
    setFrameSrcdoc(ui.previewModalFrame, "");
    ui.previewFields.innerHTML = "";
    ui.previewTemplateName.textContent = "";
    return;
  }

  const rawMarkup = state.templateMarkup.get(template.id);
  if (!rawMarkup) {
    return;
  }

  const shouldSyncModal = !ui.previewModal.hidden;
  const html = buildTemplateHtml(rawMarkup, template, {
    forceMode: null,
    showPlaceholders: true,
  });
  setFrameSrcdoc(ui.previewFrame, html);

  if (shouldSyncModal) {
    setFrameSrcdoc(ui.previewModalFrame, html);
  }

  renderPreviewFields();
  ui.previewTemplateName.textContent = localizedTemplateName(template);
}

function formatCurrentDateValue() {
  return new Intl.DateTimeFormat(t("dateLocale"), {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());
}

function formatCurrentTimeValue() {
  return new Intl.DateTimeFormat(t("dateLocale"), {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

function buildSentAtValue(options = {}) {
  const withPrefix = options.withPrefix !== false;
  const showDate = Boolean(state.enabled.date);
  const showTime = Boolean(state.enabled.time);
  if (!showDate && !showTime) {
    return "";
  }

  const dateValue = showDate ? formatCurrentDateValue() : "";
  const timeValue = showTime ? formatCurrentTimeValue() : "";

  let core = "";
  if (dateValue && timeValue) {
    core = `${dateValue} (${t("sentAtTimePrefix")} ${timeValue})`;
  } else if (dateValue) {
    core = dateValue;
  } else {
    core = `${t("sentAtTimePrefix")} ${timeValue}`;
  }

  return withPrefix ? `${t("sentAtPrefix")}: ${core}` : core;
}

function buildAttachmentsPreviewValue() {
  if (!state.attachments.length) {
    return "";
  }

  const totalBytes = state.attachments.reduce((sum, item) => sum + item.file.size, 0);
  const maxNames = 3;
  const names = state.attachments.slice(0, maxNames).map((item) => item.file.name);
  const remaining = state.attachments.length - names.length;
  const namesValue = remaining > 0 ? `${names.join(", ")} +${remaining}` : names.join(", ");

  return `${formatFileCount(state.attachments.length)} (${formatBytes(totalBytes)}): ${namesValue}`;
}

function buildPreviewRows(options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);
  const sentAtValue = buildSentAtValue({ withPrefix: false });
  const contentText = richHtmlToPlainText(state.fields.content);
  const quoteText = normalizeMultilineText(state.fields.quote);
  const signatureText = normalizeInlineText(state.fields.signatureName);
  const attachmentsValue = buildAttachmentsPreviewValue();

  const rows = [
    {
      key: "to",
      visible: state.enabled.to,
      label: t("fieldToShort"),
      value: normalizeInlineText(state.fields.to),
      placeholder: ui.fieldTo.placeholder,
    },
    {
      key: "cc",
      visible: state.enabled.cc,
      label: t("fieldCcShort"),
      value: normalizeInlineText(state.fields.cc),
      placeholder: ui.fieldCc.placeholder,
    },
    {
      key: "bcc",
      visible: state.enabled.bcc,
      label: t("fieldBccShort"),
      value: normalizeInlineText(state.fields.bcc),
      placeholder: ui.fieldBcc.placeholder,
    },
    {
      key: "replyTo",
      visible: state.enabled.replyTo,
      label: t("fieldReplyToShort"),
      value: normalizeInlineText(state.fields.replyTo),
      placeholder: ui.fieldReplyTo.placeholder,
    },
    {
      key: "subject",
      visible: state.enabled.subject,
      label: t("fieldSubjectShort"),
      value: normalizeInlineText(state.fields.subject),
      placeholder: ui.fieldSubject.placeholder,
    },
    {
      key: "content",
      visible: state.enabled.content,
      label: t("fieldContentLabel"),
      value: contentText,
      placeholder: ui.fieldContent.placeholder,
    },
    {
      key: "quote",
      visible: state.enabled.quote,
      label: t("fieldQuoteShort"),
      value: quoteText,
      placeholder: ui.fieldQuote.placeholder,
    },
    {
      key: "signatureName",
      visible: state.enabled.signatureName,
      label: t("fieldSignatureShort"),
      value: signatureText,
      placeholder: ui.fieldSignatureName.placeholder,
    },
    {
      key: "sentAt",
      visible: state.enabled.date || state.enabled.time,
      label: t("fieldSentAtShort"),
      value: sentAtValue,
      placeholder: sentAtValue,
    },
    {
      key: "attachments",
      visible: true,
      label: t("attachmentsTitle"),
      value: attachmentsValue,
      placeholder: t("attachmentsEmpty"),
    },
  ];

  return rows.map((row) => {
    const hasValue = Boolean(row.value);
    return {
      ...row,
      displayValue: hasValue ? row.value : showPlaceholders ? row.placeholder : "",
      isPlaceholder: !hasValue && showPlaceholders,
    };
  });
}

function buildEnvelopeRows(options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);
  const previewRows = buildPreviewRows({ showPlaceholders });
  const envelopeKeys = new Set(["to", "cc", "bcc", "replyTo", "subject", "sentAt", "attachments"]);
  return previewRows.filter((row) => envelopeKeys.has(row.key));
}

function renderPreviewFields() {
  ui.previewFields.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const rows = buildPreviewRows({ showPlaceholders: true });

  rows
    .filter((row) => row.visible)
    .forEach((row) => {
      const rowNode = document.createElement("div");
      rowNode.className = "preview-field-row";

      const label = document.createElement("span");
      label.className = "preview-field-label";
      label.textContent = row.label;

      const value = document.createElement("span");
      value.className = "preview-field-value";

      if (row.displayValue) {
        value.textContent = row.displayValue;
        if (row.isPlaceholder) {
          value.classList.add("placeholder");
        }
      } else {
        value.textContent = "";
      }

      rowNode.append(label, value);
      fragment.append(rowNode);
    });

  ui.previewFields.append(fragment);
}

function buildTemplateHtml(rawMarkup, template, options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);
  const contentEnabled = Boolean(state.enabled.content);
  const contentHtmlRaw = contentEnabled ? normalizeEditorHtml(state.fields.content) : "";
  const hasContent = Boolean(contentHtmlRaw);
  const contentHtml = hasContent
    ? contentHtmlRaw
    : contentEnabled && showPlaceholders
      ? `<p class="app-placeholder">${escapeHtml(ui.fieldContent.placeholder)}</p>`
      : "";
  const signatureHtml = buildSignatureBlockHtml({ showPlaceholders });
  const quoteText = normalizeMultilineText(state.fields.quote);
  const quoteHtml = quoteText ? plainTextToInlineHtml(quoteText) : "";
  const quotePreviewHtml =
    quoteHtml || (showPlaceholders ? escapeHtml(ui.fieldQuote.placeholder).replace(/\n/g, "<br>") : "");
  const hasQuote = state.enabled.quote && Boolean(quoteHtml || showPlaceholders);
  const timeValue = formatCurrentTimeValue();
  const sentAtValue = buildSentAtValue({ withPrefix: true });
  const dateTokenValue = state.enabled.date || state.enabled.time ? sentAtValue : "";
  const timeTokenValue = state.enabled.time ? timeValue : "";

  const replacements = {
    content_block: contentHtml,
    signature_block: signatureHtml,
    greeting: escapeHtml(t("greeting")),
    date: escapeHtml(dateTokenValue),
    time: escapeHtml(timeTokenValue),
    template_title: escapeHtml(t("templateHeader")),
    reply_header: escapeHtml(state.enabled.quote ? t("replyHeader") : t("templateHeader")),
    quote_label: escapeHtml(t("quoteLabel")),
    quote_placeholder: hasQuote ? quotePreviewHtml : "",
  };

  const withTokens = rawMarkup.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (_, key) => {
    return Object.prototype.hasOwnProperty.call(replacements, key) ? replacements[key] : "";
  });

  const parser = new DOMParser();
  const doc = parser.parseFromString(withTokens, "text/html");
  const root = doc.documentElement;

  root.classList.remove("forced-light", "forced-dark");
  if (options.forceMode === "light") root.classList.add("forced-light");
  if (options.forceMode === "dark") root.classList.add("forced-dark");

  if (!contentEnabled || (!hasContent && !showPlaceholders)) {
    doc.querySelectorAll("[data-optional-content]").forEach((node) => node.remove());
  }

  const signatureText = normalizeInlineText(state.fields.signatureName);
  if (!state.enabled.signatureName || (!signatureText && !showPlaceholders)) {
    doc.querySelectorAll("[data-optional-signature]").forEach((node) => node.remove());
  }

  if (!state.enabled.quote || (!quoteText && !showPlaceholders)) {
    doc.querySelectorAll("[data-optional-quote]").forEach((node) => node.remove());
  } else {
    const quoteNodes = [...doc.querySelectorAll("[data-optional-quote]")];
    if (quoteNodes.length) {
      quoteNodes.forEach((node) => {
        const blockquote = node.querySelector("blockquote");
        if (blockquote) {
          blockquote.innerHTML = quotePreviewHtml;
        } else {
          const fallbackBlockquote = doc.createElement("blockquote");
          fallbackBlockquote.innerHTML = quotePreviewHtml;
          node.append(fallbackBlockquote);
        }
      });
    } else {
      injectFallbackQuoteBlock(doc, quotePreviewHtml);
    }
  }

  if (showPlaceholders) {
    injectTemplateEnvelopePreview(doc);
  }

  const accent = template.theme?.accent || "#2e7dff";
  const themeStyle = doc.createElement("style");
  themeStyle.textContent = `
    :root {
      --template-accent: ${accent};
      --app-readable-text: #1b2733;
      --app-readable-muted: #556a7d;
    }

    @media (prefers-color-scheme: dark) {
      html:not(.forced-light) {
        --app-readable-text: #e7eef6;
        --app-readable-muted: #b5c4d4;
      }
    }

    html.forced-light {
      --app-readable-text: #1b2733;
      --app-readable-muted: #556a7d;
    }

    html.forced-dark {
      --app-readable-text: #e7eef6;
      --app-readable-muted: #b5c4d4;
    }

    body {
      color: var(--app-readable-text);
    }

    p,
    li,
    td,
    .mail-content,
    .section {
      color: inherit;
    }

    .signature,
    .quote-label,
    .mail-head,
    .fallback-quote-label,
    .fallback-quote-block blockquote {
      color: var(--app-readable-muted);
    }

    .app-placeholder {
      color: var(--app-readable-muted);
      font-style: italic;
    }

    .app-envelope-preview {
      max-width: 700px;
      margin: 0 auto 12px;
      border: 1px solid #cdd8e2;
      border-radius: 10px;
      background: #f5f8fc;
      padding: 10px 12px;
      display: grid;
      gap: 6px;
      font-size: 13px;
    }

    .app-envelope-row {
      display: grid;
      grid-template-columns: 90px 1fr;
      gap: 8px;
      align-items: baseline;
    }

    .app-envelope-label {
      color: var(--app-readable-muted);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      font-size: 11px;
    }

    .app-envelope-value {
      color: var(--app-readable-text);
      word-break: break-word;
      white-space: pre-wrap;
    }

    .app-envelope-value.placeholder {
      color: var(--app-readable-muted);
      font-style: italic;
    }

    html.forced-dark .app-envelope-preview {
      border-color: #3a4f65;
      background: #1b2733;
    }

    .signature-name,
    strong,
    h1,
    h2,
    h3 {
      color: var(--app-readable-text);
    }

    .fallback-quote-block {
      margin-top: 20px;
      border: 1px solid #cdd8e2;
      border-left: 4px solid var(--template-accent);
      border-radius: 8px;
      background: #f5f8fc;
      padding: 12px 14px;
    }

    html.forced-dark .fallback-quote-block {
      border-color: #3a4f65;
      background: #1b2733;
    }

    .fallback-quote-label {
      margin: 0 0 8px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 600;
    }

    .fallback-quote-block blockquote {
      margin: 0;
      padding-left: 10px;
      border-left: 2px solid var(--template-accent);
      font-style: italic;
    }
  `;
  doc.head.append(themeStyle);

  return `<!doctype html>\n${doc.documentElement.outerHTML}`;
}

function injectTemplateEnvelopePreview(doc) {
  const rows = buildEnvelopeRows({ showPlaceholders: true }).filter((row) => row.visible);
  if (!rows.length) {
    return;
  }

  const block = doc.createElement("section");
  block.className = "app-envelope-preview";

  rows.forEach((row) => {
    const rowNode = doc.createElement("div");
    rowNode.className = "app-envelope-row";

    const label = doc.createElement("span");
    label.className = "app-envelope-label";
    label.textContent = row.label;

    const value = doc.createElement("span");
    value.className = "app-envelope-value";
    value.textContent = row.displayValue || "";
    if (row.isPlaceholder) {
      value.classList.add("placeholder");
    }

    rowNode.append(label, value);
    block.append(rowNode);
  });

  const firstWrapper =
    doc.querySelector(".mail-wrap") ||
    doc.querySelector(".wrapper") ||
    doc.querySelector("main") ||
    doc.body;

  firstWrapper.prepend(block);
}

function injectFallbackQuoteBlock(doc, quoteHtml) {
  const quoteBlock = doc.createElement("section");
  quoteBlock.className = "fallback-quote-block";
  quoteBlock.innerHTML = `
    <p class="fallback-quote-label">${escapeHtml(t("quoteLabel"))}</p>
    <blockquote>${quoteHtml}</blockquote>
  `;

  const signatureNode = doc.querySelector("[data-optional-signature]");
  if (signatureNode?.parentNode) {
    signatureNode.parentNode.insertBefore(quoteBlock, signatureNode);
    return;
  }

  const contentTarget =
    doc.querySelector(".mail-content") ||
    doc.querySelector(".section") ||
    doc.querySelector("article") ||
    doc.body;

  contentTarget.append(quoteBlock);
}

function buildSignatureBlockHtml(options = {}) {
  const showPlaceholders = Boolean(options.showPlaceholders);
  if (!state.enabled.signatureName) {
    return "";
  }

  const signatureName = normalizeInlineText(state.fields.signatureName);
  if (!signatureName && !showPlaceholders) {
    return "";
  }

  if (!signatureName) {
    return `${escapeHtml(t("closing"))}<div class="signature-name app-placeholder">${escapeHtml(
      ui.fieldSignatureName.placeholder
    )}</div>`;
  }

  return `${escapeHtml(t("closing"))}<div class="signature-name">${escapeHtml(signatureName)}</div>`;
}

function normalizeEditorHtml(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return "";
  }

  if (!/[<>]/.test(raw)) {
    return plainTextToSafeHtml(raw);
  }

  return sanitizeRichHtml(raw);
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
        if (cleanStyle) {
          element.setAttribute("style", cleanStyle);
        }
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

      if (tag === "img" && ["alt", "width", "height", "title"].includes(attrName)) {
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
    "font-family",
    "font-size",
    "font-weight",
    "font-style",
    "font-variant",
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

function richHtmlToPlainText(value) {
  const html = normalizeEditorHtml(value);
  if (!html) {
    return "";
  }

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

function plainTextToSafeHtml(text) {
  const normalized = normalizeMultilineText(text);
  if (!normalized) {
    return "";
  }

  return normalized
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br>")}</p>`)
    .join("\n");
}

function plainTextToInlineHtml(text) {
  const normalized = normalizeMultilineText(text);
  if (!normalized) {
    return "";
  }

  return escapeHtml(normalized).replace(/\n/g, "<br>");
}

function normalizeMultilineText(value) {
  return String(value || "").replace(/\r\n?/g, "\n").trim();
}

function normalizeInlineText(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clearAddressValidation() {
  ui.addressValidation.textContent = "";
  [ui.fieldTo, ui.fieldCc, ui.fieldBcc, ui.fieldReplyTo, ui.fieldSignatureName].forEach((input) => {
    input.setAttribute("aria-invalid", "false");
  });
}

function validateAddressFields() {
  clearAddressValidation();
  const issues = [];
  const toAddresses = parseAddressList(state.fields.to);
  const toInvalid = toAddresses.filter((address) => !isValidEmailAddress(address));

  if (!toAddresses.length) {
    ui.fieldTo.setAttribute("aria-invalid", "true");
    issues.push(t("requiredToMissing"));
  } else if (toInvalid.length) {
    ui.fieldTo.setAttribute("aria-invalid", "true");
    issues.push(`${t("fieldToShort")}: ${[...new Set(toInvalid)].join(", ")}`);
  }

  const optionalAddressDefinitions = [
    { key: "cc", shortLabelKey: "fieldCcShort", input: ui.fieldCc },
    { key: "bcc", shortLabelKey: "fieldBccShort", input: ui.fieldBcc },
    { key: "replyTo", shortLabelKey: "fieldReplyToShort", input: ui.fieldReplyTo },
  ];

  optionalAddressDefinitions.forEach((definition) => {
    if (!state.enabled[definition.key]) return;

    const addresses = parseAddressList(state.fields[definition.key]);
    const invalid = addresses.filter((address) => !isValidEmailAddress(address));

    if (definition.key === "replyTo" && addresses.length > 1) {
      if (!issues.includes(t("replyToSingleAddress"))) {
        issues.push(t("replyToSingleAddress"));
      }
      definition.input.setAttribute("aria-invalid", "true");
    }

    if (invalid.length) {
      definition.input.setAttribute("aria-invalid", "true");
      issues.push(`${t(definition.shortLabelKey)}: ${[...new Set(invalid)].join(", ")}`);
    }
  });

  if (!normalizeInlineText(state.fields.signatureName)) {
    ui.fieldSignatureName.setAttribute("aria-invalid", "true");
    issues.push(t("requiredSignatureMissing"));
  }

  if (!issues.length) {
    return true;
  }

  ui.addressValidation.textContent = `${t("addressValidationPrefix")} ${issues.join("; ")}`;
  return false;
}

function parseAddressList(rawValue) {
  return String(rawValue || "")
    .split(/[;,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function isValidEmailAddress(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(email);
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

  renderPreview();
  renderAttachments();
}

function detectFileKind(file) {
  if (file.type.startsWith("image/")) return "image";
  if (file.type === "application/pdf") return "pdf";
  if (file.type.startsWith("audio/")) return "audio";
  if (file.type.startsWith("video/")) return "video";
  return "file";
}

function renderAttachments() {
  ui.attachmentList.innerHTML = "";

  if (!state.attachments.length) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = t("attachmentsEmpty");
    ui.attachmentList.append(empty);
  } else {
    const fragment = document.createDocumentFragment();

    state.attachments.forEach((attachment) => {
      const tile = document.createElement("li");
      tile.className = "attachment-tile";

      const visual = document.createElement("div");
      visual.className = "attachment-visual";

      if (attachment.kind === "image") {
        const img = document.createElement("img");
        img.src = attachment.previewUrl;
        img.alt = attachment.file.name;
        visual.append(img);
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

  const totalBytes = state.attachments.reduce((sum, item) => sum + item.file.size, 0);
  const estimatedBytes = estimateExportSizeBytes();

  ui.attachmentCount.textContent = formatFileCount(state.attachments.length);
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
      htmlBytes = new TextEncoder().encode(buildTemplateHtml(markup, template, { forceMode: null })).length;
    }
  }

  const plainBytes = new TextEncoder().encode(buildPlainTextBody()).length;
  const attachmentBytes = state.attachments.reduce((sum, attachment) => {
    return sum + estimateBase64TransferBytes(attachment.file.size) + 260;
  }, 0);

  const messageOverhead = 1800;
  return (
    messageOverhead +
    estimateBase64TransferBytes(plainBytes) +
    estimateBase64TransferBytes(htmlBytes) +
    attachmentBytes
  );
}

function estimateBase64TransferBytes(rawBytes) {
  if (!rawBytes || rawBytes <= 0) return 0;

  const encodedBytes = Math.ceil(rawBytes / 3) * 4;
  const lineBreakBytes = Math.floor(Math.max(encodedBytes - 1, 0) / 76) * 2;
  return encodedBytes + lineBreakBytes;
}

function formatFileCount(count) {
  const forms = (I18N[state.language] || I18N.pl).fileWordForms || I18N.pl.fileWordForms;
  const pluralRule = new Intl.PluralRules(state.language).select(count);
  const word = forms[pluralRule] || forms.other || forms.many || forms.one;
  return `${count} ${word}`;
}

function fileKindLabel(kind) {
  switch (kind) {
    case "pdf":
      return "PDF";
    case "audio":
      return "AUDIO";
    case "video":
      return "VIDEO";
    case "image":
      return "IMG";
    default:
      return t("fileKindFile");
  }
}

function removeAttachment(attachmentId) {
  const index = state.attachments.findIndex((attachment) => attachment.id === attachmentId);
  if (index === -1) return;

  const [removed] = state.attachments.splice(index, 1);
  if (removed.previewUrl) {
    URL.revokeObjectURL(removed.previewUrl);
  }

  renderPreview();
  renderAttachments();
}

function buildPlainTextBody() {
  const content = state.enabled.content ? richHtmlToPlainText(state.fields.content) : "";
  const quote = state.enabled.quote ? normalizeMultilineText(state.fields.quote) : "";
  const signatureName =
    state.enabled.signatureName ? normalizeInlineText(state.fields.signatureName) : "";
  const parts = [];

  if (content) {
    parts.push(`${t("greeting")}\n\n${content}`);
  }

  if (quote) {
    parts.push(`${t("quoteLabel")}:\n${quote}`);
  }

  if (signatureName) {
    parts.push(`${t("closing")}\n${signatureName}`);
  }

  return parts.join("\n\n").trim();
}

async function saveEmlFile() {
  const { blob, filename } = await buildEmlFile();
  triggerDownload(blob, filename);
}

async function shareEmlFile() {
  const { blob, filename } = await buildEmlFile();
  const subject = normalizeInlineText(state.fields.subject);

  if (!("share" in navigator)) {
    throw new Error("Web Share API not available");
  }

  const file = new File([blob], filename, { type: "message/rfc822" });
  if (typeof navigator.canShare === "function" && !navigator.canShare({ files: [file] })) {
    throw new Error("File sharing is not supported");
  }

  await navigator.share({
    files: [file],
    title: subject || filename,
  });
}

async function buildEmlFile() {
  const template = getTemplateById(state.selectedTemplateId);
  if (!template) {
    throw new Error(t("noTemplateSelected"));
  }

  const rawMarkup = state.templateMarkup.get(template.id) || (await ensureTemplateMarkup(template));
  const htmlBody = buildTemplateHtml(rawMarkup, template, { forceMode: null });
  const plainTextBody = buildPlainTextBody();

  const mixedBoundary = `----=_MailTemplatesPwaMixed_${Date.now().toString(16)}_${Math.random()
    .toString(16)
    .slice(2)}`;
  const alternativeBoundary = `----=_MailTemplatesPwaAlt_${Date.now().toString(16)}_${Math.random()
    .toString(16)
    .slice(2)}`;

  const subject = state.enabled.subject ? normalizeInlineText(state.fields.subject) : "";
  const toAddresses = state.enabled.to ? parseAddressList(state.fields.to) : [];
  const ccAddresses = state.enabled.cc ? parseAddressList(state.fields.cc) : [];
  const bccAddresses = state.enabled.bcc ? parseAddressList(state.fields.bcc) : [];
  const replyToAddresses = state.enabled.replyTo ? parseAddressList(state.fields.replyTo) : [];

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

  if (replyToAddresses.length) {
    lines.push(`Reply-To: ${replyToAddresses[0]}`);
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

  for (const attachment of state.attachments) {
    const base64 = await fileToBase64(attachment.file);
    const mimeType = attachment.file.type || "application/octet-stream";
    const safeName = sanitizeFilenameForHeader(attachment.file.name);
    const encodedName = encodeURIComponent(attachment.file.name).replace(/'/g, "%27");

    lines.push(`--${mixedBoundary}`);
    lines.push(`Content-Type: ${mimeType}; name="${safeName}"; name*=UTF-8''${encodedName}`);
    lines.push("Content-Transfer-Encoding: base64");
    lines.push(
      `Content-Disposition: attachment; filename="${safeName}"; filename*=UTF-8''${encodedName}`
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

function sanitizeFilenameForHeader(filename) {
  return filename.replace(/["\\\r\n]/g, "_");
}

function encodeMimeHeader(value) {
  if (/^[\x20-\x7e]*$/.test(value)) {
    return value;
  }
  return `=?UTF-8?B?${base64FromUtf8(value)}?=`;
}

function base64FromUtf8(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  const chunkSize = 0x8000;

  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }

  return btoa(binary);
}

function foldBase64(base64) {
  return base64.replace(/.{1,76}/g, "$&\r\n").trimEnd();
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.split(",")[1] || "");
    };
    reader.readAsDataURL(file);
  });
}

function buildExportFilename() {
  const now = new Date();
  const parts = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ];
  const time = `${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`;
  return `mail-${parts.join("")}-${time}.eml`;
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

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes < 1024) {
    return `${bytes || 0} B`;
  }

  const units = ["KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = -1;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(value >= 10 ? 1 : 2)} ${units[unitIndex]}`;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch (error) {
      console.warn("Service Worker registration failed", error);
    }
  });
}
