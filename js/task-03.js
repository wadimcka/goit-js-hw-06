// const makeGalleryListItemMurkup = (images) => {
//   const { url, alt } = images;
//   return `<li><img src="${url}" alt="${alt}"></li>`;
// };

// const makeGalleryListArray = images.map(makeGalleryListItemMurkup).join("");
// const galleryListEl = document.querySelector(".gallery");
// galleryListEl.insertAdjacentHTML("beforeend", makeGalleryListArray);
// console.log(galleryListEl);

// 13.02.25

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector("Ul.gallery");
console.log(listEl);

function createListItemsMarkup(arr, parentElem) {
  const liElem = arr
    .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
    .join(" ");
  return parentElem.insertAdjacentHTML("beforeend", liElem);
}

createListItemsMarkup(images, listEl);
