export function Contact(profile) {
  return `
    <section id="contact" class="section contact-section">
      <h2 class="section-title purple">CONTACT_PORTS</h2>

      <div class="contact-card">
        <p class="terminal-line">OPENING COMMUNICATION CHANNELS //</p>

        <h3>Let's connect on the neon grid.</h3>

        <div class="contact-links">
          <a href="mailto:${profile.email}">Email</a>
          <a href="https://github.com/${profile.githubUsername}" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/${profile.linkedin}" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  `;
}
