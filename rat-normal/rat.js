let gifs = [
    "https://media.tenor.com/RfJzepsDdmYAAAAC/rat-spinning.gif",
    "https://media.tenor.com/aaEMtGfZFbkAAAAC/rat-spinning.gif",
    "https://media.tenor.com/-XU4nklqFCcAAAAd/teleporting-rat-high-quality-horizontally-spinning-rat.gif",
    "https://media.tenor.com/kpFlID-W1zQAAAAd/spinning-rat.gif",
    "https://media.tenor.com/biinuDzSWwQAAAAd/high-quality-diagonally-spinning-rat-spinning-rat.gif",
    "https://media.tenor.com/D_P9fdGBb7QAAAAd/high-quality-upside-down-spinning-rat-spinning-rat.gif"
]
let gif = gifs[Math.floor(Math.random() * gifs.length)];

let img = document.createElement("img");
img.src = gif;
img.style.maxWidth = "300px";
img.style.maxHeight = "300px";

let list = document.getElementsByTagName("*");
for (let i = 0; i < 50; i++) {
    let item = Math.floor(Math.random() * list.length);
    let elem = list[item];

    if (window.getComputedStyle(elem).display === "none") continue;
    if (elem.getBoundingClientRect().width < 50 || elem.getBoundingClientRect().height < 50) continue;

    list[item].appendChild(img);
    break;
}