const STORAGE_KEYS = {
  language: "prettyMails.language",
  themeMode: "prettyMails.themeMode",
};

const LANGUAGE_FLAGS = {
  pl: "🇵🇱",
  en: "🇬🇧",
  uk: "🇺🇦",
};

const I18N = {
  pl: {
    documentTitle: "Pretty-Mails - Polityka prywatności i warunki",
    languageAria: "Język interfejsu",
    languagePl: "Polski",
    languageEn: "English",
    languageUk: "Українська",
    themeModeLabel: "Motyw",
    themeAuto: "Auto",
    themeLight: "Jasny",
    themeDark: "Ciemny",
    backHomeAria: "Wróć do strony głównej",
    backHomeText: "Powrót",
    pageTitle: "Polityka prywatności i warunki korzystania",
    updated: "Ostatnia aktualizacja: 1 marca 2026",
    privacyTitle: "Polityka prywatności",
    privacyIntro:
      "Pretty-Mails działa głównie po stronie przeglądarki. Dane wpisane w formularzu nie są wysyłane na serwer aplikacji.",
    privacyDataTitle: "Jakie dane mogą być przetwarzane:",
    privacyDataItem1: "treść wiadomości, adresy e-mail i załączniki dodane przez użytkownika,",
    privacyDataItem2: "ustawienia interfejsu zapisane lokalnie (np. język i motyw),",
    privacyDataItem3: "dane autoryzacyjne OAuth Google, potrzebne do wysłania wiadomości z konta użytkownika.",
    privacyUseTitle: "Cel przetwarzania:",
    privacyUseItem1: "generowanie podglądu i plików .eml,",
    privacyUseItem2: "wysyłanie wiadomości przez Gmail po świadomej autoryzacji użytkownika,",
    privacyUseItem3: "zachowanie ustawień wygody działania aplikacji.",
    privacyStorage:
      "Dane robocze są zapisywane lokalnie w przeglądarce tylko wtedy, gdy użytkownik włączy zapamiętywanie brudnopisu.",
    privacyThirdParty:
      "Logowanie i wysyłka przez Gmail korzystają z usług Google zgodnie z politykami Google.",
    termsTitle: "Warunki korzystania",
    termsIntro: "Korzystając z Pretty-Mails, akceptujesz poniższe warunki.",
    termsItem1: "Użytkownik odpowiada za treść wysyłanych wiadomości oraz zgodność z prawem.",
    termsItem2:
      "Aplikacja jest udostępniana bez gwarancji ciągłej dostępności i bez gwarancji przydatności do konkretnego celu.",
    termsItem3: "Właściciel aplikacji nie odpowiada za szkody wynikające z nieprawidłowego użycia narzędzia.",
    termsItem4: "Integracje z usługami zewnętrznymi (np. Google) podlegają ich regulaminom i politykom.",
    termsItem5: "Warunki mogą być aktualizowane wraz z rozwojem projektu.",
    contactTitle: "Kontakt",
    contactText:
      "W sprawach prywatności lub działania aplikacji skontaktuj się z właścicielem projektu przez GitHub.",
  },
  en: {
    documentTitle: "Pretty-Mails - Privacy Policy and Terms",
    languageAria: "Interface language",
    languagePl: "Polski",
    languageEn: "English",
    languageUk: "Українська",
    themeModeLabel: "Theme",
    themeAuto: "Auto",
    themeLight: "Light",
    themeDark: "Dark",
    backHomeAria: "Back to home page",
    backHomeText: "Back",
    pageTitle: "Privacy Policy and Terms of Use",
    updated: "Last updated: March 1, 2026",
    privacyTitle: "Privacy Policy",
    privacyIntro:
      "Pretty-Mails works mainly in the browser. Data entered in the form is not sent to the application server.",
    privacyDataTitle: "What data may be processed:",
    privacyDataItem1: "message content, email addresses, and attachments added by the user,",
    privacyDataItem2: "locally stored interface settings (for example language and theme),",
    privacyDataItem3: "Google OAuth authorization data required to send messages from the user's account.",
    privacyUseTitle: "Purpose of processing:",
    privacyUseItem1: "generating previews and .eml files,",
    privacyUseItem2: "sending messages via Gmail after explicit user authorization,",
    privacyUseItem3: "storing convenience settings for the application.",
    privacyStorage:
      "Working data is saved locally in the browser only when the user enables draft memory.",
    privacyThirdParty:
      "Google sign-in and Gmail sending rely on Google services under Google's policies.",
    termsTitle: "Terms of Use",
    termsIntro: "By using Pretty-Mails, you accept the following terms.",
    termsItem1: "The user is responsible for sent message content and legal compliance.",
    termsItem2:
      "The app is provided without guarantees of uninterrupted availability and without fitness guarantees for a specific purpose.",
    termsItem3: "The app owner is not liable for damages resulting from misuse of the tool.",
    termsItem4: "Third-party integrations (for example Google) are governed by their own terms and policies.",
    termsItem5: "These terms may be updated as the project evolves.",
    contactTitle: "Contact",
    contactText:
      "For privacy or application questions, contact the project owner via GitHub.",
  },
  uk: {
    documentTitle: "Pretty-Mails - Політика конфіденційності та умови",
    languageAria: "Мова інтерфейсу",
    languagePl: "Polski",
    languageEn: "English",
    languageUk: "Українська",
    themeModeLabel: "Тема",
    themeAuto: "Авто",
    themeLight: "Світла",
    themeDark: "Темна",
    backHomeAria: "Повернутися на головну сторінку",
    backHomeText: "Назад",
    pageTitle: "Політика конфіденційності та умови користування",
    updated: "Останнє оновлення: 1 березня 2026",
    privacyTitle: "Політика конфіденційності",
    privacyIntro:
      "Pretty-Mails працює переважно в браузері. Дані, введені у форму, не надсилаються на сервер застосунку.",
    privacyDataTitle: "Які дані можуть оброблятися:",
    privacyDataItem1: "вміст листа, email-адреси та вкладення, додані користувачем,",
    privacyDataItem2: "локальні налаштування інтерфейсу (наприклад мова та тема),",
    privacyDataItem3: "дані авторизації Google OAuth, потрібні для надсилання листів з акаунта користувача.",
    privacyUseTitle: "Мета обробки:",
    privacyUseItem1: "генерація перегляду та файлів .eml,",
    privacyUseItem2: "надсилання листів через Gmail після явної авторизації користувача,",
    privacyUseItem3: "збереження налаштувань зручності застосунку.",
    privacyStorage:
      "Робочі дані зберігаються локально в браузері лише якщо користувач увімкнув збереження чернетки.",
    privacyThirdParty:
      "Вхід через Google і надсилання через Gmail працюють через сервіси Google згідно з політиками Google.",
    termsTitle: "Умови користування",
    termsIntro: "Використовуючи Pretty-Mails, ви приймаєте наведені нижче умови.",
    termsItem1: "Користувач відповідає за зміст надісланих листів і дотримання законодавства.",
    termsItem2:
      "Застосунок надається без гарантій безперервної доступності та без гарантій придатності для конкретної мети.",
    termsItem3: "Власник застосунку не несе відповідальності за збитки через неправильне використання інструмента.",
    termsItem4: "Інтеграції зі сторонніми сервісами (наприклад Google) регулюються їхніми умовами та політиками.",
    termsItem5: "Ці умови можуть оновлюватися разом із розвитком проєкту.",
    contactTitle: "Контакт",
    contactText:
      "З питань конфіденційності або роботи застосунку звертайтеся до власника проєкту через GitHub.",
  },
};

