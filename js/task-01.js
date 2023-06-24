const categoriesList = document.querySelectorAll("ul#categories > li.item");
// console.log(categoriesList);
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((categoryItem) => {
  const itemTitle = categoryItem.querySelector("h2").textContent;
  const elemList = categoryItem.querySelectorAll("ul>li");
  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${elemList.length}`);
});
