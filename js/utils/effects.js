const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function initScrambleTitles() {
  document.querySelectorAll(".section-title").forEach(title => {
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

        iteration += 0.5;
      }, 28);
    });
  });
}

export function initRevealAnimation() {
  const cards = document.querySelectorAll(
    ".focus-card, .project-card, .timeline-content, .card, .contact-card"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  cards.forEach(card => {
    observer.observe(card);
  });
}

export function initMouseBackground() {
  window.addEventListener("mousemove", event => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    document.body.style.backgroundPosition = `${x * 30}px ${y * 30}px`;
  });
}
