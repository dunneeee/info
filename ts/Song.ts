class Song {
  private name: string;
  private path: string;
  private img: string;
  private tag: HTMLAudioElement;
  constructor(name: string, path: string, img: string) {
    this.name = name;
    this.path = path;
    this.img = img;
    this.tag = new Audio(this.path);
  }
  get getName(): string {
    return this.name;
  }
  get getPath(): string {
    return this.path;
  }
  get getImg(): string {
    return this.img;
  }
  play() {
    this.tag.play();
  }
  pause() {
    this.tag.pause();
  }
  load() {
    this.tag.load();
  }
  get getCurrent(): number {
    return this.tag.currentTime;
  }
  get getDuration(): number {
    return this.tag.duration;
  }
  get getTag(): HTMLAudioElement {
    return this.tag;
  }
}
export { Song };
