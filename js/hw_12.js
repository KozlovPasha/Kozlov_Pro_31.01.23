//* HW # 12
const arrLenght = Number (prompt ('введите длинну масива'));
const array = [];

for (let index = 0; index < arrLenght; index++) {
   const element = prompt (`введите номер элемента ${index}`);
   array.push(element);
}
console.log(array);
//сортування масиву за зростанням
array.sort( (a, b) => a - b );
console.log(array);

//видалення елементів з (2 по 4 включно )
array.splice(1,3);
console.log(array);
