# Практический JavaScript (Продвинутый уровень)

Проект №4. Создаем свою JavaScript UI библиотеку

![уроки курса](https://thumbsnap.com/i/acJCLbhw.png)

### Настройки для сборки:

NODE v: 16.16.0 xl

NPM v: 8.16.0

***

**Урок 2**: Сборка и архитектура проекта

В этом уроке мы разберем два главных вопроса: как собирать проект и какую архитектуру построить.

**core.js.js** - ядро библиотеки

**library.js** - расширяет ядро новыми методами

**main.js** - точка входа

*Модуль **core.js** подключаем в **library.js***

*Модуль **display.js** подключаем в **library.js***

*Модуль **library.js** подключаем в **main.js***

---

**Урок 3**: Работа с css-классами, атрибитами и обработчиками событий

В этом уроке мы добавим методы для работы с классами и обработчиками событий

*Модифицировал **core.js***

*Модуль **actions.js** подключаем в **library.js***

*Модуль **attribute.js** подключаем в **library.js***

*Модуль **classes.js** подключаем в **library.js***

---

**Урок 4**: Создаем методы для работы с элементами, часть 1

В этом уроке мы создадим несколько полезных методов для работы со страницей.

*Модуль **actions.js** переименовал в **handlers.js***

*Модуль **handlers.js** подключаем в **library.js***

---

**Урок 5**: Создаем методы для работы с элементами, часть 2

Это вторая часть урока по созданию полезных методов для работы с элементами на странице.

*Модифицировал **actions.js***

---

**Урок 6**: Создаем анимации fadeIn/fadeOut

В этом уроке мы создадим две анимации для плавного появления/исчезновения элементов со страницы.

*Модуль **effects.js** подключаем в **library.js***

---

**Урок 7**: Работа со стилями + создаем готовые компоненты кнопок для библиотеки

В этом уроке мы поработаем со стилями, дополнительными классами и создадим готовое решение в виде кнопок

*Написал кастомную библиотеку **Bootstrap** и настроил архитектуру папки **sass***

---

**Урок 8**: Создаем анимацию fadeToggle

В этом уроке мы создадим еще одну полезную анимацию

*Модифицировал **effects.js***

---

**Урок 9**: Создаем Dropdown menu как готовый компонент

В этом уроке мы создадим первый интерактивный элемент интерфейса в нашей библиотеке

*Компонент **dropdown.js** подключаем в **library.js***

*Компонент **dropdown.scss** подключаем в **style.scss***

---

**Урок 10**: Создаем компоненты модального окна и карточки товаров

В этом уроке мы создадим еще 2 готовых компонента!

*Компонент **modal.js** подключаем в **library.js***

*Компонент **card.scss** | **modal.scss** подключаем в **style.scss***

---

**Урок 11**: Динамическое создание модальных окон

В этом уроке мы создадим функционал по динамическому созданию компонентов модальных окон.

*Модифицировал **modal.js***

---

**Урок 12**: Создаем компонент табов (вкладок)

В этом уроке мы создадим еще один компонент пользовательского интерфейса

*Компонент **tab.js** подключаем в **library.js***

*Компонент **tab.scss** подключаем в **style.scss***

---

**Урок 13**: Создаем компонент аккордеона

В этом уроке мы создадим еще один компонент пользовательского интерфейса.

*Компонент **accordion.js** подключаем в **library.js***

*Компонент **accordion.scss** подключаем в **style.scss***

---

**Урок 14**: Создаем компонент слайдера

В этом уроке мы создадим компонент слайдера

*Компонент **carousel.js** подключаем в **library.js***

*Компонент **carousel.scss** подключаем в **style.scss***

---

**Урок 15**: Создаем сервисы для работы с сервером

В этом уроке мы создадим сервисы для работы с сервером

*Компонент **requests.js** подключаем в **library.js***

---