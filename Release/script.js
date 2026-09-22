

const DEFAULT_VIDEO = 'https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4';


function getBrowserLanguage() {
  try {
    const l = (navigator.languages && navigator.languages.length) ? navigator.languages[0] : (navigator.language || navigator.userLanguage || 'en');
    const lower = String(l).toLowerCase();
    return (lower.startsWith('ru') || lower.startsWith('be') || lower.startsWith('uk')) ? 'ru' : 'en';
  } catch (e) {
    return 'en';
  }
}

const TRANSLATIONS = {
  ru: {
    "pageTitle": "Новая вкладка",
    "lbl_settingsSection": "Раздел настроек",
    "summarySystemGeneral": "Основное",
    "summarySystemEffects": "Внешний вид и эффекты",
    "summarySystemTools": "Инструменты",
    "summarySystemInterface": "Интерфейс",
    "summarySystemCustomization": "Кастомизация",
    "summarySystemData": "Данные и сброс",
    "media-source-preset": "Готовый фон",
    "lbl_interfaceTheme": "Тема интерфейса:",
    "opt_themeAuto": "Авто (синхронизация с Firefox)",
    "opt_themeDark": "Тёмная",
    "opt_themeLight": "Светлая",
    "bg-type-color": "Цвета",
    "bg-type-image": "Фото",
    "bg-type-video": "Видео",
    "bg-use-gradient": "Использовать градиент",
    "btnAddShortcut": "Добавить ярлык",
    "btnDeleteTheme": "Удалить",
    "btnExitBuild": "Завершить",
    "btnExport": "Экспорт профиля (Все настройки + Видео)",
    "btnFactoryReset": "Полный сброс до заводских настроек",
    "btnImport": "Импорт профиля",
    "btnNewTheme": "Новая",
    "btnOpenLens": "Открыть Google Lens",
    "btnResetAllPos": "Сбросить позиции ВСЕХ элементов на центр",
    "btnResetClockPos": "Сбросить позицию часов",
    "btnResetSearchPos": "Сбросить позицию поиска",
    "btnResetShortcutsPos": "Сбросить позиции ярлыков",
    "btnResetTransform": "Сбросить трансформацию",
    "btnResetWidgetsPos": "Сбросить позиции виджетов",
    "btnSearch": "Найти",
    "build-mode-enable": "Включить Конструктор",
    "buildModeIndicator": "Конструктор: перетаскивайте элементы мышью",
    "builderTargetDefault": "Выбранный элемент",
    "clock-24h": "24-часовой формат",
    "clock-3d": "True Glassmorphism (3D Стекло с рефракцией)",
    "clock-enable": "Отображать часы",
    "clock-neon": "Эффект Неона (Свечение)",
    "clock-seconds": "Отображать секунды",
    "clock-shadows": "Тень текста",
    "fileNamePlaceholder": "Выбрать файл с диска...",
    "h_backups": "Бэкапы и Данные",
    "h_bgFilters": "Фильтры обоев",
    "h_bgType": "Тип подложки",
    "h_bookmarks": "Управление закладками",
    "h_builderMode": "Режим Конструктора",
    "h_designFont": "Дизайн и Шрифт",
    "h_effects": "Эффекты",
    "h_glass": "Настройка стекла (True Glassmorphism)",
    "h_googleTools": "Инструменты Google",
    "h_infoDisplay": "Отображение информеров",
    "h_layoutMode": "Режим расположения",
    "h_panelInterface": "Интерфейс панели",
    "h_panelStyle": "Стиль плашек",
    "h_styleColors": "Стиль и Цвета",
    "h_themes": "Управление Темами",
    "h_tileStyle": "Стиль плиток",
    "h_timeFormat": "Формат времени",
    "h_typingEffect": "Динамическая неоновая обводка при наборе",
    "hint_alwaysMode": "«Всегда» держит обводку включённой постоянно — удобно, если хотите оставить только эту неоновую анимацию вокруг поиска.",
    "hint_builderMode": "Позволяет перемещать, поворачивать и масштабировать каждый виджет индивидуально.",
    "hint_glass": "Оптические параметры для элементов с включённым «True Glassmorphism» (фаска, рефракция, контраст, насыщенность).",
    "hint_gridWidth": "Уменьшите ширину (например, до 100px), чтобы выстроить ярлыки в вертикальный ряд.",
    "hint_neonMode": "Влияет на неон часов, поиска, ярлыков и виджетов, а также на подсветку при наборе текста.",
    "hint_typingAnimate": "Если выключить, обводка станет статичным градиентом без перетекания цветов.",
    "hint_typingMaster": "Общий выключатель. Если выключить — при вводе текста строка поиска остаётся обычной.",
    "hint_typingNeon": "Если выключить, пропадёт размытое свечение (glow) вокруг строки, обводка останется чёткой.",
    "hint_typingFill": "Отключено по умолчанию. При выключении фон поиска остаётся чистым, анимируется только внешняя неоновая обводка.",
    "hint_ultraOpt": "Отключает тяжелые размытия (blur), постоянные анимации и тени для максимальной производительности на слабых ПК.",
    "lbl_angle": "Угол наклона:",
    "lbl_animSpeed": "Скорость переливания:",
    "lbl_barScale": "Масштаб строки:",
    "lbl_bgBlur": "Размытие фона:",
    "lbl_bgColor": "Цвет фона:",
    "lbl_borderWidth": "Толщина обводки:",
    "lbl_brightness": "Яркость:",
    "lbl_btnAccent": "Акцент кнопки:",
    "lbl_colorCount": "Количество цветов:",
    "lbl_confirmBtn": "Кнопка подтверждения:",
    "lbl_contrast": "Контраст:",
    "lbl_customNeonColor": "Собственный цвет Неона:",
    "lbl_digitColor": "Цвет цифр:",
    "lbl_font": "Шрифт:",
    "lbl_fontSize": "Размер шрифта:",
    "lbl_gearOpacity": "Непрозрачность шестерёнки:",
    "lbl_glass3d": "True Glassmorphism (3D Стекло с рефракцией)",
    "lbl_glassBorderOpacity": "Яркость блика/окантовки:",
    "lbl_glassBrightness": "Яркость стекла:",
    "lbl_glassTint": "Цвет тонировки/блика:",
    "lbl_glassTintIntensity": "Интенсивность тонировки:",
    "lbl_gradColor1": "Цвет градиента 1:",
    "lbl_gradColor2": "Цвет градиента 2:",
    "lbl_gradColor3": "Цвет градиента 3:",
    "lbl_gridSnap": "Магнитная сетка привязки:",
    "lbl_gridWidth": "Ширина блока сетки:",
    "lbl_hue": "Оттенок (Спектр):",
    "lbl_indivRotate": "Индивидуальный поворот:",
    "lbl_indivScale": "Индивидуальный масштаб:",
    "lbl_innerBlur": "Внутреннее размытие:",
    "lbl_labelColor": "Цвет подписей:",
    "lbl_lightness": "Яркость (Тёмный/Светлый):",
    "lbl_menuPos": "Расположение меню настроек:",
    "lbl_neonFx": "Эффект Неона (Свечение)",
    "lbl_neonMode": "Режим неона (глобально для всех элементов):",
    "lbl_opacity": "Непрозрачность:",
    "lbl_overlay": "Затемнение (Overlay):",
    "lbl_placeholderText": "Текст подсказки:",
    "lbl_saturate": "Насыщенность:",
    "lbl_searchEngine": "Поисковый движок:",
    "lbl_shortcutScale": "Масштаб ярлыков:",
    "lbl_textColor": "Цвет текста:",
    "lbl_themeSwitching": "Смена тем на новых вкладках:",
    "lbl_tileBg": "Фон плиток:",
    "lbl_videoSpeed": "Скорость воспроизведения:",
    "lbl_whenActive": "Когда активен эффект:",
    "lbl_widgetBg": "Фон виджетов:",
    "lbl_aiNeonColor": "Цвет подсветки ИИ режима:",
    "lbl_aiGlow": "Внешняя подсветка в режиме ИИ (Glow)",
    "lbl_searchGlow": "Внешняя подсветка поиска (Glow)",
    "lbl_typingFill": "Заливка фона при наборе текста",
    "lbl_ultraOpt": "Режим ультраоптимизации (для слабых ПК)",
    "h_hotkeys": "Горячие клавиши",
    "hk_search": "Фокус в строку поиска",
    "hk_esc": "Снять фокус / Закрыть окна",
    "hk_settings": "Меню настроек",
    "hk_builder": "Режим Конструктора",
    "hk_ai": "Режим Google AI (udm=50)",
    "hk_theme": "Следующая тема",
    "hk_ultra": "Ультраоптимизация",
    "hk_digits": "Открыть ярлык 1-9",
    "lensFileHint": "Google блокирует автоматическую загрузку файлов из сторонних расширений. Откройте Google Lens и перетащите фото на страницу.",
    "lensFileLabel": "Поиск по файлу с диска:",
    "lensUrlLabel": "Ссылка на изображение (URL):",
    "media-source-local": "Файл с ПК",
    "media-source-url": "URL-ссылка",
    "opt_always": "Всегда (постоянная анимированная обводка)",
    "opt_btnIcon": "SVG-иконка лупы",
    "opt_btnText": "Текст («Найти»)",
    "opt_colors2": "2 Цвета",
    "opt_colors3": "3 Цвета",
    "opt_colors4": "4 Цвета",
    "opt_colors5": "5 Цветов",
    "opt_fixed": "Зафиксировать текущую",
    "opt_fontImpact": "Impact (Массивный)",
    "opt_fontMono": "Monospace (Машинка)",
    "opt_fontSystem": "Системный (Классика)",
    "opt_freeMode": "Свободный (Независимое перемещение)",
    "opt_grid0": "Выкл. (без привязки)",
    "opt_grid1": "1% (Очень точная)",
    "opt_grid10": "10% (Крупная сетка)",
    "opt_grid2": "2% (Плавный шаг)",
    "opt_grid3": "3% (Мелкая сетка)",
    "opt_grid5": "5% (Рекомендуемый)",
    "opt_grid20": "20% (Крупный шаг)",
    "opt_gridMode": "Сетка (Адаптивный центрированный блок)",
    "opt_left": "Слева экрана",
    "opt_neonGlow": "Заливка (мягкое свечение)",
    "opt_neonOutline": "Обводка (чёткий контур, без размытия)",
    "opt_onlyTyping": "Только при вводе текста",
    "opt_random": "Случайная",
    "opt_right": "Справа экрана",
    "opt_sequential": "По порядку",
    "opt_yandex": "Яндекс",
    "opt_langAuto": "Авто (по языку браузера)",
    "opt_langRu": "Russian",
    "opt_langEn": "English",
    "systemCatGeneral": "Основное",
    "systemCatPerformance": "Производительность",
    "systemCatAppearance": "Внешний вид и эффекты",
    "systemCatTools": "Инструменты",
    "systemCatInterface": "Интерфейс",
    "systemCatCustomization": "Кастомизация",
    "systemCatData": "Данные и сброс",
    "lbl_showSettingsButton": "Показывать шестерёнку настроек",
    "hint_showSettingsButton": "Если выключить, шестерёнка исчезнет, но настройки всё равно можно открыть горячей клавишей.",
    "donationNote": "Мне грустно, что пока я не могу получать донаты. Но YT всё равно развивается ♡",
    "lbl_language": "Язык интерфейса:",
    "pickerTitle": "Настройка цвета",
    "search-ai": "Режим Google AI (udm=50)",
    "search-border": "Видимые границы (Borders)",
    "search-enable": "Отображать поиск",
    "search-image": "Поиск по фото (Lens)",
    "search-shadows": "Тень элемента",
    "search-voice": "Голосовой поиск (Микрофон)",
    "settingsTitle": "Настройки",
    "shortcut-border": "Видимые границы (Borders)",
    "shortcut-shadows": "Тень карточек",
    "tabBg": "Фон",
    "tabClock": "Часы",
    "tabSearch": "Поиск",
    "tabShortcuts": "Ярлыки",
    "tabSystem": "Система",
    "tabWidgets": "Виджеты",
    "typing-animate-enable": "Переливание цветов (анимация)",
    "typing-effect-enable": "Включить эффект при наборе",
    "typing-neon-enable": "Свечение (неон) вокруг обводки",
    "widget-border": "Видимые границы (Borders)",
    "widget-greeting-enable": "Приветствие (по времени суток)",
    "widget-ip-enable": "IP-адрес",
    "widget-ip-flag": "Показывать флаг страны у IP",
    "widget-shadows": "Тень виджетов",
    "widget-weather-enable": "Информер Погоды",
    "titleVoice": "Голосовой ввод",
    "titleImageSearch": "Поиск по фото (Google Lens)",
    "titleAiMode": "Режим Google AI (udm=50)",
    "titleSettings": "Настройки",
    "titlePipette": "Пипетка экрана",
    "ph_siteName": "Имя сайта",
    "name_clock": "Часы",
    "name_search": "Поиск",
    "name_shortcuts": "Ярлыки",
    "name_weather": "Погода",
    "name_ip": "IP-информер",
    "name_greeting": "Приветствие",
    "name_shortcutPrefix": "Ярлык: ",
    "greetingNight": "Доброй ночи",
    "greetingMorning": "Доброе утро",
    "greetingDay": "Добрый день",
    "greetingEvening": "Добрый вечер",
    "themeNamePrefix": "Тема ",
    "defaultSearchPlaceholder": "Поиск в интернете...",
    "confirmDeleteLastTheme": "Нельзя удалить единственную тему.",
    "confirmFactoryReset": "Сбросить все настройки до заводских?",
    "alertResetTheme": "Позиции текущей темы сброшены",
    "alertResetAllPositions": "Все позиции сброшены",
    "alertExportError": "Ошибка при экспорте: ",
    "alertImportSuccess": "Успешно импортировано!",
    "alertImportBadFormat": "Не удалось импортировать: файл повреждён или имеет неверный формат.",
    "alertFileReadError": "Не удалось прочитать файл.",
    "alertVoiceUnsupported": "Внимание: В Firefox веб-сервис речи заблокирован Mozilla.\nЧтобы включить, откройте about:config и переключите media.webspeech.recognition.enable в true",
    "alertMicBlocked": "Доступ к микрофону заблокирован в настройках разрешений браузера.",
    "alertMicNetwork": "Ошибка сети распознавания речи.",
    "alertMicError": "Ошибка микрофона: ",
    "h_customWidgets": "Собственные виджеты",
    "hint_customWidgets": "Создавайте собственные виджеты с HTML, заметками или ссылками. Они поддерживают Конструктор и стиль темы.",
    "btnCreateWidget": "+ Создать свой виджет",
    "btnSaveWidget": "Сохранить виджет",
    "modalTitleNewWidget": "Создание виджета",
    "modalTitleEditWidget": "Редактирование виджета",
    "lbl_widgetTitle": "Название виджета:",
    "lbl_widgetContent": "HTML / Текст виджета:",
    "lbl_widgetTemplates": "Готовые шаблоны:",
    "h_customCss": "Пользовательский CSS",
    "hint_customCss": "Добавьте собственный CSS-код для полной кастомизации любых элементов вкладки.",
    "lbl_customCss": "CSS стили:",
    "cssSnippetHideSearch": "Скрыть поиск",
    "cssSnippetRoundShortcuts": "Круглые ярлыки",
    "cssSnippetNeonClock": "Неон часов",
    "cssEditorPlaceholder": "/* Напишите ваш CSS здесь... */\n#clock { letter-spacing: 2px; }\n.custom-widget { border-radius: 16px; }",
    "btnApplyCss": "Применить CSS",
    "btnResetCss": "Очистить CSS",
    "alertWidgetTitleEmpty": "Пожалуйста, введите название виджета",
    "alertCssApplied": "Пользовательский CSS успешно применен!",
    "confirmClearCustomCss": "Очистить весь пользовательский CSS?",
    "lbl_loupeDirection": "Направление ручки лупы:",
    "opt_loupeBottomRight": "Вправо-вниз (↘ По умолчанию)",
    "opt_loupeBottomLeft": "Влево-вниз (↙ Отразить зеркально)",
    "opt_loupeTopLeft": "Влево-вверх (↖)",
    "opt_loupeTopRight": "Вправо-вверх (↗)",
    "titleFlipLoupe": "Быстро повернуть / отразить лупу",
    "lbl_searchBtnPos": "Расположение кнопки поиска:",
    "opt_btnPosRight": "Справа строки (Классика)",
    "opt_btnPosLeft": "Слева строки (как в браузере)"
  },
  en: {
    "pageTitle": "New Tab",
    "lbl_settingsSection": "Settings section",
    "summarySystemGeneral": "General",
    "summarySystemEffects": "Appearance & Effects",
    "summarySystemTools": "Tools",
    "summarySystemInterface": "Interface",
    "summarySystemCustomization": "Customization",
    "summarySystemData": "Data & Reset",
    "media-source-preset": "Preset background",
    "lbl_interfaceTheme": "Interface theme:",
    "opt_themeAuto": "Auto (sync with Firefox)",
    "opt_themeDark": "Dark",
    "opt_themeLight": "Light",
    "bg-type-color": "Colors",
    "bg-type-image": "Photo",
    "bg-type-video": "Video",
    "bg-use-gradient": "Use gradient",
    "btnAddShortcut": "Add shortcut",
    "btnDeleteTheme": "Delete",
    "btnExitBuild": "Finish",
    "btnExport": "Export profile (All settings + Video)",
    "btnFactoryReset": "Full factory reset",
    "btnImport": "Import profile",
    "btnNewTheme": "New",
    "btnOpenLens": "Open Google Lens",
    "btnResetAllPos": "Reset ALL elements to center",
    "btnResetClockPos": "Reset clock position",
    "btnResetSearchPos": "Reset search position",
    "btnResetShortcutsPos": "Reset shortcut positions",
    "btnResetTransform": "Reset transform",
    "btnResetWidgetsPos": "Reset widget positions",
    "btnSearch": "Search",
    "build-mode-enable": "Enable Builder Mode",
    "buildModeIndicator": "Builder: drag elements with your mouse",
    "builderTargetDefault": "Selected element",
    "clock-24h": "24-hour format",
    "clock-3d": "True Glassmorphism (3D refractive glass)",
    "clock-enable": "Show clock",
    "clock-neon": "Neon effect (Glow)",
    "clock-seconds": "Show seconds",
    "clock-shadows": "Text shadow",
    "fileNamePlaceholder": "Choose a file from disk...",
    "h_backups": "Backups & Data",
    "h_bgFilters": "Wallpaper filters",
    "h_bgType": "Background type",
    "h_bookmarks": "Manage bookmarks",
    "h_builderMode": "Builder Mode",
    "h_designFont": "Design & Font",
    "h_effects": "Effects",
    "h_glass": "Glass settings (True Glassmorphism)",
    "h_googleTools": "Google Tools",
    "h_infoDisplay": "Widget display",
    "h_layoutMode": "Layout mode",
    "h_panelInterface": "Panel interface",
    "h_panelStyle": "Panel style",
    "h_styleColors": "Style & Colors",
    "h_themes": "Theme Management",
    "h_tileStyle": "Tile style",
    "h_timeFormat": "Time format",
    "h_typingEffect": "Dynamic neon border on typing",
    "hint_alwaysMode": "\"Always\" keeps the border active continuously — ideal if you want to keep just this neon animation around search.",
    "hint_builderMode": "Lets you move, rotate, and scale each widget individually.",
    "hint_glass": "Optical parameters for elements with \"True Glassmorphism\" enabled (bevel, refraction, contrast, saturation).",
    "hint_gridWidth": "Reduce the width (e.g. down to 100px) to arrange shortcuts in a vertical column.",
    "hint_neonMode": "Affects the neon on the clock, search, shortcuts, widgets, and typing glow.",
    "hint_typingAnimate": "If disabled, the border becomes a static gradient with no color flow.",
    "hint_typingMaster": "Master switch. If disabled, the search bar stays normal while typing.",
    "hint_typingNeon": "If disabled, the soft glow around the bar disappears, while the crisp border stays.",
    "hint_typingFill": "Disabled by default. When off, input background remains completely clean while only the outer neon border animates.",
    "hint_ultraOpt": "Disables GPU blur shaders, animations, and heavy shadows for maximum FPS on low-end hardware.",
    "lbl_angle": "Angle:",
    "lbl_animSpeed": "Flow speed:",
    "lbl_barScale": "Bar scale:",
    "lbl_bgBlur": "Background blur:",
    "lbl_bgColor": "Background color:",
    "lbl_borderWidth": "Border width:",
    "lbl_brightness": "Brightness:",
    "lbl_btnAccent": "Button accent:",
    "lbl_colorCount": "Number of colors:",
    "lbl_confirmBtn": "Confirm button:",
    "lbl_contrast": "Contrast:",
    "lbl_customNeonColor": "Custom neon color:",
    "lbl_digitColor": "Digit color:",
    "lbl_font": "Font:",
    "lbl_fontSize": "Font size:",
    "lbl_gearOpacity": "Gear icon opacity:",
    "lbl_glass3d": "True Glassmorphism (3D refractive glass)",
    "lbl_glassBorderOpacity": "Highlight/edge brightness:",
    "lbl_glassBrightness": "Glass brightness:",
    "lbl_glassTint": "Tint/highlight color:",
    "lbl_glassTintIntensity": "Tint intensity:",
    "lbl_gradColor1": "Gradient color 1:",
    "lbl_gradColor2": "Gradient color 2:",
    "lbl_gradColor3": "Gradient color 3:",
    "lbl_gridSnap": "Snap grid:",
    "lbl_gridWidth": "Grid block width:",
    "lbl_hue": "Hue (Spectrum):",
    "lbl_indivRotate": "Individual rotation:",
    "lbl_indivScale": "Individual scale:",
    "lbl_innerBlur": "Inner blur:",
    "lbl_labelColor": "Label color:",
    "lbl_lightness": "Lightness (Dark/Light):",
    "lbl_menuPos": "Settings menu position:",
    "lbl_neonFx": "Neon effect (Glow)",
    "lbl_neonMode": "Neon mode (global, for all elements):",
    "lbl_opacity": "Opacity:",
    "lbl_overlay": "Darken (Overlay):",
    "lbl_placeholderText": "Placeholder text:",
    "lbl_saturate": "Saturation:",
    "lbl_searchEngine": "Search engine:",
    "lbl_shortcutScale": "Shortcut scale:",
    "lbl_textColor": "Text color:",
    "lbl_themeSwitching": "Theme switching on new tabs:",
    "lbl_tileBg": "Tile background:",
    "lbl_videoSpeed": "Playback speed:",
    "lbl_whenActive": "When the effect is active:",
    "lbl_widgetBg": "Widget background:",
    "lbl_aiNeonColor": "AI mode glow color:",
    "lbl_aiGlow": "AI mode outer glow (Glow)",
    "lbl_searchGlow": "Search bar outer glow (Glow)",
    "lbl_typingFill": "Background fill on typing",
    "lbl_ultraOpt": "Ultra-optimization mode (Low-end PCs)",
    "h_hotkeys": "Keyboard Shortcuts",
    "hk_search": "Focus search bar",
    "hk_esc": "Blur / Close dialogs",
    "hk_settings": "Toggle Settings menu",
    "hk_builder": "Toggle Builder Mode",
    "hk_ai": "Toggle Google AI mode",
    "hk_theme": "Switch to next theme",
    "hk_ultra": "Toggle Ultra-optimization",
    "hk_digits": "Open shortcut 1-9",
    "lensFileHint": "Google blocks automatic file uploads from third-party extensions. Open Google Lens and drag the photo onto the page.",
    "lensFileLabel": "Search by file from disk:",
    "lensUrlLabel": "Image link (URL):",
    "media-source-local": "File from PC",
    "media-source-url": "URL link",
    "opt_always": "Always (persistent animated border)",
    "opt_btnIcon": "SVG magnifier icon",
    "opt_btnText": "Text (\"Search\")",
    "opt_colors2": "2 Colors",
    "opt_colors3": "3 Colors",
    "opt_colors4": "4 Colors",
    "opt_colors5": "5 Colors",
    "opt_fixed": "Lock current theme",
    "opt_fontImpact": "Impact (Bold)",
    "opt_fontMono": "Monospace (Typewriter)",
    "opt_fontSystem": "System (Classic)",
    "opt_freeMode": "Free (independent placement)",
    "opt_grid0": "Off (no snapping)",
    "opt_grid1": "1% (Very precise)",
    "opt_grid10": "10% (Coarse grid)",
    "opt_grid2": "2% (Smooth step)",
    "opt_grid3": "3% (Fine grid)",
    "opt_grid5": "5% (Recommended)",
    "opt_grid20": "20% (Large step)",
    "opt_gridMode": "Grid (adaptive centered block)",
    "opt_left": "Left side of screen",
    "opt_neonGlow": "Fill (soft glow)",
    "opt_neonOutline": "Outline (crisp, no blur)",
    "opt_onlyTyping": "Only while typing",
    "opt_random": "Random",
    "opt_right": "Right side of screen",
    "opt_sequential": "Sequential",
    "opt_yandex": "Yandex",
    "opt_langAuto": "Auto (browser language)",
    "opt_langRu": "Русский",
    "opt_langEn": "English",
    "systemCatGeneral": "General",
    "systemCatPerformance": "Performance",
    "systemCatAppearance": "Appearance & Effects",
    "systemCatTools": "Tools",
    "systemCatInterface": "Interface",
    "systemCatCustomization": "Customization",
    "systemCatData": "Data & Reset",
    "lbl_showSettingsButton": "Show settings gear",
    "hint_showSettingsButton": "Turn this off to hide the gear. Settings remain available through the keyboard shortcut.",
    "donationNote": "It makes me a little sad that I can't receive donations yet. But YT keeps moving forward ♡",
    "lbl_language": "Interface language:",
    "pickerTitle": "Color settings",
    "search-ai": "Google AI mode (udm=50)",
    "search-border": "Visible borders",
    "search-enable": "Show search bar",
    "search-image": "Photo search (Lens)", 
    "search-shadows": "Element shadow",
    "search-voice": "Voice search (Microphone)",
    "settingsTitle": "Settings",
    "shortcut-border": "Visible borders",
    "shortcut-shadows": "Card shadow",
    "tabBg": "Background",
    "tabClock": "Clock",
    "tabSearch": "Search",
    "tabShortcuts": "Shortcuts", 
    "tabSystem": "System",
    "tabWidgets": "Widgets",
    "typing-animate-enable": "Color flow (animation)",
    "typing-effect-enable": "Enable typing effect",
    "typing-neon-enable": "Glow (neon) around the border",
    "widget-border": "Visible borders",
    "widget-greeting-enable": "Greeting (by time of day)",
    "widget-ip-enable": "IP address",
    "widget-ip-flag": "Show country flag for IP",
    "widget-shadows": "Widget shadow",
    "widget-weather-enable": "Weather widget",
    "titleVoice": "Voice input", 
    "titleImageSearch": "Photo search (Google Lens)",
    "titleAiMode": "Google AI mode (udm=50)",
    "titleSettings": "Settings",
    "titlePipette": "Screen eyedropper",
    "ph_siteName": "Site name",
    "name_clock": "Clock",
    "name_search": "Search",
    "name_shortcuts": "Shortcuts",
    "name_weather": "Weather",
    "name_ip": "IP widget",
    "name_greeting": "Greeting",
    "name_shortcutPrefix": "Shortcut: ",
    "greetingNight": "Good night", 
    "greetingMorning": "Good morning",
    "greetingDay": "Good afternoon",
    "greetingEvening": "Good evening",
    "themeNamePrefix": "Theme ",
    "defaultSearchPlaceholder": "Search the web...",
    "confirmDeleteLastTheme": "You can't delete the only theme.",
    "confirmFactoryReset": "Reset all settings to factory defaults?",
    "alertResetTheme": "Positions for the current theme have been reset",
    "alertResetAllPositions": "All positions have been reset",
    "alertExportError": "Export error: ",
    "alertImportSuccess": "Imported successfully!",
    "alertImportBadFormat": "Couldn't import: the file is corrupted or in an invalid format.",
    "alertFileReadError": "Couldn't read the file.",
    "alertVoiceUnsupported": "Note: Firefox blocks the web speech service by default.\nTo enable it, open about:config and set media.webspeech.recognition.enable to true",
    "alertMicBlocked": "Microphone access is blocked in your browser permission settings.",
    "alertMicNetwork": "Speech recognition network error.",
    "alertMicError": "Microphone error: ",
    "h_customWidgets": "Custom Widgets",
    "hint_customWidgets": "Create custom widgets with HTML, notes, or links. Supports Builder Mode and theme styles.",
    "btnCreateWidget": "+ Create Widget",
    "btnSaveWidget": "Save Widget",
    "modalTitleNewWidget": "New Custom Widget",
    "modalTitleEditWidget": "Edit Custom Widget",
    "lbl_widgetTitle": "Widget title:",
    "lbl_widgetContent": "Widget HTML / Text:",
    "lbl_widgetTemplates": "Templates:",
    "h_customCss": "Custom CSS",
    "hint_customCss": "Inject custom CSS rules to personalize any element on your new tab.",
    "lbl_customCss": "CSS styles:",
    "cssSnippetHideSearch": "Hide search",
    "cssSnippetRoundShortcuts": "Round shortcuts",
    "cssSnippetNeonClock": "Neon clock",
    "cssEditorPlaceholder": "/* Write your CSS here... */\n#clock { letter-spacing: 2px; }\n.custom-widget { border-radius: 16px; }",
    "btnApplyCss": "Apply CSS",
    "btnResetCss": "Clear CSS",
    "alertWidgetTitleEmpty": "Please enter a widget title",
    "alertCssApplied": "Custom CSS applied successfully!",
    "confirmClearCustomCss": "Clear all custom CSS?",
    "lbl_loupeDirection": "Magnifying glass direction:",
    "opt_loupeBottomRight": "Bottom-Right (↘ Default)",
    "opt_loupeBottomLeft": "Bottom-Left (↙ Mirrored)",
    "opt_loupeTopLeft": "Top-Left (↖)",
    "opt_loupeTopRight": "Top-Right (↗)",
    "titleFlipLoupe": "Quickly rotate / flip loupe",
    "lbl_searchBtnPos": "Search button position:",
    "opt_btnPosRight": "Right side (Classic)",
    "opt_btnPosLeft": "Left side (Browser style)"
  }
};

