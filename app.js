const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");

const open = function () {
  circle1.classList.add("circle3");
};
const close = function () {
  circle1.classList.remove("circle3");
};

circle1.addEventListener("mouseenter", open);
circle1.addEventListener("mouseleave", close);
