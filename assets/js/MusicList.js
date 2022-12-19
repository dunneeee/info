import { Song } from "./Song.js";
const pathL = "../media/mp3/";
const list = [
    {
        name: "Bình yên nơi đâu",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Son_Tung_M-TP_1_%282017%29.png/1200px-Son_Tung_M-TP_1_%282017%29.png",
        path: pathL + "binh-yen-noi-dau.mp3",
    },
    {
        name: "Di vãng nhạt nhoà",
        img: "https://i1.sndcdn.com/artworks-000232243552-s0gido-t500x500.jpg",
        path: pathL + "di-vang-nhat-nhoa.mp3",
    },
    {
        name: "Năm ấy",
        img: "https://i.ytimg.com/vi/CeLC7ClECwk/maxresdefault.jpg",
        path: pathL + "nam-ay.mp3",
    },
    {
        name: "Sinh ra đã là thứ đối lập nhau",
        img: "https://i.ytimg.com/vi/redFrGBZoJY/maxresdefault.jpg",
        path: pathL + "sinh-ra-da-la-thu-doi-lap-nhau.mp3",
    },
    {
        name: "Yêu xa",
        img: "https://i.ytimg.com/vi/4ktgK9PaTb8/maxresdefault.jpg",
        path: pathL + "yeu-xa.mp3",
    },
    {
        name: "Một ngàn nỗi đau",
        img: "https://i.ytimg.com/vi/l-Yh2Yleb50/maxresdefault.jpg",
        path: pathL + "mot-ngan-noi-dau.mp3",
    },
];
class MusicList {
    list;
    constructor() {
        this.list = list.map((song) => new Song(song.name, song.path, song.img));
    }
    get getList() {
        return this.list;
    }
}
export { MusicList, Song };
