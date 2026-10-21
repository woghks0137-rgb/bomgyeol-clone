const marqueeTrack = document.querySelector(".marquee-track");
const marqueeGroup = document.querySelector(".marquee-group");
const cloneGroup = marqueeGroup.cloneNode(true)
cloneGroup.setAttribute("aria-hidden", "true");
marqueeTrack.appendChild(cloneGroup)
document.body.classList.remove("is-opening");
const heroMarquee = document.querySelector(".hero-marquee");
const heroIntro = document.querySelector(".hero-intro");

heroIntro.addEventListener("wheel", () => {
    heroMarquee.classList.add("active");
});

const opening = document.querySelector(".opening");

setTimeout(() => {
    opening.classList.add("black");
}, 2300);

setTimeout(() => {
    opening.classList.add("dark");
}, 2800);

const openingWave = document.querySelector(".opening-wave");
const heroReveal = document.querySelector(".hero-reveal");

openingWave.addEventListener("animationend", () => {
    heroReveal.classList.add("show");

    setTimeout(() => {
        heroReveal.classList.add("expand");
    }, 250);
});