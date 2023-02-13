//* HW # 16
// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

function removeElement(array,item) {
  item = array.indexOf(item)
  array.splice(item, 1)
  console.log(array)
}
removeElement([51, 52, 53, 54, 55, 56, 57],53);