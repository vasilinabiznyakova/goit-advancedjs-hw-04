import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const formEl = document.querySelector('.form');

const errorToast = message =>
  iziToast.error({
    message,
    position: 'topRight',
    messageColor: '#ffffff',
    backgroundColor: '#ef4040',
    class: 'custom-toast',
    timeout: 4000,
  });

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    errorToast('Please enter a search query!');
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        errorToast(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
        return;
      }
      createGallery(data.hits);
    })
    .catch(() => {
      errorToast('Something went wrong. Please try again later!');
    })
    .finally(() => {
      hideLoader();
      formEl.reset();
    });
});
