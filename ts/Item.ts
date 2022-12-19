export class Item {
  static containerClose: HTMLDivElement = <HTMLDivElement>document.querySelector(".container__close");
  static app: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.querySelectorAll(".app");
  static listIcon: NodeListOf<HTMLLIElement> = <NodeListOf<HTMLLIElement>>(
    document.querySelectorAll(".menu__lists .menu__lists-item")
  );
  protected toogle: number = 0;
  constructor() {}
  static handleIcon() {
    this.listIcon.forEach((li, index) => {
      if (index != this.listIcon.length - 1) {
        li.addEventListener("click", () => {
          this.containerClose.style.display = "block";
        });
      }
    });
  }
  show(element: HTMLDivElement) {
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
  hidden2(element: HTMLElement): void {
    element.style.top = `100%`;
  }
}
