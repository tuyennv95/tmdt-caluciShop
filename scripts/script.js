// ------------Scrol menu------------
window.onscroll = function(){
    if(document.body.scroll > 20 || document.documentElement.scrollTop > 20){
        document.getElementsByClassName("header")[0].classList.add("addMenuTop")
        const changeColorItem = document.querySelectorAll(".header__menu--item--link");
        for(let i=0;i<changeColorItem.length;i++){
            changeColorItem[i].style.color = "#4f4747"
        }
    }
    else if(document.body.scroll <= 50 || document.documentElement.scrollTop <= 50){
        document.getElementsByClassName("header")[0].classList.remove("addMenuTop");
        const changeColorItem = document.querySelectorAll(".header__menu--item--link");
        for(let i=0;i<changeColorItem.length;i++){
            changeColorItem[i].style.color = "#f2e8e8"
        }
        
    }
}
const iconAcc = document.getElementsByClassName("header__other_acc")[0];
console.log("🚀 ~ iconAcc", iconAcc);

iconAcc.addEventListener("mouseover", function () {
  const getItem = document.getElementsByClassName("hover_acc--img")[0];
  getItem.classList.add("moveIn");
  getItem.style.display = "flex";
});
iconAcc.addEventListener("mouseout", function () {
  const getItem = document.getElementsByClassName("hover_acc--img")[0];
  getItem.style.display = "none";
  //   getItem.classList.remove("moveIn");
  //   getItem.classList.add("moveOut");

//   setTimeout(function () {
//     getItem.style.display = "none";
//   }, 1000);
});


const imgElement = document.querySelector(".slider__slide--item");
const sliderElement = document.querySelectorAll(".slider__slide--item img");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let currentSlider = 1;
const size = imgElement.clientWidth;
imgElement.style.transform = "translateX(" + -size * currentSlider + "px)";

next.addEventListener("click", () => {
  if (currentSlider >= sliderElement.length - 1) return;
  imgElement.style.transition = "transform 1s ease-in-out";
  currentSlider++;
  imgElement.style.transform = "translateX(" + -size * currentSlider + "px)";
});
prev.addEventListener("click", () => {
  if (currentSlider <= 0) return;
  imgElement.style.transition = "transform 1s ease-in-out";
  currentSlider--;

  imgElement.style.transform = "translateX(" + -size * currentSlider + "px)";
});
imgElement.addEventListener("transitionend", () => {
  if (sliderElement[currentSlider].id === "classFirst") {
    imgElement.style.transition = "none";
    currentSlider = sliderElement.length - currentSlider;
    imgElement.style.transform = "translateX(" + -size * currentSlider + "px)";
  }
  if (sliderElement[currentSlider].id === "classLast") {
    imgElement.style.transition = "none";
    currentSlider = sliderElement.length - 2;
    imgElement.style.transform = "translateX(" + -size * currentSlider + "px)";
  }
});

// -------------------Slidẻ introducer-----------
const sliderIntroduceElement = document.querySelector(".introduce__slider_img");
const imageIntroduceElement = document.querySelectorAll(
  ".introduce__slider_img img"
);

const prevIntroduce = document.querySelector(".introduce__slider_btn--prev");
const nextIntroduce = document.querySelector(".introduce__slider_btn--next");

const selectSliderIntroduce = document.getElementsByClassName(
  "introduce__slider_dot--item"
);
let currentSliderIntroduce = 1;
let currentDot = 1;
selectSliderIntroduce[0].classList.add("select-slide");

const sizeElementIntroduce = sliderIntroduceElement.clientWidth;
sliderIntroduceElement.style.transform =
  "translateX(" + -sizeElementIntroduce * currentSliderIntroduce + "px)";

