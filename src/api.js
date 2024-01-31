import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/movie/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGRjNDlhZTViNGU1NjZmOTRiM2Q0YmIyYzRmNzU0MCIsInN1YiI6IjY1YjdjZWJmMGZiMTdmMDE3YjM0ZmE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k8B34-vuhkf17vWcOVLlbZyRATlzvrIuKqvZCYtsF38';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchPopularMovies = async () => {
  const response = await axios.get(baseURL + 'popular');
  return response.data;
};

export const fetchDetailsMovie = async id => {
  const response = await axios.get(baseURL + id);
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(baseURL + id + '/credits');
  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(baseURL + id + '/reviews');
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie?query=' + query
  );
  return response.data.results;
};
