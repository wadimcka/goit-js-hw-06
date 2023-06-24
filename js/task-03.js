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

const makeGalleryListItemMurkup = (images) => {
  const { url, alt } = images;
  return `<li><img src="${url}" alt="${alt}"></li>`;
};
// console.log(makeGalleryListItemMurkup(images[0]));
const makeGalleryListArray = images.map(makeGalleryListItemMurkup).join("");
// console.log(makeGalleryListArray);
const galleryList = document.querySelector(".gallery");
// console.dir(galleryList);
galleryList.insertAdjacentHTML("beforeend", makeGalleryListArray);
// console.log(galleryList);
console.log(galleryList);
