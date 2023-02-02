//* HW # 7
const action = prompt('What do you want to do? (add, sub, mult, div)')
console.log(action)
const firstNumb =Number(prompt ('Enter the first number!'))
const secondNumb = Number(prompt ('Enter the second number!'))
let res = 0

if (action === 'add'){
    res = firstNumb + secondNumb
   alert(`${firstNumb}` + '+' + `${secondNumb}`+ '='+ `${res}` )
} else if (action === 'sub') {
   res = firstNumb - secondNumb
   alert(`${firstNumb}` + '-' + `${secondNumb}`+ '='+ `${res}` )
} else if (action === 'mult') {
   res = firstNumb * secondNumb
   alert(`${firstNumb}` + '*' + `${secondNumb}`+ '='+ `${res}` )
} else if (action === 'div') {
   res = firstNumb / secondNumb
   alert(`${firstNumb}` + '/' + `${secondNumb}`+ '='+ `${res}` )
} else {
   alert( 'tru again' );
}