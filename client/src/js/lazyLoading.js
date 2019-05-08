import gal1 from "../img/gal-1.jpg";
import gal2 from "../img/gal-2.jpg";
import gal3 from "../img/gal-3.jpg";
import gal4 from "../img/gal-4.jpg";
import gal5 from "../img/gal-5.jpg";
import gal6 from "../img/gal-6.jpg";
import gal7 from "../img/gal-7.jpg";
import gal8 from "../img/gal-8.jpg";
import gal9 from "../img/gal-9.jpg";
import gal10 from "../img/gal-10.jpg";
import gal11 from "../img/gal-11.jpg";
import gal12 from "../img/gal-12.jpg";
import gal13 from "../img/gal-13.jpg";
import gal14 from "../img/gal-14.jpg";

import gal1Mobile from "../img/gal-1-mobile.jpg";
import gal2Mobile from "../img/gal-2-mobile.jpg";
import gal3Mobile from "../img/gal-3-mobile.jpg";
import gal4Mobile from "../img/gal-4-mobile.jpg";
import gal5Mobile from "../img/gal-5-mobile.jpg";
import gal6Mobile from "../img/gal-6-mobile.jpg";
import gal7Mobile from "../img/gal-7-mobile.jpg";
import gal8Mobile from "../img/gal-8-mobile.jpg";
import gal9Mobile from "../img/gal-9-mobile.jpg";
import gal10Mobile from "../img/gal-10-mobile.jpg";
import gal11Mobile from "../img/gal-11-mobile.jpg";
import gal12Mobile from "../img/gal-12-mobile.jpg";
import gal13Mobile from "../img/gal-13-mobile.jpg";
import gal14Mobile from "../img/gal-14-mobile.jpg";

let lazyLoadImges = () => {
  if (screen.width < 1000) {
    lazyLoadImges = {
      "gal-1": gal1Mobile,
      "gal-2": gal2Mobile,
      "gal-3": gal3Mobile,
      "gal-4": gal4Mobile,
      "gal-5": gal5Mobile,
      "gal-6": gal6Mobile,
      "gal-7": gal7Mobile,
      "gal-8": gal8Mobile,
      "gal-9": gal9Mobile,
      "gal-10": gal10Mobile,
      "gal-11": gal11Mobile,
      "gal-12": gal12Mobile,
      "gal-13": gal13Mobile,
      "gal-14": gal14Mobile
    };
  } else {
    lazyLoadImges = {
      "gal-1": gal1,
      "gal-2": gal2,
      "gal-3": gal3,
      "gal-4": gal4,
      "gal-5": gal5,
      "gal-6": gal6,
      "gal-7": gal7,
      "gal-8": gal8,
      "gal-9": gal9,
      "gal-10": gal10,
      "gal-11": gal11,
      "gal-12": gal12,
      "gal-13": gal13,
      "gal-14": gal14
    };
  }
};
lazyLoadImges();
window.onorientationchange = lazyLoadImges;
window.addEventListener("resize", lazyLoadImges);

document.addEventListener("DOMContentLoaded", () => {
  let lazyloadImages = document.querySelectorAll(".lazy");
  let lazyloadThrottleTimeout;

  const lazyload = () => {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(() => {
      const scrollTop = window.pageYOffset;

      //   lazyloadImages.forEach(img => {
      //     if (img.offsetParent.offsetTop < window.innerHeight + scrollTop) {
      //       img.src = lazyLoadImges[img.offsetParent.id];
      //       img.classList.remove("lazy");
      //     }
      //   });

      for (let i = 0; i < lazyloadImages.length; i++) {
  
        if (
          lazyloadImages[i].offsetParent.offsetTop <
          window.innerHeight + scrollTop
        ) {
          if (lazyloadImages[i].classList.contains("lazy")) {
            lazyloadImages[i].src =
              lazyLoadImges[lazyloadImages[i].offsetParent.id];
            lazyloadImages[i].classList.remove("lazy");
          }
        }
      }

      if (document.querySelectorAll(".lazy").length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  };

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
