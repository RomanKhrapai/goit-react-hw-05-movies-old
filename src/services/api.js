import axios from 'axios';

const key = '967c6f14dacb0ca10f1175f7851a5869';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const t = 5;

export const fetchSearchMovie = async (page, search) => {
  const response = await axios.get(
    `search/movie?api_key=${key}&language=en-US&page=${page}&include_adult=false&query=${search}`
  );
  console.log(response);
  return response.data;
};

export const fetchTrendingMovie = async page => {
  const response = await axios.get(
    `trending/movie/day?api_key=${key}&page=${page}`
  );
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${key}&language=en-US`
  );
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${key}&language=en-US`
  );
  return response.data;
};

export const fetchMovieReviews = async (page, movieId) => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${key}&language=en-US&${page}`
  );
  return response.data;
};
