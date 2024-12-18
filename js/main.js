// =============== NAVBAR__LANGUAGE ===============

document.querySelectorAll('.navbar__language').forEach((languageSelector) => {
    const LanguageToggler = languageSelector.querySelector('.navbar__language-toggler');
    const languageList = languageSelector.querySelector('.navbar__language-list');

    LanguageToggler.addEventListener('click', (event) => {
        event.preventDefault();

        // Проверяем, активен ли текущий languageSelector
        const isActive = languageSelector.classList.contains('navbar__language--active');

        // Сбрасываем все другие открытые блоки
        document.querySelectorAll('.navbar__language').forEach((otherSelector) => {
            const otherList = otherSelector.querySelector('.navbar__language-list');
            otherSelector.classList.remove('navbar__language--active');
            otherList.removeAttribute('style'); // Убираем высоту
        });

        // Если текущий был неактивен, активируем его
        if (!isActive) {
            languageSelector.classList.add('navbar__language--active');
            languageList.style.maxHeight = languageList.scrollHeight + 'px'; // Устанавливаем высоту
        } else {
            // Если был активен, деактивируем
            languageSelector.classList.remove('navbar__language--active');
            languageList.removeAttribute('style'); // Убираем высоту
        }
    });
});

// Закрываем все списки при клике вне блоков
document.addEventListener('click', (event) => {
    document.querySelectorAll('.navbar__language').forEach((languageSelector) => {
        if (!languageSelector.contains(event.target)) {
            const languageList = languageSelector.querySelector('.navbar__language-list');
            languageSelector.classList.remove('navbar__language--active');
            languageList.removeAttribute('style'); // Убираем высоту
        }
    });
});