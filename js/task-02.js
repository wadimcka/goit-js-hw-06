const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElem = document.querySelector("#ingredients");
// console.dir(listElem);

const readyElem = ingredients.map((ingredient) => {
  // console.log(ingredient);
  const itemElem = document.createElement("li");
  itemElem.textContent = ingredient;
  itemElem.classList.add("item");
  // console.log(itemElem);
  return itemElem;
});

listElem.append(...readyElem);

console.log(listElem);
