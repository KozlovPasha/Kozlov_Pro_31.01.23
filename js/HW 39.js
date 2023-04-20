//*ДЗ 39 Голосування
/* Створити програму для відображення результатів голосування. З наступними умовами:

1. Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
2. Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
3. При натисканні на смайл - під ним змінюється значення лічильника.
4. Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.
*/

const buttons = document.querySelectorAll('.wrapper button');
console.log(buttons)

buttons.forEach((button) => {
	const input = button.nextElementSibling;
	button.addEventListener('click', () => {
		let count = parseInt(input.value) + 1;
		input.value = count++;
	});
});
