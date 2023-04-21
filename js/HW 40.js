//*ДЗ 40. generateList
/*Написати функцію generateList(array), яка приймає масив із чисел
 та масивів чисел (наприклад [1,2, 3]) і генерує список з елементів:
*/

const generateList = function generateList(array) {
	const ul = document.createElement('ul');
	const wrapper = document.getElementById('wrpper')
	array.forEach(function (el) {
	  const li = document.createElement('li');
	  let childElement;
	  if (Array.isArray(el)) {
		 childElement = generateList(el);
	  } else {
		 childElement = document.createTextNode(el)
	  }
	  li.appendChild(childElement);
	  ul.appendChild(li);
	})
 
	return ul;
 }
 
 wrapper.append(generateList([1, 2, [1.1, 1.2, 1.3], 3]))