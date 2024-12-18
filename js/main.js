// =============== NAVBAR__LANGUAGE ===============

// Получаем все блоки выбора языка
const languages = document.querySelectorAll('.navbar__language');

// Добавляем обработчик для каждого блока
languages.forEach((language) => {
    const languageToggler = language.querySelector('.navbar__language-toggler');

    // Открытие/закрытие меню при клике на кнопку
    languageToggler.addEventListener('click', (event) => {
        event.preventDefault();

        // Закрываем все остальные меню
        languages.forEach((otherSelector) => {
            if (otherSelector !== language) {
                otherSelector.classList.remove('navbar__language--active');
            }
        });

        // Переключаем состояние текущего меню
        language.classList.toggle('navbar__language--active');
    });
});

// Закрытие всех меню при клике вне любого блока
document.addEventListener('click', (event) => {
    languages.forEach((language) => {
        if (!language.contains(event.target)) {
            language.classList.remove('navbar__language--active');
        }
    });
});