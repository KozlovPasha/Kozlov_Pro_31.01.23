//* HW # 18 (1)
//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const arrayDifferentTypes = [1, 2, 3, 'a', 'W', 'b', 'c', 5, 'd', 'e', 6];
function defineAverageNum() {
   const numbers = arrayDifferentTypes.filter(element => !isNaN(element));
   if (numbers.length === 0)
      return 0;
   const sum = numbers.reduce((prev, curr) => prev + curr);
   return sum / numbers.length;
}
console.log(defineAverageNum())


//* HW # 18 (2)
//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
//У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
//Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const znak = prompt('Введіть результат математичної дії : +, -, *, /, %, ^ (ступінь ).')
const x = +prompt('Введіть перше число')
const y = +prompt('Введіть друге число')

function doMath(x, znak, y){
   if (znak === '+' ){
    znak =  x + y 
   } else if ( znak === '-'){
      znak =  x - y
   }else if ( znak === '*'){
      znak =  x * y
   }else if ( znak === '/'){
      znak =  x / y
   }else if ( znak === '%'){
      znak =  x % y
   }else if ( znak === '^'){
      znak =  x ** y
   } else {
      alert(`Ви обрали не коректну математичну дію`);
   }
return znak
}
alert(doMath(x, znak, y))

//* HW # 18 (3)
//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. 
//Значення всіх елементів всіх масивів задає користувач.


const arrLenghtM = Number(prompt("введите длинну основного масива "));
const arrLenghtN = Number(prompt("введите длинну внутришних масивов "));
const arrayMatrix = [];
function userArrayMatrix(arrLenghtM, arrLenghtN, arrayMatrix) {
   arrayMatrix.length = arrLenghtM;

   for (let i = 0; i < arrLenghtM; i++) {
      arrayMatrix[i] = [];
      arrayMatrix[i].length = arrLenghtN;
   }

   for (let i = 0; i < arrayMatrix.length; i++) {
      for (var j = 0; j < arrayMatrix[i].length; j++)
         arrayMatrix[i][j] = prompt(`введите номер элемента ${i} ${j}`);
   }
   return arrayMatrix

}
console.log(userArrayMatrix(arrLenghtM, arrLenghtN, arrayMatrix));



//* HW # 18 (4)
//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.


const userString = prompt('Введіть довільний рядок!');
const userDelete = prompt('Введіть символ для видалення з рядку!');

function removeSymbol (userString,userDelete){
   userResult = userString.split(`${userDelete}`).join('');
   return userResult
}
console.log(removeSymbol(userString,userDelete))



