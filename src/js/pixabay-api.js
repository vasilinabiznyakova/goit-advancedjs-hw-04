import axios from 'axios';

const API_KEY = '29465833-2a7a79fc7318dfcd77a5c91cc';
const BASE_URL = 'https://pixabay.com/api/';

export const PER_PAGE = 15;

export const getImagesByQuery = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });

  return response.data;
};
