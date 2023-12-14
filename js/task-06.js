console.log('Task-06')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('.input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const newBoxes = document.querySelector('#boxes');

function createBoxes (amount) {
  let size = 30;
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    size += 1;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    elements.push(box);
  }
  
  newBoxes.appendChild(...elements);
}

buttonCreate.addEventListener('click', () => {
  const amount = inputNumber.value;
  createBoxes(amount);
  inputNumber.value = '';
})

buttonDestroy.addEventListener('click', () => {
  newBoxes.innerHTML = '';
})