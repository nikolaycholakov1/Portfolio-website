// Contact form

// const allUserInputs = {
//   name: document.getElementById("name"),
//   email: document.getElementById("email"),
//   number: document.getElementById("number"),
//   subject: document.getElementById("subject"),
//   message: document.getElementById("message"),
// };

// const submitButton = document.querySelector("#contact-form > button");
// submitButton.addEventListener("click", (event) => {
//   if (event) {
//     event.preventDefault();
//   }

//   let allFieldsAreValid = Object.values(allUserInputs).every((input) => {
//     input.value != "";
//   });

//   if (allFieldsAreValid) {
//     console.log("invalid");
//     return;
//   }

//   const { name, email, number, subject, message } = allUserInputs;
// });

// Light and Dark Mode

function setLightMode() {
  const darkModeBtn = document.getElementById("dark-mode");

  const root = document.querySelector(":root");
  const body = document.querySelector("body");
  const p = document.querySelector("p");

  lightModeBtn.style.setProperty("display", "none");
  root.style.setProperty("--bg-color", "var(--bg-color-light)");
  root.style.setProperty("--second-bg-color", "var(--second-bg-color-light)");
  body.style.backgroundColor = "var(--bg-color)";
  body.style.color = "black";
  p.style.backgroundColor = "var(--second-bg-color)";
}

function setDarkMode() {
  const lightModeBtn = document.getElementById("light-mode");
  const root = document.querySelector(":root");
  const body = document.querySelector("body");
  const p = document.querySelector("p");

  lightModeBtn.style.setProperty("display", "none");
  root.style.setProperty("--bg-color", "#1f242d");
  root.style.setProperty("--second-bg-color", "#323946");
  body.style.backgroundColor = "var(--bg-color)";
  body.style.color = "white";
  p.style.backgroundColor = "var(--second-bg-color)";
}

const modeToggle = document.getElementById("mode-toggle");

function toggleMode() {
  const root = document.documentElement;
  const isDarkMode = root.classList.toggle("dark");

  if (isDarkMode) {
    modeToggle.classList.remove("light");
    modeToggle.classList.add("dark");
  } else {
    modeToggle.classList.remove("dark");
    modeToggle.classList.add("light");
  }
}

modeToggle.addEventListener("click", toggleMode);

// const darkModeBtn = document.getElementById("dark-mode");
// const lightModeBtn = document.getElementById("light-mode");
// const fs = require("fs");
// const cssFilePath = "style.css";
// let cssFileContents = fs.readFileSync(cssFilePath, "utf-8");

// cssFileContents = cssFileContents.replace(
//   "--bg-color: #1f242d;",
//   "--bg-color-light: #cecdcd;"
// );
// cssFileContents = cssFileContents.replace(
//   "--second-bg-color: #323946;",
//   "--second-bg-color-light: rgb(150, 146, 146);"
// );

// fs.writeFileSync(cssFilePath, cssFileContents);

// let isDarkMode = false;
// setMode(isDarkMode);

// darkModeBtn.addEventListener("click", () => {
//   isDarkMode = true;
//   setMode(isDarkMode);
// });

// lightModeBtn.addEventListener("click", () => {
//   isDarkMode = false;
//   setMode(isDarkMode);
// });

// function setMode(isDarkMode) {
//   const body = document.body;
//   if (isDarkMode) {
//     body.classList.add("dark-mode");
//     body.classList.remove("light-mode");
//     darkModeBtn.style.display = "none";
//     lightModeBtn.style.display = "inline-block";
//   } else {
//     body.classList.add("light-mode");
//     body.classList.remove("dark-mode");
//     darkModeBtn.style.display = "inline-block";
//     lightModeBtn.style.display = "none";
//   }
// }

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
  //   loop: true,
});
