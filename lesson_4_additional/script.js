function getFriendlyNumbers(start, end) {
	if (typeof (start) != "number" || typeof (end) != "number" || start <= 0 || end <= 0 || !Number.isInteger(start) || !Number.isInteger(end) || start > end) {
		return false;
	}
	else {
		return calcNumberFreind(getArr(start, end));
	}
}

//Получение массива из интервала
function getArr(first, last) {
	let arrInt = [];
	for (let i = first; i <= last; i++) {
		arrInt.push(i);
	}
	return arrInt;
}

//Вычисление дружественных чисел
function calcNumberFreind(mass) {
	let result = [];
	let lengArray = mass.length;
	for (let i = 0; i < lengArray; i++) {
		let num_1, num_2, summ_1, summ_2;
		num_1 = mass[i];
		summ_1 = 0;
		summ_2 = 0;
		for(let j = 1; j < num_1; j++) {
			if(num_1 % j == 0) {
				summ_1 += j;
			} else {
				continue;
			}
		}
		if (summ_1 <= mass[lengArray - 1]) {
			num_2 = summ_1;
			for(let c = 1; c < num_2; c++) {
				if(num_2 % c == 0) {
					summ_2 += c;
				} else {
					continue;
				}
			}
		} else { 
			continue; 
		}
		if(num_1 == summ_2 && num_2 == summ_1 && num_1 != num_2) {
				if(num_1 < num_2) {
					if (i != (lengArray - 1)) {
						let arrNumFriend = [num_1, num_2];
						result.push(arrNumFriend);
						//console.log(lengArray);
					} else {
						continue;
					}
				}
		}
	}
	return result;
}

module.exports = {
	firstName: 'Kirill',
	secondName: 'Morozov',
	task: getFriendlyNumbers
}