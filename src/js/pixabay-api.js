import axios from 'axios';

const API_KEY = '29465833-2a7a79fc7318dfcd77a5c91cc';
const baseUrl = 'https://pixabay.com/api/';

export const getImagesByQuery = async query => {
  const response = await axios.get(baseUrl, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
};
