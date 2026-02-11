function showMessage() {
    const message = document.getElementById("loveMessage");
    message.style.display = "block";

    const music = document.getElementById("bgMusic");
    music.play();
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
