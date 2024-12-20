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

const tabsBtns = document.querySelectorAll('.tabs-btn');
const tabsContents = document.querySelectorAll('.tabs-content');

tabsBtns.forEach(tabsBtn => {
    tabsBtn.addEventListener('click', () => {
        const group = tabsBtn.dataset.tabsGroup;
        const target = tabsBtn.dataset.tabsTarget;

        document
            .querySelectorAll(`.tabs-btn[data-tabs-group="${group}"]`)
            .forEach(tabsBtn => tabsBtn.classList.remove('tabs-btn--active'));

        document
            .querySelectorAll(`.tabs-content[data-tabs-group="${group}"]`)
            .forEach(tabsContent => tabsContent.classList.remove('tabs-content--active'));

        tabsBtn.classList.add('tabs-btn--active');
        document
            .querySelectorAll(`.tabs-content[data-tabs-group="${group}"][data-tabs-content="${target}"]`)
            .forEach(tabsContent => tabsContent.classList.add('tabs-content--active'));
    });
});
