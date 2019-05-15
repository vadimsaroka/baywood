import { galArr } from "./markups";
import { smoothScroll } from "./smoothScroll";
const popup = document.querySelector(".popup");

// clear popup
export const clear = () => {
  popup.innerHTML = "";
  popup.style.display = "none";
};

// render close btn
export const closeBtn = e => {
  e.addEventListener("click", () => {
    clear();
  });
};

// team && servises
export const renderImages = (img, text) => {
  const markup = `
    <div class="popup__content">
      <div class="popup__sticky">
        <span class="popup__close">×</span>
      </div>
      <figure class="popup__item">
        <img src="${img}" class="popup__img">
      </figure>
        <p class="popup__text">${text}</p>
    </div>
    `;

  popup.style.display = "flex";
  popup.insertAdjacentHTML("beforeend", markup);

  const close = document.querySelector(".popup__close");
  closeBtn(close);
};

// imageSlider
export const renderImage = img => {
  clear();
  const markup = `
    <div class="popup__imageSlider">
        <span class="popup__close">×</span>
        <div class="popup__leftArrow">&#10094;</div>
      <figure class="popup__slider">
        <img class="popup__img" src="${galArr[img]}">
      </figure>
      <div class="popup__rightArrow">&#10095;</div>
    </div>
    `;

  popup.style.display = "flex";
  popup.insertAdjacentHTML("beforeend", markup);

  const close = document.querySelector(".popup__close");
  close.style.color = "#fff";
  close.style.position = "fixed";
  closeBtn(close);

  const leftArrow = document.querySelector(".popup__leftArrow");
  const rightArrow = document.querySelector(".popup__rightArrow");

  let currentImg;
  let checkForSecondDigit = img[5];
  if (checkForSecondDigit !== undefined) {
    currentImg = img[4] + checkForSecondDigit;
  } else {
    currentImg = img[4];
  }

  leftArrow.addEventListener("click", () => {
    currentImg--;
    if (currentImg < 1) {
      currentImg = 14;
    }
    renderImage(`gal-${currentImg}`);
  });

  rightArrow.addEventListener("click", () => {
    currentImg++;
    if (currentImg > 14) {
      currentImg = 1;
    }
    renderImage(`gal-${currentImg}`);
  });
};

//Btn scroll top
const stickyBtn = document.querySelector(".sticky__btn");
const scrollTo = document.querySelector("#home");
const footer = document.querySelector(".footer");

const scrollTopBtn = () => {
  const scrollBtn = window.pageYOffset;

  if (scrollBtn > 500 && scrollBtn + window.innerHeight < footer.offsetTop) {
    stickyBtn.style.display = "block";
  } else {
    stickyBtn.style.display = "none";
  }
};

stickyBtn.addEventListener("click", () => {
  smoothScroll(scrollTo, 1500);
});

document.addEventListener("scroll", scrollTopBtn);
window.addEventListener("resize", scrollTopBtn);
window.addEventListener("orientationChange", scrollTopBtn);


//reCaptcha
function submitBtn() {
  const contactBtn = document.querySelector("#submitBtn");
  contactBtn.removeAttribute('disabled');
  contactBtn.style.cursor = 'pointer';
}
export const onRecaptchaLoad = function() {
  setInterval(() => {
    const element = document.querySelector("#html_element");
    if (element !== null && !element.children.length) {
      grecaptcha.render('html_element', {
      'sitekey' : '6LduXKMUAAAAAD9v_R3l18UEjy7xVy1uLmKwBWDp',
      'callback': submitBtn
    });
    }
  }, 1000);
};
