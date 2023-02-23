//* HW # 21
//Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
let ladder = {
   step: 0,
   up: function () {
       this.step++;
       return this
   },
   down: function () {
       this.step--;
       return this
   },
   showStep: function () { // показывает текущую ступеньку
       alert(this.step);
       return this
   }
};
//Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

//Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

ladder.up().up().up().up().up().up().up().up().down().down().showStep(); // 6



