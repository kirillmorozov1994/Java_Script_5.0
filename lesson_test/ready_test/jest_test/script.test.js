const exam = require('./script');

//Функция sum
const {summ: funcSum} = exam;
//Переменная num
const {number: num} = exam;
//Функция each
const {each: funcEach} = exam;
//Массив array
const {array_2: arr_1} = exam;
//Функция myFunc
const {task: func} = exam;


//expect(func(1, 1)).toEqual([]);

describe('NumberTypeDate', () => {
    it("Тип данных функции sum", () => {
			expect(typeof(funcSum(2,2))).toBe('boolean');
    });
});

describe('NumberValue', () => {
	it("Значение переменной num", () => {
		expect(num).toEqual(5);
	});
});

describe('FunctionTypeDate', () => {
	it("Тип данных функции each", () => {
		expect(typeof (funcEach(arr_1, func))).toBe('object');
	});
});

describe('FunctionValue', () => {
	it("Возвращаемое значение функции each", () => {
		expect(funcEach(arr_1, func)).toEqual([8, 7, 6, 5, 4]);
	});
});

describe('FunctionValueLength', () => {
	it("Количество элементов, возвращаемого функцией each", () => {
		expect(funcEach(arr_1, func)).toHaveLength(5);
	});
});
