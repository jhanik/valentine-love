function showMessage() {
    const message = document.getElementById("loveMessage");
    const startBtn = document.getElementById("startButton");
    message.style.display = "block";
    startBtn.style.display = "none";

    const music = document.getElementById("bgMusic");
    music.play();

    /* Start slideshow after button click */
    startSlideshow();
}

/* Floating hearts */
const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 4 + 4 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

/* Slightly fewer hearts for mobile performance */
setInterval(createHeart, 500);

/* Background slideshow */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slideshowInterval; // To store interval ID

function changeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

function startSlideshow() {
    // Only start if not already running
    if (!slideshowInterval) {
        slideshowInterval = setInterval(changeSlide, 4000); // Change every 4 seconds
    }
}
