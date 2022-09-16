import $abr from '../core';

/**
 *   методы для работы с классами
 *   -> добавить
 *   -> удалить
 *   -> переключать (показать/скрыть)
 * */

$abr.prototype.addClass = function(...classNames){
  // добавить класс(ы)
  for (let i = 0; i < this.length; i++) {
    this[i].classList.add(...classNames);
  }

  return this;
};

$abr.prototype.removeClass = function(...classNames){
  // удалить класс(ы)
  for (let i = 0; i < this.length; i++) {
    this[i].classList.remove(...classNames);
  }

  return this;
};

$abr.prototype.toggleClass = function(classNames){
  // переключает класс(ы)
  for (let i = 0; i < this.length; i++) {
    this[i].classList.toggle(classNames);
  }

  return this;
};