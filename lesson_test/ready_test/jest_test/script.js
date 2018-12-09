
	let sum = function (a, b) {
	return a + b > 10;
	};




	let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
	let num = arr[1][1];


	let each = function(startArr, f){return f(startArr)};
	var array = [64, 49, 36, 25, 16];
	let myFunc = function(a){
		let newArr = [];

		for (let i = 0; i < a.length; i++) {
			newArr[i]=Math.sqrt(a[i]);
		}
		return newArr;
	};


//console.log(exam.summ(2,2));

module.exports = {
	summ: sum,
	array_1: arr,
	number: num,
	each: each,
	array_2: array,
	task: myFunc
};