import { MusicList } from "./MusicList.js";
class Music {
  private img: Element;
  private title: Element;
  private range: HTMLInputElement;
  private prevBtn: Element;
  private playBtn: Element;
  private pauseBtn: Element;
  private nextBtn: Element;
  private music: Element;
  private actionBtn: Element;
  private songs: MusicList;
  private indexPlay: number;
  private isPlay: boolean;
  constructor() {
    this.songs = new MusicList();
    this.indexPlay = this.randomNumber(this.songs.getList.length);
    this.isPlay = false;
    const music = document.querySelector(".music");
    if (music != null) {
      this.music = music;
    }
    if (this.music) {
      const title = this.music.querySelector(".music__right-title");
      const img = this.music.querySelector(".music__left > img");
      const range = this.music.querySelector(".music__right-range");
      const prevBtn = this.music.querySelector(".js--music-prev");
      const nextBtn = this.music.querySelector(".js--music-next");
      const playBtn = music?.querySelector(".js--music-play");
      const pauseBtn = this.music.querySelector(".js--music-pause");
      const actionBtn = this.music.querySelector(".music__right-control--action");
      if (actionBtn) this.actionBtn = actionBtn;
      if (title) this.title = title;
      if (img) this.img = img;
      if (range) this.range = <HTMLInputElement>range;
      if (prevBtn) this.prevBtn = prevBtn;
      if (nextBtn) this.nextBtn = nextBtn;
      if (playBtn) this.playBtn = playBtn;
      if (pauseBtn) this.pauseBtn = pauseBtn;
      this.start();
    }
  }
  start() {
    this.actionBtn.addEventListener("click", this.onClickActionBtn.bind(this));
    this.nextBtn.addEventListener("click", this.onNext.bind(this));
    this.prevBtn.addEventListener("click", this.onPrev.bind(this));
    this.changeImg();
    this.changeTitle();
  }
  private randomNumber(lenght: number) {
    return Math.floor(Math.random() * lenght);
  }
  onPrev(e: Event) {
    this.prevSong();
  }
  onNext(e: Event) {
    this.nextSong();
  }
  onClickActionBtn(e: Event) {
    if (this.isPlay) {
      this.onPause();
      this.isPlay = false;
    } else {
      this.onPlay();
      this.isPlay = true;
    }
  }
  onPlay() {
    this.changeImg();
    this.changeTitle();
    this.actionBtn.classList.remove("stop");
    this.img.classList.add("play-rotate");
    this.playSong();
    this.songs.getList[this.indexPlay].getTag.addEventListener("timeupdate", () => {
      this.updateRange();
    });
  }
  onPause() {
    this.actionBtn.classList.add("stop");
    this.img.classList.remove("play-rotate");
    this.pauseSong();
  }
  changeImg() {
    this.img.setAttribute("src", this.songs.getList[this.indexPlay].getImg);
  }
  changeTitle() {
    this.title.innerHTML = this.songs.getList[this.indexPlay].getName;
  }
  updateRange() {
    const currentTime = this.songs.getList[this.indexPlay].getCurrent;
    const duration = this.songs.getList[this.indexPlay].getDuration;
    const step = (currentTime / duration) * 100;
    this.range.style.width = step + "%";
    if (step == 100) {
      this.nextRandom();
    }

    this.range.value = this.range.value + duration / 100 + "";
  }
  playSong() {
    this.songs.getList[this.indexPlay].play();
  }
  pauseSong() {
    this.songs.getList[this.indexPlay].pause();
  }
  nextSong() {
    this.onPause();
    this.indexPlay = this.randomNumber(this.songs.getList.length);
    if (this.indexPlay >= this.songs.getList.length) {
      this.indexPlay = 0;
    }
    this.onPlay();
  }
  nextRandom() {
    this.onPause();
    this.indexPlay = this.randomNumber(this.songs.getList.length);
    if (this.indexPlay >= this.songs.getList.length) {
      this.indexPlay = 0;
    }
    this.onPlay();
  }
  prevSong() {
    this.onPause();
    this.indexPlay--;
    if (this.indexPlay < 0) {
      this.indexPlay = this.songs.getList.length - 1;
    }
    this.onPlay();
  }
}

export { Music };
