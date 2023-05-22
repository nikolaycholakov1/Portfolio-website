const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel-btn-right");
const previousBtn = document.querySelector(".carousel-btn-left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveSlides = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideArrowButtons = (slides, previousBtn, nextBtn, targetIndex) => {
  if (targetIndex === 0) {
    previousBtn.classList.add("is-hidden");
    nextBtn.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    previousBtn.classList.remove("is-hidden");
    nextBtn.classList.add("is-hidden");
  } else {
    previousBtn.classList.remove("is-hidden");
    nextBtn.classList.remove("is-hidden");
  }
};

// When I click right, move slides to the righ
nextBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveSlides(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideArrowButtons(slides, previousBtn, nextBtn, nextIndex);
});

// When I click left, move slides to the left
previousBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const previousSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const previousDot = currentDot.previousElementSibling;
  const previousIndex = slides.findIndex((slide) => slide === previousSlide);

  moveSlides(track, currentSlide, previousSlide);
  updateDots(currentDot, previousDot);
  hideArrowButtons(slides, previousBtn, nextBtn, previousIndex);
});

// Move Dots indicators
dotsNav.addEventListener("click", (e) => {
  // what indicator was clicked on
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveSlides(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideArrowButtons(slides, previousBtn, nextBtn, targetIndex);
});
