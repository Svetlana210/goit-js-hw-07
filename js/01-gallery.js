import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGallery() {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
}
// console.log(createGallery())


gallery.insertAdjacentHTML('beforeend', createGallery());


gallery.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget)
    return;
  
  const selectedImage = e.target.dataset.source;
  // console.log(selectedImage)
  
  const instance = basicLightbox.create(
    `<img src="${selectedImage}" width="800" height="600">`)

  instance.show()
  
  gallery.addEventListener('keydown', onEscToClose)
  
  function onEscToClose(e) {
    if (e.key === 'Escape') {
    instance.close()
    }
    gallery.removeEventListener('keydown', onEscToClose)
    // console.log(e.key)
  }
     
}


