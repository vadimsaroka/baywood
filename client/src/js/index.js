import {
  contactForm,
  teamStory,
  teamPhotos,
  servicesDescription,
  servicesPhotos
} from "./markups";

import "./smoothScroll";
import "../sass/main.scss";
import { clear, closeBtn, renderImages, renderImage } from "./functions";
import "./sideBar";
import "./lazyLoading";

const teamList = Array.from(document.querySelectorAll(".team__list"));
const services = Array.from(document.querySelectorAll(".feature__link"));
const popup = document.querySelector(".popup");
const imageArr = Array.from(document.querySelectorAll(".gallery__item"));

// Popup Team
teamList.forEach(function(e) {
  e.addEventListener("click", () => {
    renderImages(teamPhotos[e.id], teamStory[e.id]);
  });
});

// Popup services
services.forEach(e => {
  e.addEventListener("click", () => {
    renderImages(servicesPhotos[e.id], servicesDescription[e.id])
  });
});

// close window
popup.addEventListener("click", e => {
  if (e.target == popup) {
    clear();
  }
});

// Contact Form
const contactBtn = Array.from(document.querySelectorAll("#contact"));

contactBtn.forEach(e => {
  e.addEventListener("click", () => {
    popup.style.display = "flex";
    popup.insertAdjacentHTML("beforeend", contactForm);

    // Close button
    const close = document.querySelector(".popup__close");
    closeBtn(close);
  });
});


//image slider
// const imageSlider = () => {
//   imageArr.forEach(e => {
//     e.addEventListener("click", () => {
//       renderImage(e.id);
//     });
//   });
// };

// imageSlider();

(function imageSlider() {
  imageArr.forEach(e => {
    e.addEventListener("click", () => {
      renderImage(e.id);
    });
  });
})();