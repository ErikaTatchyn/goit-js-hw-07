import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

const makeGalleryCard = ({ preview, original, description } = {}) => {
  return `
  <div class="gallery__item">
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" t src="${preview}" alt="${description}" />
    </a>
  </div>
  `;
};

const galleryCards = galleryItems.map((el) => makeGalleryCard(el)).join("");
galleryListEl.insertAdjacentHTML("beforeend", galleryCards);
let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  captionSelector: "img",
  captionType: "attr",
  captionPosition: "bottom",
});

const onPhotoItemElClick = (event) => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== "IMG") {
    return;
  }

  const title = target.alt;
  console.log(target.alt);
};

galleryListEl.addEventListener("click", onPhotoItemElClick);
