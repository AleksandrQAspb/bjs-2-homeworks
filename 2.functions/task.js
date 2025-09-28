function getArrayParams(...arr) {
	if (arr.length === 0) {
		return {
			min: 0,
			max: 0,
			avg: 0
		};
	}
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const avg = arr.reduce((sum, num) => sum + num, 0) / arr.length;
	return {
		min: min,
		max: max,
		avg: Math.round(avg * 100) / 100
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	let evenSum = 0;
	let oddSum = 0;
	for (let num of arr) {
		if (num % 2 === 0) {
			evenSum += num;
		} else {
			oddSum += num;
		}
	}
	return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	const evenElements = arr.filter(num => num % 2 === 0);
	if (evenElements.length === 0) return 0;
	return evenElements.reduce((sum, num) => sum + num, 0) / evenElements.length;
}

function makeWork(arrOfArr, func) {
	const results = arrOfArr.map(subArr => func(...subArr));
	return Math.max(...results);
}

// Примеры использования (для проверки)
console.log(summElementsWorker([])); // 0
console.log(summElementsWorker([10, 10, 11, 20, 10])); // 61
console.log(summElementsWorker([0, 0, 0, -1, -100])); // -101

console.log(differenceMaxMinWorker([])); // 0
console.log(differenceMaxMinWorker([10, 10, 11, 20, 10])); // 10
console.log(differenceMaxMinWorker([0, 0, 0, -1, -100])); // 100

console.log(differenceEvenOddWorker([])); // 0
console.log(differenceEvenOddWorker([1, 2, 3, 4, 5, 6, 7, 8, 9])); // -5
console.log(differenceEvenOddWorker([94, 51, 57, 41, 47, 66, 58, 10, 38, 17])); // 53

console.log(averageEvenElementsWorker([])); // 0
console.log(averageEvenElementsWorker([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 5
console.log(averageEvenElementsWorker([15, 97, 85, 64, 67, 10, 69, 40, 15, 35])); // 38

// Примеры для makeWork
const arrOfArr = [
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[94, 51, 57, 41, 47, 66, 58, 10, 38, 17],
	[15, 97, 85, 64, 67, 10, 69, 40, 15, 35]
];
console.log(makeWork(arrOfArr, summElementsWorker)); // 497 (максимум сумм: 45, 370, 497)
console.log(makeWork(arrOfArr, differenceMaxMinWorker)); // 90 (максимум разниц: 8, 90, 82)
console.log(makeWork(arrOfArr, differenceEvenOddWorker)); // 53 (максимум разниц: -5, 53, -269)
console.log(makeWork(arrOfArr, averageEvenElementsWorker)); // 38 (максимум средних: 5, 38, 38)

