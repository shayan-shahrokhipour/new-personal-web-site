let index = 0;

const dotSlider = document.querySelectorAll(".dot");
const firstDot = document.querySelector(".firstDot");
const secondDot = document.querySelector(".secondDot");
const thirdDot = document.querySelector(".thirdDot");
const fourthDot = document.querySelector(".fourthDot");
const img = document.querySelectorAll(".sliderImg");
console.log(img);

dotSlider.forEach((item) => {
  item.addEventListener("click", () => {
    dotSlider.forEach((dot) => {
      dot.classList.remove("dotActive");
    });
    item.classList.add("dotActive");
  });
});

dotSlider.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    console.log(dot);
    console.log(idx);

    img.forEach((item) => {
      item.classList.remove("showImg");
    });
    img[idx].classList.add("showImg");
  });
});

const available = document.querySelectorAll(".forAnimation");
const hamburgerButton = document.querySelector(".hamburger");
const responsive = document.querySelector(".responsive");
const overlay = document.querySelector(".overlay");
const icon = document.querySelectorAll(".icon");
const heightOfViewport = window.innerHeight * 0.8;

hamburgerButton.addEventListener("click", () => {
  responsive.classList.toggle("active");
  overlay.classList.toggle("overlayactive");
  hamburgerButton.classList.toggle("change");
});

window.addEventListener("scroll", () => {
  available.forEach((item) => {
    const boundingClient = item.getBoundingClientRect().top;

    if (boundingClient < heightOfViewport) {
      item.classList.add("addAnimation");
    }
  });
});



