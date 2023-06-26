const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElem = document.querySelector("#ingredients");

const readyElements = ingredients.map((ingredient) => {
  const itemElem = document.createElement("li");
  itemElem.textContent = ingredient;
  itemElem.classList.add("item");
  return itemElem;
});

listElem.append(...readyElements);
console.log(listElem);
