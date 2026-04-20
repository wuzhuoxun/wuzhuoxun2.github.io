export function Projects(profile) {
  const projectCards = profile.projects
    .map(project => `
      <div class="project-card">
        <div class="project-index">${project.id}</div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Repository →</a>
      </div>
    `)
    .join("");

  return `
    <section id="projects" class="section">
      <h2 class="section-title">PROJECT_RADAR</h2>

      <div class="project-grid">
        ${projectCards}
      </div>
    </section>

    <section class="section compact-section">
      <h2 class="section-title pink">INTEREST_MODULE</h2>

      <div class="interest-row">
        ${profile.interests.map(item => `<span>${item}</span>`).join("")}
      </div>
    </section>
  `;
}
