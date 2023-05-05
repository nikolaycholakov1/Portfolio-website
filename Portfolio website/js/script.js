// Contact form

// const submitButton = document.querySelector("#contact-form > button");
// submitButton.addEventListener("click", (event) => {
//   if (event) {
//     event.preventDefault();
//   }

//   const allUserInputs = {
//     name: document.getElementById("name"),
//     email: document.getElementById("email"),
//     number: document.getElementById("number"),
//     subject: document.getElementById("subject"),
//     message: document.getElementById("message"),
//   };

//   const { name, email, number, subject, message } = allUserInputs;

//   const body = `${name.value} ${email.value} ${number.value} ${subject} ${message.value}`;

//   Email.send({
//     SecureToken: "36b2f18b-6197-4171-9092-80067a498f1e",
//     To: "8wayzz2beamazed@gmail.com",
//     From: "8wayzz2beamazed@gmail.com",
//     Subject: "contact message",
//     Body: body,
//   }).then((message) => alert(message));
// });

// toggle icon navbar
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
