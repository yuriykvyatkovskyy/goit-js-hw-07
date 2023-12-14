console.log('Task-06')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  destroyBoxes();
  let inputNumber = document.querySelector('input');
  amount = inputNumber.value;
  if (amount > 0 && amount <= 100) {
    let boxes = document.querySelector('#boxes');
    let curWidth = 30;
    let curHeigth = 30;
    const elements = [];
    Array.from({ length: amount }).map(() => {
      const box = document.createElement('div');
      box.style.width = `${curWidth}px`;
      box.style.height = `${curHeigth}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.marginTop = '14px';
      curWidth += 10;
      curHeigth += 10;
      elements.push(box);
    });
    boxes.append(...elements);
  };
  inputNumber.value = '';
};

let buttonCreate = document.querySelector('[data-create]');
buttonCreate.addEventListener('click', createBoxes); 
  
const destroyBoxes = () => {
  let newBoxes = document.querySelector('#boxes');
  console.log(newBoxes);
  newBoxes.replaceChildren();
};

let buttonDestroy = document.querySelector('[data-destroy]');
buttonDestroy.addEventListener('click', destroyBoxes);