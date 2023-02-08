//* HW # 10
//выводим числа от 10 до 20
for (let i = 10 ; i <= 20; i++) {
    console.log(i)
}
//выводим квадраты чисел от 10 до 20
for (let i = 10 ; i <= 20; i++) {
    console.log(i**2)
}

//таблица умножения на 7
let mult = 7
for (let i = 1 ; i <= 10; i++) {
    console.log(i +'*' + mult +'='+ (i *mult))
}

//сумма всех целіх чисел от 1 до 15
let sum = 0;
for (let i = 1 ; i <= 15; i++) {
    sum= sum + i
}
console.log(sum)

//добуток всех целіх чисел от 15 до 35
let multi = 15;
for (let i = 15 ; i <= 35; i++) {
    multi = multi * i
}
console.log(BigInt(multi))

//середнє арифметичне всіх цілих чисел від 1 до 500
let medium = 0;
for (let i = 1 ; i <= 500; i++) {
    medium = medium + i
}
console.log(medium/500)

//суму лише парних чисел в діапазоні від 30 до 80.
let parn = 0;
for (let i = 30 ; i <= 80; i++) {
    if(i % 2){ continue}
    parn = parn + i
}
console.log(parn)


//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for( let i = 100; i < 200; i++ ){
    if(i % 3){ continue}
    console.log(i)
}

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
const naturalNumb = 20;
for (let i = 0; i <= naturalNumb; i++){
    if (naturalNumb % i === 0){
        console.log(i);
    }
}

//Визначити кількість його парних дільників
let count = 0;
for (let i = 2; i <= naturalNumb; i++){
    if (naturalNumb % i === 0){
        count++;
    }
}
console.log(count);

//Знайти суму його парних дільників
let numberSumParn = 0;
for (let i =2; i <= naturalNumb; i++){
    if (naturalNumb % i === 0){
        numberSumParn += i;
    }
}
console.log(numberSumParn);

//Надрукувати повну таблицю множення від 1 до 10.
for( let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
}