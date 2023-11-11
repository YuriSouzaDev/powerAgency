/* const slideControl = document.querySelector(".slide-control");
const slideThumb = document.querySelectorAll(".slide-thumb");
let translateX = 0;

function handleSlide(e) {
  translateX -= 20;
  slideControl.style.transform = `translateX(${translateX}%)`;
  console.log(translateX);
}

slideThumb.forEach((thumb) => thumb.addEventListener("click", handleSlide));

console.log(slideThumb);
 */

import SlideNav from "./slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper");

slide.init();
slide.addControl(".custom-controls");
