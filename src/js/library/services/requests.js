import $abr from '../core';

/**
 *   Сервис запрос методом GET
 *   @param {string} url ссылка на ресурс
 *   @param {string} dataTypeAnswer тип ответа который мы хотим получить
 *   @returns {promise}
 */
$abr.prototype.get = async function(url, dataTypeAnswer = 'json'){
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
$abr.prototype.post = async function(url, data, dataTypeAnswer = 'text') {
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