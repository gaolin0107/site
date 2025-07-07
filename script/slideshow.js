document.addEventListener("DOMContentLoaded", function() {
    var dots = document.getElementsByClassName("dot");
    if (dots.length > 0) {
      dots[0].className += " active";
    }
  });
  
let currentAnimating = false;

function animateSlide(outSlide, inSlide, direction) {
  if (!outSlide || !inSlide) return;
  currentAnimating = true;
  outSlide.style.transition = 'transform 0.5s, opacity 0.5s';
  inSlide.style.transition = 'none';
  inSlide.style.display = 'block';
  inSlide.style.opacity = '0';
  inSlide.style.transform = direction === 'left' ? 'translateX(100%)' : 'translateX(-100%)';

  setTimeout(() => {
    inSlide.style.transition = 'transform 0.5s, opacity 0.5s';
    outSlide.style.transform = direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
    outSlide.style.opacity = '0';
    inSlide.style.transform = 'translateX(0)';
    inSlide.style.opacity = '1';
  }, 20);

  setTimeout(() => {
    outSlide.style.display = 'none';
    outSlide.style.transition = '';
    outSlide.style.transform = '';
    outSlide.style.opacity = '';
    inSlide.style.transition = '';
    inSlide.style.transform = '';
    inSlide.style.opacity = '';
    currentAnimating = false;
  }, 520);
}

let slideIndex = 1;
const slides = document.getElementsByClassName("slideshow-page");

function plusSlides(n) {
  if (currentAnimating) return;
  let oldIndex = slideIndex;
  slideIndex += n;
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;
  let outSlide = slides[oldIndex - 1];
  let inSlide = slides[slideIndex - 1];
  let direction = n > 0 ? 'left' : 'right';
  animateSlide(outSlide, inSlide, direction);

  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}

function currentSlide(n) {
  if (currentAnimating || n === slideIndex) return;
  let oldIndex = slideIndex;
  let direction = n > oldIndex ? 'left' : 'right';
  slideIndex = n;
  let outSlide = slides[oldIndex - 1];
  let inSlide = slides[slideIndex - 1];
  animateSlide(outSlide, inSlide, direction);

  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}

for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[slideIndex - 1].style.display = "block";
