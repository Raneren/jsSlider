const buttonPrev= document.querySelector('.button_prev');
const buttonNext= document.querySelector('.button_next');

const sliderImages=document.querySelectorAll('.slider__image');

console.log(sliderImages.length);

let index=0;

buttonNext.onclick = function(){
  sliderImages[index].classList.remove('slider__image_showed');
  index=++index;
  if (index>=sliderImages.length) {index=0};
  sliderImages[index].classList.add('slider__image_showed');
};
buttonPrev.onclick = function(){
  sliderImages[index].classList.remove('slider__image_showed');
  index=--index;
  if (index<0) {index=sliderImages.length-1};
  sliderImages[index].classList.add('slider__image_showed');
}