class Student {
   constructor(nameOfStudent, surnameOfStudent, yearBirth) {
       this.nameOfStudent = nameOfStudent;
       this.surnameOfStudent = surnameOfStudent;
       this.yearBirth = yearBirth;
       this.arrayOfScore = [];
       this.presence = new Array(25)
   }
   age() {
       return Math.max((new Date()).getFullYear() - this.yearBirth, 0) || undefined
   }
   averageRating() {
       const sum = this.arrayOfScore.reduce((acc, current) => acc + current);
       return sum / this.arrayOfScore.length;
   }
   present() {
       this.present(true)
   }

   absent() {
       this.present(false)
   }

   present(mark) {
       const asd = this.presence.findIndex(v => v === undefined)
       if (asd === -1) return
       this.presence[asd] = mark
   }

   summary() {
       const averageRating = this.averageRating();
       const presence = this.presence.filter((elem) => elem !== null && elem === true).length;
       const attendanceRating = (presence / this.presence.filter((elem) => elem !== null).length) * 100;

       if (averageRating > 90 && attendanceRating > 90) {
           console.log("Молодець!");
       } else if (averageRating > 90 || attendanceRating > 90) {
           console.log("Добре, але можна краще");
       } else console.log("Редиска!");
   }
}

const student1 = new Student("Боб", "Джонсон", 1995);
console.log(`Ім'я: ${student1.nameOfStudent}, Прізвище: ${student1.surnameOfStudent}, рік народження: ${student1.yearBirth} `);
student1.age();
console.log(`Вік студента ${student1.nameOfStudent} ${student1.surnameOfStudent}: ${student1.age()} `);
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.arrayOfScore.push(100, 60, 90, 92, 75);
console.log(`Середня оцінка студента ${student1.nameOfStudent} ${student1.surnameOfStudent}: ${student1.averageRating()} `)
student1.summary();



const student2 = new Student("Джейн", "Рич", 1998);
console.log(`Ім'я: ${student2.nameOfStudent}, Прізвище: ${student2.surnameOfStudent}, рік народження: ${student2.yearBirth} `);
student2.age();
console.log(`Вік студента ${student2.nameOfStudent} ${student2.surnameOfStudent}: ${student2.age()} `);
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.arrayOfScore.push(99, 100, 89, 98, 100);
console.log(`Середня оцінка студента ${student2.nameOfStudent} ${student2.surnameOfStudent}: ${student2.averageRating()} `)
student2.summary();




