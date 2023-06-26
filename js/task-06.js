const inputVal = document.querySelector("#validation-input");

const validation = (event) => {
  if (event.currentTarget.value.length == inputVal.dataset.length) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  } else inputVal.classList.add("invalid");
};

inputVal.addEventListener("blur", validation);
