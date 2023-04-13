/*//*ДЗ 38 Пишемо свій слайдер зображень.

Відображаємо зображення та кнопки Next, Prev з боків від зображення.
При кліку на Next - показуємо наступне зображення.
При кліку на Prev - попереднє .
При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.
*/



const buttonNext = document.createElement('button')
const buttonPrev = document.createElement('button')
const imgBlock = document.createElement('img')


const arrayImg = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png']


buttonNext.classList = 'btn next'
buttonPrev.classList = 'btn prev'


buttonNext.innerText = 'Next slide'
buttonPrev.innerText = 'Previous slide'


imgBlock.src = `img/1.png`


const wrapper = document.getElementById('wrapper')

wrapper.append(buttonPrev, imgBlock, buttonNext)


let theNum = 0;

const hiddenButton = () => {
  if (theNum === 0) {
    buttonPrev.style.display = "none";
  } else {
    buttonPrev.style.display = "block";
  }
  if (theNum === arrayImg.length-1) {
    buttonNext.style.display = "none";
  } else {
    buttonNext.style.display = "block";
  }
}


buttonNext.addEventListener("click", handlerNext)

function handlerNext() {
  theNum++;
  if (theNum === arrayImg.length) {
    theNum = "0";
  }
  imgBlock.src = arrayImg[theNum];
  hiddenButton()
}


buttonPrev.addEventListener("click", handlerPrev)

function handlerPrev() {
  theNum--;
  if (theNum === arrayImg.length) { theNum = "0"; }
  imgBlock.src = arrayImg[theNum];
  hiddenButton()
}

hiddenButton()


