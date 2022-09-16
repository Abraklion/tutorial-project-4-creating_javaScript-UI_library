import $abr from '../core';

/**
 *   методы для работы с событиями (event)
 *   -> зарегистрировать
 *   -> удалить
 *   -> зарегистрировать click
 * */

$abr.prototype.on = function(eventName, callback) {
  // зарегистрировать события
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

$abr.prototype.off = function(eventName, callback) {
  // удаления событий
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

$abr.prototype.click = function(handler) {
  // вызов или регистрация события click на элементе
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }

  return this;
};