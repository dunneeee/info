export class Item {
    static containerClose = document.querySelector(".container__close");
    static app = document.querySelectorAll(".app");
    static listIcon = (document.querySelectorAll(".menu__lists .menu__lists-item"));
    toogle = 0;
    constructor() { }
    static handleIcon() {
        this.listIcon.forEach((li, index) => {
            if (index != this.listIcon.length - 1) {
                li.addEventListener("click", () => {
                    this.containerClose.style.display = "block";
                });
            }
        });
    }
    show(element) {
        element.style.display = "block";
        Item.app.forEach((app) => {
            if (app != element) {
                app.style.display = "none";
            }
        });
        setTimeout(() => {
            element.style.top = "30%";
        }, 10);
    }
    hidden2(element) {
        element.style.top = `100%`;
    }
}
