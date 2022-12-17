const leftArrowNode = document.querySelector(".js-left-arrow"),
  rightArrowNode = document.querySelector(".js-right-arrow"),
  slides = document.querySelectorAll(".img-block"),
  dots = document.getElementsByClassName("dots-item"),
  dotsArr = document.getElementsByClassName("block-dots")[0],
  navItems = document.getElementsByClassName("nav-li"),
  navArr = document.getElementsByClassName("menu-block")[0];

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove("underline");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  navItems[slideIndex - 1].classList.add("underline");
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlides(n) {
  showSlides((slideIndex = n));
}

function currentMenu(n) {
  showSlides((slideIndex = n));
}

leftArrowNode.addEventListener("click", () => {
  plusSlides(-1);
});
rightArrowNode.addEventListener("click", () => {
  plusSlides(1);
});

dotsArr.addEventListener("click", (e) => {
  for (let i = 0; i < dots.length + 1; i++) {
    if (e.target.classList.contains("dots-item") && e.target == dots[i - 1]) {
      currentSlides(i);
    }
  }
});

navArr.addEventListener("click", (e) => {
  for (let i = 0; i < navItems.length + 1; i++) {
    if (e.target.classList.contains("nav-li") && e.target == navItems[i - 1]) {
      currentMenu(i);
    }
  }
});
