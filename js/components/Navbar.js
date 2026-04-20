export function Navbar(profile) {
  return `
    <header class="navbar">
      <div class="logo">${profile.name.split(" ")[0].toUpperCase()}<span>_${profile.name.split(" ").slice(1).join("_").toUpperCase()}</span></div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#focus">Focus</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  `;
}