nextIntroduce.addEventListener("click", () => {
  if (currentSliderIntroduce >= imageIntroduceElement.length - 1) return;
  sliderIntroduceElement.style.transition = "transform 1s ease-in-out";
  currentSliderIntroduce++;
  sliderIntroduceElement.style.transform =
    "translateX(" + -sizeElementIntroduce * currentSliderIntroduce + "px)";
  currentDot++;
  checkDot(currentDot);
});
prevIntroduce.addEventListener("click", () => {
  if (currentSliderIntroduce <= 0) return;
  sliderIntroduceElement.style.transition = "transform 1s ease-in-out";
  currentSliderIntroduce--;
  sliderIntroduceElement.style.transform =
    "translateX(" + -sizeElementIntroduce * currentSliderIntroduce + "px)";
});
sliderIntroduceElement.addEventListener("transitionend", () => {
  if (imageIntroduceElement[currentSliderIntroduce].id === "imgIntroduceLast") {
    currentSliderIntroduce = imageIntroduceElement.length - 2;
    sliderIntroduceElement.style.transition = "none";

    sliderIntroduceElement.style.transform =
      "translateX(" + -sizeElementIntroduce * currentSliderIntroduce + "px)";
  }
  if (
    imageIntroduceElement[currentSliderIntroduce].id === "imgIntroduceFirst"
  ) {
    currentSliderIntroduce =
      imageIntroduceElement.length - currentSliderIntroduce;
    sliderIntroduceElement.style.transition = "none";
    sliderIntroduceElement.style.transform =
      "translateX(" + -sizeElementIntroduce * currentSliderIntroduce + "px)";
  }
});

// selectSliderIntroduce[currentSliderIntroduce].classList.remove('select-slide');
// selectSliderIntroduce[currentSliderIntroduce - 1].classList.add('select-slide');

// --------------------------------------slider product-hot--------------------
const sliderProductHotElement = document.querySelector(
  ".product_hot__slider--list"
);
const divProductHotElement = document.querySelectorAll(
  ".product_hot__slider--list div"
);
console.log(
  "🚀 ~ file: script.js ~ line 124 ~ divProductHotElement",
  divProductHotElement
);

const nextSlideProductHot = document.querySelector(
  ".product_hot__slider--next"
);
const prevSlideProductHot = document.querySelector(
  ".product_hot__slider--prev"
);

let currentSliderProductHot = 1;
const sizeSlideProductHot = divProductHotElement[0].clientWidth;
sliderProductHotElement.style.transform =
  "translateX(" + (-sizeSlideProductHot * currentSliderProductHot - 20) + "px)";
nextSlideProductHot.addEventListener("click", () => {
  if (currentSliderProductHot >= divProductHotElement.length - 4) return;
  sliderProductHotElement.style.transition = "transform 1s ease-in-out";
  currentSliderProductHot++;
  sliderProductHotElement.style.transform =
    "translateX(" +
    (-sizeSlideProductHot * currentSliderProductHot -
      20 * currentSliderProductHot) +
    "px )";
  console.log(currentSliderProductHot);
});
prevSlideProductHot.addEventListener("click", () => {
  if (currentSliderProductHot <= 0) return;

  sliderProductHotElement.style.transition = "transform 1s ease-in-out";
  currentSliderProductHot--;
  sliderProductHotElement.style.transform =
    "translateX(" +
    (-sizeSlideProductHot * currentSliderProductHot -
      20 * currentSliderProductHot) +
    "px )";
  console.log(currentSliderProductHot);
});
// sliderProductHotElement.addEventListener('transitionend', () => {
//     if (divProductHotElement[currentSliderProductHot].id === 'product_hot__slider--item-last') {
//         sliderProductHotElement.style.transition = 'none';
//         currentSliderProductHot = divProductHotElement.length -1;
//         sliderProductHotElement.style.transform = 'translateX(' + (-sizeSlideProductHot * currentSliderProductHot - 20 * currentSliderProductHot) + 'px )';
//     }
//     if (divProductHotElement[currentSliderProductHot+3].id === 'product_hot__slider--item-first') {
//         sliderProductHotElement.style.transition = 'none';
//         currentSliderProductHot = divProductHotElement.length - currentSliderProductHot +2;
//         sliderProductHotElement.style.transform = 'translateX(' + (-sizeSlideProductHot * currentSliderProductHot - 20 * currentSliderProductHot) + 'px )';
//     }
// })
