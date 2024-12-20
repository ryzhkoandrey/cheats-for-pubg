// =============== NAVBAR__LANGUAGE ===============

document.querySelectorAll('.navbar__language').forEach((languageSelector) => {
    const LanguageToggler = languageSelector.querySelector('.navbar__language-toggler');
    const languageList = languageSelector.querySelector('.navbar__language-list');

    LanguageToggler.addEventListener('click', (event) => {
        event.preventDefault();

        // Check if the current languageSelector is active
        const isActive = languageSelector.classList.contains('navbar__language--active');

        // Reset all other open blocks
        document.querySelectorAll('.navbar__language').forEach((otherSelector) => {
            const otherList = otherSelector.querySelector('.navbar__language-list');
            otherSelector.classList.remove('navbar__language--active');
            otherList.removeAttribute('style'); // Removing the height
        });

        // If the current one was inactive, activate it
        if (!isActive) {
            languageSelector.classList.add('navbar__language--active');
            languageList.style.maxHeight = languageList.scrollHeight + 'px'; // Setting the height
        } else {
            // If it was active, deactivate it
            languageSelector.classList.remove('navbar__language--active');
            languageList.removeAttribute('style'); // Removing the height
        }
    });
});

// Close all lists when clicking outside the blocks
document.addEventListener('click', (event) => {
    document.querySelectorAll('.navbar__language').forEach((languageSelector) => {
        if (!languageSelector.contains(event.target)) {
            const languageList = languageSelector.querySelector('.navbar__language-list');
            languageSelector.classList.remove('navbar__language--active');
            languageList.removeAttribute('style'); // Removing the height
        }
    });
});

// =============== TABS ===============