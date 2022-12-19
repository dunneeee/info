class Song {
    name;
    path;
    img;
    tag;
    constructor(name, path, img) {
        this.name = name;
        this.path = path;
        this.img = img;
        this.tag = new Audio(this.path);
    }
    get getName() {
        return this.name;
    }
    get getPath() {
        return this.path;
    }
    get getImg() {
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
    get getCurrent() {
        return this.tag.currentTime;
    }
    get getDuration() {
        return this.tag.duration;
    }
    get getTag() {
        return this.tag;
    }
}
export { Song };
