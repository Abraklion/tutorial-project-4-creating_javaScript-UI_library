import $abr from '../core';

/**
 *   Компонент модальное окно
 *   @returns {void}
 */
$abr.prototype.modal = function() {
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
  }

  /**
   *   Отбираем элементы при клике на которые будет закрываться модальное окно
   *   @type {NodeList}
   */
  const closeElements = document.querySelectorAll('[data-close]');

  closeElements.forEach(elem => {
    $abr(elem).click(() => {
      $abr('.modal').fadeOut(500);
      document.body.style.overflow = '';
    });
  });


  $abr('.modal').click(e => {
    if (e.target.classList.contains('modal')) {
      $abr('.modal').fadeOut(500);
      document.body.style.overflow = '';
    }
  });
};

$abr('[data-toggle="modal"]').modal();