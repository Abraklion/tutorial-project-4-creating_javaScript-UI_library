import $abr from '../core';

/**
 *   Компонент для работы с выподающим меню
 *   @returns {void}
 */
$abr.prototype.dropdown = function() {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');

    $abr(this[i]).click(() => {
      $abr(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

$abr('.dropdown-toggle').dropdown();