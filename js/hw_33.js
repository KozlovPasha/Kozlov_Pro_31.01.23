//* HW # 33
/*
1) Реализовать функцию-генератор которая отдаст 10 рандомных чисел в диапазоне переданном в аргументах в ней.

2) Создать свой распорядок дня с помощью async await ( тоесть мы должны "подождать" 
выполнение асинхронной функции brushTeeth перед тем как приступать к выполнению следующей асинхронной функции)
*/

//*33(1)
function* generateSequence(start, end) {
   for (let i = 0; i <= 10; i++) {
      yield Math.floor(Math.random() * (end - start + 1) + start);
   }

}

const generator = generateSequence(10, 30)

for (let res of generator) {
   console.log(res);
}


//*33(2)
const getOutOfBed = new Promise((resolve) => {
   setTimeout(() =>
      resolve("встаю с кровати в 07:00!"), 1000)
});

const washMyFace = new Promise((resolve) => {
   setTimeout(() =>
      resolve('умываю лицо в 07:10'), 2000)
});

const brushTeeth = new Promise((resolve) => {
   setTimeout(() =>
      resolve('чищу зубы в 07:13'), 1000)
});

const breakfast = new Promise((resolve) => {
   setTimeout(() =>
      resolve('завтракаю в  07:30'), 2000)
});

const learningProgramming = new Promise((resolve) => {
   setTimeout(() =>
      resolve('Учу любимый JavaScript с 08:00 до 22:00'), 3000)
});

async function schedule() {
   const action1 = await getOutOfBed
   console.log(action1)
   const action2 = await washMyFace
   console.log(action2)
   const action3 = await brushTeeth
   console.log(action3)
   const action4 = await breakfast
   console.log(action4)
   const action5 = await learningProgramming
   console.log(action5)
}
schedule()