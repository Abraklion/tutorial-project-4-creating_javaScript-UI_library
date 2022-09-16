/**
*   ядро библиотеки
* */

const $abr = function(selector) {
  // возврощает экземпляр класса
  return new $abr.prototype.init(selector);
};

$abr.prototype.init = function(selector) {
  // метод(класс)
  if (!selector) {
    // если не передали селектор возвращаем пустой обьект
    return this; // {}
  }

  // если передали узел (node)
  if (selector.tagName) {
    // положим этот элемент в обьект
    this[0] = selector;
    // количество элементов 1
    this.length = 1;

    // возвращаем обьект
    return this;
  }

  // копируем все перечисляемые свойства провдомассива в целевой обьект
  Object.assign(this, document.querySelectorAll(selector));
  // считаем все элементы провдомассива и записываем в целевой обьект
  this.length = document.querySelectorAll(selector).length;

  // возвращаем целевой обьект
  return this;
};

// заменяем прототип метода init на прототип $abr
$abr.prototype.init.prototype = $abr.prototype;

// записывам в глобальную переменую переменую
window.$abr = $abr;

// экспортируем модуль
export default $abr;