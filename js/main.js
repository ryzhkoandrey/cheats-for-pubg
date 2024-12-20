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

// =============== FANCYBOX ===============

// Решение проблемы: 
// смещение header при открытии Fancybox
Fancybox.bind("[data-fancybox]", {
    on: {
        init: () => {
            document.querySelector(".header").style.marginRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
        },
        destroy: () => {
            document.querySelector(".header").style.marginRight = "";
        }
    }
});

// =============== TABS ===============

const tabsBtns = document.querySelectorAll('.tabs-btn');
const tabsContents = document.querySelectorAll('.tabs-content');

tabsBtns.forEach(tabsBtn => {
    tabsBtn.addEventListener('click', () => {
        const group = tabsBtn.dataset.tabsGroup;
        const target = tabsBtn.dataset.tabsTarget;

        // Убираем активный класс у кнопок текущей группы
        document
            .querySelectorAll(`.tabs-btn[data-tabs-group="${group}"]`)
            .forEach(tabsBtn => tabsBtn.classList.remove('tabs-btn--active'));

        // Убираем активный класс у контента текущей группы
        document
            .querySelectorAll(`.tabs-content[data-tabs-group="${group}"]`)
            .forEach(tabsContent => tabsContent.classList.remove('tabs-content--active'));

        // Активируем текущую кнопку и контент
        tabsBtn.classList.add('tabs-btn--active');
        document
            .querySelectorAll(`.tabs-content[data-tabs-group="${group}"][data-tabs-content="${target}"]`)
            .forEach(tabsContent => tabsContent.classList.add('tabs-content--active'));
    });
});

// =============== FUNCTIONALITY__GALLERY ===============

// swiper

const functionalitySwiper = new Swiper('.functionality__gallery-slider > .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,

    navigation: {
        nextEl: ".functionality__gallery-btn--next",
        prevEl: ".functionality__gallery-btn--prev",
    },
});