var config = null;
var currentActiveTheme = null;
var currentSelectedId = null;
var currentSelectedEl = null;


function getEffectiveLocale() {
  if (config && config.locale && config.locale !== 'auto') {
    return config.locale === 'en' ? 'en' : 'ru';
  }
  return getBrowserLanguage();
}


function T(key) {
  const loc = getEffectiveLocale();
  const dict = TRANSLATIONS[loc] || TRANSLATIONS.ru;
  return (dict[key] !== undefined) ? dict[key] : (TRANSLATIONS.ru[key] !== undefined ? TRANSLATIONS.ru[key] : key);
}

function applyLocale(locale) {
  const loc = (locale === 'auto' || !locale) ? getBrowserLanguage() : locale;
  document.documentElement.setAttribute('lang', loc);
  document.title = T('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = T(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = T(el.getAttribute('data-i18n-title')); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = T(el.getAttribute('data-i18n-placeholder')); });
  document.querySelectorAll('.css-snippet-btn[data-snippet-en]').forEach(btn => {
    const ru = btn.getAttribute('data-snippet') || '';
    const en = btn.getAttribute('data-snippet-en') || ru;
    btn.dataset.activeSnippet = getEffectiveLocale() === 'en' ? en : ru;
  });
}

function getInterfaceTheme() {
  if (config && config.interfaceTheme && config.interfaceTheme !== 'auto') return config.interfaceTheme === 'light' ? 'light' : 'dark';
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyInterfaceTheme() {
  const theme = getInterfaceTheme();
  document.body.dataset.uiTheme = theme;
  document.documentElement.style.colorScheme = theme;
}

function watchInterfaceTheme() {
  if (!window.matchMedia) return;
  const media = window.matchMedia('(prefers-color-scheme: light)');
  const onChange = () => {
    if (!config || config.interfaceTheme === 'auto') applyInterfaceTheme();
  };
  if (media.addEventListener) media.addEventListener('change', onChange);
  else if (media.addListener) media.addListener(onChange);
}

 
const DEFAULT_THEMES = [
  {
    id: 'theme_1', 
    name: 'Firefox Flow', 
    bgType: 'color', 
    mediaSource: 'url', 
    mediaUrl: DEFAULT_VIDEO, 
    useGradient: true, 
    bgColorsCount: 4, 

    bgColors: ['#0a192f', '#1e3a8a', '#701a75', '#db2777', '#f43f5e'], 
    bgAngle: 135,
    speed: 1.0, brightness: 100, overlayOpacity: 0, blur: 0, 

    clockColor: '#ffffff', clockFont: 'system-ui, sans-serif', clockSize: 5.0, 
    clock3D: false, clockNeon: false, clockShadows: true, clockEnable: true, clockNeonColor: '#00f3ff',

    searchBg: '#2b2a33', searchOpacity: 75, searchText: '#ffffff', searchScale: 1.0, searchBlur: 12, 
    searchBorder: true, search3D: false, searchNeon: false, searchShadows: true, 
    accentColor: '#4da6ff', searchNeonColor: '#00f3ff',
    aiNeonColor: '#ec4899', aiGlowEnabled: true, searchGlowEnabled: true,

    typingColor1: '#ff007f', typingColor2: '#00f3ff', typingColor3: '#a855f7',
    typingEffectEnabled: true, typingEffectMode: 'typing', typingAnimateEnabled: true, typingNeonEnabled: true, 
    typingFillEnabled: false, typingBorderWidth: 2, typingAnimSpeed: 3,

    shortcutBg: '#2b2a33', shortcutOpacity: 75, shortcutText: '#ffffff', shortcutScale: 1.0, shortcutBlur: 12, 
    shortcutWidth: 850, shortcutBorder: true, shortcut3D: false, shortcutNeon: false, shortcutShadows: true, shortcutNeonColor: '#00f3ff',

    widgetBg: '#202026', widgetOpacity: 80, widgetText: '#ffffff', widgetBlur: 12, 
    widgetBorder: true, widget3D: false, widgetNeon: false, widgetShadows: true, widgetNeonColor: '#00f3ff',
    neonStyle: 'glow',

    glassSaturate: 190, glassBrightness: 110, glassContrast: 106, glassTintColor: '#ffffff', glassTintOpacity: 24, glassBorderOpacity: 75,
    settingsOpacity: 60,

    layout: {
      positions: {
        clock: { x: 50, y: 22, scale: 1, rotate: 0 }, 
        search: { x: 50, y: 40, scale: 1, rotate: 0 },
        shortcuts: { x: 50, y: 64, scale: 1, rotate: 0 }, 
        weather: { x: 82, y: 10, scale: 1, rotate: 0 },
        ip: { x: 82, y: 90, scale: 1, rotate: 0 }, 
        greeting: { x: 50, y: 11, scale: 1, rotate: 0 }
      },
      shortcutPositions: {
        '1': { x: 20, y: 50, scale: 1, rotate: 0 }, 
        '2': { x: 30, y: 50, scale: 1, rotate: 0 }, 
        '3': { x: 40, y: 50, scale: 1, rotate: 0 }
      }
    }
  }
];


const DEFAULT_CONFIG = {
  locale: 'auto',
  interfaceTheme: 'auto',
  ultraOptimized: false,
  showSettingsButton: true,
  themeMode: 'fixed', activeThemeId: 'theme_1', seqIndex: 0, themes: DEFAULT_THEMES,
  searchEnable: true, searchEngine: 'google', searchBtnStyle: 'text',
  searchLoupeDirection: 'bottom-right',
  searchBtnPosition: 'right',
  showVoice: true, showImage: true, showAi: true, aiModeActive: false,
  buildMode: false, gridSize: 5, shortcutMode: 'grid', sidebarPos: 'right',
  is24h: true, showSeconds: true, showWeather: false, showIp: false, showIpFlag: true, showGreeting: true,
  customCss: '',
  userWidgets: [],
  shortcuts: [
    { id: '1', title: 'Google', url: 'https://google.com' },
    { id: '2', title: 'YouTube', url: 'https://youtube.com' },
    { id: '3', title: 'GitHub', url: 'https://github.com' }
  ]
};


const SEARCH_ENGINES = { 
  google: 'https://www.google.com/search?q=', 
  yandex: 'https://yandex.ru/search/?text=', 
  duckduckgo: 'https://duckduckgo.com/?q=',
  bing: 'https://www.bing.com/search?q='
};


const AI_SEARCH_ENGINES = {
  google: (q) => `https://www.google.com/search?udm=50&q=${encodeURIComponent(q)}`,
  yandex: (q) => `https://ya.ru/neuro?text=${encodeURIComponent(q)}`,
  duckduckgo: (q) => `https://duckduckgo.com/?q=${encodeURIComponent(q)}&ia=chat`,
  bing: (q) => `https://www.bing.com/search?q=${encodeURIComponent(q)}&showconv=1`
};


const WALLPAPER_PRESETS = [
  { id: 'cyberpunk', title: 'Cyberpunk', titleRu: 'Киберпанк', url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=80', thumb: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=320&q=60' },
  { id: 'space', title: 'Deep Space', titleRu: 'Космос', url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80', thumb: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=320&q=60' },
  { id: 'mountains', title: 'Misty Mountains', titleRu: 'Горы в тумане', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80', thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=320&q=60' },
  { id: 'forest', title: 'Moody Forest', titleRu: 'Тёмный лес', url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80', thumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=320&q=60' },
  { id: 'ocean', title: 'Ocean Dusk', titleRu: 'Закат на океане', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80', thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=320&q=60' },
  { id: 'sunset', title: 'Retro Sunset', titleRu: 'Ретро закат', url: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1920&q=80', thumb: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=320&q=60' },
  { id: 'minimal', title: 'Architecture', titleRu: 'Архитектура', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80', thumb: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=320&q=60' },
  { id: 'rain', title: 'Rainy City', titleRu: 'Дождь в городе', url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1920&q=80', thumb: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=320&q=60' }
];


const Storage = {
  get: (key) => new Promise((resolve) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get([key], (res) => resolve(res && res[key] ? res[key] : null));
    } else if (typeof browser !== 'undefined' && browser.storage && browser.storage.local) {
      browser.storage.local.get(key).then(res => resolve(res && res[key] ? res[key] : null)).catch(() => resolve(null));
    } else { 
      try { const item = localStorage.getItem(key); resolve(item ? JSON.parse(item) : null); } catch(e) { resolve(null); } 
    }
  }),
  set: (key, val) => new Promise((resolve) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ [key]: val }, resolve);
    } else if (typeof browser !== 'undefined' && browser.storage && browser.storage.local) {
      browser.storage.local.set({ [key]: val }).then(resolve).catch(resolve);
    } else { 
      try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {} resolve(); 
    }
  })
};

