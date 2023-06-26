const categoriEl = document.querySelectorAll("ul#categories > li.item");
console.log(`Number of categories: ${categoriEl.length}`);

categoriEl.forEach((elem) => {
  const titlElemText = elem.firstElementChild.textContent;
  const elementList = elem.lastElementChild.children.length;
  console.log(`Category: ${titlElemText}`);
  console.log(`Elements: ${elementList}`);
});
