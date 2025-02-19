// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const listElem = document.querySelector("#ingredients");

// const readyElements = ingredients.map((ingredient) => {
//   const itemElem = document.createElement("li");
//   itemElem.textContent = ingredient;
//   itemElem.classList.add("item");
//   return itemElem;
// });

// listElem.append(...readyElements);
// console.log(listElem);

// 13.02.25
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

function ingredientListItemsMarkup(arr) {
  const liItems = arr.map((item) => {
    const liElement = document.createElement("li");
    liElement.textContent = item;
    liElement.classList.add("item");
    return liElement;
  });
  return ulEl.append(...liItems);
}

ingredientListItemsMarkup(ingredients);
