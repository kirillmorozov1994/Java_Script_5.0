'use strict';

let btn = document.getElementById('start'),
		budget = document.getElementsByClassName('budget-value'),
		dayBudget = document.getElementsByClassName('daybudget-value'),
		level = document.getElementsByClassName('level-value'),
		expenses = document.getElementsByClassName('expenses-value'),
		optionalExpenses = document.getElementsByClassName('optionalexpenses-value'),
		income = document.getElementsByClassName('income-value'),
		monthSavings = document.getElementsByClassName('monthsavings-value'),
		yearSavings = document.getElementsByClassName('yearsavings-value'),
		expensesItem = document.getElementsByClassName('expenses-item'),
		btnState_1 = document.getElementsByTagName('button')[0],
		btnState_2 = document.getElementsByTagName('button')[1],
		btnCalc = document.getElementsByTagName('button')[2],
		optionalItem = document.querySelectorAll('.optionalexpenses-item'),
		chooseIncome = document.querySelector('.choose-income'),
		chooseSumm = document.querySelector('.choose-sum'),
		choosePercent = document.querySelector('.choose-percent'),
		saving = document.querySelector('#savings'),
		year = document.querySelector('.year-value'),
		month = document.querySelector('.month-value'),
		day= document.querySelector('.day-value');





//Проверка
console.log(btn);
console.log(budget);
console.log(dayBudget);
console.log(level);
console.log(expenses);
console.log(optionalExpenses);
console.log(income);
console.log(monthSavings);
console.log(yearSavings);
console.log(expensesItem);
console.log(btnState_1);
console.log(btnState_2);
console.log(btnCalc);
console.log(optionalItem);
console.log(chooseIncome);
console.log(chooseSumm);
console.log(choosePercent);
console.log(saving);
console.log(year);
console.log(month);
console.log(day);
