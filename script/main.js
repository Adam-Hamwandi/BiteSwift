window.addEventListener("scroll", function () {
  let header = document.querySelector(".sticky-nav");
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// hamburger navbar
const navElement = document.querySelector(".main-nav");
const hamburgerButton = document.querySelector(".hamburger-menu");

hamburgerButton.addEventListener("click", () => {
  navElement.classList.toggle("nav--open");
  hamburgerButton.classList.toggle("hamburger-menu--open");
});
