import $abr from '../core';

/**
 *   Компонент табы
 *   @returns {void}
 */
$abr.prototype.tab = function() {
  for (let i = 0; i < this.length; i++) {

    $abr(this[i]).on('click', () => {
      $abr(this[i])
        .addClass('tab-item--active')
        .siblings()
        .removeClass('tab-item--active')
        .closest('.tab')
        .find('.tab-content')
        .removeClass('tab-content--active')
        .eq($abr(this[i]).index())
        .addClass('tab-content--active');
    });

  }
};

$abr('[data-tabpanel] .tab-item').tab();