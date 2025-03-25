window.addEventListener("scroll", function () {
  let header = document.querySelector(".sticky-nav");
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
