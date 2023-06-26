const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const onSizeControlInput = (event) => {
  text.style.fontSize = `${event.target.value}px`;
};

sizeControl.addEventListener("input", onSizeControlInput);
