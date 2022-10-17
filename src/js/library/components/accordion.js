import $abr from '../core';

/**
 *   Компонент аккардион
 *   @param {string} headActive активный класс пункта
 *   @param {string} contentActive активный класс контента
 *   @returns {void}
 */
$abr.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active') {
  for (let i = 0; i < this.length; i++) {

    $abr(this[i]).click(() => {

      $abr(this[i]).toggleClass(headActive);
      $abr(this[i].nextElementSibling).toggleClass(contentActive);

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + "px";
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });

  }
};

$abr('.accordion-head').accordion();