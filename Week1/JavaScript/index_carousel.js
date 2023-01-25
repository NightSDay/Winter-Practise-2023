const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".main__gallery");
const track = document.querySelector(".slider__block .container");
let width = carousel.offsetWidth;
let index = 0;
window.addEventListener("resize", function () {
    width = carousel.offsetWidth;
});
next.addEventListener("click", function (e) {
    e.preventDefault();
    index = index + 1;
    prev.classList.add("active");
    track.style.transform = "translateX(" + index * -width + "px)";
});
prev.addEventListener("click", function () {
    index = index - 1;
    if (index === 0) {
        prev.classList.remove("active");
    }
    track.style.transform = "translateX(" + index * -width + "px)";
});