//Вопрос
let answer = prompt("Как вы относитесь к техинике Apple?", "");

//Изменение порядка в меню, доабавление пятого элемента
let menuItem = document.getElementsByClassName('menu-item');
let parentId = menuItem[2].parentNode;
parentId.insertBefore(menuItem[2],menuItem[1]);
//
let punct = document.createElement('li');
punct.textContent = 'Пятый пункт';
punct.classList.add('menu-item');
parentId.appendChild(punct);

//Изменение фоновой картинки

let img = document.querySelector('body');
img.style.background = 'url(img/apple_true.jpg) center no-repeat';

//Изменение заголовка !

let title = document.getElementById('title');
title.textContent = "Мы продаем только подлинную технику Apple";

//Удаление рекламы
 
let node = document.getElementsByClassName("adv");
node[0].remove();