config = normalizeConfig(JSON.parse(JSON.stringify(DEFAULT_CONFIG)));

const DB_NAME = 'VideoNewTabDB_v16';
function openDB() { return new Promise((res, rej) => { const req = indexedDB.open(DB_NAME, 1); req.onupgradeneeded = (e) => e.target.result.createObjectStore('media'); req.onsuccess = () => res(req.result); req.onerror = rej; }); }
async function saveMediaToIDB(themeId, file) { const db = await openDB(); return new Promise((res, rej) => { const tx = db.transaction('media', 'readwrite'); tx.objectStore('media').put({ blob: file, type: file.type, name: file.name }, themeId); tx.oncomplete = res; tx.onerror = rej; }); }
async function getMediaFromIDB(themeId) { const db = await openDB(); return new Promise((res, rej) => { const tx = db.transaction('media', 'readonly'); const req = tx.objectStore('media').get(themeId); req.onsuccess = () => res(req.result); req.onerror = rej; }); }
function hexToRgba(h, o) { if(!h) return `rgba(255,255,255,${o/100})`; let c=h.replace('#',''); if(c.length===3)c=c.split('').map(x=>x+x).join(''); const r=parseInt(c.substring(0,2),16),g=parseInt(c.substring(2,4),16),b=parseInt(c.substring(4,6),16); return isNaN(r)?`rgba(255,255,255,${o/100})`:`rgba(${r},${g},${b},${o/100})`; }
function blobToBase64(blob) { return new Promise((res) => { const r = new FileReader(); r.onloadend = () => res(r.result); r.readAsDataURL(blob); }); }
function base64ToBlob(dataURI, type) { const byteString = atob(dataURI.split(',')[1]); const ab = new ArrayBuffer(byteString.length); const ia = new Uint8Array(ab); for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i); return new Blob([ab], { type: type }); }

const els = {
  video: null, img: null, color: null, overlay: null,
  clock: null, shortcutsGrid: null,
  widgetClock: null, widgetSearch: null,
  widgetShortcuts: null, widgetWeather: null, 
  widgetIp: null, widgetGreeting: null,
  userWidgetsContainer: null,
  sidebar: null, body: null,
  searchForm: null, searchInput: null, searchBtn: null,
  searchAddons: null, btnVoice: null, 
  btnImage: null, btnAi: null,
  lensModal: null,
  customWidgetsList: null, btnCreateCustomWidget: null,
  customWidgetModal: null, closeWidgetModal: null,
  btnCancelCustomWidget: null, btnSaveCustomWidget: null,
  customWidgetEditId: null, customWidgetTitleInput: null, customWidgetContentInput: null,
  customCssEditor: null, btnApplyCss: null, btnClearCss: null,
  eyedropperHint: null
};

function refreshEls() {
  els.video = document.getElementById('bg-video');
  els.img = document.getElementById('bg-image');
  els.color = document.getElementById('bg-color');
  els.overlay = document.getElementById('video-overlay');
  els.clock = document.getElementById('clock');
  els.shortcutsGrid = document.getElementById('shortcuts-grid');
  els.widgetClock = document.getElementById('widget-clock');
  els.widgetSearch = document.getElementById('widget-search'); 
  els.widgetShortcuts = document.getElementById('widget-shortcuts');
  els.widgetWeather = document.getElementById('widget-weather');
  els.widgetIp = document.getElementById('widget-ip');
  els.widgetGreeting = document.getElementById('widget-greeting');
  els.userWidgetsContainer = document.getElementById('user-widgets-container');
  els.sidebar = document.getElementById('settings-sidebar');
  els.body = document.body;
  els.searchForm = document.getElementById('search-form');
  els.searchInput = document.getElementById('search-input');
  els.searchBtn = document.getElementById('search-btn');
  els.searchAddons = document.getElementById('search-addons');
  els.btnVoice = document.getElementById('btn-search-voice');
  els.btnImage = document.getElementById('btn-search-image');
  els.btnAi = document.getElementById('btn-search-ai');
  els.lensModal = document.getElementById('lens-modal');
  els.customWidgetsList = document.getElementById('custom-widgets-list');
  els.btnCreateCustomWidget = document.getElementById('btn-create-custom-widget');
  els.customWidgetModal = document.getElementById('custom-widget-modal');
  els.closeWidgetModal = document.getElementById('close-widget-modal');
  els.btnCancelCustomWidget = document.getElementById('btn-cancel-custom-widget');
  els.btnSaveCustomWidget = document.getElementById('btn-save-custom-widget');
  els.customWidgetEditId = document.getElementById('custom-widget-edit-id');
  els.customWidgetTitleInput = document.getElementById('custom-widget-title-input');
  els.customWidgetContentInput = document.getElementById('custom-widget-content-input');
  els.customCssEditor = document.getElementById('custom-css-editor');
  els.btnApplyCss = document.getElementById('btn-apply-custom-css');
  els.btnClearCss = document.getElementById('btn-clear-custom-css');
  els.eyedropperHint = document.getElementById('eyedropper-hint');

  if (els.video) {
    els.video.onloadeddata = () => {
      if (currentActiveTheme) els.video.playbackRate = parseFloat(currentActiveTheme.speed || 1.0);
    };
  }
}

let appInitialized = false;
let yftBootStartedAt = performance.now();
let yftBootRevealed = false;

function revealYFT() {
  if (yftBootRevealed) return;
  yftBootRevealed = true;

  const reveal = () => {
    document.documentElement.classList.remove('yft-loading');
    document.documentElement.classList.add('yft-ready');
  };

  const elapsed = performance.now() - yftBootStartedAt;
  const minimumBootTime = 420;
  const wait = Math.max(0, minimumBootTime - elapsed);
  setTimeout(reveal, wait);
}

async function startApp() {
  refreshEls();
  if (!els.sidebar || !els.searchForm) {
    setTimeout(startApp, 50);
    return;
  }
  if (appInitialized) return;
  appInitialized = true;

  await loadConfig();
  initClock(); 
  fetchWidgetsData();
  applyThemeAndLayout(); 
  setupEventListeners(); 
  setupDraggables(); 
  setupCustomColorPicker();
  setupKeyboardShortcuts();
  watchInterfaceTheme();
  revealYFT();
}

if (typeof window !== 'undefined') {
  window.startFluidTabsApp = startApp;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

function getWidgetPos(theme, id) {
  if (!theme.layout) theme.layout = { positions: {}, shortcutPositions: {} };
  if (!theme.layout.positions) theme.layout.positions = {};
  if (!theme.layout.positions[id]) theme.layout.positions[id] = { ...(DEFAULT_THEMES[0].layout.positions[id] || { x: 50, y: 50, scale: 1, rotate: 0 }) };
  return theme.layout.positions[id];
}
function getShortcutPos(theme, id) {
  if (!theme.layout) theme.layout = { positions: {}, shortcutPositions: {} };
  if (!theme.layout.shortcutPositions) theme.layout.shortcutPositions = {};
  if (!theme.layout.shortcutPositions[id]) theme.layout.shortcutPositions[id] = { x: 50, y: 50, scale: 1, rotate: 0 };
  return theme.layout.shortcutPositions[id];
}

function normalizeConfig(raw) { 
  const merged = { ...DEFAULT_CONFIG, ...(raw || {}) };
  if (merged.showSettingsButton === undefined) merged.showSettingsButton = true;
  const srcThemes = (Array.isArray(merged.themes) && merged.themes.length) ? merged.themes : DEFAULT_THEMES;
  const legacyPositions = (raw && raw.positions && typeof raw.positions === 'object') ? raw.positions : null;
  const legacyShortcuts = Array.isArray(raw && raw.shortcuts) ? raw.shortcuts : null;

  merged.themes = srcThemes.map((t, idx) => {
    const baseTheme = (idx === 0 && (!raw || !raw.themes)) ? DEFAULT_THEMES[0] : DEFAULT_THEMES[0];
    const nt = { ...baseTheme, ...t };
    const givenLayout = (t.layout && typeof t.layout === 'object') ? t.layout : null;
    nt.layout = {
      positions: { ...DEFAULT_THEMES[0].layout.positions, ...(legacyPositions || {}), ...((givenLayout && givenLayout.positions) || {}) },
      shortcutPositions: { ...((givenLayout && givenLayout.shortcutPositions) || {}) }
    };
    if (nt.aiNeonColor === undefined) nt.aiNeonColor = '#ec4899';
    if (nt.aiGlowEnabled === undefined) nt.aiGlowEnabled = true;
    if (nt.searchGlowEnabled === undefined) nt.searchGlowEnabled = true;
    if (nt.typingFillEnabled === undefined) nt.typingFillEnabled = false;
    return nt;
  });

  merged.shortcuts = (Array.isArray(merged.shortcuts) ? merged.shortcuts : DEFAULT_CONFIG.shortcuts).map(s => ({ id: s.id, title: s.title, url: s.url }));

  if (legacyShortcuts) {
    const activeT = merged.themes.find(t => t.id === merged.activeThemeId) || merged.themes[0];
    legacyShortcuts.forEach(s => {
      if (s && s.id && s.x !== undefined && !activeT.layout.shortcutPositions[s.id]) {
        activeT.layout.shortcutPositions[s.id] = { x: s.x, y: s.y, scale: s.scale !== undefined ? s.scale : 1, rotate: s.rotate || 0 };
      }
    });
  }
  merged.customCss = (raw && typeof raw.customCss === 'string') ? raw.customCss : '';
  merged.userWidgets = (raw && Array.isArray(raw.userWidgets)) ? raw.userWidgets : [];
  merged.themes.forEach(t => { 
    merged.shortcuts.forEach(s => getShortcutPos(t, s.id)); 
    merged.userWidgets.forEach(w => getWidgetPos(t, w.id));
  });

  delete merged.positions;
  if (merged.searchPlaceholder === undefined) {
    const loc = (merged.locale && merged.locale !== 'auto') ? (merged.locale === 'en' ? 'en' : 'ru') : getBrowserLanguage();
    merged.searchPlaceholder = (TRANSLATIONS[loc] && TRANSLATIONS[loc].defaultSearchPlaceholder) || TRANSLATIONS.ru.defaultSearchPlaceholder || 'Поиск в интернете...';
  }
  return merged;
}

async function loadConfig() {
  const data = await Storage.get('config_v16');
  if (data) {
    config = normalizeConfig(data);
  }
  if (config.themeMode === 'random') {
    currentActiveTheme = config.themes[Math.floor(Math.random() * config.themes.length)];
  } else if (config.themeMode === 'sequential') { 
    let i = config.seqIndex || 0; 
    if (i >= config.themes.length) i = 0; 
    currentActiveTheme = config.themes[i]; 
    config.seqIndex = (i + 1) % config.themes.length; 
    Storage.set('config_v16', config); 
  } else {
    currentActiveTheme = config.themes.find(t => t.id === config.activeThemeId) || config.themes[0];
  }
  
  if (!currentActiveTheme.bgColors || currentActiveTheme.bgColors.length < 5) {
    currentActiveTheme.bgColors = ['#0a192f', '#1e3a8a', '#701a75', '#db2777', '#f43f5e'];
  }
  if (!currentActiveTheme.bgColorsCount) currentActiveTheme.bgColorsCount = 4;

  applyUltraOptimized();
  syncSettingsUI(); 
  toggleBuildModeVisuals();
}

async function saveConfig() { 
  await Storage.set('config_v16', config); 
  applyThemeAndLayout(); 
}

function applyTransform(el, pos, isAbsolute) {
  if (!pos || !el) return;
  const s = pos.scale !== undefined ? pos.scale : 1; const r = pos.rotate || 0;
  if (isAbsolute) { 
    el.style.left = pos.x + '%'; 
    el.style.top = pos.y + '%'; 
    el.style.transform = `translate(-50%, -50%) scale(${s}) rotate(${r}deg)`; 
  } else { 
    el.style.transform = r ? `rotate(${r}deg)` : 'none'; 
  }
}


function applyUltraOptimized() {
  const isOpt = Boolean(config.ultraOptimized);
  els.body.classList.toggle('ultra-optimized', isOpt);
}


function updateTypingEffectClass() {
  if (!currentActiveTheme || !els.searchForm || !els.searchInput) return;
  const enabled = currentActiveTheme.typingEffectEnabled !== false;
  const always = currentActiveTheme.typingEffectMode === 'always';
  const hasText = els.searchInput.value.trim().length > 0;
  const isActive = enabled && (always || hasText);
  els.searchForm.classList.toggle('is-typing', isActive);
  

  els.body.classList.toggle('typing-fill-active', isActive && Boolean(currentActiveTheme.typingFillEnabled));
}

async function applyThemeAndLayout() {
  if (!currentActiveTheme) return; 
  const t = currentActiveTheme; 
  const root = document.documentElement;
  
  applyUltraOptimized();
  els.body.classList.toggle('sidebar-left-mode', config.sidebarPos === 'left');
  if (config.sidebarPos === 'left') els.sidebar.classList.add('sidebar-left'); 
  else els.sidebar.classList.remove('sidebar-left');


  root.style.setProperty('--clock-font-size', `${t.clockSize || 5}rem`);
  root.style.setProperty('--search-scale', t.searchScale || 1);
  root.style.setProperty('--shortcut-scale', t.shortcutScale || 1);
  root.style.setProperty('--shortcuts-width', `${t.shortcutWidth || 850}px`);


  root.style.setProperty('--clock-color', t.clockColor || '#ffffff'); 
  root.style.setProperty('--clock-font', t.clockFont || 'system-ui, sans-serif');
  root.style.setProperty('--search-bg', hexToRgba(t.searchBg, t.searchOpacity)); 
  root.style.setProperty('--search-text', t.searchText || '#ffffff'); 
  root.style.setProperty('--search-blur', `${t.searchBlur || 15}px`); 
  root.style.setProperty('--accent-color', t.accentColor || '#4da6ff');
  root.style.setProperty('--ai-neon-color', t.aiNeonColor || '#ec4899');

  root.style.setProperty('--shortcut-bg', hexToRgba(t.shortcutBg, t.shortcutOpacity)); 
  root.style.setProperty('--shortcut-text', t.shortcutText || '#ffffff'); 
  root.style.setProperty('--shortcut-blur', `${t.shortcutBlur || 15}px`);
  root.style.setProperty('--widget-bg', hexToRgba(t.widgetBg, t.widgetOpacity)); 
  root.style.setProperty('--widget-text', t.widgetText || '#ffffff'); 
  root.style.setProperty('--widget-blur', `${t.widgetBlur || 15}px`);
  root.style.setProperty('--settings-opacity', (t.settingsOpacity !== undefined ? t.settingsOpacity : 60) / 100);
  

  root.style.setProperty('--typing-c1', t.typingColor1 || '#ff007f');
  root.style.setProperty('--typing-c2', t.typingColor2 || '#00f3ff');
  root.style.setProperty('--typing-c3', t.typingColor3 || '#a855f7');
  root.style.setProperty('--typing-border-width', `${t.typingBorderWidth || 2}px`);
  root.style.setProperty('--typing-anim-speed', `${t.typingAnimSpeed || 3}s`);


  els.body.dataset.neonStyle = (t.neonStyle === 'outline') ? 'outline' : 'glow';
  els.body.dataset.typingNeon = (t.typingNeonEnabled === false) ? 'off' : 'on';
  els.body.dataset.typingAnimate = (t.typingAnimateEnabled === false) ? 'off' : 'on';
  els.body.dataset.searchGlow = (t.searchGlowEnabled === false) ? 'off' : 'on';
  els.body.dataset.aiGlow = (t.aiGlowEnabled === false) ? 'off' : 'on';

  updateTypingEffectClass();


  const glassTint = t.glassTintColor || '#ffffff';
  const glassBase = (t.glassTintOpacity !== undefined ? t.glassTintOpacity : 24);
  root.style.setProperty('--glass-c1', hexToRgba(glassTint, glassBase));
  root.style.setProperty('--glass-c2', hexToRgba(glassTint, glassBase * 0.25));
  root.style.setProperty('--glass-c3', hexToRgba(glassTint, glassBase * 0.05));
  root.style.setProperty('--glass-c4', hexToRgba(glassTint, glassBase * 0.5));
  const glassBorderOp = (t.glassBorderOpacity !== undefined ? t.glassBorderOpacity : 75);
  root.style.setProperty('--glass-border-c', hexToRgba(glassTint, glassBorderOp));
  root.style.setProperty('--glass-border-c2', hexToRgba(glassTint, glassBorderOp * 0.65));
  root.style.setProperty('--glass-saturate', `${t.glassSaturate !== undefined ? t.glassSaturate : 190}%`);
  root.style.setProperty('--glass-brightness', `${t.glassBrightness !== undefined ? t.glassBrightness : 110}%`);
  root.style.setProperty('--glass-contrast', `${t.glassContrast !== undefined ? t.glassContrast : 106}%`);


  const applyEffects = (el, type) => {
    if (!el) return;
    el.classList.toggle('no-shadow', t[`${type}Shadows`] === false);
    el.classList.toggle('no-border', t[`${type}Border`] === false);
    
    if (t[`${type}3D`]) {
      el.classList.add('glass-3d');
      el.style.setProperty('--custom-blur', `${t[`${type}Blur`] || 15}px`);
    } else {
      el.classList.remove('glass-3d');
      el.style.removeProperty('--custom-blur');
    }
    
    el.classList.toggle('neon-mode', Boolean(t[`${type}Neon`]));
  };


  if (els.widgetClock) els.widgetClock.classList.toggle('hidden', t.clockEnable === false);
  root.style.setProperty('--clock-neon-color', t.clockNeonColor || '#00f3ff');
  applyEffects(els.clock, 'clock');
  

  els.searchForm.style.setProperty('--elem-neon-color', t.searchNeonColor || '#00f3ff');
  applyEffects(els.searchForm, 'search');
  

  [els.widgetWeather, els.widgetIp, els.widgetGreeting].forEach(el => {
    if (el) {
      el.style.setProperty('--elem-neon-color', t.widgetNeonColor || '#00f3ff');
      applyEffects(el, 'widget');
    }
  });

  els.overlay.style.opacity = (t.overlayOpacity !== undefined ? t.overlayOpacity : 0) / 100; 
  els.video.style.filter = `brightness(${t.brightness || 100}%) blur(${t.blur || 0}px)`; 
  els.img.style.filter = `brightness(${t.brightness || 100}%) blur(${t.blur || 0}px)`;

  els.video.classList.add('hidden'); 
  els.img.classList.add('hidden'); 
  els.color.classList.add('hidden'); 
  els.video.pause();


  if (t.bgType === 'color') {
    els.color.classList.remove('hidden');
    if (t.useGradient) {
      let gradColors = []; 
      const count = t.bgColorsCount || 4;
      for (let i = 0; i < count; i++) gradColors.push(t.bgColors[i] || '#000000');
      els.color.style.background = `linear-gradient(${t.bgAngle || 135}deg, ${gradColors.join(', ')})`;
    } else {
      els.color.style.background = t.bgColors[0] || '#0a192f';
    }
  } else if (t.bgType === 'image') {
    els.img.classList.remove('hidden');
    if (t.mediaSource === 'local') { 
      const d = await getMediaFromIDB(t.id); 
      if (d && d.blob) { 
        els.img.src = URL.createObjectURL(d.blob); 
        const nameDisp = document.getElementById('file-name-display'); 
        if (nameDisp) nameDisp.innerText = d.name || 'Фотография загружена'; 
      } 
    } else { 
      els.img.src = t.mediaUrl || (WALLPAPER_PRESETS && WALLPAPER_PRESETS[0] ? WALLPAPER_PRESETS[0].url : ''); 
    }
  } else {
    els.video.classList.remove('hidden'); 
    els.video.playbackRate = parseFloat(t.speed || 1.0);
    if (t.mediaSource === 'local') { 
      const d = await getMediaFromIDB(t.id); 
      if (d && d.blob) { 
        const url = URL.createObjectURL(d.blob); 
        const nameDisp = document.getElementById('file-name-display'); 
        if (nameDisp) nameDisp.innerText = d.name || 'Видеофайл загружен'; 
        if (els.video.src !== url) { els.video.src = url; els.video.play().catch(()=>{}); } 
      } 
    } else { 
      if (els.video.src !== t.mediaUrl) { els.video.src = t.mediaUrl || DEFAULT_VIDEO; els.video.play().catch(()=>{}); } 
    }
  }

  els.widgetSearch.classList.toggle('hidden', !config.searchEnable); 
  els.searchInput.placeholder = config.searchPlaceholder || T('defaultSearchPlaceholder');
  const bTxt = els.searchBtn.querySelector('.btn-text'); 
  const bIco = els.searchBtn.querySelector('.btn-icon');
  if (bTxt && bIco) { 
    if (config.searchBtnStyle === 'icon') { bTxt.classList.add('hidden'); bIco.classList.remove('hidden'); } 
    else { bTxt.classList.remove('hidden'); bIco.classList.add('hidden'); } 
  }
  
  const hasAddons = Boolean(config.showVoice || config.showImage || config.showAi);
  els.searchAddons.classList.toggle('hidden', !hasAddons);
  els.btnVoice.classList.toggle('hidden', !config.showVoice); 
  els.btnImage.classList.toggle('hidden', !config.showImage); 
  const googleAiAvailable = (config.searchEngine || 'google') === 'google';
  els.btnAi.classList.toggle('hidden', !config.showAi || !googleAiAvailable);
  els.btnAi.classList.toggle('active', Boolean(config.aiModeActive && googleAiAvailable)); 
  els.searchForm.classList.toggle('ai-active', Boolean(config.aiModeActive));

  const curEng = config.searchEngine || 'google';
  const aiTooltips = {
    google: 'Google AI Mode',
    yandex: 'Алиса AI (ya.ru/neuro)',
    duckduckgo: 'DuckDuckGo AI Chat',
    bing: 'Microsoft Copilot AI'
  };
  els.btnAi.title = aiTooltips[curEng] || 'AI Search';


  applySearchLoupeDirection(config.searchLoupeDirection);
  applySearchBtnPosition(config.searchBtnPosition);

  els.widgetWeather.classList.toggle('hidden', !config.showWeather); 
  els.widgetIp.classList.toggle('hidden', !config.showIp); 
  els.widgetGreeting.classList.toggle('hidden', !config.showGreeting);

  applyTransform(els.widgetClock, getWidgetPos(t, 'clock'), true); 
  applyTransform(els.widgetSearch, getWidgetPos(t, 'search'), true); 
  applyTransform(els.widgetWeather, getWidgetPos(t, 'weather'), true); 
  applyTransform(els.widgetIp, getWidgetPos(t, 'ip'), true); 
  applyTransform(els.widgetGreeting, getWidgetPos(t, 'greeting'), true);
  if (config.shortcutMode !== 'free') applyTransform(els.widgetShortcuts, getWidgetPos(t, 'shortcuts'), true);
  
  updateSettingsButtonVisibility();
  applyCustomCss();
  renderUserWidgets();
  renderShortcuts();
}


const LOUPE_TRANSFORMS = {
  'bottom-right': 'none',
  'bottom-left': 'scaleX(-1)',
  'top-left': 'scale(-1, -1)',
  'top-right': 'scaleY(-1)'
};


function applySearchLoupeDirection(dir) {
  const direction = dir || (config && config.searchLoupeDirection) || 'bottom-right';
  const transform = LOUPE_TRANSFORMS[direction] || 'none';
  document.documentElement.style.setProperty('--search-loupe-transform', transform);
}


function applySearchBtnPosition(pos) {
  const position = pos || (config && config.searchBtnPosition) || 'right';
  if (els.searchForm) {
    els.searchForm.setAttribute('data-btn-pos', position);
  }
}

function applyCustomCss() {
  let styleTag = document.getElementById('user-custom-css');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'user-custom-css';
    styleTag.type = 'text/css';
    document.head.appendChild(styleTag);
  }

  const css = typeof config.customCss === 'string' ? config.customCss : '';

  styleTag.replaceChildren(document.createTextNode(css));

  if (els.customCssEditor && document.activeElement !== els.customCssEditor) {
    els.customCssEditor.value = css;
  }
}

