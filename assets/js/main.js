const BTN_NEXT = document.querySelector(".btnNext");
const BTN_PREV = document.querySelector(".btnPrev");
const IMAGE = document.querySelector(".imageSlider");
const BODY = document.querySelector("body");

const AMOUNT = 11; // Amount of images in assets/img/gallery
const ANIM_DUR = 200;

let counter = 0;

BTN_NEXT.addEventListener("click", nextImg);
BTN_PREV.addEventListener("click", prevImg);

function animate() {
    // Animate using css transition and js timeouts (Can't set ::before properties directly)
    BODY.style.setProperty("--opacity", 0);

    setTimeout(() => {
        BODY.style.setProperty("--background", `url(../img/gallery/image${counter}.jpg`);
        BODY.style.setProperty("--opacity", 1);
    }, ANIM_DUR);
}

function nextImg() {
    if (counter >= AMOUNT) {
        counter = -1;
    }
    counter++;
    animate();
}

function prevImg() {
    if (counter <= 0) {
        counter = AMOUNT + 1;
    }
    counter--;
    animate();
}