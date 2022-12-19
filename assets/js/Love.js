import { Item } from "./Item.js";
export class Love extends Item {
    love;
    onIcon;
    listItem;
    constructor() {
        super();
        this.love = Item.app[2];
        this.listItem = this.love.querySelectorAll(".love-lists--item");
        this.onIcon = Item.listIcon[2];
        this.onIcon.addEventListener("click", () => {
            this.show(this.love);
            this.toogleItem(0, true);
        });
    }
    toogleItem(index, status) {
        if (index >= this.listItem.length) {
            return;
        }
        else {
            if (status) {
                this.listItem[index].classList.add("show");
            }
            else {
                this.listItem[index].classList.remove("show");
            }
            setTimeout(() => {
                if (status) {
                    this.toogleItem(index + 1, true);
                }
                else {
                    this.toogleItem(index + 1, false);
                }
            }, 150);
        }
    }
    hidden() {
        this.toogleItem(0, false);
        setTimeout(() => {
            this.hidden2(this.love);
        }, 500);
    }
}
