class Clock {
    main;
    time;
    date;
    fullDate;
    dateNow;
    constructor() {
        this.main = document.querySelector(".js--clock");
        if (this.main) {
            this.time = this.main.querySelector("h3");
            this.date = this.main.querySelector("h4");
            this.fullDate = this.main.querySelector("span");
        }
        this.start();
    }
    getDayText(day) {
        switch (day) {
            case 0:
                return `Sunday`;
            case 1:
                return `Monday`;
            case 2:
                return `Tuesday`;
            case 3:
                return `Wednesday`;
            case 4:
                return `Thursday`;
            case 5:
                return `Friday`;
            case 6:
                return `Saturday`;
            default:
                return "";
        }
    }
    getMonthText(month) {
        switch (month) {
            case 0:
                return `January`;
            case 1:
                return `February`;
            case 2:
                return `March`;
            case 3:
                return `April`;
            case 4:
                return `May`;
            case 5:
                return `June`;
            case 6:
                return `July`;
            case 7:
                return `August`;
            case 8:
                return `September`;
            case 9:
                return `October`;
            case 10:
                return `November`;
            case 11:
                return `December`;
            default:
                return "";
        }
    }
    getZeroText(num) {
        if (num < 10) {
            return "0" + num;
        }
        else {
            return "" + num;
        }
    }
    updateTime() {
        const timeText = `${this.getZeroText(this.dateNow.getHours())}:${this.getZeroText(this.dateNow.getMinutes())}`;
        this.time ? (this.time.innerText = timeText) : "";
    }
    updateDay() {
        this.date ? (this.date.innerText = this.getDayText(this.dateNow.getDay())) : "";
    }
    updateFullDate() {
        this.fullDate
            ? (this.fullDate.innerText = `${this.dateNow.getDate()} ${this.getMonthText(this.dateNow.getMonth())} ${this.dateNow.getFullYear()}`)
            : "";
    }
    update() {
        this.dateNow = new Date();
        this.updateTime();
        this.updateDay();
        this.updateFullDate();
        setTimeout(this.update.bind(this), 1000);
    }
    start() {
        this.update();
    }
}
export { Clock };
