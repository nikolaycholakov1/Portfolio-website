const sliderContainer = document.querySelector(".slider-container");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".slider-container div.arrow");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildren = [...carousel.children];

let isDragging = false,
  startX,
  startScrollLeft,
  timeoutId;

//   Get number of cards that can fit in carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to START of carousel for infinite scrolling
carouselChildren
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the last few cards to END of carousel for infinite scrolling

carouselChildren.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

//   Add event listeners for the arrow buttons to scroll the carusel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  //   Records the initial cursor and position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // If dragging is false, return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const autoPlay = () => {
  if (window.innerWidth < 800) return; //Return on smaller than 800px screen
  //Auto play carousel every 2.5s
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};

autoPlay();

const infiniteScroll = () => {
  // If carousel is at START go to END
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.scrollWidth;
    carousel.classList.remove("no-transition");
  }
  // If carousel is at END, go to START
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  //Clear existing timeout and start of mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!sliderContainer.matches(":hover")) autoPlay();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseover", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
sliderContainer.addEventListener("mouseenter", () => clearTimeout(timeoutId));
sliderContainer.addEventListener("mouseleave", autoPlay);
