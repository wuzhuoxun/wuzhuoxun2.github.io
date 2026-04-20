const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

document.querySelectorAll(".section-title").forEach((title) => {
  const originalText = title.textContent;

  title.addEventListener("mouseenter", () => {
    let iteration = 0;

    const interval = setInterval(() => {
      title.textContent = originalText
        .split("")
        .map((char, index) => {
          if (char === " " || char === "✦") return char;

          if (index < iteration) {
            return originalText[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
        title.textContent = originalText;
      }

      iteration += 1 / 2;
    }, 28);
  });
});

const cards = document.querySelectorAll(
  ".focus-card, .project-card, .timeline-content, .card, .contact-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.7s ease, transform 0.7s ease";
  observer.observe(card);
});

const style = document.createElement("style");
style.innerHTML = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

window.addEventListener("mousemove", (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  document.body.style.backgroundPosition = `${x * 30}px ${y * 30}px`;
});
