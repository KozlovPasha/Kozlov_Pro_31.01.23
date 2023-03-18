//* HW # 30
/*
Створити клас SuperMath.
Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak.
Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У.
Якщо хоче, зробити математичну дію znak (яка описана в прототипі),
інакше - запитати введення нових даних через метод input() класу SuperMath.
Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
*/
let obj = { X: 25, Y: 5, znak: "*" };
class SuperMath {
  check(obj) {
    const perem = confirm(`Виконати операцію ${obj.X} ${obj.znak} ${obj.Y}?`);
    let userRes = 0;
    if (perem) {
      if (obj.znak === '+') {
        userRes = obj.X + obj.Y
      } else if (obj.znak === '-') {
        userRes = obj.X - obj.Y
      } else if (obj.znak === '/') {
        userRes = obj.X / obj.Y
      } else if (obj.znak === '*') {
        userRes = obj.X * obj.Y
      } else if (obj.znak === "%") {
        userRes = obj.X % obj.Y;
      }
    } else {
      this.input()
    }
    
    let alertsZnak = ''
    if (obj.znak === '+') {
      alertsZnak = 'додавання'
    } else if (obj.znak === '-') {
      alertsZnak = 'віднімання'
    } else if (obj.znak === '/') {
      alertsZnak = 'ділення'
    } else if (obj.znak === '*') {
      alertsZnak = 'множення'
    } else if (obj.znak === '%') {
      alertsZnak = 'частки від ділення'
    } 
    alert(` Результат ${alertsZnak} ${obj.X} ${obj.znak} ${obj.Y} = ${userRes}`);
  }

  input() {
    let result = 0;
    const userZnak = prompt('Введіть результат математичної дії : + - / * %')
    const numX = +prompt('Введіть перше число')
    const numY = +prompt('Введіть друге число')

    if (userZnak === '+') {
      result = numX + numY;
    } else if (userZnak === '-') {
      result = numX - numY;
    } else if (userZnak === '*') {
      result = numX * numY;
    } else if (userZnak === '/') {
      result = numX / numY;
    } else if (userZnak === '%') {
      result = numX % numY;
    } else {
      alert(`Ви обрали не коректну математичну дію`)
    }
    alert(`Результат: ${result}`)
  }
}

const p = new SuperMath();
console.log(p)
p.check(obj);


