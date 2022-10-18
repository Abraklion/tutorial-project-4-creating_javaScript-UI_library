import $abr from '../core';

/**
 *   Компонент слайдер
 *   @returns {void}
 */
$abr.prototype.carousel = function() {
  for (let i = 0 ;i < this.length; i++) {

    /** @type {string} ширина блока */
    const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
    /** @type {NodeList} слайды */
    const slides = this[i].querySelectorAll('.carousel-item');
    /** @type {HTMLElement} обертка слайдера */
    const slidesField = this[i].querySelector('.carousel-slides');
    /** @type {NodeList} список пунктов для точечной навигации */
    const dots = this[i].querySelectorAll('.carousel-indicators li');

    slidesField.style.width = 100 * slides.length + '%';

    slides.forEach(slide => {
      slide.style.width = width;
    });

    /** @type {number} смещение/переключения слайдов */
    let offset = 0;
    /** @type {number} номер активного слайда */
    let slideIndex = 0;

    $abr(this[i].querySelector('[data-slide="next"]')).click((e) => {
      e.preventDefault();

      if (offset === (+width.replace(/\D/g, '') * (slides.length - 1))) {
        offset = 0;
      } else {
        offset += +width.replace(/\D/g, '');
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex === slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }

      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });

    $abr(this[i].querySelector('[data-slide="prev"]')).click((e) => {
      e.preventDefault();

      if (offset === 0) {
        offset = +width.replace(/\D/g, '') * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, '');
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex === 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }

      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });

    /** @type {string} id слайдера */
    const sliderId = this[i].getAttribute('id');

    $abr(`#${sliderId} .carousel-indicators li`).click(e => {
      e.preventDefault();

      /** @type {number} номер слайда */
      const slideTo = +e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = +width.replace(/\D/g, '') * slideTo;

      slidesField.style.transform = `translateX(-${offset}px)`;

      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
  }
};

$abr('.carousel').carousel();