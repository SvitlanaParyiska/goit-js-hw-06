const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const newNameInput = (event) => {
  outputName.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputName.textContent = "Anonymous";
  }
};

inputName.addEventListener("input", newNameInput);
