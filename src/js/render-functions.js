import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = images => {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
          <ul class="gallery-info">
            <li class="gallery-info-item">
              <span class="gallery-info-label">Likes</span>
              <span class="gallery-info-value">${likes}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-label">Views</span>
              <span class="gallery-info-value">${views}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-label">Comments</span>
              <span class="gallery-info-value">${comments}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-label">Downloads</span>
              <span class="gallery-info-value">${downloads}</span>
            </li>
          </ul>
        </a>
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
};

export const clearGallery = () => {
  galleryEl.innerHTML = '';
};

export const showLoader = () => {
  loaderEl.classList.add('is-visible');
};

export const hideLoader = () => {
  loaderEl.classList.remove('is-visible');
};
