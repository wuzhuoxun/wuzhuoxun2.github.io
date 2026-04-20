export function Hero(profile) {
  const tags = profile.tags
    .map(tag => `<span>${tag}</span>`)
    .join("");

  return `
    <section id="home" class="hero section">
      <div class="hero-content">
        <p class="terminal-line">SYSTEM BOOT COMPLETE //</p>

        <h1 class="glitch" data-text="${profile.name}">
          ${profile.name}
        </h1>

        <h2>${profile.chineseName}</h2>

        <p class="typing">
          ${profile.title} · ${profile.university}
        </p>

        <div class="hero-tags">
          ${tags}
        </div>

        <div class="hero-buttons">
          <a href="#projects" class="btn primary">Enter Neon Grid</a>
          <a href="#contact" class="btn secondary">Contact Port</a>
        </div>
      </div>

      <div class="hero-panel">
        <div class="panel-header">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <pre>
> USER ID       : ${profile.status.id}
> ALIAS         : ${profile.status.alias}
> STATUS        : ${profile.status.status}
> INSTITUTION   : ${profile.status.institution}
> MODE          : ${profile.status.mode}
> SIGNAL        : ${profile.status.signal}
> GRID ACCESS   : ${profile.status.access}
        </pre>
      </div>
    </section>
  `;
}
