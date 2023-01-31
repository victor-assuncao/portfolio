export class Header {
    constructor() {
        window.addEventListener('scroll', () => {
            this.changeHeaderState();
        });
        this.openAndCloseMenu();
    }
    changeHeaderState() {
        const header = document.querySelector('[data-header]');
        if (window.scrollY > 140) {
            return header.classList.add('header--fixed');
        }
        header.classList.remove('header--fixed');
    }
    openAndCloseMenu() {
        const body = document.body;
        const menu = document.querySelector('[data-nav]');
        const menuBG = document.querySelector('[data-nav-background]');
        const logo = document.querySelector('[data-logo-menu]');
        const closeMenu = [
            document.querySelector('[data-close-menu]'),
            menuBG
        ];
        document.querySelector('[data-open-menu]').addEventListener('click', () => {
            classHandler(true);
        });
        closeMenu.forEach(element => {
            element.addEventListener('click', () => {
                classHandler(false);
            });
        });
        function classHandler(addClass) {
            body.classList[addClass ? 'add' : 'remove']('no-scroll');
            menuBG.classList[addClass ? 'add' : 'remove']('is-block');
            menu.classList[addClass ? 'add' : 'remove']('is-flex');
            logo.classList[addClass ? 'add' : 'remove']('is-block');
        }
    }
    ;
}
;
