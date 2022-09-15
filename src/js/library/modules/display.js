import $abr from '../core';

/**
 *   методы для работы со свойством "display" у элементов
 *   -> показать
 *   -> скрыть
 *   -> переключать (показать/скрыть)
 * */

$abr.prototype.show = function() {
  // показывает все элементы набора
  for(let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = '';
  }

  return this;
};

$abr.prototype.hide = function() {
  // скрывает все элементы набора
  for(let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = 'none';
  }

  return this;
};

$abr.prototype.toggle = function() {
  // переключает видимость все элементом набора
  for(let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};