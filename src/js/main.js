import "virtual:windi-base.css";
import "virtual:windi-components.css";
import "../css/style.css";
import "virtual:windi-utilities.css";

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

$(document).ready(function () {
  let menu = document.getElementById("btn-menu");

  function toggleMenu(e) {
    let navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("-top-20");
    //navLinks.classList.toggle("-top-96");
    navLinks.classList.toggle("-translate-y-full");
    navLinks.classList.toggle("opacity-0");
  }

  menu.onclick = toggleMenu;

  const swipers = [...document.querySelectorAll(".swiper")];

  // Create all swiper
  swipers.forEach((swiper) => {
    const opt = swiper.dataset.option
      ? JSON.parse(swiper.dataset.option)
      : null;
    setupSwiper(swiper, opt);
  });

  // Set up for single swiper
  function setupSwiper(container, dataOption) {
    const defaultOpt = {
      modules: [Navigation, Pagination],
      slidesPerView: "auto",
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };

    const swiperOpt = Object.assign(defaultOpt, dataOption);
    new Swiper(container, swiperOpt);
  }
});
