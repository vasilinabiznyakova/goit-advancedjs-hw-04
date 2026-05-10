import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, PER_PAGE } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const formEl = document.querySelector('.form');
const loadMoreBtnEl = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

const errorToast = message =>
  iziToast.error({
    message,
    position: 'topRight',
    messageColor: '#ffffff',
    backgroundColor: '#ef4040',
    class: 'custom-toast',
    timeout: 4000,
  });

const infoToast = message =>
  iziToast.info({
    message,
    position: 'topRight',
    timeout: 4000,
  });

const loadImages = async () => {
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (data.hits.length === 0) {
      errorToast(
        'Sorry, there are no images matching your search query. Please, try again!'
      );
      return;
    }

    totalHits = data.totalHits;
    createGallery(data.hits);

    if (currentPage * PER_PAGE >= totalHits) {
      infoToast("We're sorry, but you've reached the end of search results.");
    } else {
      showLoadMoreButton();
    }

    if (currentPage > 1) {
      const card = document.querySelector('.gallery-item');
      if (card) {
        const { height } = card.getBoundingClientRect();
        window.scrollBy({ top: height * 2, behavior: 'smooth' });
      }
    }
  } catch {
    errorToast('Something went wrong. Please try again later!');
  } finally {
    hideLoader();
  }
};

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    errorToast('Please enter a search query!');
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();

  await loadImages();

  formEl.reset();
});

loadMoreBtnEl.addEventListener('click', async () => {
  currentPage += 1;
  await loadImages();
});
