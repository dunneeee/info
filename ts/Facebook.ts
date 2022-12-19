import { Item } from "./Item.js";

export class Facebook extends Item {
  private facebook: HTMLDivElement;
  private onIcon: HTMLLIElement;
  private avt: HTMLDivElement;
  private btnFollow: HTMLButtonElement;
  private toogleFollow: number = 0;
  private listQuote: string[];
  private quoteDiv: HTMLDivElement;
  private nameDIv: HTMLDivElement;
  private fbAmout: HTMLDivElement;
  constructor() {
    super();
    this.listQuote = [];
    this.btnFollow = <HTMLButtonElement>document.querySelector(".facebook__btn-follow");
    this.facebook = Item.app[0];
    this.onIcon = Item.listIcon[0];
    this.nameDIv = <HTMLDivElement>this.facebook.querySelector(".facebook-name");
    this.quoteDiv = <HTMLDivElement>this.facebook.querySelector(".facebook-quote");
    this.fbAmout = <HTMLDivElement>this.facebook.querySelector(".facebook__amout");
    this.avt = <HTMLDivElement>document.querySelector(".facebook-avt");
    this.loadQuote();
    this.onIcon.addEventListener("click", (e) => {
      this.show(this.facebook);
      this.quoteDiv.innerText = this.listQuote[this.randomIndex(this.listQuote.length)];
      setTimeout(() => {
        this.nameDIv.style.left = "0";
        this.quoteDiv.style.left = "0";
        this.fbAmout.style.left = "-100%";
      }, 500);
      setTimeout(() => {
        this.fbAmout.style.left = "0";
      }, 700);
    });
    this.btnFollow.addEventListener("click", this.followHandle.bind(this));
  }
  get getFacebookElement() {
    return this.facebook;
  }
  randomIndex(length: number) {
    return Math.floor(Math.random() * length);
  }
  hidden(): void {
    this.nameDIv.style.left = "100%";
    this.quoteDiv.style.left = "-100%";
    this.fbAmout.style.left = "100%";
    setTimeout(() => {
      this.facebook.style.top = `calc(100% + ${this.avt.offsetHeight}px)`;
    }, 500);
  }
  followHandle() {
    if (this.toogleFollow === 0) {
      this.onFollow();
      this.toogleFollow = 1;
    } else {
      this.unFollow();
      this.toogleFollow = 0;
    }
  }
  onFollow() {
    this.btnFollow.innerHTML = "Following";
    this.btnFollow.style.background = "black";
    this.btnFollow.style.width = this.btnFollow.offsetWidth + 40 + "px";
  }
  unFollow() {
    this.btnFollow.innerHTML = "Follow";
    this.btnFollow.style.background = "#d00725";
    this.btnFollow.style.width = this.btnFollow.offsetWidth - 40 + "px";
  }
  loadQuote(): void {
    fetch("https://chanhtuoi.com/quotes-hay-p2974.html")
      .then((res) => res.text())
      .then((data) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const main = doc.querySelector(".ck-content");
        main?.querySelectorAll("p").forEach((e, i) => {
          if (i >= 2) {
            if (e.textContent) {
              this.listQuote.push(e.textContent);
            }
          }
        });
      });
  }
}
