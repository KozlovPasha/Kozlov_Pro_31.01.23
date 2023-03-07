//* HW # 26
/*
1. Створити сутність "Людина".
    Властивості:
                імʼя;
                вік.
    Методи:
                конструктор, який приймає два параметри: імʼя та вік;
                метод, який виводить у консоль інформацію про людину.
2. Створити сутність "Автомобіль".
    Властивості:
                марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
                власник.
    Методи:
                конструктор, який приймає чотитри параметри (тобто, всі окрім власника):
                    марка, модель, рік виписку, номерний знак
                присвоїти власника - метод повинен приймати екземпляр класу Людина,
                    та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18,
                    інакше виводити у консоль відповідне повідомлення
                метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу
                інформації класу Людина для виведення інформації про власника
В якості демонстраціїї створити:
        декілька екземплярів класу Людина;
        декілька екземплярів класу Автомобіль;
        присвоїти власників автомобілям.
 */

class Human {
  constructor(name, age) {
      this.name = name
      this.age = age
  }
  profil() {
      console.log(`Имя ${this.name}, возраст ${this.age} лет`)
  }
}
const human = new Human('Bob', '20')
human.profil()
console.log(human)

const human2 = new Human('Jane', '17')
human2.profil()
console.log(human2)

class Car {
  constructor(brand, model, year, color) {
      this.brand = brand,
          this.model = model,
          this.year = year,
          this.color = color
  }
  owner(human) {
      if (human.age >= '18') {
          this.human = human
      } else { console.log('ты не можешь водить машину!') }
  }
  information() {
      console.log(`Марка ${this.brand} ,модель ${this.model}, год выпуска ${this.year},цвет ${this.color}`)
  }
}
const car1 = new Car('BMW', '5 series', '2020', 'black')
car1.information()
const car2 = new Car('Toyota', 'Prado', '2015', 'silver')
car2.information()

car1.owner(human)
car2.owner(human2)