const WIDGET_TEMPLATES = {
  notes: `<div style="font-size: 0.88rem; padding: 2px;">
  <strong style="color: var(--accent-color, #4da6ff); display: block; margin-bottom: 6px;">📝 Быстрые заметки</strong>
  <ul style="margin: 0 0 0 18px; padding: 0; line-height: 1.5;">
    <li>Купить кофе и зерна</li>
    <li>Проверить pull request</li>
    <li>Режим отдыха в 22:00</li>
  </ul>
</div>`,
  quote: `<blockquote style="margin: 0; font-style: italic; font-size: 0.92rem; line-height: 1.4; border-left: 3px solid var(--accent-color, #4da6ff); padding-left: 10px;">
  «Будущее принадлежит тем, кто верит в красоту своей мечты.»
  <footer style="margin-top: 6px; font-size: 0.78rem; opacity: 0.8; font-style: normal;">— Элеонора Рузвельт</footer>
</blockquote>`,
  links: `<div style="display: flex; gap: 8px; flex-wrap: wrap; font-size: 0.82rem;">
  <a href="https://github.com" target="_blank" style="padding: 4px 8px; border-radius: 6px; background: rgba(255,255,255,0.08); text-decoration: none; color: inherit;">GitHub</a>
  <a href="https://habr.com" target="_blank" style="padding: 4px 8px; border-radius: 6px; background: rgba(255,255,255,0.08); text-decoration: none; color: inherit;">Habr</a>
  <a href="https://reddit.com" target="_blank" style="padding: 4px 8px; border-radius: 6px; background: rgba(255,255,255,0.08); text-decoration: none; color: inherit;">Reddit</a>
  <a href="https://developer.mozilla.org" target="_blank" style="padding: 4px 8px; border-radius: 6px; background: rgba(255,255,255,0.08); text-decoration: none; color: inherit;">MDN</a>
</div>`,
  progress: `<div style="font-size: 0.85rem; font-weight: 500;">
  <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
    <span>Прогресс дня</span>
    <span style="color: var(--accent-color, #4da6ff); font-weight: 700;">68%</span>
  </div>
  <div style="width: 100%; height: 6px; background: rgba(255, 255, 255, 0.15); border-radius: 3px; overflow: hidden;">
    <div style="width: 68%; height: 100%; background: linear-gradient(90deg, #00f3ff, #ec4899); border-radius: 3px;"></div>
  </div>
</div>`
};

function sanitizeWidgetHTML(html) {
  const parsedDoc = new DOMParser().parseFromString(`<div>${String(html || '')}</div>`, 'text/html');
  const root = parsedDoc.body.firstChild;
  const walk = (node) => {
    const children = Array.from(node.childNodes);
    children.forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        const tag = child.tagName.toLowerCase();
        if (tag === 'script' || tag === 'iframe' || tag === 'object' || tag === 'embed' || tag === 'link' || tag === 'meta') {
          child.remove();
          return;
        }
        Array.from(child.attributes).forEach((attr) => {
          const name = attr.name.toLowerCase();
          const value = attr.value.trim().toLowerCase();
          if (name.startsWith('on') || value.startsWith('javascript:')) {
            child.removeAttribute(attr.name);
          }
        });
        walk(child);
      }
    });
  };
  walk(root);
  const frag = document.createDocumentFragment();
  while (root.firstChild) frag.appendChild(root.firstChild);
  return frag;
}

function renderUserWidgets() {
  if (!els.userWidgetsContainer) {
    els.userWidgetsContainer = document.getElementById('user-widgets-container');
    if (!els.userWidgetsContainer) return;
  }
  els.userWidgetsContainer.innerHTML = '';
  const userWidgets = Array.isArray(config.userWidgets) ? config.userWidgets : [];

  userWidgets.forEach((w) => {
    const wEl = document.createElement('div');
    wEl.id = w.id;
    wEl.className = 'draggable-widget custom-widget user-created-widget';
    wEl.dataset.widgetId = w.id;
    if (w.enabled === false) wEl.classList.add('hidden');
    if (currentSelectedId === w.id) wEl.classList.add('builder-selected');

    wEl.classList.toggle('no-shadow', currentActiveTheme.widgetShadows === false);
    wEl.classList.toggle('no-border', currentActiveTheme.widgetBorder === false);
    if (currentActiveTheme.widget3D) {
      wEl.classList.add('glass-3d');
      wEl.style.setProperty('--custom-blur', `${currentActiveTheme.widgetBlur || 15}px`);
    } else {
      wEl.classList.remove('glass-3d');
      wEl.style.removeProperty('--custom-blur');
    }
    wEl.classList.toggle('neon-mode', Boolean(currentActiveTheme.widgetNeon));
    wEl.style.setProperty('--elem-neon-color', currentActiveTheme.widgetNeonColor || '#00f3ff');

    const header = document.createElement('div');
    header.className = 'user-widget-header';
    const title = document.createElement('span');
    title.textContent = w.title || 'Виджет';
    header.appendChild(title);

    const actions = document.createElement('div');
    actions.className = 'user-widget-actions';

    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'btn-uw-action btn-uw-edit';
    editBtn.title = getEffectiveLocale() === 'ru' ? 'Редактировать' : 'Edit';
    editBtn.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>';
    editBtn.onclick = (e) => {
      e.stopPropagation();
      openCustomWidgetModal(w);
    };

    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'btn-uw-action btn-uw-del';
    delBtn.title = getEffectiveLocale() === 'ru' ? 'Удалить' : 'Delete';
    delBtn.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>';
    delBtn.onclick = (e) => {
      e.stopPropagation();
      deleteUserWidget(w.id);
    };

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);
    header.appendChild(actions);
    wEl.appendChild(header);

    const body = document.createElement('div');
    body.className = 'user-widget-body';
    body.innerHTML = '';
    body.appendChild(sanitizeWidgetHTML(w.content));
    wEl.appendChild(body);


    els.userWidgetsContainer.appendChild(wEl);
    applyTransform(wEl, getWidgetPos(currentActiveTheme, w.id), true);
    makeDraggable(wEl, w.id);
  });
}

function renderCustomWidgetsList() {
  const list = document.getElementById('custom-widgets-list');
  if (!list) return;
  list.innerHTML = '';
  const userWidgets = Array.isArray(config.userWidgets) ? config.userWidgets : [];
  const isRu = getEffectiveLocale() === 'ru';

  if (userWidgets.length === 0) {
    const emptyNotice = document.createElement('div');
    emptyNotice.style.fontSize = '0.8rem';
    emptyNotice.style.opacity = '0.6';
    emptyNotice.style.padding = '8px 0';
    emptyNotice.textContent = isRu ? 'Собственных виджетов пока нет. Нажмите кнопку выше, чтобы создать.' : 'No custom widgets yet. Click button above to create one.';
    list.appendChild(emptyNotice);
    return;
  }

  userWidgets.forEach((w) => {
    const item = document.createElement('div');
    item.className = 'custom-widget-manage-item';

    const info = document.createElement('div');
    info.className = 'custom-widget-info';

    const chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.checked = w.enabled !== false;
    chk.title = isRu ? 'Включить / Выключить виджет' : 'Enable / Disable';
    chk.onchange = (e) => {
      toggleUserWidget(w.id, e.target.checked);
    };

    const titleSpan = document.createElement('span');
    titleSpan.className = 'custom-widget-title';
    titleSpan.textContent = w.title || 'Виджет';

    info.appendChild(chk);
    info.appendChild(titleSpan);

    const actions = document.createElement('div');
    actions.className = 'custom-widget-actions';

    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'btn-icon-manage btn-edit-widget';
    editBtn.title = isRu ? 'Редактировать' : 'Edit';
    editBtn.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>';
    editBtn.onclick = () => openCustomWidgetModal(w);

    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'btn-icon-manage btn-del-widget';
    delBtn.title = isRu ? 'Удалить' : 'Delete';
    delBtn.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>';
    delBtn.onclick = () => deleteUserWidget(w.id);

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);

    item.appendChild(info);
    item.appendChild(actions);
    list.appendChild(item);
  });
}

function openCustomWidgetModal(widgetData = null) {
  const modal = document.getElementById('custom-widget-modal');
  const titleInput = document.getElementById('custom-widget-title-input');
  const contentInput = document.getElementById('custom-widget-content-input');
  const idInput = document.getElementById('custom-widget-edit-id');
  const modalTitle = document.getElementById('custom-widget-modal-title');
  if (!modal) return;

  if (widgetData) {
    if (idInput) idInput.value = widgetData.id;
    if (titleInput) titleInput.value = widgetData.title || '';
    if (contentInput) contentInput.value = widgetData.content || '';
    if (modalTitle) modalTitle.textContent = T('modalTitleEditWidget');
  } else {
    if (idInput) idInput.value = '';
    if (titleInput) titleInput.value = getEffectiveLocale() === 'ru' ? 'Мой виджет' : 'My Widget';
    if (contentInput) contentInput.value = WIDGET_TEMPLATES.notes;
    if (modalTitle) modalTitle.textContent = T('modalTitleNewWidget');
  }
  modal.classList.remove('hidden');
}

function closeCustomWidgetModal() {
  const modal = document.getElementById('custom-widget-modal');
  if (modal) modal.classList.add('hidden');
}

function saveCustomWidget() {
  const idInput = document.getElementById('custom-widget-edit-id');
  const titleInput = document.getElementById('custom-widget-title-input');
  const contentInput = document.getElementById('custom-widget-content-input');
  const title = (titleInput ? titleInput.value : '').trim();
  const content = contentInput ? contentInput.value : '';
  const existingId = idInput ? idInput.value : ''; 

  if (!title) {
    alert(T('alertWidgetTitleEmpty'));
    return;
  }

  if (!Array.isArray(config.userWidgets)) config.userWidgets = [];

  if (existingId) {
    const existing = config.userWidgets.find(x => x.id === existingId);
    if (existing) {
      existing.title = title;
      existing.content = content;
    }
  } else {
    const newId = 'uw_' + Date.now();
    const newWidget = {
      id: newId,
      title: title,
      content: content,
      enabled: true
    };
    config.userWidgets.push(newWidget);
    config.themes.forEach(th => {
      if (!th.layout.positions[newId]) {
        th.layout.positions[newId] = { x: 18, y: 70, scale: 1, rotate: 0 };
      }
    });
  }

  saveConfig();
  renderUserWidgets();
  renderCustomWidgetsList();
  closeCustomWidgetModal();
}

function deleteUserWidget(widgetId) {
  if (!confirm(getEffectiveLocale() === 'ru' ? 'Удалить этот виджет?' : 'Delete this widget?')) return;
  config.userWidgets = (config.userWidgets || []).filter(w => w.id !== widgetId);
  config.themes.forEach(th => {
    if (th.layout && th.layout.positions) delete th.layout.positions[widgetId];
  });
  if (currentSelectedId === widgetId) clearSelection();
  saveConfig();
  renderUserWidgets();
  renderCustomWidgetsList();
}

