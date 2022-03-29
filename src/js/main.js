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
  // map commands to the classList methods
  const METHOD_MAP = {
    toggle: "toggle",
    show: "add",
    hide: "remove",
  };

  const dropdowns = [...document.querySelectorAll("[data-type='dropdown']")];

  // set onclick event for every dropdown
  dropdowns.forEach((dropdown) => {
    function handleDropdownClick(event) {
      event.preventDefault();
      const selectorTarget = dropdown.getAttribute("data-target");
      const classesForCmd = dropdown.dataset.toggle.split(",");
      collapse(selectorTarget, "toggle", classesForCmd);
    }
    dropdown.onclick = handleDropdownClick.bind(this);
  });

  // [toggle/add/remove] list class for target
  const collapse = (selector, cmd, classesName) => {
    const targets = [...document.querySelectorAll(selector)];
    targets.forEach((target) => {
      classesName.forEach((c) => {
        target.classList[METHOD_MAP[cmd]](c);
      });
    });
  };

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
