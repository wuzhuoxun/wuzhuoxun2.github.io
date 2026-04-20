export function About(profile) {
  const paragraphs = profile.about
    .map(text => `<p>${text}</p>`)
    .join("");

  return `
    <section id="about" class="section">
      <h2 class="section-title">ABOUT_ME</h2>

      <div class="card neon-card">
        ${paragraphs}
      </div>
    </section>
  `;
}