function toggleUserWidget(widgetId, isChecked) {
  const w = (config.userWidgets || []).find(x => x.id === widgetId);
  if (w) {
    w.enabled = isChecked;
    saveConfig();
    renderUserWidgets();
  }
}

function renderShortcuts() {
  els.shortcutsGrid.innerHTML = ''; 
  const manageList = document.getElementById('shortcuts-manage-list'); 
  if (manageList) manageList.innerHTML = '';
  
  const isFree = config.shortcutMode === 'free';
  if (isFree) els.widgetShortcuts.classList.add('free-mode'); 
  else els.widgetShortcuts.classList.remove('free-mode');

  config.shortcuts.forEach((s, index) => {
    const a = document.createElement('a'); 
    a.className = 'shortcut-card'; 
    a.href = s.url; 
    a.setAttribute('data-id', s.id);
    if (currentSelectedId === s.id) a.classList.add('builder-selected');
    

    a.classList.toggle('no-shadow', currentActiveTheme.shortcutShadows === false);
    a.classList.toggle('no-border', currentActiveTheme.shortcutBorder === false);
    if (currentActiveTheme.shortcut3D) {
      a.classList.add('glass-3d');
      a.style.setProperty('--custom-blur', `${currentActiveTheme.shortcutBlur || 15}px`);
    } else {
      a.classList.remove('glass-3d');
      a.style.removeProperty('--custom-blur');
    }
    a.classList.toggle('neon-mode', Boolean(currentActiveTheme.shortcutNeon));
    a.style.setProperty('--elem-neon-color', currentActiveTheme.shortcutNeonColor || '#00f3ff');
    
    let domain = 'google.com'; 
    try { domain = new URL(s.url).hostname; } catch(e) {}
    const fUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    a.innerHTML = '';
    const favImg = document.createElement('img');
    favImg.src = fUrl;
    favImg.alt = s.title;
    favImg.onerror = () => { favImg.style.display = 'none'; };
    const titleSpan = document.createElement('span');
    titleSpan.textContent = s.title;
    a.appendChild(favImg);
    a.appendChild(titleSpan);

    if (isFree) { 
      applyTransform(a, getShortcutPos(currentActiveTheme, s.id), true); 
      makeDraggable(a, s.id, true); 
    } else {
      applyTransform(a, getShortcutPos(currentActiveTheme, s.id), false); 
      a.draggable = config.buildMode;
      a.addEventListener('dragstart', (e) => { if (!config.buildMode) return; e.dataTransfer.setData('text/plain', index); a.classList.add('dragging'); });
      a.addEventListener('dragend', () => a.classList.remove('dragging')); 
      a.addEventListener('dragover', (e) => e.preventDefault());
      a.addEventListener('drop', (e) => { 
        e.preventDefault(); 
        const dIdx = e.dataTransfer.getData('text/plain'); 
        if (dIdx && dIdx != index) { 
          const moved = config.shortcuts.splice(dIdx, 1)[0]; 
          config.shortcuts.splice(index, 0, moved); 
          saveConfig(); 
        } 
      });
      a.addEventListener('mousedown', () => { if (config.buildMode) selectElement(s.id, a); });
    }
    els.shortcutsGrid.appendChild(a);

    if (manageList) {
      const li = document.createElement('li'); 
      li.className = 'manage-item'; 
      const liTitle = document.createElement('span');
      liTitle.textContent = s.title;
      const liDelBtn = document.createElement('button');
      liDelBtn.className = 'btn-delete';
      liDelBtn.setAttribute('data-id', s.id);
      liDelBtn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>';
      li.appendChild(liTitle);
      li.appendChild(liDelBtn);
      manageList.appendChild(li);
    }
  });
}

function setupDraggables() {
  makeDraggable(els.widgetClock, 'clock'); 
  makeDraggable(els.widgetSearch, 'search'); 
  makeDraggable(els.widgetWeather, 'weather'); 
  makeDraggable(els.widgetIp, 'ip'); 
  makeDraggable(els.widgetGreeting, 'greeting');
  if (els.widgetShortcuts) { 
    els.widgetShortcuts.addEventListener('mousedown', (e) => { 
      if (config.buildMode && config.shortcutMode === 'grid' && e.button === 0) { 
        if (e.target.closest('.shortcut-card')) return; 
        selectElement('shortcuts', els.widgetShortcuts); 
      } 
    }); 
    makeDraggable(els.widgetShortcuts, 'shortcuts'); 
  }
}

function makeDraggable(el, id, isShortcut = false) {
  if (!el) return;
  el.addEventListener('mousedown', (e) => {
    if (!config.buildMode || e.button !== 0) return;
    if (!isShortcut && e.target.closest('button, a, input, textarea, select, .user-widget-actions') && id !== 'shortcuts') return;
    if (id === 'shortcuts' && e.target.closest('.shortcut-card')) return; 

    selectElement(id, el); 
    if (isShortcut) e.preventDefault();
    let startX = e.clientX, startY = e.clientY, isDragging = false, hasMoved = false;
    const isAbsolute = !isShortcut || config.shortcutMode === 'free';
    const gridStep = Number.isFinite(Number(config.gridSize)) ? Number(config.gridSize) : 5;
    const snapEnabled = gridStep > 0;
    const snapValue = (value) => snapEnabled ? Math.round(value / gridStep) * gridStep : value;

    const onMouseMove = (ev) => {
      if (Math.abs(ev.clientX - startX) > 3 || Math.abs(ev.clientY - startY) > 3) {
        hasMoved = true; isDragging = true; el.style.pointerEvents = 'none';
        let xP = (ev.clientX / window.innerWidth) * 100; 
        let yP = (ev.clientY / window.innerHeight) * 100;
        xP = snapValue(xP);
        yP = snapValue(yP);
        let posRef = isShortcut ? getShortcutPos(currentActiveTheme, id) : getWidgetPos(currentActiveTheme, id);
        const tmp = { ...posRef, x: Math.min(Math.max(xP, 1), 99), y: Math.min(Math.max(yP, 1), 99) };
        applyTransform(el, tmp, isAbsolute);
      }
    };
    const onMouseUp = (ev) => {
      window.removeEventListener('mousemove', onMouseMove); 
      window.removeEventListener('mouseup', onMouseUp); 
      el.style.pointerEvents = 'auto';
      if (isDragging) {
        let xP = (ev.clientX / window.innerWidth) * 100, yP = (ev.clientY / window.innerHeight) * 100;
        xP = snapValue(xP);
        yP = snapValue(yP); 
        xP = Math.min(Math.max(xP, 1), 99); 
        yP = Math.min(Math.max(yP, 1), 99);
        const p = isShortcut ? getShortcutPos(currentActiveTheme, id) : getWidgetPos(currentActiveTheme, id);
        p.x = xP; p.y = yP;
        saveConfig();
      } else if (isShortcut && !hasMoved) { 
        window.location.href = el.href; 
      }
    };
    window.addEventListener('mousemove', onMouseMove); 
    window.addEventListener('mouseup', onMouseUp);
  });
  if (isShortcut) { 
    el.addEventListener('click', (e) => { 
      if (config.buildMode || e.defaultPrevented) e.preventDefault(); 
    }); 
  }
}

function clearSelection() { 
  document.querySelectorAll('.builder-selected').forEach(e => e.classList.remove('builder-selected')); 
  currentSelectedId = null; 
  currentSelectedEl = null; 
  const ctl = document.getElementById('builder-controls');
  if (ctl) ctl.classList.add('hidden');
}

function selectElement(id, el) {
  if (!config.buildMode) return; 
  clearSelection(); 
  currentSelectedId = id; 
  currentSelectedEl = el; 
  el.classList.add('builder-selected'); 
  const ctl = document.getElementById('builder-controls');
  if (ctl) ctl.classList.remove('hidden');

  const NAMES = { 
    clock: T('name_clock'), 
    search: T('name_search'), 
    shortcuts: T('name_shortcuts'), 
    weather: T('name_weather'), 
    ip: T('name_ip'), 
    greeting: T('name_greeting') 
  };
  let name = NAMES[id]; 
  let posRef = NAMES[id] ? getWidgetPos(currentActiveTheme, id) : null;
  if (!name && typeof id === 'string') { 
    if (id.startsWith('uw_')) {
      const uw = (config.userWidgets || []).find(x => x.id === id);
      name = (getEffectiveLocale() === 'ru' ? 'Виджет: ' : 'Widget: ') + (uw ? uw.title : id);
      posRef = getWidgetPos(currentActiveTheme, id);
    } else {
      const s = config.shortcuts.find(x => x.id === id); 
      if (s) { 
        name = T('name_shortcutPrefix') + s.title; 
        posRef = getShortcutPos(currentActiveTheme, id); 
      } 
    }
  }
  
  const elName = document.getElementById('builder-target-name'); 
  if (elName) elName.innerText = (getEffectiveLocale() === 'ru' ? 'Выбран: ' : 'Selected: ') + (name || id);
  const elScale = document.getElementById('build-scale'); 
  if (elScale) elScale.value = (posRef && posRef.scale !== undefined) ? posRef.scale : 1; 
  const elRotate = document.getElementById('build-rotate'); 
  if (elRotate) elRotate.value = (posRef && posRef.rotate !== undefined) ? posRef.rotate : 0;
  const vScale = document.getElementById('val-build-scale'); 
  if (vScale) vScale.innerText = (posRef && posRef.scale !== undefined) ? posRef.scale : 1; 
  const vRotate = document.getElementById('val-build-rotate'); 
  if (vRotate) vRotate.innerText = (posRef && posRef.rotate !== undefined) ? posRef.rotate : 0;
}

document.body.addEventListener('mousedown', (e) => { 
  if (config.buildMode && 
      !e.target.closest('.draggable-widget') && 
      !e.target.closest('.sidebar') && 
      !e.target.closest('#build-mode-indicator') && 
      !e.target.closest('.btn-settings-trigger') && 
      !e.target.closest('.color-picker-popover') && 
      !e.target.closest('.modal-box')) { 
    clearSelection(); 
  }
});


const WIDGET_CACHE_TTL = 25 * 60 * 1000;

async function ensureLocationDataConsent() {
  try {
    if (!globalThis.browser?.permissions?.getAll || !globalThis.browser?.permissions?.request) return true;
    const permissions = await browser.permissions.getAll();
    if (!('data_collection' in permissions)) return true;
    if (permissions.data_collection?.includes('locationInfo')) return true;
    return await browser.permissions.request({ data_collection: ['locationInfo'] });
  } catch (e) {
    return false;
  }
}

async function fetchWidgetsData() {
  const isRu = getEffectiveLocale() === 'ru';
  const now = Date.now();


  if (config.showIp) {
    const ipEl = document.getElementById('ip-info');
    let cachedIp = null;
    try {
      const raw = localStorage.getItem('_yft_ip_cache');
      if (raw) cachedIp = JSON.parse(raw);
    } catch(e) {}

    if (cachedIp && (now - cachedIp.ts < WIDGET_CACHE_TTL) && cachedIp.ip) {
      if (ipEl) {
        ipEl.innerHTML = '';
        if (config.showIpFlag !== false && cachedIp.flag) {
          const flagEl = document.createElement('img');
          flagEl.src = cachedIp.flag;
          flagEl.className = 'ip-country-flag';
          flagEl.alt = '';
          ipEl.appendChild(flagEl);
        }
        const ipSpan = document.createElement('span');
        ipSpan.textContent = `IP: ${cachedIp.ip}`;
        ipEl.appendChild(ipSpan);
      }
    } else {
      (async () => {
        let ip = null;
        let flag = null;
        try {
          const ctrl = new AbortController();
          const tid = setTimeout(() => ctrl.abort(), 3200);
          const res = await fetch('https://ipwho.is/', { signal: ctrl.signal });
          clearTimeout(tid);
          const data = await res.json();
          if (data && data.success) {
            ip = data.ip;
            flag = (data.flag && data.flag.img) ? data.flag.img : null;
          }
        } catch(e) {}

        if (!ip) {
          try {
            const ctrl2 = new AbortController();
            const tid2 = setTimeout(() => ctrl2.abort(), 3000);
            const res2 = await fetch('https://api.ipify.org?format=json', { signal: ctrl2.signal });
            clearTimeout(tid2);
            const data2 = await res2.json();
            if (data2 && data2.ip) ip = data2.ip;
          } catch(e) {}
        }

        if (ip) {
          try { localStorage.setItem('_yft_ip_cache', JSON.stringify({ ip, flag, ts: now })); } catch(e) {}
          if (ipEl) {
            ipEl.innerHTML = '';
            if (config.showIpFlag !== false && flag) {
              const flagEl = document.createElement('img');
              flagEl.src = flag;
              flagEl.className = 'ip-country-flag';
              flagEl.alt = '';
              ipEl.appendChild(flagEl);
            }
            const ipSpan = document.createElement('span');
            ipSpan.textContent = `IP: ${ip}`;
            ipEl.appendChild(ipSpan);
          }
        } else if (!cachedIp && ipEl) {
          ipEl.innerText = isRu ? 'IP недоступен' : 'IP unavailable';
        }
      })();
    }
  }


  if (config.showWeather) {
    const wEl = document.getElementById('weather-info');
    let cachedW = null;
    try {
      const raw = localStorage.getItem('_yft_w_cache');
      if (raw) cachedW = JSON.parse(raw);
    } catch(e) {}

    const getWeatherIcon = (code) => {
      if (code === 0) return '☀️';
      if (code <= 3) return '⛅';
      if (code <= 48) return '🌫️';
      if (code <= 67) return '🌧️';
      if (code <= 77 || code === 85 || code === 86) return '❄️';
      if (code >= 95) return '⚡';
      return '🌤️';
    };

    if (cachedW && (now - cachedW.ts < WIDGET_CACHE_TTL)) {
      if (wEl) {
        wEl.innerHTML = '';
        wEl.appendChild(document.createTextNode(`${cachedW.temp}°C ${getWeatherIcon(cachedW.code)}`));
        wEl.appendChild(document.createElement('br'));
        const citySmall = document.createElement('small');
        citySmall.style.opacity = '0.75';
        citySmall.textContent = cachedW.city;
        wEl.appendChild(citySmall);
      }
    } else {
      (async () => {
        let lat = 55.75, lon = 37.61, city = isRu ? 'Москва' : 'Moscow';
        let gotCoords = false;


        try {
          const ctrl = new AbortController();
          const tid = setTimeout(() => ctrl.abort(), 3000);
          const r = await fetch('https://freeipapi.com/api/json', { signal: ctrl.signal });
          clearTimeout(tid);
          const g = await r.json();
          if (g && g.latitude && g.longitude) {
            lat = g.latitude;
            lon = g.longitude;
            city = g.cityName || city;
            gotCoords = true;
          }
        } catch(e) {}

        if (!gotCoords) {
          try {
            const ctrl = new AbortController();
            const tid = setTimeout(() => ctrl.abort(), 3000);
            const r = await fetch('https://ipwho.is/', { signal: ctrl.signal });
            clearTimeout(tid);
            const g = await r.json();
            if (g && g.success && g.latitude) {
              lat = g.latitude;
              lon = g.longitude;
              city = g.city || city;
              gotCoords = true;
            }
          } catch(e) {}
        }

        try {
          const wRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
          const wData = await wRes.json();
          if (wData && wData.current_weather) {
            const temp = Math.round(wData.current_weather.temperature);
            const code = wData.current_weather.weathercode;
            try { localStorage.setItem('_yft_w_cache', JSON.stringify({ temp, code, city, ts: now })); } catch(e) {}
            if (wEl) {
              wEl.innerHTML = '';
              wEl.appendChild(document.createTextNode(`${temp}°C ${getWeatherIcon(code)}`));
              wEl.appendChild(document.createElement('br'));
              const citySmall = document.createElement('small');
              citySmall.style.opacity = '0.75';
              citySmall.textContent = city;
              wEl.appendChild(citySmall);
            }
            return;
          }
        } catch(e) {}

        if (!cachedW && wEl) {
          wEl.innerText = isRu ? 'Погода недоступна' : 'Weather unavailable';
        }
      })();
    }
  }
}

function initClock() { 
  const update = () => { 
    const now = new Date(); 
    let h = now.getHours(), m = String(now.getMinutes()).padStart(2, '0'), s = String(now.getSeconds()).padStart(2, '0'), ampm = ''; 
    if (config.showGreeting) {
      let gTxt = T('greetingDay'); 
      if (h >= 0 && h < 6) gTxt = T('greetingNight'); 
      else if (h >= 6 && h < 12) gTxt = T('greetingMorning'); 
      else if (h >= 18 && h < 24) gTxt = T('greetingEvening');
      const elG = document.getElementById('greeting-text'); 
      if (elG) elG.innerText = gTxt;
    }
    if (!config.is24h) { 
      ampm = h >= 12 ? ' PM' : ' AM'; 
      h = h % 12 || 12; 
    } 
    if (els.clock) els.clock.textContent = `${String(h).padStart(2, '0')}:${m}${config.showSeconds ? ':' + s : ''}${ampm}`; 
  }; 
  update(); 
  setInterval(update, 1000); 
}

function updateSettingsButtonVisibility() {
  const button = document.getElementById('settings-toggle');
  if (!button) return;
  const visible = !config || config.showSettingsButton !== false;
  button.classList.toggle('hidden', !visible);
  button.setAttribute('aria-hidden', visible ? 'false' : 'true');
}

function updateLabels() {
  const t = currentActiveTheme; 
  if (!t) return; 
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt('val-speed', t.speed); 
  setTxt('val-brightness', t.brightness); 
  setTxt('val-overlay', t.overlayOpacity); 
  setTxt('val-blur', t.blur); 
  setTxt('val-size-clock', t.clockSize); 
  setTxt('val-size-search', t.searchScale); 
  setTxt('val-size-shortcuts', t.shortcutScale); 
  setTxt('val-shortcut-width', t.shortcutWidth || 850); 
  setTxt('val-op-search', t.searchOpacity); 
  setTxt('val-blur-search', t.searchBlur || 15); 
  setTxt('val-op-shortcut', t.shortcutOpacity); 
  setTxt('val-blur-shortcut', t.shortcutBlur || 15); 
  setTxt('val-op-widget', t.widgetOpacity); 
  setTxt('val-blur-widget', t.widgetBlur || 15); 
  setTxt('val-bg-angle', t.bgAngle || 135); 
  setTxt('val-settings-opacity', t.settingsOpacity !== undefined ? t.settingsOpacity : 60);
  setTxt('val-typing-anim-speed', t.typingAnimSpeed !== undefined ? t.typingAnimSpeed : 3); 
  setTxt('val-typing-border-width', t.typingBorderWidth !== undefined ? t.typingBorderWidth : 2);
  setTxt('val-glass-saturate', t.glassSaturate !== undefined ? t.glassSaturate : 190); 
  setTxt('val-glass-brightness', t.glassBrightness !== undefined ? t.glassBrightness : 110); 
  setTxt('val-glass-contrast', t.glassContrast !== undefined ? t.glassContrast : 106); 
  setTxt('val-glass-tint-opacity', t.glassTintOpacity !== undefined ? t.glassTintOpacity : 24); 
  setTxt('val-glass-border-opacity', t.glassBorderOpacity !== undefined ? t.glassBorderOpacity : 75);
}

