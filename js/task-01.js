const categories = document.querySelector("#categories");

function totalCategories() {
  let totalCategs = 0;
  [...categories.children].forEach((item) => {
    totalCategs += 1;
  });
  return `Number of categories: ${totalCategs}`;
}
console.log(totalCategories());

[...categories.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  let totalElements = 0;
  [...item.lastElementChild.children].forEach((elem) => {
    totalElements += 1;
  });
  console.log(`Elements: ${totalElements}`);
});
