//*34

const input= document.querySelector('.input')
const activeBlock = document.querySelector('.input-active')


input.addEventListener("focus", () => {
   activeBlock.style.display = 'block';
});

input.addEventListener("blur", () => {
   activeBlock.style.display = 'none';
});
