function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputBox = document.querySelector("#controls");
const input = inputBox.firstElementChild; // у инпута нет ни класса ни айди, потому через родителя
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const newBox = document.querySelector("#boxes");

createBtn.addEventListener("click", createNumbBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createNumbBoxes() {
  createBoxes(input.value);
}

function createBoxes(amount) {
  let divStr = "";
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    divStr += `<div style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px;"></div>`;
    size += 10;
  }
  console.log(divStr);
  newBox.insertAdjacentHTML("afterbegin", divStr);
}

function destroyBoxes() {
  newBox.innerHTML = "";
}
