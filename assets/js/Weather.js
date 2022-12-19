class Weather {
    api;
    apiLink;
    apiLinkIcon;
    element;
    cityElement;
    iconElement;
    titleElement;
    constructor(api) {
        this.element = document.querySelector(".js--weather");
        if (this.element) {
            this.cityElement = this.element.querySelector(".weather-header p");
            this.iconElement = this.element.querySelector(".weather-icon img");
            this.titleElement = this.element.querySelector(".weather-title");
        }
        this.api = api;
        this.apiLink = "https://api.openweathermap.org/data/2.5/weather?";
        this.apiLinkIcon = `http://openweathermap.org/img/wn/`;
    }
    getLinkIcon(code) {
        return this.apiLinkIcon + code + "@2x.png";
    }
    async getData() {
        return new Promise((reslove, reject) => {
            fetch(this.apiLink +
                new URLSearchParams({
                    q: "Da Nang",
                    appid: this.api,
                    units: "metric",
                    lang: "vi",
                }), { method: "get" })
                .then((res) => res.json())
                .then((data) => reslove({
                descriptsion: data.weather[0].description,
                iconLink: this.getLinkIcon(data.weather[0].icon),
                name: data.name,
                temp: data.main.temp,
            }))
                .catch((e) => {
                reject(e);
            });
        });
    }
    setCity(city) {
        this.cityElement ? (this.cityElement.innerText = city) : "";
    }
    setIcon(iconLink) {
        this.iconElement ? this.iconElement.setAttribute("src", iconLink) : "";
    }
    setTitle(deg, title) {
        if (this.titleElement) {
            const h3 = this.titleElement.querySelector("h3");
            if (h3) {
                h3.innerHTML = Math.round(deg) + `&deg;C`;
            }
            const span = this.titleElement.querySelector("span");
            if (span) {
                span.innerText = title;
            }
        }
    }
    async start() {
        try {
            const data = await this.getData();
            this.setCity(data.name);
            this.setIcon(data.iconLink);
            this.setTitle(data.temp, data.descriptsion.charAt(0).toUpperCase() + data.descriptsion.slice(1));
        }
        catch (e) {
            console.log(e);
        }
    }
}
export { Weather };
