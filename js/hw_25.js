//* HW # 25
/*
1. Створити клас Людина.
    Властивості:
                імʼя;
                стать.
    Методи:
                конструктор, який приймає два параметри: імʼя та стать.
2. Створити клас Квартира.
    Властивості:
                конструктор не потрібен;
                масив жителів, який при створенні пустий.
    Методи:
                додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
3. Створити клас Будинок.
    Властивості:
                масив квартир, який при створенні пустий;
                максимальна кількість квартир.
    Методи:
                конструктор, який приймає один параметр: максимальну кількість квартир;
                додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти,
                чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так,
                додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
В якості демонстраціїї створити:
        декілька екземплярів класу Людина;
        декілька екземплярів класу Квартира;
        додадити екземпляри класу Людина до екземплярів класу Квартира;
        екземпляр класу Будинок;
        додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/


class Human {
   constructor(name, gender) {
      this.name = name
      this.gender = gender
   }
}
const humanOne = new Human('Боб', 'мужской')
console.log(humanOne)
const humanTwoo = new Human('Лена', 'женский')
console.log(humanTwoo)


class Apartment {
   arrayOfResidents = []
   residents(human) {
      this.arrayOfResidents.push(human)
   }
}
const apartmentOne = new Apartment()
apartmentOne.residents('Муж')
console.log(apartmentOne)

const apartmentTwoo = new Apartment()
apartmentTwoo.residents('Жена')
console.log(apartmentTwoo)


class House {
   constructor() {
      this.arrayOfRooms = []
      this.maxNumberOfRooms = 5
   }
   addRoom(room) {
      if (room < this.maxNumberOfRooms) {
         this.arrayOfRooms.push(room)
      } else { console.log('квартир не залишилось') }
   }
}
const houseOne = new House()
houseOne.addRoom('3')
console.log(houseOne)
const houseTwoo = new House()
houseTwoo.addRoom('6')
console.log(houseTwoo)

