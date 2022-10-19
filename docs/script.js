/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/library/components/accordion.js":
/*!************************************************!*\
  !*** ./src/js/library/components/accordion.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

/**
 *   Компонент аккардион
 *   @param {string} headActive активный класс пункта
 *   @param {string} contentActive активный класс контента
 *   @returns {void}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function () {
  let headActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accordion-head--active';
  let contentActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'accordion-content--active';

  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive);

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + "px";
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordion();

/***/ }),

/***/ "./src/js/library/components/carousel.js":
/*!***********************************************!*\
  !*** ./src/js/library/components/carousel.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

/**
 *   Компонент слайдер
 *   @returns {void}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
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
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="next"]')).click(e => {
      e.preventDefault();

      if (offset === +width.replace(/\D/g, '') * (slides.length - 1)) {
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
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="prev"]')).click(e => {
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
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${sliderId} .carousel-indicators li`).click(e => {
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

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.carousel').carousel();

/***/ }),

/***/ "./src/js/library/components/dropdown.js":
/*!***********************************************!*\
  !*** ./src/js/library/components/dropdown.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

/**
 *   Компонент для работы с выподающим меню
 *   @returns {void}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/library/components/modal.js":
/*!********************************************!*\
  !*** ./src/js/library/components/modal.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

/**
 *   Компонент модальное окно
 *   @param {boolean} created указывает создано ли модальное окно программно
 *   @returns {void}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    /**
     *   Дата-атрибут элемента по которому кликнули
     *   @type {string}
     */
    const target = this[i].getAttribute('data-target');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
    });
    /**
     *   Отбираем элементы при клике на которые будет закрываться модальное окно
     *   @type {NodeList}
     */

    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(target).remove();
        }
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      if (e.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();
/**
 *   Компонент модальное окно создающиеся программно
 *   @param {object} config
 *   @param {object} config.text
 *   @param {object} config.btns
 *   @returns {void}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function () {
  let {
    text = {
      title: "Заголовок",
      body: "Контент1"
    },
    btns = {
      count: 2,
      settings: [["text", [], false, cb]]
    }
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (let i = 0; i < this.length; i++) {
    /**
     *   Создаем html элемент div
     *   @type {Element}
     */
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));
    /**
     *   Массив в со списком кнопок
     *   @type {array}
     */

    const buttons = []; // Пример обьекта btns : {count: num, settings: [[text, classNames=[], close, cb]]}

    for (let j = 0; j < btns.count; j++) {
      /**
       *   Создаем html элемент button
       *   @type {Element}
       */
      let btn = document.createElement('button');
      btn.classList.add('btn', ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];

      if (btns.settings[j][2]) {
        btn.setAttribute('data-close', 'true');
      }

      if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
        btn.addEventListener('click', btns.settings[j][3]);
      }

      buttons.push(btn);
    } // шаблон


    modal.innerHTML = `
        <div class="modal-dialog">
          <button class="modal-close" data-close>
            <span>&times;</span>
          </button>
          <div class="modal-header">
            <div class="modal-title">
              ${text.title}
            </div>
          </div>
          <div class="modal-body">
            ${text.body ? text.body : "Контент2"}
          </div>
          <div class="modal-footer"></div>
        </div>
    `;
    modal.querySelector(".modal-footer").append(...buttons);
    document.body.appendChild(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute('data-target')).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/library/components/tab.js":
/*!******************************************!*\
  !*** ./src/js/library/components/tab.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

/**
 *   Компонент табы
 *   @returns {void}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item--active').siblings().removeClass('tab-item--active').closest('.tab').find('.tab-content').removeClass('tab-content--active').eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass('tab-content--active');
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

/***/ }),

/***/ "./src/js/library/core.js":
/*!********************************!*\
  !*** ./src/js/library/core.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
*   ядро библиотеки
* */
const $abr = function (selector) {
  // возврощает экземпляр класса
  return new $abr.prototype.init(selector);
};

$abr.prototype.init = function (selector) {
  // метод(класс)
  if (!selector) {
    // если не передали селектор возвращаем пустой обьект
    return this; // {}
  } // если передали узел (node)


  if (selector.tagName) {
    // положим этот элемент в обьект
    this[0] = selector; // количество элементов 1

    this.length = 1; // возвращаем обьект

    return this;
  } // копируем все перечисляемые свойства провдомассива в целевой обьект


  Object.assign(this, document.querySelectorAll(selector)); // считаем все элементы провдомассива и записываем в целевой обьект

  this.length = document.querySelectorAll(selector).length; // возвращаем целевой обьект

  return this;
}; // заменяем прототип метода init на прототип $abr


$abr.prototype.init.prototype = $abr.prototype; // записывам в глобальную переменую переменую

window.$abr = $abr; // экспортируем модуль

/* harmony default export */ __webpack_exports__["default"] = ($abr);

/***/ }),

/***/ "./src/js/library/library.js":
/*!***********************************!*\
  !*** ./src/js/library/library.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/library/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/library/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/library/modules/classes.js");
/* harmony import */ var _modules_attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/attribute */ "./src/js/library/modules/attribute.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/library/modules/handlers.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/library/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/library/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/library/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/library/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/library/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordion */ "./src/js/library/components/accordion.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/carousel */ "./src/js/library/components/carousel.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/requests */ "./src/js/library/services/requests.js");













