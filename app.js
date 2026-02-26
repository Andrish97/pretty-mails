const STORAGE_KEYS = {
  themeMode: "mailTemplatesPwa.themeMode",
  language: "mailTemplatesPwa.language",
  draft: "mailTemplatesPwa.draft.v1",
};

const TEMPLATE_INDEX_URL = new URL("./templates/templates.json", window.location.href).toString();
const MB = 1024 * 1024;
const WARN_MB = 15;
const DANGER_MB = 22;

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
    exportButton: "Export .eml",
    exportBusy: "Eksport...",
    templatesTitle: "Szablony",
    templateSearchPlaceholder: "Szukaj po nazwie lub opisie",
    templateListAria: "Lista szablonów",
    templateSearchEmpty: "Brak wyników wyszukiwania.",
    editorTitle: "Edycja",
    fieldToLabel: "Do (opcjonalnie)",
    fieldToShort: "Do",
    fieldToPlaceholder: "adres@example.com",
    fieldCcLabel: "DW (opcjonalnie)",
    fieldCcShort: "DW",
    fieldCcPlaceholder: "adres@example.com, drugi@example.com",
    fieldBccLabel: "UDW (opcjonalnie)",
    fieldBccShort: "UDW",
    fieldBccPlaceholder: "adres@example.com",
    fieldReplyToLabel: "Reply-To (opcjonalnie)",
    fieldReplyToShort: "Reply-To",
    fieldReplyToPlaceholder: "adres@example.com",
    fieldSubjectLabel: "Temat (opcjonalnie)",
    fieldSubjectPlaceholder: "Temat wiadomości",
    fieldContentLabel: "Treść",
    fieldContentPlaceholder: "Wpisz treść wiadomości...",
    fieldSignatureLabel: "Imię w stopce (opcjonalnie)",
    fieldSignaturePlaceholder: "Twoje imię",
    rememberDraftLabel: "Zapamiętaj draft lokalnie (bez załączników)",
    mutedNoteHtml:
      "Puste pola opcjonalne nie są dodawane do wiadomości. Treść jest bezpiecznie konwertowana do HTML.",
    addressValidationPrefix: "Popraw adresy e-mail:",
    replyToSingleAddress: "Reply-To może zawierać tylko jeden adres.",
    previewTitle: "Podgląd",
    previewFrameTitle: "Podgląd wiadomości",
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
    exportButton: "Export .eml",
    exportBusy: "Exporting...",
    templatesTitle: "Templates",
    templateSearchPlaceholder: "Search by name or description",
    templateListAria: "Template list",
    templateSearchEmpty: "No matching templates.",
    editorTitle: "Editor",
    fieldToLabel: "To (optional)",
    fieldToShort: "To",
    fieldToPlaceholder: "address@example.com",
    fieldCcLabel: "CC (optional)",
    fieldCcShort: "CC",
    fieldCcPlaceholder: "address@example.com, second@example.com",
    fieldBccLabel: "BCC (optional)",
    fieldBccShort: "BCC",
    fieldBccPlaceholder: "address@example.com",
    fieldReplyToLabel: "Reply-To (optional)",
    fieldReplyToShort: "Reply-To",
    fieldReplyToPlaceholder: "address@example.com",
    fieldSubjectLabel: "Subject (optional)",
    fieldSubjectPlaceholder: "Message subject",
    fieldContentLabel: "Content",
    fieldContentPlaceholder: "Type message content...",
    fieldSignatureLabel: "Signature name (optional)",
    fieldSignaturePlaceholder: "Your name",
    rememberDraftLabel: "Remember draft locally (without attachments)",
    mutedNoteHtml:
      "Empty optional fields are not added to the message. Content is safely converted to HTML.",
    addressValidationPrefix: "Fix email addresses:",
    replyToSingleAddress: "Reply-To can contain only one address.",
    previewTitle: "Preview",
    previewFrameTitle: "Message preview",
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
    exportButton: "Export .eml",
    exportBusy: "Експорт...",
    templatesTitle: "Шаблони",
    templateSearchPlaceholder: "Пошук за назвою або описом",
    templateListAria: "Список шаблонів",
    templateSearchEmpty: "Шаблони не знайдено.",
    editorTitle: "Редактор",
    fieldToLabel: "Кому (необов'язково)",
    fieldToShort: "Кому",
    fieldToPlaceholder: "adres@example.com",
    fieldCcLabel: "Копія (необов'язково)",
    fieldCcShort: "Копія",
    fieldCcPlaceholder: "adres@example.com, drugi@example.com",
    fieldBccLabel: "Прих. копія (необов'язково)",
    fieldBccShort: "Прих. копія",
    fieldBccPlaceholder: "adres@example.com",
    fieldReplyToLabel: "Reply-To (необов'язково)",
    fieldReplyToShort: "Reply-To",
    fieldReplyToPlaceholder: "adres@example.com",
    fieldSubjectLabel: "Тема (необов'язково)",
    fieldSubjectPlaceholder: "Тема листа",
    fieldContentLabel: "Текст",
    fieldContentPlaceholder: "Введіть текст повідомлення...",
    fieldSignatureLabel: "Ім'я в підписі (необов'язково)",
    fieldSignaturePlaceholder: "Ваше ім'я",
    rememberDraftLabel: "Зберігати чернетку локально (без вкладень)",
    mutedNoteHtml:
      "Порожні необов'язкові поля не додаються до листа. Текст безпечно конвертується у HTML.",
    addressValidationPrefix: "Виправте адреси email:",
    replyToSingleAddress: "Поле Reply-To може містити лише одну адресу.",
    previewTitle: "Попередній перегляд",
    previewFrameTitle: "Попередній перегляд листа",
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
  themeMode: localStorage.getItem(STORAGE_KEYS.themeMode) || "auto",
  resolvedTheme: "light",
  language: detectInitialLanguage(),
  rememberDraft: false,
  isExporting: false,
  fields: {
    to: "",
    cc: "",
    bcc: "",
    replyTo: "",
    subject: "",
    content: "",
    signatureName: "",
  },
  attachments: [],
  searchQuery: "",
};

