import $abr from '../core';

/**
 *   методы для работы с элементами набора
 *   -> получить/установить HTML
 *   -> получить элемент по индексу из набора
 *   -> получить индекс элемента относительно соседних элементов с общим родителем
 * */


$abr.prototype.html = function(content) {
  // получить/установить HTML
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

$abr.prototype.eq = function(i) {
  // получить элемент по индексу из набора
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

$abr.prototype.index = function() {
  // получить индекс элемента относительно соседних элементов с общим родителем
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = (item) => {
    return item === this[0];
  };

  return childs.findIndex(findMyIndex);
};

$abr.prototype.find = function(selector) {
  // находит элементы по заданному селектору, внутри выбранных элементов.
  let numberOfItems = 0;
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length === 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;

  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};