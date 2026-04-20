export function Education(profile) {
  const educationItems = profile.education
    .map(item => {
      const stats = item.stats.length
        ? `
          <div class="stats-row">
            ${item.stats
              .map(stat => `
                <div>
                  <strong>${stat.value}</strong>
                  <small>${stat.label}</small>
                </div>
              `)
              .join("")}
          </div>
        `
        : "";

      return `
        <div class="timeline-item">
          <div class="timeline-dot"></div>

          <div class="timeline-content">
            <h3>${item.school}</h3>
            <p>${item.degree}</p>
            ${item.pathway ? `<p>${item.pathway}</p>` : ""}
            <span>${item.period}</span>
            ${stats}
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <section id="education" class="section">
      <h2 class="section-title pink">EDUCATION_NODE</h2>

      <div class="timeline">
        ${educationItems}
      </div>
    </section>
  `;
}
