let gifs = [
    "https://media.tenor.com/RfJzepsDdmYAAAAC/rat-spinning.gif",
    "https://media.tenor.com/aaEMtGfZFbkAAAAC/rat-spinning.gif",
    "https://media.tenor.com/-XU4nklqFCcAAAAd/teleporting-rat-high-quality-horizontally-spinning-rat.gif",
    "https://media.tenor.com/kpFlID-W1zQAAAAd/spinning-rat.gif",
    "https://media.tenor.com/biinuDzSWwQAAAAd/high-quality-diagonally-spinning-rat-spinning-rat.gif",
    "https://media.tenor.com/D_P9fdGBb7QAAAAd/high-quality-upside-down-spinning-rat-spinning-rat.gif"
]
let gif = gifs[Math.floor(Math.random() * gifs.length)];

const changeImage = () => {
    let list = document.getElementsByTagName("img");
    for (let i = 0; i < list.length * 1.5; i++) {
        let item = Math.floor(Math.random() * list.length);
        let elem = list[item];

        if (window.getComputedStyle(elem).display === "none") continue;
        if (elem.getBoundingClientRect().width < 30 || elem.getBoundingClientRect().height < 30) continue;

        // console.log(list[item])
        list[item].src = gif;
        list[item].removeAttribute("srcset");
        break;
    }
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        changeImage();
    }
});
