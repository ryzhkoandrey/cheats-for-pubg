"use strict";

// ====================================
// =============== MENU ===============
// ====================================

// Скролл я якорю

const scrollLinks = document.querySelectorAll('.navbar__menu-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Получаем индивидуальный отступ из data-offset (по умолчанию 0)
            const offset = parseInt(targetElement.getAttribute('data-offset')) || 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    });
});

// ===============================================
// =============== NAVBAR LANGUAGE ===============
// ===============================================

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
            otherList.removeAttribute('style');
        });

        // Если текущий был неактивен, активируем его
        if (!isActive) {
            languageSelector.classList.add('navbar__language--active');
            languageList.style.maxHeight = languageList.scrollHeight + 'px';
        } else {
            // Если был активен, деактивируем
            languageSelector.classList.remove('navbar__language--active');
            languageList.removeAttribute('style');
        }
    });
});

// Закрываем все списки при клике вне блоков
document.addEventListener('click', (event) => {
    document.querySelectorAll('.navbar__language').forEach((languageSelector) => {
        if (!languageSelector.contains(event.target)) {
            const languageList = languageSelector.querySelector('.navbar__language-list');
            languageSelector.classList.remove('navbar__language--active');
            languageList.removeAttribute('style');
        }
    });
});

// ========================================
// =============== FANCYBOX ===============
// ========================================

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

// ====================================
// =============== TABS ===============
// ====================================

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

// =====================================================
// =============== FUNCTIONALITY GALLERY ===============
// =====================================================

// swiper-windows

const swiperWindows = new Swiper('#swiper-windows', {
    slidesPerView: 1,
    spaceBetween: 0,

    navigation: {
        prevEl: "#swiper-windows-prev",
        nextEl: "#swiper-windows-next",
    },
});

// swiper-android

const swiperAndroid = new Swiper('#swiper-android', {
    slidesPerView: 1,
    spaceBetween: 0,

    navigation: {
        prevEl: "#swiper-android-prev",
        nextEl: "#swiper-android-next",
    },
});

// swiper-ios

const swiperIos = new Swiper('#swiper-ios', {
    slidesPerView: 1,
    spaceBetween: 0,

    navigation: {
        prevEl: "#swiper-ios-prev",
        nextEl: "#swiper-ios-next",
    },
});

// =======================================
// =============== REVIEWS ===============
// =======================================

// swiper

const swiperReviews = new Swiper('#swiper-reviews', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,

    navigation: {
        prevEl: "#swiper-reviews-prev",
        nextEl: "#swiper-reviews-next",
    },
});

// ===================================
// =============== FAQ ===============
// ===================================

const faqTogglers = document.querySelectorAll('.faq__question-toggler');

// Инициализация: открываем вопросы, которые активны
function initializeFaq() {
    faqTogglers.forEach(toggler => {
        const isOpen = toggler.parentElement.classList.contains('faq__question--active');
        changeAnswerHeight(toggler, isOpen);
    });
}

// Обработчик клика по вопросу
function handleToggleClick(event) {
    const toggler = event.currentTarget;
    const isOpen = toggler.parentElement.classList.toggle('faq__question--active');
    changeAnswerHeight(toggler, isOpen);
}

// Пересчет высоты активных вопросов при изменении размера окна
function handleResize() {
    faqTogglers.forEach(toggler => {
        const isOpen = toggler.parentElement.classList.contains('faq__question--active');
        changeAnswerHeight(toggler, isOpen);
    });
}

// Изменение высоты ответа
function changeAnswerHeight(toggler, isOpen) {
    const answer = toggler.nextElementSibling;
    if (isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
        answer.removeAttribute('style');
    }
}

// Подключение событий
faqTogglers.forEach(toggler => {
    toggler.addEventListener('click', handleToggleClick);
});

// Инициализация
initializeFaq();

// Изменение размера окна
window.addEventListener('resize', handleResize);