const state = {
  language: detectInitialLanguage(),
  themeMode: localStorage.getItem(STORAGE_KEYS.themeMode) || "auto",
};

const ui = {
  themeModeLabel: document.querySelector("#themeModeLabel"),
  themeMode: document.querySelector("#themeMode"),
  backHomeBtn: document.querySelector("#backHomeBtn"),
  backHomeText: document.querySelector("#backHomeText"),
  languageMenu: document.querySelector("#languageMenu"),
  languageMenuBtn: document.querySelector("#languageMenuBtn"),
  languageMenuList: document.querySelector("#languageMenuList"),
  languageFlag: document.querySelector("#languageFlag"),
  languageOptionPl: document.querySelector("#languageOptionPl"),
  languageOptionEn: document.querySelector("#languageOptionEn"),
  languageOptionUk: document.querySelector("#languageOptionUk"),
  legalPageTitle: document.querySelector("#legalPageTitle"),
  legalUpdated: document.querySelector("#legalUpdated"),
  privacyTitle: document.querySelector("#privacyTitle"),
  privacyIntro: document.querySelector("#privacyIntro"),
  privacyDataTitle: document.querySelector("#privacyDataTitle"),
  privacyDataItem1: document.querySelector("#privacyDataItem1"),
  privacyDataItem2: document.querySelector("#privacyDataItem2"),
  privacyDataItem3: document.querySelector("#privacyDataItem3"),
  privacyUseTitle: document.querySelector("#privacyUseTitle"),
  privacyUseItem1: document.querySelector("#privacyUseItem1"),
  privacyUseItem2: document.querySelector("#privacyUseItem2"),
  privacyUseItem3: document.querySelector("#privacyUseItem3"),
  privacyStorage: document.querySelector("#privacyStorage"),
  privacyThirdParty: document.querySelector("#privacyThirdParty"),
  termsTitle: document.querySelector("#termsTitle"),
  termsIntro: document.querySelector("#termsIntro"),
  termsItem1: document.querySelector("#termsItem1"),
  termsItem2: document.querySelector("#termsItem2"),
  termsItem3: document.querySelector("#termsItem3"),
  termsItem4: document.querySelector("#termsItem4"),
  termsItem5: document.querySelector("#termsItem5"),
  contactTitle: document.querySelector("#contactTitle"),
  contactText: document.querySelector("#contactText"),
};

