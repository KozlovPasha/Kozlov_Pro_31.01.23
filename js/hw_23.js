//* HW # 23
//Створити ланцюжок прототипів машина => певна марка машини.
//У підсумкового інстансу повинні бути функції машини типу їхати і гальмувати з прототипу 
//так і функції пов'язані з маркою машини типу вертикального відкриття дверей Lamborghini.

function Cars () {
   this.drive = 'машина может ехать',
   this.break = 'машина может тормозить',
   this.openDoors = "cтандартное открывание дверей"
}
const regularCar = new Cars()
console.log(regularCar)

function Lamborghin(){
   this.openDoors = "вертикальное открывание дверей"
}
Lamborghin.prototype = regularCar
const myCar = new Lamborghin()
console.log(myCar)



