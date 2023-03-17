//* HW # 29
/*
Мережа фастфудів пропонує кілька видів гамбургерів:
маленький (50 тугриків, 20 калорій);
великий (100 тугриків, 40 калорій).

Гамбургер може бути з одним із декількох видів начинок:
сиром (+ 10 тугриків, + 20 калорій);
салатом (+ 20 тугриків, + 5 калорій);
картоплею (+ 15 тугриків, + 10 калорій).

Можна додати добавки:
посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)
*/

class Hamburger {
   constructor(size, stuffing) {
     this.size = size;
     this.stuffing = stuffing;
     this.topping = [];
   }
   static SIZE_SMALL = { price: 50, calories: 20 };
   static SIZE_BIG = { price: 100, calories: 40 };
 
   static STUFFING_CHEESE = { price: 10, calories: 20 };
   static STUFFING_SALAD = { price: 50, calories: 5 };
   static STUFFING_POTATO = { price: 15, calories: 10 };
 
   static TOPPING_SAUSE = { price: 15, calories: 0 };
   static TOPPING_MAYO = { price: 20, calories: 5 };
 
   addTopping(value) {
     this.topping.push(value)
   }
   calculateCalories() {
     const sizeCalories = this.size.calories;
     const stuffingCalories = this.stuffing.calories;
     const toppingCalories = this.topping.reduce((acc, current) => acc + current.calories, 0);
     const fullCalories = sizeCalories + stuffingCalories + toppingCalories;
     return fullCalories;
   }
   calculatePrice() {
     const sizePrice = this.size.price;
     const stuffingPrice = this.stuffing.price;
     const toppingPrice = this.topping.reduce((acc, current) => acc + current.price,0);
     const fullPrice = sizePrice + stuffingPrice + toppingPrice;
     return fullPrice;
   }
 
 }
 
 //* // великий гамбургер з начинкою з сиру
 const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE)
 console.log(hamburger)
 
 //* // добавка з майонезу
 hamburger.addTopping(Hamburger.TOPPING_MAYO,);
 
 //* // запитаємо скільки там калорій
 console.log('Calories: ' + hamburger.calculateCalories());
 
 //* // скільки коштує
 console.log('Price: ' + hamburger.calculatePrice());
 
 //* // я тут передумав і вирішив додати ще приправу
 hamburger.addTopping(Hamburger.TOPPING_SAUSE);
 console.log(hamburger.topping)
 
 //* // А скільки тепер коштує?
 console.log('Price with sauce: ' + hamburger.calculatePrice());
 