const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
const customSelectInstances = [];
const customSelectMap = new WeakMap();
let customSelectGlobalsBound = false;

boot();

function boot() {
  bindEvents();
  initCustomSelects(document);
  applyLanguage(state.language);
  applyThemeMode(state.themeMode, { persist: false });
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
  });

  ui.themeMode.addEventListener("change", () => {
    applyThemeMode(ui.themeMode.value, { persist: true });
  });

  themeMedia.addEventListener("change", () => {
    if (state.themeMode !== "auto") return;
    applyThemeMode("auto", { persist: false });
  });
}

function applyLanguage(language) {
  state.language = normalizeLanguage(language);
  localStorage.setItem(STORAGE_KEYS.language, state.language);
  document.documentElement.lang = state.language;

  const copy = I18N[state.language] || I18N.pl;
  document.title = copy.documentTitle;
  setText(ui.themeModeLabel, copy.themeModeLabel);
  setText(ui.languageOptionPl, copy.languagePl);
  setText(ui.languageOptionEn, copy.languageEn);
  setText(ui.languageOptionUk, copy.languageUk);
  setText(ui.legalPageTitle, copy.pageTitle);
  setText(ui.legalUpdated, copy.updated);
  setText(ui.privacyTitle, copy.privacyTitle);
  setText(ui.privacyIntro, copy.privacyIntro);
  setText(ui.privacyDataTitle, copy.privacyDataTitle);
  setText(ui.privacyDataItem1, copy.privacyDataItem1);
  setText(ui.privacyDataItem2, copy.privacyDataItem2);
  setText(ui.privacyDataItem3, copy.privacyDataItem3);
  setText(ui.privacyUseTitle, copy.privacyUseTitle);
  setText(ui.privacyUseItem1, copy.privacyUseItem1);
  setText(ui.privacyUseItem2, copy.privacyUseItem2);
  setText(ui.privacyUseItem3, copy.privacyUseItem3);
  setText(ui.privacyStorage, copy.privacyStorage);
  setText(ui.privacyThirdParty, copy.privacyThirdParty);
  setText(ui.termsTitle, copy.termsTitle);
  setText(ui.termsIntro, copy.termsIntro);
  setText(ui.termsItem1, copy.termsItem1);
  setText(ui.termsItem2, copy.termsItem2);
  setText(ui.termsItem3, copy.termsItem3);
  setText(ui.termsItem4, copy.termsItem4);
  setText(ui.termsItem5, copy.termsItem5);
  setText(ui.contactTitle, copy.contactTitle);
  setText(ui.contactText, copy.contactText);
  setText(ui.backHomeText, copy.backHomeText);

  ui.languageMenuBtn.setAttribute("aria-label", copy.languageAria);
  ui.backHomeBtn.setAttribute("aria-label", copy.backHomeAria);
  ui.backHomeBtn.title = copy.backHomeAria;

  setSelectOptionLabel(ui.themeMode, "auto", copy.themeAuto);
  setSelectOptionLabel(ui.themeMode, "light", copy.themeLight);
  setSelectOptionLabel(ui.themeMode, "dark", copy.themeDark);

  updateLanguageMenuUi();
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
  state.themeMode = normalizeThemeMode(mode);
  if (persist) {
    localStorage.setItem(STORAGE_KEYS.themeMode, state.themeMode);
  }

  const resolvedTheme = state.themeMode === "auto" ? (themeMedia.matches ? "dark" : "light") : state.themeMode;
  document.documentElement.dataset.themeMode = state.themeMode;
  document.documentElement.dataset.resolvedTheme = resolvedTheme;
  ui.themeMode.value = state.themeMode;
  refreshCustomSelect(ui.themeMode);
}

function normalizeThemeMode(value) {
  const normalized = String(value || "").toLowerCase();
  if (normalized === "dark") return "dark";
  if (normalized === "light") return "light";
  return "auto";
}

function detectInitialLanguage() {
  const saved = normalizeLanguage(localStorage.getItem(STORAGE_KEYS.language));
  if (saved) return saved;

  const language = String(navigator.language || "").toLowerCase();
  if (language.startsWith("pl")) return "pl";
  if (language.startsWith("uk")) return "uk";
  return "en";
}

function normalizeLanguage(value) {
  const normalized = String(value || "").toLowerCase();
  if (normalized === "pl") return "pl";
  if (normalized === "en") return "en";
  if (normalized === "uk") return "uk";
  return "pl";
}

function setSelectOptionLabel(selectElement, value, text) {
  const option = selectElement.querySelector(`option[value="${value}"]`);
  if (option) {
    option.textContent = text;
    refreshCustomSelect(selectElement);
  }
}

function setText(node, value) {
  if (node) node.textContent = value;
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

function closeAllCustomSelects(exceptInstance = null) {
  customSelectInstances.forEach((instance) => {
    if (!instance.selectElement.isConnected) return;
    if (exceptInstance && instance === exceptInstance) return;
    instance.close();
  });
}
