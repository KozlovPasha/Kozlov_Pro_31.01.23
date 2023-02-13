//* HW # 17
//Реалізуйте функцію generateKey(length, characters),
// яка повертає рядок випадкових символів із набору characters довжиною length. span>

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters){
   word = '';
   for(let i = 0; i < length; i++){
      word += characters[Math.round(Math.random() * (characters.length - 1))];
  }
  return word
}
console.log(generateKey(10,characters))


