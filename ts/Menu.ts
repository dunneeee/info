class Menu {
  private menu: HTMLDivElement;
  private settingsBtn: HTMLLIElement;
  private settingsPanel: HTMLDivElement;
  constructor() {
    const m = document.querySelector(".menu");
    if (m) this.menu = <HTMLDivElement>m;
    if (this.menu) {
      const st = this.menu.querySelector(".menu--settings");
      if (st) this.settingsBtn = <HTMLLIElement>st;
    }
    this.settingsPanel = <HTMLDivElement>this.menu.querySelector(".menu--settings-panel");
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
