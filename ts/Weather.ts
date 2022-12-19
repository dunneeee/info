interface WeatherData {
  temp: number;
  name: string;
  descriptsion: string;
  iconLink: string;
}

class Weather {
  private api: string;
  private apiLink: string;
  private apiLinkIcon: string;
  private element: HTMLDivElement | null;
  private cityElement: HTMLElement | null;
  private iconElement: HTMLElement | null;
  private titleElement: HTMLElement | null;
  constructor(api: string) {
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
  getLinkIcon(code: string): string {
    return this.apiLinkIcon + code + "@2x.png";
  }
  async getData(): Promise<WeatherData> {
    return new Promise((reslove, reject) => {
      fetch(
        this.apiLink +
          new URLSearchParams({
            q: "Da Nang",
            appid: this.api,
            units: "metric",
            lang: "vi",
          }),
        { method: "get" }
      )
        .then((res) => res.json())
        .then((data) =>
          reslove({
            descriptsion: data.weather[0].description,
            iconLink: this.getLinkIcon(data.weather[0].icon),
            name: data.name,
            temp: data.main.temp,
          })
        )
        .catch((e) => {
          reject(e);
        });
    });
  }
  setCity(city: string) {
    this.cityElement ? (this.cityElement.innerText = city) : "";
  }
  setIcon(iconLink: string) {
    this.iconElement ? this.iconElement.setAttribute("src", iconLink) : "";
  }
  setTitle(deg: number, title: string) {
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
  async start(): Promise<void> {
    try {
      const data = await this.getData();
      this.setCity(data.name);
      this.setIcon(data.iconLink);
      this.setTitle(data.temp, data.descriptsion.charAt(0).toUpperCase() + data.descriptsion.slice(1));
    } catch (e) {
      console.log(e);
    }
  }
}

export { Weather };
