import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGRjNDlhZTViNGU1NjZmOTRiM2Q0YmIyYzRmNzU0MCIsInN1YiI6IjY1YjdjZWJmMGZiMTdmMDE3YjM0ZmE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k8B34-vuhkf17vWcOVLlbZyRATlzvrIuKqvZCYtsF38';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchPopularMovies = async () => {
  const response = await axios.get('popular');
  return response.data;
};

export const fetchDetailsMovie = async id => {
  const response = await axios.get(id);
  return response.data;
};
