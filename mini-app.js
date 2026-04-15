const compliments = [
    "You're doing amazing, sweetie 💖",
    "Your creativity is glowing today ✨",
    "You’re smarter than you think 🌸",
    "Your energy is beautiful 💕",
    "You make the world softer just by being in it 🌷",
    "You're learning so fast — keep going! 🌟"
];

document.getElementById("compliment-btn").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    document.getElementById("compliment-text").textContent = compliments[randomIndex];
});