function renderGradientInputs(count) {
  const wrap = document.getElementById('gradient-colors-wrapper');
  if (!wrap || !currentActiveTheme) return;
  wrap.innerHTML = '';
  const labelPrefix = getEffectiveLocale() === 'ru' ? 'Цвет' : 'Color';
  for (let i = 0; i < count; i++) {
    const cid = `bgColor${i+1}`;
    const val = currentActiveTheme.bgColors[i] || '#000000';

    const item = document.createElement('div');
    item.className = 'setting-item flex-row';
    item.style.marginTop = '8px';

    const label = document.createElement('label');
    label.textContent = `${labelPrefix} ${i+1}:`;

    const control = document.createElement('div');
    control.className = 'custom-color-control';
    control.setAttribute('data-color-id', cid);

    const swatch = document.createElement('div');
    swatch.className = 'color-swatch-preview';
    swatch.style.background = val;

    const hexLabel = document.createElement('span');
    hexLabel.className = 'color-hex-label';
    hexLabel.textContent = val;

    control.appendChild(swatch);
    control.appendChild(hexLabel);
    item.appendChild(label);
    item.appendChild(control);
    wrap.appendChild(item);
  }
}

function renderWallpaperPresets() {
  const list = document.getElementById('wallpaper-presets-list');
  if (!list || typeof WALLPAPER_PRESETS === 'undefined') return;
  const isRu = getEffectiveLocale() === 'ru';
  list.innerHTML = '';
  WALLPAPER_PRESETS.forEach(p => {
    const card = document.createElement('div');
    const isAct = currentActiveTheme && (currentActiveTheme.mediaUrl === p.url || (currentActiveTheme.mediaSource === 'preset' && currentActiveTheme.presetId === p.id));
    card.className = 'preset-card' + (isAct ? ' active' : '');
    card.style.backgroundImage = `url('${p.thumb}')`;
    const title = document.createElement('span');
    title.className = 'preset-title';
    title.textContent = isRu ? p.titleRu : p.title;
    card.appendChild(title);
    card.onclick = () => {
      currentActiveTheme.bgType = 'image';
      currentActiveTheme.mediaSource = 'preset';
      currentActiveTheme.presetId = p.id;
      currentActiveTheme.mediaUrl = p.url;
      applyThemeAndLayout();
      syncSettingsUI();
      saveConfig();
    };
    list.appendChild(card);
  });
}

function syncSettingsUI() {
  const t = currentActiveTheme;
  applyLocale(config.locale);
  const assignVal = (id, prop, defaultVal) => { const el = document.getElementById(id); if (el) el.value = (t && t[prop] !== undefined) ? t[prop] : defaultVal; };
  const assignCheck = (id, prop, defaultVal) => { const el = document.getElementById(id); if (el) el.checked = (t && t[prop] !== undefined) ? t[prop] : defaultVal; };
  
  const langSel = document.getElementById('locale-select');
  if (langSel) langSel.value = config.locale || 'auto';
  const interfaceThemeSel = document.getElementById('interface-theme-select');
  if (interfaceThemeSel) interfaceThemeSel.value = config.interfaceTheme || 'auto';
  applyInterfaceTheme();
  const settingsButtonEnable = document.getElementById('settings-button-enable');
  if (settingsButtonEnable) settingsButtonEnable.checked = config.showSettingsButton !== false;
  
  const optChk = document.getElementById('ultra-opt-enable');
  if (optChk) optChk.checked = Boolean(config.ultraOptimized);

  const selectMode = document.getElementById('theme-mode-select'); 
  if (selectMode) selectMode.value = config.themeMode;
  
  const tSel = document.getElementById('theme-list-select'); 
  if (tSel) { 
    tSel.innerHTML = ''; 
    config.themes.forEach(theme => { 
      const o = document.createElement('option'); 
      o.value = theme.id; 
      o.textContent = theme.name; 
      if (theme.id === t.id) o.selected = true; 
      tSel.appendChild(o); 
    }); 
  }
  
  const bTColor = document.getElementById('bg-type-color'); if(bTColor) bTColor.checked = t.bgType === 'color';
  const bTImage = document.getElementById('bg-type-image'); if(bTImage) bTImage.checked = t.bgType === 'image';
  const bTVideo = document.getElementById('bg-type-video'); if(bTVideo) bTVideo.checked = t.bgType === 'video';
  
  const isPreset = t.mediaSource === 'preset';
  const isLocal = t.mediaSource === 'local';
  const isUrl = t.mediaSource === 'url';

  const mSPreset = document.getElementById('media-source-preset'); if(mSPreset) mSPreset.checked = isPreset;
  const mSLocal = document.getElementById('media-source-local'); if(mSLocal) mSLocal.checked = isLocal;
  const mSUrl = document.getElementById('media-source-url'); if(mSUrl) mSUrl.checked = isUrl;
  
  const mUrlIn = document.getElementById('media-url-input'); if(mUrlIn) mUrlIn.value = t.mediaUrl || '';
  
  const isC = t.bgType === 'color';
  const msBlock = document.getElementById('media-source-block'); if(msBlock) msBlock.classList.toggle('hidden', isC);
  const bcBlock = document.getElementById('bg-color-block'); if(bcBlock) bcBlock.classList.toggle('hidden', !isC);
  const mpBlock = document.getElementById('media-preset-block'); if(mpBlock) mpBlock.classList.toggle('hidden', !isPreset);
  const muBlock = document.getElementById('media-url-block'); if(muBlock) muBlock.classList.toggle('hidden', !isUrl);
  const mfBlock = document.getElementById('media-file-block'); if(mfBlock) mfBlock.classList.toggle('hidden', !isLocal);
  const vsBlock = document.getElementById('video-speed-block'); if(vsBlock) vsBlock.classList.toggle('hidden', t.bgType !== 'video');

  renderWallpaperPresets();

  const cbGrad = document.getElementById('bg-use-gradient'); if(cbGrad) cbGrad.checked = t.useGradient === true;
  const gCount = document.getElementById('bg-colors-count'); if(gCount) gCount.value = t.bgColorsCount || 4;
  renderGradientInputs(t.bgColorsCount || 4);

  const gExtra = document.getElementById('gradient-extra'); if(gExtra) gExtra.classList.toggle('hidden', !t.useGradient);
  
  assignVal('bg-angle', 'bgAngle', 135);
  assignVal('video-speed', 'speed', 1); 
  assignVal('media-brightness', 'brightness', 100); 
  assignVal('media-overlay', 'overlayOpacity', 0); 
  assignVal('media-blur', 'blur', 0);
  assignVal('size-clock', 'clockSize', 5); 
  assignVal('size-search', 'searchScale', 1); 
  assignVal('size-shortcuts', 'shortcutScale', 1); 
  assignVal('shortcut-width', 'shortcutWidth', 850);
  assignVal('op-search', 'searchOpacity', 75); 
  assignVal('blur-search', 'searchBlur', 12); 
  assignVal('op-shortcut', 'shortcutOpacity', 75); 
  assignVal('blur-shortcut', 'shortcutBlur', 12); 
  assignVal('op-widget', 'widgetOpacity', 80); 
  assignVal('blur-widget', 'widgetBlur', 12); 
  assignVal('settings-opacity', 'settingsOpacity', 60);

  assignCheck('clock-enable', 'clockEnable', true); 
  assignCheck('clock-3d', 'clock3D', false); 
  assignCheck('clock-neon', 'clockNeon', false); 
  assignCheck('clock-shadows', 'clockShadows', true);
  
  assignCheck('search-3d', 'search3D', false); 
  assignCheck('search-neon', 'searchNeon', false); 
  assignCheck('search-border', 'searchBorder', true); 
  assignCheck('search-shadows', 'searchShadows', true);
  assignCheck('search-glow-enable', 'searchGlowEnabled', true);
  assignCheck('ai-glow-enable', 'aiGlowEnabled', true);

  assignCheck('shortcut-3d', 'shortcut3D', false); 
  assignCheck('shortcut-neon', 'shortcutNeon', false); 
  assignCheck('shortcut-border', 'shortcutBorder', true); 
  assignCheck('shortcut-shadows', 'shortcutShadows', true);
  
  assignCheck('widget-3d', 'widget3D', false); 
  assignCheck('widget-neon', 'widgetNeon', false); 
  assignCheck('widget-border', 'widgetBorder', true); 
  assignCheck('widget-shadows', 'widgetShadows', true);


  assignCheck('typing-effect-enable', 'typingEffectEnabled', true);
  const typingModeSel = document.getElementById('typing-effect-mode'); 
  if (typingModeSel) typingModeSel.value = t.typingEffectMode === 'always' ? 'always' : 'typing';
  assignCheck('typing-fill-enable', 'typingFillEnabled', false);
  assignCheck('typing-animate-enable', 'typingAnimateEnabled', true);
  assignCheck('typing-neon-enable', 'typingNeonEnabled', true);
  assignVal('typing-anim-speed', 'typingAnimSpeed', 3); 
  assignVal('typing-border-width', 'typingBorderWidth', 2);
  
  const typingSub = document.getElementById('typing-effect-subsettings'); 
  if (typingSub) typingSub.classList.toggle('disabled-block', t.typingEffectEnabled === false);
  
  const neonStyleSel = document.getElementById('neon-style-select'); 
  if (neonStyleSel) neonStyleSel.value = t.neonStyle || 'glow';

  assignVal('glass-saturate', 'glassSaturate', 190); 
  assignVal('glass-brightness', 'glassBrightness', 110); 
  assignVal('glass-contrast', 'glassContrast', 106);
  assignVal('glass-tint-opacity', 'glassTintOpacity', 24); 
  assignVal('glass-border-opacity', 'glassBorderOpacity', 75);


  document.querySelectorAll('.custom-color-control:not([data-color-id^="bgColor"])').forEach(ctrl => {
    const prop = ctrl.dataset.colorId; 
    const val = (t && t[prop]) ? t[prop] : '#ffffff';
    const preview = ctrl.querySelector('.color-swatch-preview'); 
    if (preview) preview.style.background = val;
    const label = ctrl.querySelector('.color-hex-label'); 
    if (label) label.textContent = val;
  });

  const cFont = document.getElementById('clock-font-select'); 
  if(cFont) cFont.value = t.clockFont || 'system-ui, sans-serif';

  const cbSE = document.getElementById('search-enable'); if(cbSE) cbSE.checked = config.searchEnable;
  const sESel = document.getElementById('search-engine-select'); if(sESel) sESel.value = config.searchEngine;
  const sPIn = document.getElementById('search-placeholder-input'); if(sPIn) sPIn.value = config.searchPlaceholder;
  const sBSt = document.getElementById('search-btn-style'); if(sBSt) sBSt.value = config.searchBtnStyle || 'text';
  const sLoupeDir = document.getElementById('search-loupe-direction'); if(sLoupeDir) sLoupeDir.value = config.searchLoupeDirection || 'bottom-right';
  const sBtnPos = document.getElementById('search-btn-position'); if(sBtnPos) sBtnPos.value = config.searchBtnPosition || 'right';
  const sV = document.getElementById('search-voice'); if(sV) sV.checked = config.showVoice !== false;
  const sI = document.getElementById('search-image'); if(sI) sI.checked = config.showImage !== false;
  const sA = document.getElementById('search-ai'); if(sA) sA.checked = config.showAi !== false;

  const sM = document.getElementById('shortcut-mode-select'); if(sM) sM.value = config.shortcutMode;
  const sW = document.getElementById('shortcut-width-block'); if(sW) sW.style.display = config.shortcutMode === 'free' ? 'none' : 'flex';
  
  const c24 = document.getElementById('clock-24h'); if(c24) c24.checked = config.is24h;
  const cS = document.getElementById('clock-seconds'); if(cS) cS.checked = config.showSeconds;
  const wGE = document.getElementById('widget-greeting-enable'); if(wGE) wGE.checked = config.showGreeting;
  const wWE = document.getElementById('widget-weather-enable'); if(wWE) wWE.checked = config.showWeather;
  const wIE = document.getElementById('widget-ip-enable'); if(wIE) wIE.checked = config.showIp;
  const wIF = document.getElementById('widget-ip-flag'); if(wIF) wIF.checked = config.showIpFlag;
  
  const bME = document.getElementById('build-mode-enable'); if(bME) bME.checked = config.buildMode;
  const bGS = document.getElementById('build-grid-size');
  if (bGS) {
    const savedGrid = Number(config.gridSize);
    bGS.value = [0, 1, 2, 3, 5, 10, 20].includes(savedGrid) ? String(savedGrid) : '5';
  }
  const sPos = document.getElementById('sidebar-position'); if(sPos) sPos.value = config.sidebarPos || 'right';

  renderCustomWidgetsList();
  const cssEd = document.getElementById('custom-css-editor');
  if (cssEd && document.activeElement !== cssEd) {
    cssEd.value = config.customCss || '';
  }

  updateLabels();
}

function toggleBuildModeVisuals() {
  const gridEl = document.getElementById('build-grid'); 
  const indicator = document.getElementById('build-mode-indicator'); 
  if (config.buildMode) {
    if (gridEl) {
      if (Number(config.gridSize) > 0) {
        gridEl.style.backgroundSize = `${config.gridSize}% ${config.gridSize}%`;
        gridEl.classList.add('active');
      } else {
        gridEl.classList.remove('active');
      }
    }
    if(indicator) indicator.classList.remove('hidden'); 
    document.querySelectorAll('.shortcuts-grid .shortcut-card').forEach(c => c.draggable = true);
  } else {
    if(gridEl) gridEl.classList.remove('active'); 
    if(indicator) indicator.classList.add('hidden'); 
    clearSelection(); 
    document.querySelectorAll('.shortcuts-grid .shortcut-card').forEach(c => c.draggable = false);
  }
}

// ==================== КОЛОРПИКЕР И ПИЕПТКА ====================
let activeColorProp = null; 
let activeColorElement = null;

function setupCustomColorPicker() {
  const popover = document.getElementById('custom-picker-popover');
  const hexInput = document.getElementById('picker-hex-input');
  const hueSlider = document.getElementById('picker-hue');
  const lightSlider = document.getElementById('picker-lightness');
  const preview = document.getElementById('picker-current-preview');
  const pipetteBtn = document.getElementById('picker-pipette-btn');
  const closeBtn = document.getElementById('close-picker');

  document.body.addEventListener('click', (e) => {
    const ctrl = e.target.closest('.custom-color-control');
    if (!ctrl) return;
    
    e.stopPropagation();
    activeColorProp = ctrl.dataset.colorId;
    activeColorElement = ctrl;
    
    let currentColor = '#ffffff';
    if (activeColorProp.startsWith('bgColor')) {
      const idx = parseInt(activeColorProp.replace('bgColor', '')) - 1;
      currentColor = currentActiveTheme.bgColors[idx] || '#000000';
    } else { 
      currentColor = currentActiveTheme[activeColorProp] || '#ffffff'; 
    }
    
    hexInput.value = currentColor; 
    preview.style.background = currentColor;
    
    const rect = ctrl.getBoundingClientRect();
    let top = rect.bottom + 8; 
    let left = rect.left - 40;
    if (left + 260 > window.innerWidth) left = window.innerWidth - 270;
    if (top + 280 > window.innerHeight) top = rect.top - 290;
    popover.style.top = `${Math.max(10, top)}px`; 
    popover.style.left = `${Math.max(10, left)}px`;
    popover.classList.remove('hidden');
  });

  const applyPickedColor = (hex) => {
    if (!activeColorProp || !currentActiveTheme) return;
    if (activeColorProp.startsWith('bgColor')) {
      const idx = parseInt(activeColorProp.replace('bgColor', '')) - 1;
      currentActiveTheme.bgColors[idx] = hex;
    } else { 
      currentActiveTheme[activeColorProp] = hex; 
    }

    hexInput.value = hex; 
    preview.style.background = hex;
    if (activeColorElement) { 
      const p = activeColorElement.querySelector('.color-swatch-preview'); 
      if (p) p.style.background = hex;
      const l = activeColorElement.querySelector('.color-hex-label'); 
      if (l) l.textContent = hex;
    }
    saveConfig();
  };

  popover.querySelectorAll('.swatch-quick').forEach(sw => { 
    sw.addEventListener('click', (e) => { 
      e.stopPropagation(); 
      applyPickedColor(sw.dataset.hex); 
    }); 
  });

  const updateFromSliders = () => { 
    const hue = hueSlider.value; 
    const light = lightSlider.value; 
    const hex = hslToHex(hue, 100, light); 
    applyPickedColor(hex); 
  };
  hueSlider.addEventListener('input', updateFromSliders); 
  lightSlider.addEventListener('input', updateFromSliders);

  hexInput.addEventListener('input', () => { 
    let val = hexInput.value.trim(); 
    if (/^#[0-9A-Fa-f]{6}$/.test(val) || /^#[0-9A-Fa-f]{3}$/.test(val)) applyPickedColor(val); 
  });

  if (pipetteBtn) {
    pipetteBtn.onclick = async () => {
      popover.classList.add('hidden');
      if (window.EyeDropper) {
        try {
          const eye = new EyeDropper();
          const res = await eye.open();
          applyPickedColor(res.sRGBHex);
        } catch (e) {}
      } else {
        startInPageLoupe(applyPickedColor);
      }
    };
  }

  if (closeBtn) closeBtn.onclick = (e) => { e.stopPropagation(); popover.classList.add('hidden'); };
  document.addEventListener('click', (e) => { 
    if (!popover.contains(e.target) && !e.target.closest('.custom-color-control')) {
      popover.classList.add('hidden'); 
    }
  });
}

// ==================== ЭКРАННАЯ ПИПЕТКА И ПАЛИТРА ====================

function createBgSampler() {
  const canvas = document.createElement('canvas');
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;

  const t = currentActiveTheme || (config && config.themes[0]);
  if (!t) return null;

  try {
    if (t.bgType === 'gradient' || t.useGradient || t.bgType === 'color' || !t.bgType) {
      let grad;
      const count = Math.min(Math.max(2, t.bgColorsCount || 2), 5);
      const colors = (t.bgColors && t.bgColors.length) ? t.bgColors.slice(0, count) : ['#0a192f', '#1e3a8a'];

      if (t.bgGradientType === 'radial') {
        grad = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, Math.max(w, h) / 2);
      } else {
        const rad = ((t.bgAngle !== undefined ? t.bgAngle : 135) * Math.PI) / 180;
        const x2 = w / 2 + Math.cos(rad) * (w / 2);
        const y2 = h / 2 + Math.sin(rad) * (h / 2);
        const x1 = w / 2 - Math.cos(rad) * (w / 2);
        const y1 = h / 2 - Math.sin(rad) * (h / 2);
        grad = ctx.createLinearGradient(x1, y1, x2, y2);
      }

      for (let i = 0; i < colors.length; i++) {
        const stop = colors.length === 1 ? 0 : (i / (colors.length - 1));
        grad.addColorStop(stop, colors[i] || '#000000');
      }

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    } else if (t.bgType === 'image' && els.img && els.img.complete && els.img.naturalWidth > 0) {
      const imgW = els.img.naturalWidth;
      const imgH = els.img.naturalHeight;
      const scale = Math.max(w / imgW, h / imgH);
      const nw = imgW * scale;
      const nh = imgH * scale;
      const nx = (w - nw) / 2;
      const ny = (h - nh) / 2;
      ctx.drawImage(els.img, nx, ny, nw, nh);
    } else if (t.bgType === 'video' && els.video && els.video.videoWidth > 0) {
      const vidW = els.video.videoWidth;
      const vidH = els.video.videoHeight;
      const scale = Math.max(w / vidW, h / vidH);
      const nw = vidW * scale;
      const nh = vidH * scale;
      const nx = (w - nw) / 2;
      const ny = (h - nh) / 2;
      ctx.drawImage(els.video, nx, ny, nw, nh);
    } else {
      const c1 = (t.bgColors && t.bgColors[0]) || '#0f172a';
      ctx.fillStyle = c1;
      ctx.fillRect(0, 0, w, h);
    }

    const overlayOp = (t.overlayOpacity !== undefined ? t.overlayOpacity : 0) / 100;
    if (overlayOp > 0) {
      ctx.fillStyle = `rgba(0, 0, 0, ${overlayOp})`;
      ctx.fillRect(0, 0, w, h);
    }

    return {
      getColorAt: (px, py) => {
        try {
          const clampedX = Math.min(Math.max(0, Math.floor(px)), w - 1);
          const clampedY = Math.min(Math.max(0, Math.floor(py)), h - 1);
          const pixel = ctx.getImageData(clampedX, clampedY, 1, 1).data;
          return rgbToHex(`rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`);
        } catch (e) {
          return null;
        }
      }
    };
  } catch (err) {
    return null;
  }
}


