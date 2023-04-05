//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

let table = document.querySelector('#table');

for (let i = 0; i <= 9; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 9; i++) {
		let td = document.createElement('td');
		td.innerText = Math.floor(Math.random() * 10) + 1;
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}


