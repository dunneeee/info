import { Clock } from "./Clock.js";
import { Weather } from "./Weather.js";
import { Music } from "./Music.js";
import { Menu } from "./Menu.js";
import { Test } from "./Test.js";
import { Facebook } from "./Facebook.js";
import { Item } from "./Item.js";
import { Instagram } from "./Instagram.js";
import { Love } from "./Love.js";
class Index {
  private clock: Clock;
  private weather: Weather;
  private music: Music;
  private menu: Menu;
  private listIcon: NodeListOf<HTMLLIElement>;
  private containerClose: HTMLDivElement;
  constructor() {
    this.containerClose = <HTMLDivElement>document.querySelector(".container__close");
    this.listIcon = document.querySelectorAll(".menu__lists .menu__lists-item");
    const test = new Test();
    this.menu = new Menu();
    this.clock = new Clock();
    this.weather = new Weather("2c3bd97b71d45a3c90292303fc7e4973");
    this.music = new Music();
    const fb = new Facebook();
    const ig = new Instagram();
    const love = new Love();
    Item.handleIcon();
    Item.containerClose.addEventListener("click", () => {
      Item.containerClose.style.display = "none";
      fb.hidden();
      ig.hidden();
      love.hidden();
    });
  }
  async start(): Promise<void> {
    this.weather.start();
  }
}

const app = new Index();
app.start();
export {};
