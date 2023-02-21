//* HW # 19
//Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями,
// наприклад:
//sum(3) = 3
//sum(5) = 8
//sum(20) = 28

function myFunc() {
   let count = 0;
   return function asd(x) {
      return count = count + x;
   };
};
const lockedFunc = myFunc();

console.log(lockedFunc(5));
console.log(lockedFunc(50));
console.log(lockedFunc(80));

