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

const readyElements = ingredients.map((ingredient) => {
  // console.log(ingredient);
  const itemElem = document.createElement("li");
  itemElem.textContent = ingredient;
  itemElem.classList.add("item");
  // console.log(itemElem);
  return itemElem;
});

listElem.append(...readyElements);
console.log(listElem);

// Вариант 2
// const listElem = document.querySelector("#ingredients");

// const makeIngredientsListIlem = ingredients => {
//   return ingredients.map(ingredient => {
//     const itemElem = document.createElement("li");
//     itemElem.textContent = ingredient;
//     itemElem.classList.add("item")
//     return itemElem;
//   });
// }

// const readyElements = makeIngredientsListIlem(ingredients);
// listElem.append(...readyElem);
