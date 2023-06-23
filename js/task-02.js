const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const makeItem = (ingredient) => {
  const productEl = document.createElement("li");
  productEl.classList.add("item");
  productEl.textContent = ingredient;

  return productEl;
};

const elements = ingredients.map(makeItem);

list.append(...elements);