const ui = {
  appSubtitle: document.querySelector("#appSubtitle"),
  languageModeLabel: document.querySelector("#languageModeLabel"),
  languageMode: document.querySelector("#languageMode"),
  themeModeLabel: document.querySelector("#themeModeLabel"),
  themeMode: document.querySelector("#themeMode"),
  templateSearch: document.querySelector("#templateSearch"),
  templateList: document.querySelector("#templateList"),
  templatesTitle: document.querySelector("#templatesTitle"),
  editorTitle: document.querySelector("#editorTitle"),
  fieldToLabel: document.querySelector("#fieldToLabel"),
  fieldCcLabel: document.querySelector("#fieldCcLabel"),
  fieldBccLabel: document.querySelector("#fieldBccLabel"),
  fieldReplyToLabel: document.querySelector("#fieldReplyToLabel"),
  fieldSubjectLabel: document.querySelector("#fieldSubjectLabel"),
  fieldContentLabel: document.querySelector("#fieldContentLabel"),
  fieldSignatureLabel: document.querySelector("#fieldSignatureLabel"),
  fieldTo: document.querySelector("#fieldTo"),
  fieldCc: document.querySelector("#fieldCc"),
  fieldBcc: document.querySelector("#fieldBcc"),
  fieldReplyTo: document.querySelector("#fieldReplyTo"),
  fieldSubject: document.querySelector("#fieldSubject"),
  fieldContent: document.querySelector("#fieldContent"),
  fieldSignatureName: document.querySelector("#fieldSignatureName"),
  rememberDraft: document.querySelector("#rememberDraft"),
  rememberDraftLabel: document.querySelector("#rememberDraftLabel"),
  addressValidation: document.querySelector("#addressValidation"),
  mutedNote: document.querySelector("#mutedNote"),
  previewTitle: document.querySelector("#previewTitle"),
  previewTemplateName: document.querySelector("#previewTemplateName"),
  previewFrame: document.querySelector("#previewFrame"),
  exportBtn: document.querySelector("#exportBtn"),
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

boot().catch((error) => {
  console.error(error);
  ui.previewTemplateName.textContent = t("bootFailed");
});

async function boot() {
  bindEvents();
  restoreDraft();
  applyLanguage(state.language);
  applyTheme(state.themeMode);
  syncFieldInputs();
  clearAddressValidation();
  renderAttachments();
  await loadTemplates();
  registerServiceWorker();
}

function bindEvents() {
  ui.languageMode.addEventListener("change", () => {
    applyLanguage(ui.languageMode.value);
    maybeSaveDraft();
  });

  ui.themeMode.addEventListener("change", () => {
    applyTheme(ui.themeMode.value);
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  themeMedia.addEventListener("change", () => {
    if (state.themeMode === "auto") {
      applyTheme("auto");
      renderPreview();
      renderAttachments();
    }
  });

  ui.templateSearch.addEventListener("input", () => {
    state.searchQuery = ui.templateSearch.value.trim().toLowerCase();
    renderTemplateList();
  });

  ui.fieldTo.addEventListener("input", () => {
    state.fields.to = ui.fieldTo.value;
    clearAddressValidation();
    maybeSaveDraft();
    renderAttachments();
  });

  ui.fieldCc.addEventListener("input", () => {
    state.fields.cc = ui.fieldCc.value;
    clearAddressValidation();
    maybeSaveDraft();
    renderAttachments();
  });

  ui.fieldBcc.addEventListener("input", () => {
    state.fields.bcc = ui.fieldBcc.value;
    clearAddressValidation();
    maybeSaveDraft();
    renderAttachments();
  });

  ui.fieldReplyTo.addEventListener("input", () => {
    state.fields.replyTo = ui.fieldReplyTo.value;
    clearAddressValidation();
    maybeSaveDraft();
    renderAttachments();
  });

  ui.fieldSubject.addEventListener("input", () => {
    state.fields.subject = ui.fieldSubject.value;
    maybeSaveDraft();
    renderAttachments();
  });

  ui.fieldContent.addEventListener("input", () => {
    state.fields.content = ui.fieldContent.value;
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
  });

  ui.fieldSignatureName.addEventListener("input", () => {
    state.fields.signatureName = ui.fieldSignatureName.value;
    maybeSaveDraft();
    renderPreview();
    renderAttachments();
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
      updateExportButtonLabel();
      ui.exportBtn.disabled = true;
      await exportEml();
    } catch (error) {
      console.error(error);
      alert(t("exportFailedAlert"));
    } finally {
      state.isExporting = false;
      ui.exportBtn.disabled = false;
      updateExportButtonLabel();
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

  setSelectOptionLabel(ui.languageMode, "pl", t("languagePl"));
  setSelectOptionLabel(ui.languageMode, "en", t("languageEn"));
  setSelectOptionLabel(ui.languageMode, "uk", t("languageUk"));

  ui.appSubtitle.innerHTML = t("subtitleHtml");

  ui.themeModeLabel.textContent = t("themeLabel");
  ui.themeMode.setAttribute("aria-label", t("themeLabel"));
  setSelectOptionLabel(ui.themeMode, "auto", t("themeAuto"));
  setSelectOptionLabel(ui.themeMode, "light", t("themeLight"));
  setSelectOptionLabel(ui.themeMode, "dark", t("themeDark"));

  ui.templatesTitle.textContent = t("templatesTitle");
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
  ui.fieldSignatureLabel.textContent = t("fieldSignatureLabel");
  ui.fieldSignatureName.placeholder = t("fieldSignaturePlaceholder");
  ui.rememberDraftLabel.textContent = t("rememberDraftLabel");
  ui.mutedNote.innerHTML = t("mutedNoteHtml");

  ui.previewTitle.textContent = t("previewTitle");
  ui.previewFrame.title = t("previewFrameTitle");

  ui.attachmentsTitle.textContent = t("attachmentsTitle");
  ui.addFilesBtn.textContent = t("addFilesButton");
  ui.dropZone.textContent = t("dropZoneText");
  ui.dropZone.setAttribute("aria-label", t("dropZoneAria"));

  ui.footerNote.innerHTML = t("footerNoteHtml");

  if (
    state.fields.to.trim() ||
    state.fields.cc.trim() ||
    state.fields.bcc.trim() ||
    state.fields.replyTo.trim()
  ) {
    validateAddressFields();
  } else {
    clearAddressValidation();
  }

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

function updateExportButtonLabel() {
  ui.exportBtn.textContent = state.isExporting ? t("exportBusy") : t("exportButton");
}

function applyTheme(mode) {
  state.themeMode = ["auto", "light", "dark"].includes(mode) ? mode : "auto";
  state.resolvedTheme =
    state.themeMode === "auto"
      ? themeMedia.matches
        ? "dark"
        : "light"
      : state.themeMode;

  ui.themeMode.value = state.themeMode;
  document.documentElement.dataset.themeMode = state.themeMode;
  document.documentElement.dataset.resolvedTheme = state.resolvedTheme;
  localStorage.setItem(STORAGE_KEYS.themeMode, state.themeMode);
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
    state.fields.signatureName = saved.fields?.signatureName || "";

    if (saved.selectedTemplateId) {
      state.selectedTemplateId = saved.selectedTemplateId;
    }

    if (["auto", "light", "dark"].includes(saved.themeMode)) {
      state.themeMode = saved.themeMode;
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
    themeMode: state.themeMode,
    language: state.language,
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
  ui.rememberDraft.checked = state.rememberDraft;
  ui.fieldTo.value = state.fields.to;
  ui.fieldCc.value = state.fields.cc;
  ui.fieldBcc.value = state.fields.bcc;
  ui.fieldReplyTo.value = state.fields.replyTo;
  ui.fieldSubject.value = state.fields.subject;
  ui.fieldContent.value = state.fields.content;
  ui.fieldSignatureName.value = state.fields.signatureName;
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
  ui.templateList.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const visibleTemplates = state.templates.filter((template) => {
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
  applyTemplateFieldVisibility(template);
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

function applyTemplateFieldVisibility(template) {
  const fields = template.fields || {};
  ui.fields.forEach((node) => {
    const field = node.dataset.field;
    if (field === "content") {
      node.hidden = false;
      return;
    }
    node.hidden = fields[field] === false;
  });
}

function getTemplateById(templateId) {
  return state.templates.find((template) => template.id === templateId) || null;
}

function renderPreview() {
  const template = getTemplateById(state.selectedTemplateId);
  if (!template) {
    ui.previewFrame.srcdoc = "";
    ui.previewTemplateName.textContent = "";
    return;
  }

  const rawMarkup = state.templateMarkup.get(template.id);
  if (!rawMarkup) {
    return;
  }

  const rendered = buildTemplateHtml(rawMarkup, template, {
    forceMode: state.themeMode === "auto" ? null : state.themeMode,
  });

  ui.previewFrame.srcdoc = rendered;
  ui.previewTemplateName.textContent = localizedTemplateName(template);
}

function buildTemplateHtml(rawMarkup, template, options = {}) {
  const contentHtml = plainTextToSafeHtml(state.fields.content);
  const signatureHtml = buildSignatureBlockHtml();
  const date = new Intl.DateTimeFormat(t("dateLocale"), { dateStyle: "long" }).format(new Date());

  const replacements = {
    content_block: contentHtml,
    signature_block: signatureHtml,
    greeting: escapeHtml(t("greeting")),
    date: escapeHtml(date),
    template_title: escapeHtml(t("templateHeader")),
    reply_header: escapeHtml(t("replyHeader")),
    quote_label: escapeHtml(t("quoteLabel")),
    quote_placeholder: escapeHtml(t("quotePlaceholder")),
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

  if (!normalizeMultilineText(state.fields.content)) {
    doc.querySelectorAll("[data-optional-content]").forEach((node) => node.remove());
  }

  if (!normalizeInlineText(state.fields.signatureName)) {
    doc.querySelectorAll("[data-optional-signature]").forEach((node) => node.remove());
  }

  const accent = template.theme?.accent || "#2e7dff";
  const themeStyle = doc.createElement("style");
  themeStyle.textContent = `:root{--template-accent:${accent};}`;
  doc.head.append(themeStyle);

  return `<!doctype html>\n${doc.documentElement.outerHTML}`;
}

function buildSignatureBlockHtml() {
  const signatureName = normalizeInlineText(state.fields.signatureName);
  if (!signatureName) {
    return "";
  }

  return `${escapeHtml(t("closing"))}<div class="signature-name">${escapeHtml(signatureName)}</div>`;
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
  [ui.fieldTo, ui.fieldCc, ui.fieldBcc, ui.fieldReplyTo].forEach((input) => {
    input.setAttribute("aria-invalid", "false");
  });
}

function validateAddressFields() {
  clearAddressValidation();

  const definitions = [
    { key: "to", shortLabelKey: "fieldToShort", input: ui.fieldTo },
    { key: "cc", shortLabelKey: "fieldCcShort", input: ui.fieldCc },
    { key: "bcc", shortLabelKey: "fieldBccShort", input: ui.fieldBcc },
    { key: "replyTo", shortLabelKey: "fieldReplyToShort", input: ui.fieldReplyTo },
  ];

  const issues = [];

  definitions.forEach((definition) => {
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

  renderAttachments();
}

function buildPlainTextBody() {
  const content = normalizeMultilineText(state.fields.content);
  const signatureName = normalizeInlineText(state.fields.signatureName);
  const parts = [];

  if (content) {
    parts.push(`${t("greeting")}\n\n${content}`);
  }

  if (signatureName) {
    parts.push(`${t("closing")}\n${signatureName}`);
  }

  return parts.join("\n\n").trim();
}

async function exportEml() {
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

  const subject = normalizeInlineText(state.fields.subject);
  const toAddresses = parseAddressList(state.fields.to);
  const ccAddresses = parseAddressList(state.fields.cc);
  const bccAddresses = parseAddressList(state.fields.bcc);
  const replyToAddresses = parseAddressList(state.fields.replyTo);

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
  triggerDownload(blob, filename);
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
