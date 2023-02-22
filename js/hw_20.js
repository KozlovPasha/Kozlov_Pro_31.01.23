//* HW # 20
//Реалізувати рекурсивну функцію, яка зводить число в ступінь.
//Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
//Ступінь передається як другий аргумент у функціюpow (num, degree).
const num = +prompt('введите число для вознесенния в степень')
const degree = +prompt('введите число степеня')

function pow (num , degree){
   if (degree == 1) {
      return num;
    } else {
      return num * pow(num, degree - 1);
    }
}
alert(pow(`${num}` , `${degree}` ));

