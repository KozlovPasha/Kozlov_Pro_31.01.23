//* HW # 32

/*
Создать цепочку промисов (длинной минимум в 3) - свой распорядок дня
*/
const promise = new Promise((resolve) => {
   setTimeout(() => {
     resolve('встаю с кровати в 07:00');
   }, 1000);
 }).then((action) => {
   console.log(action)
   return new Promise((resolve) => {
     resolve('умываю лицо в 07:10')
   })
 }).then((action2) => {
   console.log(action2)
   return new Promise((resolve) => {
     resolve('чищу зубы в 07:13')
   })
 }).then((action3) => {
   console.log(action3)
   return new Promise((resolve) => {
     resolve('завтракаю в  07:30')
   })
 }).then((action4) => {
   console.log(action4)
   return new Promise((resolve) => {
     resolve('Учу любимый JavaScript с 08:00 до 22:00')
   })
 }).then((action4) => console.log(action4)).catch((error) => console.log("Произошла ошибка "));