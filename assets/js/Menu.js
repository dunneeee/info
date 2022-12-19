class Menu {
    menu;
    settingsBtn;
    settingsPanel;
    constructor() {
        const m = document.querySelector(".menu");
        if (m)
            this.menu = m;
        if (this.menu) {
            const st = this.menu.querySelector(".menu--settings");
            if (st)
                this.settingsBtn = st;
        }
        this.settingsPanel = this.menu.querySelector(".menu--settings-panel");
        this.start();
    }
    start() {
        this.settingsBtn.addEventListener("click", (e) => {
            this.settingsBtn.classList.toggle("open");
        });
        this.settingsPanel.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }
}
export { Menu };
