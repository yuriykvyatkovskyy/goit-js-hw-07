console.log('Task-01');

let listItem = document.querySelectorAll('li.item');
const calcItem = listItem.length;
console.log(`Number of categories: ${calcItem}`);

listItem.forEach(item => {
    const nameItem = item.querySelector('h2');
    console.log(`Category: ${nameItem.textContent}`);

    const calculate = item.querySelectorAll('li').length;
    console.log(`Elements: ${calculate}`);
});