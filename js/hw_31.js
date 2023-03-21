//* HW # 31

/*1) Избавится от неуникальных элементов массива
const numbersArray = [1,1,2,3,4,5,5,5,6];

2) Создать Map который будет по переданному объекту возвращать строку привествия
greetUser(userBob) // Hello Bob nice to see you
greetUser(userJane) // How your kids doing Jane?
Иными словами создать Map где ключ это будет объект а значение строка

3) Создать функцию по превращению Map в object или object в Map в зависимости от того что было передано в функцию.
*/
const numbersArray = [1,1,2,3,4,5,5,5,6];
const uniqueArray = new Set(numbersArray)
const arr = [...uniqueArray]
console.log(arr)



const userBob = {
  name:'Bob'
}
const userJane = {
  name:'Jane'
}

const myMap = new Map()
myMap.set(userBob,()=> console.log('Hello Bob nice to see you'))
myMap.set(userJane,()=> console.log('How your kids doing Jane?'))

const greetUser = myMap.get(userJane)
greetUser()
// const greetUser = myMap.get(userBob)
// greetUser()




const luke = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  occupation: 'Jedi Knight',
}


const toMapFunk = () => {
  if (luke) {
    const toMap = new Map(Object.entries(luke))
    return toMap
  } else {
    console.log('err')
  }
}
console.log(toMapFunk())


// const masd = new Map([
//   ['firstName', 'Luke'],
//   ['lastName', 'Skywalker'],
//   ['occupation', 'Jedi Knight'],
// ])

// const toObjFunk = () => {
//   const obj = Object.fromEntries(masd)
//   return obj
// }
// console.log(toObjFunk())