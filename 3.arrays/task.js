function compareArrays(arr1, arr2) {
	// Сначала сравниваем длину
	if (arr1.length !== arr2.length) {
		return false;
	}
	// Используем every: колбек проверяет, равны ли элементы на том же индексе
	return arr1.every((elem, index) => elem === arr2[index]);
}

// Примеры из условия
console.log(compareArrays([8, 9], [6])); // false
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function getUsersNamesInAgeRange(users, gender) {
	// Фильтруем по полу
	const filteredUsers = users.filter(user => user.gender === gender);

	// Если нет пользователей — 0
	if (filteredUsers.length === 0) {
		return 0;
	}

	// Используем reduce для суммы возрастов
	const sumAges = filteredUsers.reduce((sum, user) => sum + user.age, 0);

	// Среднее: сумма / количество
	return sumAges / filteredUsers.length;
}

// Данные из условия
const people = [{
		firstName: "Александр",
		secondName: "Карпов",
		age: 17,
		gender: "мужской"
	},
	{
		firstName: "Егор",
		secondName: "Морозов",
		age: 21,
		gender: "мужской"
	},
	{
		firstName: "Мелисса",
		secondName: "Леонова",
		age: 40,
		gender: "женский"
	},
	{
		firstName: "Мелания",
		secondName: "Савельева",
		age: 37,
		gender: "женский"
	},
	{
		firstName: "Мария",
		secondName: "Овчинникова",
		age: 18,
		gender: "женский"
	},
	{
		firstName: "Марьяна",
		secondName: "Котова",
		age: 17,
		gender: "женский"
	},
	{
		firstName: "Фёдор",
		secondName: "Селезнев",
		age: 50,
		gender: "мужской"
	},
	{
		firstName: "Георгий",
		secondName: "Петров",
		age: 35,
		gender: "мужской"
	},
	{
		firstName: "Даниил",
		secondName: "Андреев",
		age: 49,
		gender: "мужской"
	},
	{
		firstName: "Дарья",
		secondName: "Савельева",
		age: 25,
		gender: "женский"
	},
	{
		firstName: "Михаил",
		secondName: "Шаров",
		age: 22,
		gender: "мужской"
	},
	{
		firstName: "Владислав",
		secondName: "Давыдов",
		age: 40,
		gender: "мужской"
	},
	{
		firstName: "Илья",
		secondName: "Казаков",
		age: 35,
		gender: "мужской"
	},
	{
		firstName: "Евгений",
		secondName: "Кузьмин",
		age: 19,
		gender: "мужской"
	},
];

// Тесты
console.log(getUsersNamesInAgeRange(people, "мужской")); // 32 (мужчины: 17,21,50,35,49,22,40,35,19 → сумма 328 / 10 = 32.8? Подожди, пример 32, возможно округление или выборка отличается — посчитай заново
// Проверим: мужчины — да, среднее 32.
// Женщины: 40,37,18,17,25 → 137 / 5 = 27.4
console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0
