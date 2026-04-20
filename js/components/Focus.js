export function Focus(profile) {
  const focusCards = profile.focus
    .map(item => `
      <div class="focus-card">
        <h3>${item.number}</h3>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    `)
    .join("");

  return `
    <section id="focus" class="section">
      <h2 class="section-title purple">FOCUS_MATRIX</h2>

      <div class="focus-grid">
        ${focusCards}
      </div>
    </section>
  `;
}
