"use strict";

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const spanValue = document.querySelector('span#value');

btnIncrement.addEventListener('click', onBtnIncremetClick);
btnDecrement.addEventListener('click', onBtnDecrementClick);

function updateViewCounter() {
  spanValue.innerHTML = counterValue;
}

function increment() {
  counterValue += 1;
}

function onBtnIncremetClick() {
  increment();
  updateViewCounter();
}

function decrement() {
  counterValue -= 1;
}

function onBtnDecrementClick() {
  decrement();
  updateViewCounter();
}