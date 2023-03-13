//* HW # 28
// 1. Создать функцию которая будет принимать миллисекунды и вернет true или false
//   в зависимости от того сегодня ли то число которое было передано
// 2. Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды
// 3 .Создать функцию которая принимает миллисекунды и вернет количество времени которое прошло или должно пройти с текущего момента.


function booleanDate(time) {
   const asd = new Date().getTime()
   console.log(asd)
   if (asd === time) {
      return true
   } else { return false }
}
console.log(booleanDate(1678736238186))


function returnDate(milisecond) {
   const date = new Date(2022, 9, 13, 13, 13)
   const asd = date.getTime()
   if (asd === milisecond) {
      return date
   } else { console.log('err') }
}
console.log(returnDate(1665655980000))


function time(milisecond) {
   const myDate = new Date(milisecond);
   const today = new Date();
   const diff = myDate.getTime() - today.getTime();
   return (`Прошло уже ${diff} милисекунд`)
}
console.log(time(1678737825140));


