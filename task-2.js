// Задание №2

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elements = ingredients.map(el => {
  const liElement = document.createElement('li');
  liElement.innerHTML = el;

  return liElement;
});

const ulIngradients = document.querySelector('#ingredients');
ulIngradients.append(...elements);

console.log(ulIngradients);
