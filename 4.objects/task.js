// Функция-конструктор Student
function Student(name, gender, age) {
	this.name = name; // Сохраняем имя
	this.gender = gender; // Сохраняем пол
	this.age = age; // Сохраняем возраст
	this.marks = []; // Инициализируем пустой массив для оценок
}

// Метод для установки предмета
Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName; // Устанавливаем свойство subject
};

// Метод для добавления оценок (используем rest-параметр ...marksToAdd для неизвестного количества оценок)
Student.prototype.addMarks = function(...marksToAdd) {
	// Проверка: если свойство marks существует (не удалено при exclude)
	if (this.marks) {
		this.marks.push(...marksToAdd); // Добавляем все оценки в массив marks
	}
	// Если marks не существует, ничего не делаем (студент отчислен)
};

// Метод для получения среднего балла
Student.prototype.getAverage = function() {
	// Проверка: если marks существует И не пустой массив
	if (this.marks && this.marks.length > 0) {
		// Суммируем оценки и делим на количество (используем reduce для суммы)
		const sum = this.marks.reduce((total, mark) => total + mark, 0);
		return sum / this.marks.length; // Возвращаем среднее
	} else {
		return 0; // Если marks нет или пустой — возвращаем 0
	}
};

// Метод для исключения студента
Student.prototype.exclude = function(reason) {
	delete this.subject; // Удаляем свойство subject (если оно было)
	delete this.marks; // Удаляем свойство marks (теперь оценки нельзя добавлять)
	this.excluded = reason; // Устанавливаем причину исключения
};

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0 (оценки ещё нет)
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5 (среднее: (4+5+4+5)/4 = 18/4 = 4.5)
console.log(student1);
// Вывод: {name: "Василиса", gender: "женский", age: 19, marks: [4, 5, 4, 5], subject: "Algebra"}

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);
// Вывод: {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
// (subject и marks удалены, добавлять оценки после этого нельзя)
