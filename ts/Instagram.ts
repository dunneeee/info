import { Item } from "./Item.js";

export class Instagram extends Item {
  private instagram: HTMLDivElement;
  private onIcon: HTMLLIElement;
  private infoList: NodeListOf<HTMLDivElement>;
  private img: HTMLDivElement;
  constructor() {
    super();
    this.instagram = Item.app[1];
    this.onIcon = Item.listIcon[1];
    this.img = <HTMLDivElement>this.instagram.querySelector(".instagram__img");
    this.infoList = <NodeListOf<HTMLDivElement>>this.instagram.querySelectorAll(".instagram__info");
    this.onIcon.addEventListener("click", async () => {
      this.show(this.instagram);
      this.textEffect(
        this.infoList[0].querySelectorAll("*"),
        (index, e) =>
          new Promise((reslove) => {
            if (index == 0) {
              this.type("About me", e);
            }
            if (index == 1) {
              this.type(
                "Tôi sinh ra và lớn lên tại một gia đình bình thường, một nơi yên bình không ồn ào, hối hả. Tôi cũng là một người bình thường, không có gì nổi bật, không có gì trong tay, đang tiếp tục làm việc và thực hiện tham vọng lớn lao thống trị thế giới.",
                e
              );
            }
            reslove(true);
          })
      );
      this.textEffect(
        this.infoList[1].querySelectorAll("*"),
        (index, e) =>
          new Promise((reslove) => {
            if (index == 0) {
              this.type("What can I do?", e);
            }
            if (index == 1) {
              this.type("Tôi có thể làm tất cả mọi thứ trừ những thứ mà tôi không làm được 😊!", e);
            }
            reslove(true);
          })
      );
      setTimeout(() => {
        this.img.classList.add("show");
      }, 500);
    });
  }
  async start() {}
  hidden() {
    this.hidden2(this.instagram);
    this.img.classList.remove("show");
  }
  async textEffect(items: NodeListOf<HTMLElement>, callback: (index: number, e: HTMLElement) => Promise<boolean>) {
    const start = async (index: number) => {
      if (items[index]) {
        items[index].classList.add("after");
        await callback(index, items[index]);
        items[index].classList.remove("after");
        start(index + 1);
      } else {
        return;
      }
    };
    start(0);
    return true;
  }
  type(text: string, element: HTMLElement, speed?: number) {
    let index = 0;
    let isAdding = true;
    const playAnimation = async () => {
      element.innerText = text.slice(0, index);
      if (isAdding) {
        if (index > text.length) {
          isAdding = false;
          return;
        } else {
          index++;
          await new Promise((reslove) => {
            setTimeout(async () => {
              await playAnimation();
              reslove(true);
            }, speed || 1000 / 120);
          });
        }
      }
    };
    playAnimation();
  }
}
