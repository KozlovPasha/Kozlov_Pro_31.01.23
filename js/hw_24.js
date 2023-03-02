//* HW # 24 (1)
//Создать функцию которая будет принимать имя пользователя и время через которое он хочет чтоб его поприветствовали. 
//Время пользователь хочет вводить строкой в разном формате например '10 minutes' , '20 seconds', '1 hour', '2 hour

function sayHi(time, name) {
   const timeArray = time.split(" ",);
   let yourNumberTime = timeArray.slice(0, 1);
   let yourTime = timeArray.splice(1, 1);
   yourNumberTime = yourNumberTime.join()
   yourTime = yourTime.join();
   let interval
   switch (yourTime) {
      case 'секунда':
      case 'секунд':
         interval = yourNumberTime * 1000;
         break;
      case 'минута':
      case 'минут':
         interval = (yourNumberTime * 60) * 1000;
         break;
      case 'час':
      case 'часов':
         interval = (yourNumberTime * 3600) * 1000;
         break;
      default:
         console.log("не верное значение времени!");
   }
   setTimeout(function sayHi() {
      alert(`Привет, ${name}!`);
   }, interval);
}
sayHi("5 секунд", "Паша")


//* HW # 24 (2)
//Создать функцию которая будет или сериализировать или десериализировать объект 
//в зависимости от того в какой форме он был передан

let student = `{"name": "John","surname": "Smith","isAdmin": false}`;
console.log(student)

function json() {
   let result
   if (typeof student === 'object') {
      result = JSON.stringify(student)
      console.log(result)
   } else {
      result = JSON.parse(student)
      console.log(result)
   }
}
json(student)



//* HW # 24 (3)
//Создать функцию которая вернет true или false в зависимости от того что в нее передать JSON строку или обычную строку

function isJSONString(str) {
   try {
      JSON.parse(str);
      return true;
   } catch (error) {
      return false;
   }
}

const jsonString = '{"name": "John", "age": 30}';
const regularString = 'Hello, world!';

console.log(isJSONString(jsonString)); // true
console.log(isJSONString(regularString)); // false



