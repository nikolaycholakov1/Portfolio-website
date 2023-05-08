// Light and Dark Mode
function setLightMode() {
  document.documentElement.style.setProperty("--bg-color", "gray");
  document.documentElement.style.setProperty("--second-bg-color", "lightgray");
  document.documentElement.style.setProperty("--text-color", "black");

  document.querySelector(".light").style.display = "none";
  document.querySelector(".dark").style.display = "block";
}

function setDarkMode() {
  document.documentElement.style.setProperty("--bg-color", "#1f242d");
  document.documentElement.style.setProperty("--second-bg-color", "#323946");
  document.documentElement.style.setProperty("--text-color", "#fff");

  // Hide dark mode button
  document.querySelector(".dark").style.display = "none";
  // Show light mode button
  document.querySelector(".light").style.display = "block";
}

// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll sections active links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //   remove toggle incon and navbar when click navbar link(scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll reveal

ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed text
const typed = new Typed(".multiple-text", {
  strings: ["Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: false,
});

// ABOUT SECTION LAPTOP BUTTONS
const frontEndButton = document.querySelector(".frontend-button");
const frontEndSkillsContainer = document.querySelector(".front-end-skills-box");

const backEndButton = document.querySelector(".backend-button");
const backEndSkillsContainer = document.querySelector(".back-end-skills-box");

const toolsButton = document.querySelector(".tools-button");
const toolsContainer = document.querySelector(".tools-skills-box");

frontEndButton.addEventListener("click", frontEndBtnHandler);
backEndButton.addEventListener("click", backEndBtnhandler);
toolsButton.addEventListener("click", toolsBtnHandler);

function frontEndBtnHandler() {
  frontDisProp = getDisplayProperty(frontEndSkillsContainer);
  backDisProp = getDisplayProperty(backEndSkillsContainer);
  toolsDisProp = getDisplayProperty(toolsContainer);

  // if (backDisProp === "grid") {
  //   backEndSkillsContainer.style.display = "none";
  // }

  // if (toolsDisProp === "grid") {
  //   toolsContainer.style.display = "none";
  // }

  // if (frontDisProp === "none") {
  //   frontEndSkillsContainer.style.display = "grid";
  // } else {
  //   frontEndSkillsContainer.style.display = "none";
  // }

  let newProperty = changeDisplayProperty(
    toolsDisProp,
    toolsContainer,
    backDisProp,
    backEndSkillsContainer,
    frontDisProp
  );

  frontEndSkillsContainer.style.display = newProperty;
}

function backEndBtnhandler() {
  frontDisProp = getDisplayProperty(frontEndSkillsContainer);
  backDisProp = getDisplayProperty(backEndSkillsContainer);
  toolsDisProp = getDisplayProperty(toolsContainer);

  // if (frontDisProp === "grid") {
  //   frontEndSkillsContainer.style.display = "none";
  // }

  // if (toolsDisProp === "grid") {
  //   toolsContainer.style.display = "none";
  // }

  // if (backDisProp === "none") {
  //   backEndSkillsContainer.style.display = "grid";
  // } else {
  //   backEndSkillsContainer.style.display = "none";
  // }
  let newProperty = changeDisplayProperty(
    frontDisProp,
    frontEndSkillsContainer,
    toolsDisProp,
    toolsContainer,
    backDisProp
  );

  backEndSkillsContainer.style.display = newProperty;
}

function toolsBtnHandler() {
  frontDisProp = getDisplayProperty(frontEndSkillsContainer);
  backDisProp = getDisplayProperty(backEndSkillsContainer);
  toolsDisProp = getDisplayProperty(toolsContainer);

  // if (frontDisProp === "grid") {
  //   frontEndSkillsContainer.style.display = "none";
  // } else if (backDisProp === "grid") {
  //   backEndSkillsContainer.style.display = "none";
  // }
  // if (toolsDisProp === "none") {
  //   toolsContainer.style.display = "grid";
  // } else {
  //   toolsContainer.style.display = "none";
  // }

  let newProperty = changeDisplayProperty(
    frontDisProp,
    frontEndSkillsContainer,
    backDisProp,
    backEndSkillsContainer,
    toolsDisProp
  );

  toolsContainer.style.display = newProperty;
}

function changeDisplayProperty(
  prop1,
  prop1Container,
  prop2,
  prop2Container,
  prop3
) {
  if (prop1 === "grid") {
    prop1Container.style.display = "none";
  } else if (prop2 === "grid") {
    prop2Container.style.display = "none";
  }
  if (prop3 === "none") {
    prop3 = "grid";
  } else {
    prop3 = "none";
  }

  return prop3;
}

function getDisplayProperty(container) {
  const displayProperty = window
    .getComputedStyle(container)
    .getPropertyValue("display");

  return displayProperty;
}