/**
 *   расширяет ядро новым функционалом
 * */

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/library/modules/actions.js":
/*!*******************************************!*\
  !*** ./src/js/library/modules/actions.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

/**
 *   методы для работы с элементами набора
 *   -> получить/установить HTML
 *   -> получить элемент по индексу из набора
 *   -> получить индекс элемента относительно соседних элементов с общим родителем
 *   -> получить ближайшиго предка, соответствующий заданному селектору
 *   -> получить все соседнии элементы
 * */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  // получить индекс элемента относительно соседних элементов с общим родителем
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = item => {
    return item === this[0];
  };

  return childs.findIndex(findMyIndex);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  // получить ближайшиго предка, соответствующий заданному селектору
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    const parentElem = this[i].closest(selector);

    if (!parentElem || parentElem === this[counter - 1]) {
      continue;
    }

    this[counter] = parentElem;
    counter++;
  }

  this.length = counter;
  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  // получить все соседнии элементы
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/library/modules/attribute.js":
/*!*********************************************!*\
  !*** ./src/js/library/modules/attribute.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

/**
 *   методы для работы с атрибутами
 *   -> получить
 *   -> добавить
 *   -> удалить
 * */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttribute = function (attributeName) {
  // получить значения атрибута
  if (!attributeName) {
    return this;
  }

  return this.length > 0 ? this[0].getAttribute(attributeName) : null;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttribute = function (attributeName, attributeValue) {
  // добавить атрибут
  if (!attributeName || !attributeValue) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attributeName, attributeValue);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttribute = function (attributeName) {
  // удалить атрибут
  if (!attributeName) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attributeName);
  }

  return this;
};

/***/ }),

/***/ "./src/js/library/modules/classes.js":
/*!*******************************************!*\
  !*** ./src/js/library/modules/classes.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

/**
 *   методы для работы с классами
 *   -> добавить
 *   -> удалить
 *   -> переключать (показать/скрыть)
 * */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  // добавить класс(ы)
  for (let i = 0; i < this.length; i++) {
    this[i].classList.add(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  // удалить класс(ы)
  for (let i = 0; i < this.length; i++) {
    this[i].classList.remove(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  // переключает класс(ы)
  for (let i = 0; i < this.length; i++) {
    this[i].classList.toggle(classNames);
  }

  return this;
};

/***/ }),

/***/ "./src/js/library/modules/display.js":
/*!*******************************************!*\
  !*** ./src/js/library/modules/display.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

/**
 *   методы для работы со свойством "display" у элементов
 *   -> показать
 *   -> скрыть
 *   -> переключать (показать/скрыть)
 * */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  // показывает все элементы набора
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  // скрывает все элементы набора
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  // переключает видимость все элементом набора
  for (let i = 0; i < this.length; i++) {
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

/***/ }),

/***/ "./src/js/library/modules/effects.js":
/*!*******************************************!*\
  !*** ./src/js/library/modules/effects.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

/**
 *   методы для работы с анимациями
 *   -> показать элемент изменяя прозрачность
 *   -> скрыть элемент изменяя прозрачность
 *   -> показать/скрыть элемент изменяя прозрачность
 * */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  // технический метод расчета время анимации
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / dur, 1);
    cb(complection);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  // показать элемент изменяя прозрачность
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  // скрыть элемент изменяя прозрачность
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  // скрыть/показать элемент изменяя прозрачность
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this[i].style.display = display || 'block';

      const _fadeIn = complection => {
        this[i].style.opacity = complection;
      };

      const ani = this.animateOverTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      const _fadeOut = complection => {
        this[i].style.opacity = 1 - complection;

        if (complection === 1) {
          this[i].style.display = 'none';
        }
      };

      const ani = this.animateOverTime(dur, _fadeOut, fin);
      requestAnimationFrame(ani);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/library/modules/handlers.js":
/*!********************************************!*\
  !*** ./src/js/library/modules/handlers.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

/**
 *   методы для работы с событиями (event)
 *   -> зарегистрировать
 *   -> удалить
 *   -> зарегистрировать click
 * */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  // зарегистрировать события
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  // удаления событий
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
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

/***/ }),

/***/ "./src/js/library/services/requests.js":
/*!*********************************************!*\
  !*** ./src/js/library/services/requests.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/library/core.js");

/**
 *   Сервис запрос методом GET
 *   @param {string} url ссылка на ресурс
 *   @param {string} dataTypeAnswer тип ответа который мы хотим получить
 *   @returns {promise}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url) {
  let dataTypeAnswer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();

    case 'text':
      return await res.text();

    case 'blob':
      return await res.blob();
  }
};
/**
 *   Сервис запрос методом POST
 *   @param {string} url ссылка на ресурс
 *   @param {object | string} data параметры запроса
 *   @param {string} dataTypeAnswer тип ответа который мы хотим получить
 *   @returns {promise}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url, data) {
  let dataTypeAnswer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
  let res = await fetch(url, {
    method: "POST",
    body: data
  });

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();

    case 'text':
      return await res.text();

    case 'blob':
      return await res.blob();
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library/library */ "./src/js/library/library.js");

Object(_library_library__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').click(() => Object(_library_library__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!'
  },
  btns: {
    count: 3,
    settings: [['Close', ['btn-danger', 'mr-16'], true], ['Save changes', ['btn-success'], false, () => {
      alert('Данные сохранены');
    }], ['Another btn', ['btn-warning', 'ml-16'], false, () => {
      alert('Hello World');
    }]]
  }
}));
Object(_library_library__WEBPACK_IMPORTED_MODULE_0__["default"])().get('https://jsonplaceholder.typicode.com/posts').then(data => {
  console.log(data);
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map