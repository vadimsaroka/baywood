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

const lazyLoadImges = {
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
