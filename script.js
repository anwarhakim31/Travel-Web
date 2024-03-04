//search
const searcharea = document.querySelector(".search-area");
const searchclose = document.querySelector("#search-close");
const searchinput = document.querySelector(".search-input");

document.querySelector("#search").onclick = () => {
  searcharea.classList.add("search-show");
  searchinput.focus();
};

searchclose.addEventListener("click", () => {
  searcharea.classList.remove("search-show");
});

searchinput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searcharea.classList.remove("search-show");
  }
});

//humbeger
const navbarnav = document.querySelector(".navbar-nav");
const berger = document.querySelector(".humberger");
const navbar = document.querySelector(".navbar");

berger.addEventListener("click", () => {
  navbarnav.classList.toggle("active");
  berger.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
    berger.classList.remove("active");
  }
});

//home slider
const next = document.querySelector(".next-btn");
const prev = document.querySelector(".pre-btn");
const slide = document.querySelectorAll(".slide");
const slideicon = document.querySelectorAll(".slide-icon");
var slidenumber = 0;

next.addEventListener("click", () => {
  slide.forEach((slides) => {
    slides.classList.remove("active");
  });
  slideicon.forEach((slideicons) => {
    slideicons.classList.remove("active");
  });

  slidenumber++;

  if (slidenumber > slide.length - 1) {
    slidenumber = 0;
  }

  slide[slidenumber].classList.add("active");
  slideicon[slidenumber].classList.add("active");
});

prev.addEventListener("click", () => {
  slide.forEach((slides) => {
    slides.classList.remove("active");
  });
  slideicon.forEach((slideicons) => {
    slideicons.classList.remove("active");
  });

  slidenumber--;
  if (slidenumber < 0) {
    slidenumber = slide.length - 1;
  }

  slide[slidenumber].classList.add("active");
  slideicon[slidenumber].classList.add("active");
});

var playslider;

var repeat = () => {
  playslider = setInterval(function () {
    slide.forEach((slides) => {
      slides.classList.remove("active");
    });
    slideicon.forEach((slideicons) => {
      slideicons.classList.remove("active");
    });

    slidenumber++;

    if (slidenumber > slide.length - 1) {
      slidenumber = 0;
    }

    slide[slidenumber].classList.add("active");
    slideicon[slidenumber].classList.add("active");
  }, 4000);
};
repeat();

var swiper = new Swiper(".slider-shop", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var lastscrolltop = 0;

window.addEventListener("scroll", () => {
  let scrolltop = window.pageYOffset || document.documentElement.scrolltop;

  if (scrolltop > lastscrolltop) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

var swiper = new Swiper(".view-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".slider-blog", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