function startInPageLoupe(callback) {
  const loupe = document.getElementById('eyedropper-loupe');
  const loupeColor = document.getElementById('eyedropper-loupe-color');
  const loupeText = document.getElementById('eyedropper-loupe-text');
  const hint = document.getElementById('eyedropper-hint');
  if (!loupe) return;
  
  document.body.classList.add('eyedropper-active');
  if (hint) hint.classList.remove('hidden');
  loupe.classList.remove('hidden');

  const bgSampler = createBgSampler();
  let pickedColor = '#ffffff';

  const onMove = (e) => {
    loupe.style.left = `${e.clientX}px`;
    loupe.style.top = `${e.clientY - 50}px`;

    const elUnder = document.elementFromPoint(e.clientX, e.clientY);
    const isBg = !elUnder || elUnder === document.body || elUnder === document.documentElement ||
      elUnder.id === 'video-overlay' || elUnder.id === 'bg-color' || elUnder.id === 'bg-image' ||
      elUnder.id === 'bg-video' || elUnder.id === 'main-container' || elUnder.id === 'build-grid';

    let sampled = null;
    if (bgSampler) {
      sampled = bgSampler.getColorAt(e.clientX, e.clientY);
    }

    if (!isBg && elUnder) {
      let curr = elUnder;
      let foundColor = null;
      while (curr && curr !== document.body && curr !== document.documentElement) {
        if (curr.id === 'video-overlay' || curr.id === 'build-grid' || curr.id === 'main-container') break;
        const style = window.getComputedStyle(curr);
        const bg = style.backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent' && !bg.startsWith('rgba(0, 0, 0, 0.')) {
          foundColor = rgbToHex(bg);
          break;
        }
        if (style.color && style.color !== 'transparent' && ['SPAN', 'H1', 'H2', 'H3', 'H4', 'H5', 'P', 'LABEL', 'BUTTON'].includes(curr.tagName)) {
          foundColor = rgbToHex(style.color);
          break;
        }
        curr = curr.parentElement;
      }
      pickedColor = foundColor || sampled || '#ffffff';
    } else if (sampled) {
      pickedColor = sampled;
    } else {
      const t = currentActiveTheme || (config && config.themes[0]);
      if (t && t.bgColors && t.bgColors.length) pickedColor = t.bgColors[0];
    }

    if (loupeColor) loupeColor.style.background = pickedColor;
    if (loupeText) loupeText.textContent = pickedColor;
  };

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    cleanUp();
    callback(pickedColor);
  };

  const onKey = (e) => { 
    if (e.key === 'Escape') cleanUp(); 
  };

  function cleanUp() {
    document.body.classList.remove('eyedropper-active');
    if (hint) hint.classList.add('hidden');
    loupe.classList.add('hidden');
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('click', onClick, true);
    window.removeEventListener('keydown', onKey);
  }

  window.addEventListener('mousemove', onMove);
  window.addEventListener('click', onClick, true);
  window.addEventListener('keydown', onKey);
}

function rgbToHex(rgbStr) {
  const match = rgbStr.match(/\d+/g);
  if (!match || match.length < 3) return '#ffffff';
  const r = parseInt(match[0]).toString(16).padStart(2, '0');
  const g = parseInt(match[1]).toString(16).padStart(2, '0');
  const b = parseInt(match[2]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}

function hslToHex(h, s, l) {
  l /= 100; const a = s * Math.min(l, 1 - l) / 100;
  const f = n => { const k = (n + h / 30) % 12; const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1); return Math.round(255 * color).toString(16).padStart(2, '0'); };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// ==================== ГОРЯЧИЕ КЛАВИШИ ==================== 
let keyboardShortcutsInitialized = false;

function cycleNextTheme() {
  if (!config.themes || config.themes.length <= 1) return;
  const currIdx = config.themes.findIndex(t => t.id === currentActiveTheme.id); 
  const nextIdx = (currIdx + 1) % config.themes.length;
  currentActiveTheme = config.themes[nextIdx];
  config.activeThemeId = currentActiveTheme.id;
  saveConfig();
  syncSettingsUI(); 
}

function setupKeyboardShortcuts() {
  if (keyboardShortcutsInitialized) return;
  keyboardShortcutsInitialized = true;

  window.addEventListener('keydown', (e) => {
    const isInputActive = e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT');


    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      if (els.searchInput) {
        els.searchInput.focus();
        els.searchInput.select();
      }
      return; 
    }
    if (e.key === '/' && !isInputActive && !e.ctrlKey && !e.altKey && !e.metaKey) {
      e.preventDefault();
      if (els.searchInput) {
        els.searchInput.focus();
        els.searchInput.select();
      }
      return;
    }


    if (e.key === 'Escape') {
      const popover = document.getElementById('custom-picker-popover');
      if (popover && !popover.classList.contains('hidden')) {
        popover.classList.add('hidden');
        return;
      }
      if (els.lensModal && !els.lensModal.classList.contains('hidden')) {
        els.lensModal.classList.add('hidden');
        return;
      }
      if (els.sidebar && els.sidebar.classList.contains('open')) {
        els.sidebar.classList.remove('open'); 
        return;
      }
      if (currentSelectedId) {
        clearSelection();
        return;
      }
      if (isInputActive) {
        e.target.blur();
        return;
      }
    }


    if ((e.altKey && (e.key === 's' || e.key === 'S' || e.key === 'ы' || e.key === 'Ы')) ||
        ((e.ctrlKey || e.metaKey) && e.key === ',')) {
      e.preventDefault();
      if (els.sidebar) els.sidebar.classList.toggle('open');
      return;
    }


    if (e.altKey && (e.key === 'b' || e.key === 'B' || e.key === 'и' || e.key === 'И')) { 
      e.preventDefault();
      config.buildMode = !config.buildMode;
      toggleBuildModeVisuals();
      saveConfig();
      syncSettingsUI();
      return;
    }


    if (e.altKey && (e.key === 'a' || e.key === 'A' || e.key === 'ф' || e.key === 'Ф')) {
      e.preventDefault();
      if ((config.searchEngine || 'google') === 'google') {
        config.aiModeActive = !config.aiModeActive;
        if (els.btnAi) els.btnAi.classList.toggle('active', config.aiModeActive);
        if (els.searchForm) els.searchForm.classList.toggle('ai-active', config.aiModeActive);
        saveConfig();
      }
      return;
    }


    if (e.altKey && (e.key === 't' || e.key === 'T' || e.key === 'е' || e.key === 'Е')) {
      e.preventDefault();
      cycleNextTheme();
      return;
    }


    if (e.altKey && (e.key === 'o' || e.key === 'O' || e.key === 'щ' || e.key === 'Щ')) {
      e.preventDefault();
      config.ultraOptimized = !config.ultraOptimized;
      applyUltraOptimized();
      saveConfig();
      syncSettingsUI();
      return;
    }


    if (!isInputActive && !e.ctrlKey && !e.altKey && !e.metaKey && e.key >= '1' && e.key <= '9') {
      const idx = parseInt(e.key, 10) - 1;
      if (config.shortcuts && config.shortcuts[idx] && config.shortcuts[idx].url) {
        window.location.href = config.shortcuts[idx].url;
      }
    }
  });
}


