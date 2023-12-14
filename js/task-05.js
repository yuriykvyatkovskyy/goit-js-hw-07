console.log('Task-05');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const bodyValue = document.querySelector('body');
const backGrdColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  bodyValue.style.backgroundColor = randomColor;
  backGrdColor.textContent = randomColor;
});