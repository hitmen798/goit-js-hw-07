import { galleryItems } from './gallery-items.js';
// Change code below this line



function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join('');
}

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryMarkup(galleryItems);

gallery.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  
  const imageSource = event.target.dataset.source;
  
  const instance = basicLightbox.create(`
    <img src="${imageSource}" width="800" height="600">
  `);
  
  instance.show();
}