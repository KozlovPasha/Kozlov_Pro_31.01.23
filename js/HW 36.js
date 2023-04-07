//ДЗ 36 Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

//за ранее создаем тег который нам нужен
const newElementIMG = document.createElement('img')

//присваиваем класс созданому тегу
newElementIMG.className = 'jpg';
newElementIMG.style.width='150px'
newElementIMG.style.height='200px'
//обращаемся к тегу который мы создали в HTML c id
const hostElemeent = document.getElementById('asd')

//указываем где будет находится наш новосозданный тег (в данном случае втутри тега созданого в HTML)
hostElemeent.appendChild(newElementIMG)

const random = Math.floor(Math.random() * 9)+1;


newElementIMG.src = `img/${random}.jpg`

