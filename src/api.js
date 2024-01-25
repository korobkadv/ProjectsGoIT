import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=20351609-965303b189c8fb7b47d74cc62';

export const fetchPixabayImages = async (query, page) => {
  const response = await axios.get('', {
    params: {
      q: query,
      page: page,
    },
  });
  return response.data;
};
