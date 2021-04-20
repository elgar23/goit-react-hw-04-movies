const KEY_API = 'dd7a2db9a3b771c4a1b377a8471b1362';

const homePage = () => {
  return `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY_API}`;
};

const moviesPage = search => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&language=en-US&query=${search}&page=1&include_adult=false`;
};

const movieDetailsPage = id => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY_API}&language=en-US`;
};

const cast = id => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY_API}&language=en-US`;
};

const reviews = id => {
  return `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY_API}&language=en-US&page=1`;
};

export { movieDetailsPage, moviesPage, homePage, cast, reviews };