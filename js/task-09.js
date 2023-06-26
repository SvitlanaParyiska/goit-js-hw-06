function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const textColorValue = document.querySelector(".color");
btnChangeColor.addEventListener("click", onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  const newColor = getRandomHexColor();
  textColorValue.textContent = newColor;
  document.body.style.backgroundColor = newColor;
}
