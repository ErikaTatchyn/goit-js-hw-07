import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

const makeGalleryCard = ({ preview, original, description } = {}) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
};

const galleryCards = galleryItems.map((el) => makeGalleryCard(el)).join("");
galleryListEl.insertAdjacentHTML("beforeend", galleryCards);

const onPhotoItemElClick = (event) => {
  event.preventDefault();

  const { target } = event;

  if (target.nodeName !== "IMG") {
    return;
  }

  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${target.dataset.source}">
	`
    )
    .show();
};

galleryListEl.addEventListener("click", onPhotoItemElClick);
