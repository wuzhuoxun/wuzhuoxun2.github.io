import { profile } from "./data/profile.js";

import { Navbar } from "./components/Navbar.js";
import { Hero } from "./components/Hero.js";
import { About } from "./components/About.js";
import { Education } from "./components/Education.js";
import { Focus } from "./components/Focus.js";
import { Projects } from "./components/Projects.js";
import { Contact } from "./components/Contact.js";
import { Footer } from "./components/Footer.js";

import {
  initScrambleTitles,
  initRevealAnimation,
  initMouseBackground
} from "./utils/effects.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${Navbar(profile)}
  <main>
    ${Hero(profile)}
    ${About(profile)}
    ${Education(profile)}
    ${Focus(profile)}
    ${Projects(profile)}
    ${Contact(profile)}
  </main>
  ${Footer()}
`;

initScrambleTitles();
initRevealAnimation();
initMouseBackground();
