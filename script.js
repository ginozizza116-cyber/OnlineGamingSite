// Set year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Random game button
const randomBtn = document.getElementById("randomGameBtn");
const gamesGrid = document.getElementById("gamesGrid");

if (randomBtn && gamesGrid) {
  randomBtn.addEventListener("click", () => {
    const cards = Array.from(gamesGrid.querySelectorAll(".game-card"));
    if (!cards.length) return;

    // Clear previous highlight
    cards.forEach(card => card.classList.remove("highlight"));

    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    randomCard.classList.add("highlight");
    randomCard.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// Optional: highlight class styling via JS (if you want extra effect)
const style = document.createElement("style");
style.textContent = `
  .game-card.highlight {
    border-color: #facc15 !important;
    box-shadow: 0 0 0 1px rgba(250, 204, 21, 0.6), 0 22px 50px rgba(15, 23, 42, 1);
    transform: translateY(-6px) scale(1.01);
  }
`;
document.head.appendChild(style);
