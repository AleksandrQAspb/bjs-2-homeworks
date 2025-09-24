"use strict";

function solveEquation(a, b, c) {
	// Шаг 1: Вычисляем дискриминант
	let d = b * b - 4 * a * c; // Или: let d = Math.pow(b, 2) - 4 * a * c;

	// Шаг 2: Проверяем условия и вычисляем корни
	if (d < 0) {
		// Если дискриминант отрицательный — корней нет
		return [];
	} else if (d === 0) {
		// Если дискриминант равен нулю — один корень
		return [-b / (2 * a)];
	} else {
		// Если дискриминант положительный — два разных корня
		let sqrtD = Math.sqrt(d);
		return [
			(-b + sqrtD) / (2 * a), // Первый корень
			(-b - sqrtD) / (2 * a) // Второй корень
		];
	}
}

console.log(solveEquation(1, -5, 6)); // [2, 3] (корни 2 и 3)
console.log(solveEquation(1, 0, 1)); // [] (нет корней)
console.log(solveEquation(4, 4, 1)); // [-0.5] (один корень)


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// Валидация: проверяем, что все аргументы - числа
	if (typeof percent !== 'number' || typeof contribution !== 'number' ||
		typeof amount !== 'number' || typeof countMonths !== 'number' ||
		isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return NaN;
	}

	// Преобразуем годовую ставку в месячную
	const monthlyRate = (percent / 100) / 12; // Получаем P (от 0 до 1)

	// Тело кредита
	const loanBody = amount - contribution;
	if (loanBody <= 0) {
		return 0; // Если взнос покрывает или превышает сумму, ничего не платим
	}

	// Ежемесячный платеж по формуле из задания
	// Формула: S * (P + P / (((1 + P)^n) - 1))
	const monthlyPayment = loanBody * (monthlyRate + monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1));

	// Общая сумма
	const totalAmount = monthlyPayment * countMonths;

	// Округление до двух знаков после запятой и возврат числа
	return Number(totalAmount.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Ожидаемый: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Ожидаемый: 51694.54
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Ожидаемый: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // Ожидаемый: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // Ожидаемый: 12479.52