function setupEventListeners() {
  const sTog = document.getElementById('settings-toggle'); 
  if(sTog) sTog.onclick = () => els.sidebar.classList.add('open');
  const cSet = document.getElementById('close-settings'); 
  if(cSet) cSet.onclick = () => els.sidebar.classList.remove('open');
  const exBM = document.getElementById('exit-build-mode'); 
  if(exBM) exBM.onclick = () => { config.buildMode = false; saveConfig(); toggleBuildModeVisuals(); syncSettingsUI(); };

  const sectionSelect = document.getElementById('settings-section-select');
  const showSettingsSection = (sectionId) => {
    document.querySelectorAll('.tab-content').forEach(section => {
      section.classList.toggle('active', section.id === sectionId);
    });
  };
  if (sectionSelect) {
    sectionSelect.addEventListener('change', () => showSettingsSection(sectionSelect.value));
  }

  const safeBind = (id, ev, fn) => { const el = document.getElementById(id); if(el) el.addEventListener(ev, fn); };
  safeBind('settings-button-enable', 'change', (e) => { config.showSettingsButton = e.target.checked; updateSettingsButtonVisibility(); saveConfig(); });

  safeBind('theme-mode-select', 'change', (e) => { config.themeMode = e.target.value; saveConfig(); });
  safeBind('interface-theme-select', 'change', (e) => { config.interfaceTheme = e.target.value; applyInterfaceTheme(); saveConfig(); });
  safeBind('locale-select', 'change', (e) => {
    config.locale = e.target.value;
    applyLocale(config.locale);
    syncSettingsUI();
    applyThemeAndLayout();
    saveConfig();
  });
  safeBind('ultra-opt-enable', 'change', (e) => {
    config.ultraOptimized = e.target.checked;
    applyUltraOptimized();
    saveConfig();
  });

  safeBind('theme-list-select', 'change', (e) => { 
    config.activeThemeId = e.target.value; 
    currentActiveTheme = config.themes.find(t => t.id === e.target.value) || config.themes[0]; 
    syncSettingsUI(); 
    applyThemeAndLayout(); 
  });

  safeBind('add-theme-btn', 'click', () => { 
    const nt = { ...JSON.parse(JSON.stringify(DEFAULT_THEMES[0])), id: 'theme_' + Date.now(), name: T('themeNamePrefix') + (config.themes.length + 1) };
    config.shortcuts.forEach(s => getShortcutPos(nt, s.id));
    config.themes.push(nt); 
    config.activeThemeId = nt.id; 
    currentActiveTheme = nt; 
    saveConfig(); 
    syncSettingsUI(); 
  });

  safeBind('delete-theme-btn', 'click', () => { 
    if (config.themes.length <= 1) return alert(T('confirmDeleteLastTheme')); 
    config.themes = config.themes.filter(t => t.id !== currentActiveTheme.id); 
    currentActiveTheme = config.themes[0]; 
    config.activeThemeId = currentActiveTheme.id; 
    saveConfig(); 
    syncSettingsUI(); 
  });

  const bindT = (id, prop, isF = false) => { safeBind(id, 'input', (e) => { currentActiveTheme[prop] = isF ? parseFloat(e.target.value) : e.target.value; updateLabels(); saveConfig(); }); };

  bindT('media-url-input', 'mediaUrl'); 
  bindT('video-speed', 'speed', true); 
  bindT('media-brightness', 'brightness'); 
  bindT('media-overlay', 'overlayOpacity'); 
  bindT('media-blur', 'blur');
  bindT('size-clock', 'clockSize', true); 
  bindT('size-search', 'searchScale', true); 
  bindT('size-shortcuts', 'shortcutScale', true); 
  bindT('shortcut-width', 'shortcutWidth', true);
  bindT('op-shortcut', 'shortcutOpacity'); 
  bindT('blur-shortcut', 'shortcutBlur'); 
  bindT('op-widget', 'widgetOpacity'); 
  bindT('blur-widget', 'widgetBlur'); 
  bindT('op-search', 'searchOpacity'); 
  bindT('blur-search', 'searchBlur');
  bindT('settings-opacity', 'settingsOpacity', true);
  safeBind('settings-opacity', 'input', updateSettingsButtonVisibility); 
  bindT('bg-angle', 'bgAngle', true);

  safeBind('bg-use-gradient', 'change', (e) => { currentActiveTheme.useGradient = e.target.checked; syncSettingsUI(); saveConfig(); });
  safeBind('bg-colors-count', 'change', (e) => { currentActiveTheme.bgColorsCount = parseInt(e.target.value); syncSettingsUI(); saveConfig(); });

  const bindC = (id, prop) => { safeBind(id, 'change', (e) => { currentActiveTheme[prop] = e.target.checked; saveConfig(); }); };
  bindC('clock-enable', 'clockEnable'); 
  bindC('clock-3d', 'clock3D'); 
  bindC('clock-neon', 'clockNeon'); 
  bindC('clock-shadows', 'clockShadows');
  
  bindC('search-3d', 'search3D'); 
  bindC('search-neon', 'searchNeon'); 
  bindC('search-border', 'searchBorder'); 
  bindC('search-shadows', 'searchShadows');
  bindC('search-glow-enable', 'searchGlowEnabled');
  bindC('ai-glow-enable', 'aiGlowEnabled');

  bindC('shortcut-3d', 'shortcut3D'); 
  bindC('shortcut-neon', 'shortcutNeon'); 
  bindC('shortcut-border', 'shortcutBorder'); 
  bindC('shortcut-shadows', 'shortcutShadows');
  
  bindC('widget-3d', 'widget3D'); 
  bindC('widget-neon', 'widgetNeon'); 
  bindC('widget-border', 'widgetBorder'); 
  bindC('widget-shadows', 'widgetShadows');

  safeBind('typing-effect-enable', 'change', (e) => { 
    currentActiveTheme.typingEffectEnabled = e.target.checked; 
    updateTypingEffectClass(); 
    syncSettingsUI(); 
    saveConfig(); 
  });
  safeBind('typing-effect-mode', 'change', (e) => { 
    currentActiveTheme.typingEffectMode = e.target.value; 
    updateTypingEffectClass(); 
    saveConfig(); 
  });
  bindC('typing-fill-enable', 'typingFillEnabled');
  bindC('typing-animate-enable', 'typingAnimateEnabled');
  bindC('typing-neon-enable', 'typingNeonEnabled');
  bindT('typing-anim-speed', 'typingAnimSpeed', true); 
  bindT('typing-border-width', 'typingBorderWidth', true);
  
  safeBind('neon-style-select', 'change', (e) => { currentActiveTheme.neonStyle = e.target.value; saveConfig(); });
  bindT('glass-saturate', 'glassSaturate', true); 
  bindT('glass-brightness', 'glassBrightness', true); 
  bindT('glass-contrast', 'glassContrast', true);
  bindT('glass-tint-opacity', 'glassTintOpacity', true); 
  bindT('glass-border-opacity', 'glassBorderOpacity', true);
  
  safeBind('clock-font-select', 'change', (e) => { currentActiveTheme.clockFont = e.target.value; saveConfig(); });
  document.querySelectorAll('input[name="bg-type"]').forEach(r => r.onchange = (e) => { currentActiveTheme.bgType = e.target.value; syncSettingsUI(); saveConfig(); });
  document.querySelectorAll('input[name="media-source"]').forEach(r => r.onchange = (e) => { currentActiveTheme.mediaSource = e.target.value; syncSettingsUI(); saveConfig(); });
  

  const fIn = document.getElementById('media-file-input'); 
  const fLabel = document.getElementById('label-media-file');
  if (fLabel && fIn) {
    fLabel.onclick = (e) => {
      if (e.target !== fIn) fIn.click();
    };
  }

  const handleMediaUpload = async (file) => {
    if (!file) return;
    const isVid = file.type.startsWith('video/');
    currentActiveTheme.bgType = isVid ? 'video' : 'image';
    currentActiveTheme.mediaSource = 'local';
    await saveMediaToIDB(currentActiveTheme.id, file); 
    saveConfig(); 
    syncSettingsUI(); 
  };

  if (fIn) { 
    fIn.onchange = async (e) => { 
      if (e.target.files && e.target.files[0]) { 
        await handleMediaUpload(e.target.files[0]);
      } 
    }; 
  }

 
  if (fLabel) {
    ['dragenter', 'dragover'].forEach(ev => fLabel.addEventListener(ev, (e) => { e.preventDefault(); e.stopPropagation(); fLabel.classList.add('dragover'); }));
    ['dragleave', 'drop'].forEach(ev => fLabel.addEventListener(ev, (e) => { e.preventDefault(); e.stopPropagation(); fLabel.classList.remove('dragover'); }));
    fLabel.addEventListener('drop', (e) => {
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleMediaUpload(e.dataTransfer.files[0]);
      }
    });
  }

  window.addEventListener('dragover', (e) => { e.preventDefault(); });
  window.addEventListener('drop', (e) => {
    if (e.target.closest('#lens-modal-container') || e.target.closest('.color-picker-popover')) return;
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        e.preventDefault();
        handleMediaUpload(file);
      }
    }
  });


  const hBuildIn = (p, isF) => (e) => {
    if (!currentSelectedId || !currentSelectedEl) return; 
    const v = isF ? parseFloat(e.target.value) : parseInt(e.target.value);
    let pR = (config.shortcuts.some(x => x.id === currentSelectedId)) ? getShortcutPos(currentActiveTheme, currentSelectedId) : getWidgetPos(currentActiveTheme, currentSelectedId);
    if (!pR) return;
    pR[p] = v; 
    const vScale = document.getElementById('val-build-scale'); 
    if(p==='scale' && vScale) vScale.innerText = v; 
    const vRot = document.getElementById('val-build-rotate'); 
    if(p==='rotate' && vRot) vRot.innerText = v;
    applyTransform(currentSelectedEl, pR, (!config.shortcuts.some(x => x.id === currentSelectedId) || config.shortcutMode === 'free'));
  };

  const bScale = document.getElementById('build-scale'); 
  if (bScale) { bScale.addEventListener('input', hBuildIn('scale', true)); bScale.addEventListener('change', () => saveConfig()); }
  const bRot = document.getElementById('build-rotate'); 
  if (bRot) { bRot.addEventListener('input', hBuildIn('rotate', false)); bRot.addEventListener('change', () => saveConfig()); }
  safeBind('build-reset-el', 'click', () => { 
    if(bScale) bScale.value = 1; 
    if(bRot) bRot.value = 0; 
    hBuildIn('scale',true)({target:{value:1}}); 
    hBuildIn('rotate',false)({target:{value:0}}); 
    saveConfig(); 
  });

  safeBind('build-mode-enable', 'change', (e) => { config.buildMode = e.target.checked; toggleBuildModeVisuals(); saveConfig(); });
  safeBind('build-grid-size', 'change', (e) => { config.gridSize = parseInt(e.target.value); toggleBuildModeVisuals(); saveConfig(); });

  const bConfig = (id, prop, isC = false) => { 
    const el = document.getElementById(id); 
    if(el) el.addEventListener('change', (e) => { 
      config[prop] = isC ? e.target.checked : e.target.value; 
      if(prop==='showWeather'||prop==='showIp'||prop==='showIpFlag'||prop==='showGreeting') fetchWidgetsData(); 
      saveConfig(); 
    }); 
  };
  bConfig('search-enable', 'searchEnable', true); 
  bConfig('search-engine-select', 'searchEngine');
  const searchEngineSelect = document.getElementById('search-engine-select');
  if (searchEngineSelect) searchEngineSelect.addEventListener('change', () => {
    if (config.searchEngine !== 'google') config.aiModeActive = false;
    applyThemeAndLayout();
    syncSettingsUI();
  }); 
  bConfig('search-btn-style', 'searchBtnStyle');
  bConfig('search-loupe-direction', 'searchLoupeDirection');
  bConfig('search-btn-position', 'searchBtnPosition');
  

  const btnFlipLoupe = document.getElementById('btn-flip-loupe');
  if (btnFlipLoupe) {
    btnFlipLoupe.onclick = () => {
      const order = ['bottom-right', 'bottom-left', 'top-left', 'top-right'];
      const cur = config.searchLoupeDirection || 'bottom-right';
      const nextIdx = (order.indexOf(cur) + 1) % order.length;
      const next = order[nextIdx];
      config.searchLoupeDirection = next;
      const sel = document.getElementById('search-loupe-direction');
      if (sel) sel.value = next;
      applySearchLoupeDirection(next);
      saveConfig();
    };
  }

  const pIn = document.getElementById('search-placeholder-input'); 
  if(pIn) pIn.oninput = (e) => { config.searchPlaceholder = e.target.value; saveConfig(); };
  bConfig('shortcut-mode-select', 'shortcutMode'); 
  bConfig('clock-24h', 'is24h', true); 
  bConfig('clock-seconds', 'showSeconds', true); 
  bConfig('widget-greeting-enable', 'showGreeting', true); 
  const bindLocationWidget = (id, prop) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('change', async (e) => {
      const enabled = e.target.checked;
      if (enabled) {
        const consented = await ensureLocationDataConsent();
        if (!consented) {
          e.target.checked = false;
          config[prop] = false;
          syncSettingsUI();
          return;
        }
      }
      config[prop] = enabled;
      await saveConfig();
      fetchWidgetsData();
      applyThemeAndLayout();
    });
  };
  bindLocationWidget('widget-weather-enable', 'showWeather');
  bindLocationWidget('widget-ip-enable', 'showIp');
  bConfig('widget-ip-flag', 'showIpFlag', true);
  bConfig('search-voice', 'showVoice', true); 
  bConfig('search-image', 'showImage', true); 
  bConfig('search-ai', 'showAi', true);
  bConfig('sidebar-position', 'sidebarPos');


  if (els.searchInput) {
    els.searchInput.addEventListener('input', updateTypingEffectClass);
    els.searchInput.addEventListener('focus', updateTypingEffectClass);
    els.searchInput.addEventListener('blur', updateTypingEffectClass);
  }


  function performSearch(query) {
    const q = (query || '').trim(); 
    if (!q) return;
    const curEngine = config.searchEngine || 'google';
    if (config.aiModeActive && curEngine === 'google') {
      window.location.href = AI_SEARCH_ENGINES.google(q);
    } else {
      window.location.href = (SEARCH_ENGINES[curEngine] || SEARCH_ENGINES.google) + encodeURIComponent(q);
    }
  }
  if (els.searchForm) {
    els.searchForm.onsubmit = (e) => { e.preventDefault(); performSearch(els.searchInput.value); };
  }


  let activeRecognition = null;
  if (els.btnVoice) {
    els.btnVoice.onclick = () => {
      if (activeRecognition) { activeRecognition.stop(); activeRecognition = null; return; }
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRec) {
        alert(T('alertVoiceUnsupported'));
        return;
      }
      try {
        const recognition = new SpeechRec(); 
        recognition.lang = getEffectiveLocale() === 'ru' ? 'ru-RU' : 'en-US'; 
        recognition.interimResults = false; 
        recognition.maxAlternatives = 1;
        activeRecognition = recognition;
        els.btnVoice.classList.add('recording'); 
        recognition.start();
        recognition.onresult = (e) => { 
          const transcript = e.results[0][0].transcript; 
          els.searchInput.value = transcript; 
          performSearch(transcript); 
        };
        recognition.onend = () => { els.btnVoice.classList.remove('recording'); activeRecognition = null; };
        recognition.onerror = (err) => { 
          els.btnVoice.classList.remove('recording'); 
          activeRecognition = null;
          if (err.error === 'not-allowed') alert(T('alertMicBlocked'));
          else if (err.error === 'network') alert(T('alertMicNetwork'));
          else if (err.error !== 'aborted') alert(T('alertMicError') + err.error);
        };
      } catch(err) { els.btnVoice.classList.remove('recording'); activeRecognition = null; }
    };
  }


  const openLensModal = () => { if (els.lensModal) els.lensModal.classList.remove('hidden'); };
  const closeLensModal = () => { if (els.lensModal) els.lensModal.classList.add('hidden'); };
  
  if (els.btnImage) {
    els.btnImage.onclick = () => {
      const curEngine = config.searchEngine || 'google';
      if (curEngine === 'google') {
        openLensModal();
      } else if (curEngine === 'yandex') {
        window.open('https://yandex.ru/images/search?rpt=imageview', '_blank');
      } else if (curEngine === 'duckduckgo') {
        const q = (els.searchInput.value || '').trim();
        window.open(`https://duckduckgo.com/?q=${encodeURIComponent(q || 'wallpapers')}&iax=images&ia=images`, '_blank');
      } else if (curEngine === 'bing') {
        window.open('https://www.bing.com/images/search?view=detailv2&iss=sbi', '_blank');
      } else {
        openLensModal();
      }
    };
  }
  
  const cLens = document.getElementById('close-lens-modal'); if (cLens) cLens.onclick = closeLensModal;

  const lensUrlBtn = document.getElementById('lens-url-submit');
  if (lensUrlBtn) { 
    lensUrlBtn.onclick = () => { 
      const u = document.getElementById('lens-url-input').value.trim(); 
      if (!u) return; 
      window.open(`https://lens.google.com/uploadbyurl?url=${encodeURIComponent(u)}`, '_blank'); 
      closeLensModal(); 
    }; 
  }
  
  const lensOfficialBtn = document.getElementById('lens-open-official');
  if (lensOfficialBtn) { 
    lensOfficialBtn.onclick = () => { 
      window.open('https://lens.google.com/', '_blank'); 
      closeLensModal(); 
    }; 
  }

  if (els.searchInput) {
    els.searchInput.addEventListener('paste', (e) => {
      if (!config.showImage) return;
      const items = (e.clipboardData || e.originalEvent.clipboardData).items;
      for (let i in items) {
        if (items[i].kind === 'file') {
          e.preventDefault();
          const curEngine = config.searchEngine || 'google';
          if (curEngine === 'google') openLensModal();
          else if (curEngine === 'yandex') window.open('https://yandex.ru/images/search?rpt=imageview', '_blank');
          else if (curEngine === 'bing') window.open('https://www.bing.com/images/search?view=detailv2&iss=sbi', '_blank');
          else openLensModal();
          break;
        }
      }
    });
  }

  if (els.btnAi) { 
    els.btnAi.onclick = () => { 
      config.aiModeActive = !config.aiModeActive; 
      els.btnAi.classList.toggle('active', config.aiModeActive); 
      els.searchForm.classList.toggle('ai-active', config.aiModeActive); 
    }; 
  }


  safeBind('add-shortcut-btn', 'click', () => { 
    const tIn = document.getElementById('new-shortcut-title'); 
    const uIn = document.getElementById('new-shortcut-url'); 
    if(!tIn || !uIn) return;
    const t = tIn.value.trim(); 
    let u = uIn.value.trim(); 
    if (!t || !u) return; 
    if (!/^https?:\/\//i.test(u)) u = 'https://' + u; 
    config.shortcuts.push({ id: Date.now().toString(), title: t, url: u }); 
    config.themes.forEach(th => getShortcutPos(th, config.shortcuts[config.shortcuts.length - 1].id)); 
    tIn.value = ''; uIn.value = ''; 
    saveConfig(); 
  });
  
  const sList = document.getElementById('shortcuts-manage-list'); 
  if (sList) { 
    sList.onclick = (e) => { 
      const btn = e.target.closest('.btn-delete'); 
      if (btn) { 
        config.shortcuts = config.shortcuts.filter(s => s.id !== btn.dataset.id); 
        saveConfig(); 
      } 
    }; 
  }

  const resetPart = (id, fn) => { safeBind(id, 'click', () => { fn(); saveConfig(); }); };
  resetPart('reset-pos-clock', () => { currentActiveTheme.layout.positions.clock = { ...DEFAULT_THEMES[0].layout.positions.clock }; });
  resetPart('reset-pos-search', () => { currentActiveTheme.layout.positions.search = { ...DEFAULT_THEMES[0].layout.positions.search }; });
  resetPart('reset-pos-shortcuts', () => {
    currentActiveTheme.layout.positions.shortcuts = { ...DEFAULT_THEMES[0].layout.positions.shortcuts };
    currentActiveTheme.layout.shortcutPositions = {};
    config.shortcuts.forEach(s => { currentActiveTheme.layout.shortcutPositions[s.id] = { x: 50, y: 50, scale: 1, rotate: 0 }; });
  });
  resetPart('reset-pos-widgets', () => { 
    currentActiveTheme.layout.positions.weather = { ...DEFAULT_THEMES[0].layout.positions.weather }; 
    currentActiveTheme.layout.positions.ip = { ...DEFAULT_THEMES[0].layout.positions.ip }; 
    currentActiveTheme.layout.positions.greeting = { ...DEFAULT_THEMES[0].layout.positions.greeting }; 
  });
  safeBind('reset-positions-btn', 'click', () => {
    currentActiveTheme.layout = { positions: JSON.parse(JSON.stringify(DEFAULT_THEMES[0].layout.positions)), shortcutPositions: {} };
    config.shortcuts.forEach(s => { currentActiveTheme.layout.shortcutPositions[s.id] = { x: 50, y: 50, scale: 1, rotate: 0 }; });
    saveConfig(); 
    alert(T('alertResetTheme'));
  });


  const CONFIG_SCHEMA_VERSION = 2;
  safeBind('export-config-btn', 'click', async () => { 
    const btn = document.getElementById('export-config-btn'); 
    const origText = btn.innerText; 
    btn.innerText = 'Экспорт...'; 
    btn.disabled = true;
    try {
      let exportData = { schemaVersion: CONFIG_SCHEMA_VERSION, exportedAt: new Date().toISOString(), config: config, localMedia: {} };
      for (let t of config.themes) { 
        if (t.mediaSource === 'local') { 
          const data = await getMediaFromIDB(t.id); 
          if (data && data.blob) { 
            const base64 = await blobToBase64(data.blob); 
            exportData.localMedia[t.id] = { base64: base64, type: data.type, name: data.name }; 
          } 
        } 
      }
      const a = document.createElement('a'); 
      a.href = URL.createObjectURL(new Blob([JSON.stringify(exportData)], { type: 'application/json' })); 
      a.download = 'yft-profile-v5.json'; 
      a.click();
    } catch(e) { 
      alert(T('alertExportError') + e.message); 
    }
    btn.innerText = origText; 
    btn.disabled = false;
  });
  

  const iConf = document.getElementById('import-config-input');
  const iConfLabel = iConf ? iConf.closest('label') : null;
  if (iConf) {
    iConf.onchange = (e) => { 
      const file = e.target.files && e.target.files[0];
      e.target.value = '';
      if (!file) return;

      const origLabelText = iConfLabel ? iConfLabel.firstChild.textContent : null;
      if (iConfLabel) { iConfLabel.firstChild.textContent = 'Импорт...'; iConfLabel.classList.add('disabled-block'); }

      const r = new FileReader(); 
      r.onload = async (ev) => { 
        try { 
          const imported = JSON.parse(ev.target.result); 
          if (!imported || typeof imported !== 'object') throw new Error('bad-format');
          const rawConfig = (imported.config && typeof imported.config === 'object') ? imported.config : imported;
          if (!rawConfig || typeof rawConfig !== 'object') throw new Error('bad-format');

          const newConfig = normalizeConfig(rawConfig);
          if (!Array.isArray(newConfig.themes) || !newConfig.themes.length) throw new Error('bad-format');

          if (imported.localMedia && typeof imported.localMedia === 'object') {
            for (const themeId in imported.localMedia) {
              const lm = imported.localMedia[themeId];
              if (!lm || !lm.base64) continue;
              await saveMediaToIDB(themeId, Object.assign(base64ToBlob(lm.base64, lm.type), { name: lm.name }));
            }
          }

          config = newConfig;
          currentActiveTheme = config.themes.find(t => t.id === config.activeThemeId) || config.themes[0];
          await saveConfig(); 
          syncSettingsUI(); 
          toggleBuildModeVisuals();
          alert(T('alertImportSuccess'));
        } catch (err) { 
          alert(T('alertImportBadFormat')); 
        } finally {
          if (iConfLabel && origLabelText !== null) { 
            iConfLabel.firstChild.textContent = origLabelText; 
            iConfLabel.classList.remove('disabled-block'); 
          }
        }
      }; 
      r.onerror = () => { 
        alert(T('alertFileReadError')); 
        if (iConfLabel && origLabelText !== null) { 
          iConfLabel.firstChild.textContent = origLabelText; 
          iConfLabel.classList.remove('disabled-block'); 
        } 
      }; 
      r.readAsText(file); 
    };
  }
  
  safeBind('reset-all-btn', 'click', async () => { 
    if (confirm(T('confirmFactoryReset'))) { 
      config = normalizeConfig(JSON.parse(JSON.stringify(DEFAULT_CONFIG))); 
      currentActiveTheme = config.themes.find(t => t.id === config.activeThemeId) || config.themes[0]; 
      await saveConfig(); 
      syncSettingsUI(); 
      toggleBuildModeVisuals(); 
    } 
  });


  const cssEditor = document.getElementById('custom-css-editor');
  safeBind('btn-apply-css', 'click', () => {
    if (cssEditor) {
      config.customCss = cssEditor.value;
      Promise.resolve(saveConfig()).then(() => {
        applyCustomCss();
        alert(T('alertCssApplied'));
      });
    }
  });

  safeBind('btn-clear-css', 'click', () => {
    if (confirm(T('confirmClearCustomCss'))) {
      config.customCss = '';
      if (cssEditor) cssEditor.value = '';
      Promise.resolve(saveConfig()).then(() => applyCustomCss());
    }
  });


  document.querySelectorAll('.css-snippet-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!cssEditor) return;
      const snippet = btn.dataset.activeSnippet || btn.dataset.snippet || '';
      const current = cssEditor.value.trim();
      cssEditor.value = current ? `${current}\n\n${snippet}` : snippet;
      cssEditor.focus();
    });
  });


  safeBind('btn-create-custom-widget', 'click', () => openCustomWidgetModal());
  safeBind('close-widget-modal', 'click', () => closeCustomWidgetModal());
  safeBind('btn-cancel-custom-widget', 'click', () => closeCustomWidgetModal());
  safeBind('btn-save-custom-widget', 'click', () => saveCustomWidget());

  const wModal = document.getElementById('custom-widget-modal');
  if (wModal) {
    wModal.addEventListener('click', (e) => {
      if (e.target === wModal) closeCustomWidgetModal();
    });
  }

  document.querySelectorAll('.widget-template-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tmplKey = btn.dataset.tpl || btn.dataset.template;
      const cInput = document.getElementById('custom-widget-content-input');
      if (cInput && WIDGET_TEMPLATES[tmplKey]) {
        cInput.value = WIDGET_TEMPLATES[tmplKey];
      }
    });
  });
}
