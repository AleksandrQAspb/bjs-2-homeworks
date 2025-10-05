// Задача 1: Форматтер чисел
function parseCount(value) {
	const parsed = Number.parseFloat(value);
	if (isNaN(parsed)) {
		throw new Error('Невалидное значение');
	}
	return parsed;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

// Задача 2: Треугольник
class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || a + c <= b || b + c <= a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(area.toFixed(3)); // Точность до 3 знаков после запятой
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			}
		};
	}
}

// Для задачи 1
console.log(parseCount("123")); // 123
// console.log(parseCount("abc")); // Ошибка (закомментировано, чтобы не ломать выполнение)
console.log(validateCount("123")); // 123
console.log(validateCount("abc")); // Error: Невалидное значение

// Для задачи 2
const triangle1 = getTriangle(3, 4, 5);
console.log(triangle1.perimeter); // 12
console.log(triangle1.area); // 6.000

const triangle2 = getTriangle(1, 2, 10);
console.log(triangle2.area); // "Ошибка! Треугольник не существует"
console.log(triangle2.perimeter); // "Ошибка! Треугольник не существует"

