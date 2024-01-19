var slider = document.querySelector('#slider');
var slides = slider.querySelector('.slides');
var slide = slides.querySelectorAll('.slide');

var currentSlide = 0;

setInterval(function () {
  var from = -(1024 * currentSlide);
  var to = from - 1024;
  slides.animate([{ marginLeft: from + 'px' }, { marginLeft: to + 'px' }], {
    duration: 1500,
    easing: 'ease',
    iterations: 1,
    fill: 'both',
  });
  currentSlide++;
  if (currentSlide === slide.length - 1) {
    currentSlide = 0;
  }
}, 5000);
