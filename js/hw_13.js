//* HW # 13
const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//фильтруем числа больше 0 (позитивные числа)
const positiveElementOfArray = array.filter(elemetn => elemetn > 0 )
console.log(positiveElementOfArray);

//количество позитивных чисел в массиве
console.log('количество позитивных чисел в массиве: '+ positiveElementOfArray.length);

//находим сумму позитивных елементов массива
let summOfArray = positiveElementOfArray.reduce((sum, current) => sum + current, 0);
console.log('сумму позитивных елементов массива: '+ summOfArray);

//находим минимальное значение массива
const minValueOfArray = Math.min.apply(null, array);
console.log('минимальное значение массива: '+ minValueOfArray);

//находим порядковый номер манимального значения
const indexminValueOfArray = array.findIndex(elemetn => elemetn == minValueOfArray)
console.log('порядковый номер манимального значения: '+ indexminValueOfArray)

// находим максимальное значение массива
const maxValueOfArray = Math.max.apply(null, array);
console.log('максимальное значение массива '+ maxValueOfArray);

//находим порядковый номер максимального значения
const indexmaxValueOfArray = array.findIndex(elemetn => elemetn == maxValueOfArray)
console.log('порядковый номер максимального значения: '+ indexmaxValueOfArray)

//фильтруем числа меньше 0 (отрицательные числа)
const negativeElementOfArray = array.filter(elemetn => elemetn < 0 )
console.log('количество отрицательныx чисел в массиве: '+ negativeElementOfArray.length);

//находим не парные положительные значения
const unpairedPositive = positiveElementOfArray.filter(elem => elem % 2 );
console.log('количество не парных положительныx значений: '+ unpairedPositive.length)

//находим парные положительные значения
const pairPositive = positiveElementOfArray.filter(elem => elem % 2 === 0 );
console.log('количество парных положительныx значений: '+ pairPositive.length)

//сумма парных позитывных елементов
const summpairPositive = pairPositive.reduce((sum, current) => sum + current, 0);
console.log('сумма парных позитывных элемемнтов: '+ summpairPositive)

//сумма не парных позитывных елементов
const summUnpairedPositive = unpairedPositive.reduce((sum, current) => sum + current, 0);
console.log('сумма не парных позитывных элемемнтов: '+summUnpairedPositive)

//произведение положительных элементов
const multPositiveElement = positiveElementOfArray.reduce((accumulator, current) => accumulator * current);
console.log(multPositiveElement)

//Найти наибольший среди элементов массива, остальные обнулить
let max = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}

let result = array.map(val => max !== val ? 0 : val);
console.log(result);
