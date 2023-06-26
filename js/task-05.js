const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const newNameInput = (event) => {
  outputName.textContent = event.currentTarget.value;
};

inputName.addEventListener("input", newNameInput);
