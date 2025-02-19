// const categoriEl = document.querySelectorAll("ul#categories > li.item");
// console.log(`Number of categories: ${categoriEl.length}`);

// categoriEl.forEach((elem) => {
//   const titlElemText = elem.firstElementChild.textContent;
//   const elementList = elem.lastElementChild.children.length;
//   console.log(`Category: ${titlElemText}`);
//   console.log(`Elements: ${elementList}`);
// });
// 13.02.25
const ulEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${ulEl.length}`);

const result = ulEl.forEach((el) =>
  console.log(
    `Category: ${el.firstElementChild.textContent}\n Elements: ${el.lastElementChild.children.length}`
  )
);
