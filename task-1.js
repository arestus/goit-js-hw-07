/*  Задание №1

Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4*/

"use strict"

// const selectedById = document.querySelector('#categories');

// console.log(selectedById);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

const liCategories = document.querySelectorAll('li.item');

console.log(`В списке ${liCategories.length} категории.`);

const elements = document.querySelectorAll('.item')
elements.forEach(function(element) {
    console.log(`Категория: ${element.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${element.lastElementChild.children.length}`)
})