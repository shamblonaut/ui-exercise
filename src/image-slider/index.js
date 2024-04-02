import "./style.css";

const images = document.querySelector(".images");

function updateCarousel(activeIndex) {
  for (let i = 0; i < activeIndex; i++) {
    const smallFactor = 1 - ((activeIndex - i) * 0.2);
    images.children[i].style.transform = `translateX(-${(activeIndex - i) * 80}px) scale(${smallFactor})`;
    images.children[i].style.opacity = (smallFactor > 0) ? smallFactor : 0;
    images.children[i].style.zIndex = -(activeIndex - i);
  }
  for (let i = activeIndex + 1; i < images.children.length; i++) {
    const smallFactor = 1 - ((i - activeIndex) * 0.2);
    images.children[i].style.transform = `translateX(${(i - activeIndex) * 80}px) scale(${smallFactor})`;
    images.children[i].style.opacity = (smallFactor > 0) ? smallFactor : 0;
    images.children[i].style.zIndex = -(i - activeIndex);
  }

  const previousActiveImage = document.querySelector(".images .active");
  previousActiveImage.classList.remove("active");

  const activeImage = images.children[activeIndex];
  activeImage.classList.add("active");
  activeImage.style.transform = "";
  activeImage.style.opacity = "";
  activeImage.style.zIndex = "";

  const navDots = document.querySelector(".nav-dots");
  const previousActiveDot = document.querySelector(".active-dot");
  if (previousActiveDot) previousActiveDot.classList.remove("active-dot");
  navDots.children[activeIndex].classList.add("active-dot");
}

function loadNavDots() {
  const navDots = document.querySelector(".nav-dots");
  for (let i = 0; i < images.children.length; i++) {
    const navDot = document.createElement("div");
    navDot.classList.add("nav-dot");
    navDot.addEventListener("click", () => {
      updateCarousel(i);
      setupMotor(i, images.children.length);
    });
    navDots.appendChild(navDot);
  }
}

function setupControls() {
  const leftButton = document.querySelector(".arrow-left");
  leftButton.addEventListener("click", () => {
    const currentImage = document.querySelector(".images .active");
    const currentIndex = Array.prototype.indexOf.call(images.children, currentImage);
  
    const leftIndex = (currentIndex === 0) ? images.children.length - 1 : currentIndex - 1;

    updateCarousel(leftIndex);
    setupMotor(leftIndex, images.children.length);
  });

  const rightButton = document.querySelector(".arrow-right");
  rightButton.addEventListener("click", () => {
    const currentImage = document.querySelector(".images .active");
    const currentIndex = Array.prototype.indexOf.call(images.children, currentImage);

    const rightIndex = (currentIndex === images.children.length - 1) ? 0 : currentIndex + 1;

    updateCarousel(rightIndex);
    setupMotor(rightIndex, images.children.length);
  });
}

function setupTransitions(transitionTimeMilliseconds) {
  document.querySelectorAll(".images img").forEach(image => {
    image.style.transition = `all ease-in-out ${transitionTimeMilliseconds}ms`;
  });
  document.querySelectorAll(".nav-dot").forEach(navDot => {
    navDot.style.transition = `all ease-in-out ${transitionTimeMilliseconds}`;
  });
}

let motor;
let motorIndex;

function setupMotor(index, motorLength) {
  motorIndex = index;
  clearInterval(motor);
  motor = setInterval(() => {
    const nextIndex = (motorIndex === motorLength - 1) ? 0 : motorIndex + 1
    updateCarousel(nextIndex);
    motorIndex = nextIndex;
  }, 3000);
}

loadNavDots();
updateCarousel(0);
setupControls();
setupMotor(0, images.children.length);

setTimeout(() => setupTransitions(1000), 1000);