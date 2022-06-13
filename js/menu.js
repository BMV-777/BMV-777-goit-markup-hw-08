(() => {

    const refs = {
        openMenuBtn: document.querySelector('[data-menu-open]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
    };

    refs.openMenuBtn.addEventListener('click', toggLeMenu);
    refs.closeMenuBtn.addEventListener('click', toggLeMenu);

    refs.backdrop.addEventListener('click', logBackdropClick);

    function toggLeMenu() {
        refs.menu.classList.toggle('is-hidden');
    }
})();     
