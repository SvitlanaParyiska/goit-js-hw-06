function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputBox = document.querySelector("#controls");
const newBox = document.querySelector("#boxes");
const divArr = [...inputBox.children];

divArr[1].addEventListener("click", createNumbBoxes);
divArr[2].addEventListener("click", destroyBoxes);

function createNumbBoxes() {
  createBoxes(divArr[0].value);
}

function createBoxes(amount) {
  let divStr = "";
  let width = 20;
  let height = 20;
  for (let i = 1; i <= amount; i++) {
    divStr += `<div style="background-color:${getRandomHexColor()}; width:${(width += 10)}px; height:${(height += 10)}px;"></div>`;
  }
  console.log(divStr);
  newBox.insertAdjacentHTML("afterbegin", divStr);
}

function destroyBoxes() {
  newBox.innerHTML = "";
}
