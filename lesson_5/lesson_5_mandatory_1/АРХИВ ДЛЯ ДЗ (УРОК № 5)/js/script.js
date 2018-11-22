let wrapperMenu = document.querySelector('.menu'),
		itemsList = wrapperMenu.getElementsByClassName('menu-item'),
		item = document.createElement('li'),
		bg = document.querySelector('body');
		column = document.querySelectorAll('.column')[1],
		adv = document.querySelector('.adv'),
		original = document.querySelector('.title'),
		question = document.querySelector('.prompt');

//Меняем пункты местами
itemsList[1].innerText = 'Второй пункт';
itemsList[2].innerText = 'Третий пункт';

//Добавляем последний 5 пункт
item.classList.add('menu-item');
item.innerHTML = 'Пятый пункт';
wrapperMenu.appendChild(item);

//Заменяем картинку заднего фона
bg.style.background = "url(img/apple_true.jpg)";

//Добавляем слово "подлинную"
original.innerHTML = "Мы продаем только <b>подлинную</b> технику Apple";

//Удаляем рекламу
column.removeChild(adv);

//Вопрос
question.innerHTML = prompt('Ваше отношение к техники Apple?', '');