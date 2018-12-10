
function sum(a, b) {
	return a + b > 10;
}
sum(2,2);


let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];


let each = function(startArr, f){return f(startArr)};
let array = [64, 49, 36, 25, 16];
let myFunc = function(a){
	let newArr = [];

	for (let i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
};


let assert = require('chai').assert;

//Проверяем возвращаемый тип данных функцией sum
describe("sum", function () {
	it("Получаем булевый тип данных", function () {
		assert.typeOf(sum(2,2), 'boolean');
	});
});

//Проверяем значение переменную num на значение 5
describe("arr", function () {
	it("Получаем переменную num со значение 5", function () {
		assert.equal(num, 5);
	});
});

//Проверяем возвращаемый тип данных функцией each
describe("eachType", function () {
	it("Тип данных возвращаемых функцией each", function () {
		assert.typeOf(each(array, myFunc), 'array');
	});
});


let expect = require('chai').expect;

//Проверяем значением возвращаемое функцией
describe("eachVal", function () {
	it("Значение, возращаемое функцией each", function () {
		expect(each(array, myFunc)).to.eql([8, 7, 6, 5, 4]);
	});
});


describe("eachLeng", function () {
	it("Значение, возращаемое функцией each", function () {
		assert.lengthOf(each(array, myFunc), 5);
	});
});