// =============== NAVBAR__LANGUAGE ===============

document.querySelectorAll('.navbar__language').forEach((languageSelector) => {
    const LanguageToggler = languageSelector.querySelector('.navbar__language-toggler');
    const languageList = languageSelector.querySelector('.navbar__language-list');

    LanguageToggler.addEventListener('click', (event) => {
        event.preventDefault();

        document.querySelectorAll('.navbar__language').forEach((otherSelector) => {
            const otherList = otherSelector.querySelector('.navbar__language-list');
            otherSelector.classList.remove('navbar__language--active');
            otherList.removeAttribute('style');
        });

        if (!languageSelector.classList.contains('navbar__language--active')) {
            languageSelector.classList.add('navbar__language--active');
            languageList.style.maxHeight = languageList.scrollHeight + 'px';
        } else {
            languageSelector.classList.remove('navbar__language--active');
            languageList.removeAttribute('style');
        }
    });
});

document.addEventListener('click', (event) => {
    document.querySelectorAll('.navbar__language').forEach((languageSelector) => {
        if (!languageSelector.contains(event.target)) {
            const languageList = languageSelector.querySelector('.navbar__language-list');
            languageSelector.classList.remove('navbar__language--active');
            languageList.removeAttribute('style');
        }
    });
});


// =============== TABS ===============

const tabBtns = document.querySelectorAll('.tabs-btn');
const tabContents = document.querySelectorAll('.tabs-content');

tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
        const target = tabBtn.getAttribute('data-tabs-target');

        tabBtns.forEach(tabBtn => tabBtn.classList.remove('tabs-btn--active'));
        tabContents.forEach(tabContent => tabContent.classList.remove('tabs-content--active'));

        tabBtn.classList.add('tabs-btn--active');
        document.querySelectorAll(`.tabs-content[data-tabs-content="${target}"]`).forEach(tabContent => {
            tabContent.classList.add('tabs-content--active');
        });
    });
});
