import $abr from '../core';

/**
 *   Компонент модальное окно
 *   @param {boolean} created указывает создано ли модальное окно программно
 *   @returns {void}
 */
$abr.prototype.modal = function(created) {
  for (let i = 0; i < this.length; i++) {
    /**
     *   Дата-атрибут элемента по которому кликнули
     *   @type {string}
     */
    const target = this[i].getAttribute('data-target');

    $abr(this[i]).click((e) => {
      e.preventDefault();

      $abr(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
    });

    /**
     *   Отбираем элементы при клике на которые будет закрываться модальное окно
     *   @type {NodeList}
     */
    const closeElements = document.querySelectorAll(`${target} [data-close]`);

    closeElements.forEach(elem => {
      $abr(elem).click(() => {
        $abr(target).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(target).remove();
        }
      });
    });

    $abr(target).click(e => {
      if (e.target.classList.contains('modal')) {
        $abr(target).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(target).remove();
        }
      }
    });

  }
};

$abr('[data-toggle="modal"]').modal();

/**
 *   Компонент модальное окно создающиеся программно
 *   @param {object} config
 *   @param {object} config.text
 *   @param {object} config.btns
 *   @returns {void}
 */
$abr.prototype.createModal = function({text = {title: "Заголовок", body: "Контент1"}, btns = {count: 2, settings: [["text", [], false, cb]]}} = {}) {
  for (let i = 0; i< this.length; i++) {
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
    const buttons = [];

    // Пример обьекта btns : {count: num, settings: [[text, classNames=[], close, cb]]}
    for (let j = 0;j < btns.count; j++){
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

      if (btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function') {
        btn.addEventListener('click', btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    // шаблон
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

    $abr(this[i]).modal(true);
    $abr(this[i].getAttribute('data-target')).fadeIn(500);
  }
};