import $abr from '../core';

/**
 *   методы для работы с атрибутами
 *   -> получить
 *   -> добавить
 *   -> удалить
 * */

$abr.prototype.getAttribute = function (attributeName) {
  // получить значения атрибута
  if (!attributeName) {
    return this;
  }

  return (this.length > 0) ? this[0].getAttribute(attributeName) : null
}

$abr.prototype.setAttribute = function (attributeName, attributeValue) {
  // добавить атрибут
  if (!attributeName || !attributeValue) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attributeName, attributeValue)
  }

  return this;
}

$abr.prototype.removeAttribute = function (attributeName) {
  // удалить атрибут
  if (!attributeName) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attributeName)
  }

  return this;
}