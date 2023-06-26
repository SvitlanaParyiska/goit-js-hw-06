let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueText = document.querySelector("#value");

const onDecrementBtnClick = () => {
  counterValue -= 1;
  valueText.textContent = counterValue;
};

const onIncrementBtnClick = () => {
  counterValue += 1;
  valueText.textContent = counterValue;
};

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);
