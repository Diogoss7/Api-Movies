export const addMovieToLocalStorage = (movieId) => {
    const watchedMovies = getWatchedMoviesFromLocalStorage();
    if (!watchedMovies.includes(movieId)) {
      watchedMovies.push(movieId);
      localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
    }
  };
  
  export const removeMovieFromLocalStorage = (movieId) => {
    const watchedMovies = getWatchedMoviesFromLocalStorage();
    const updatedMovies = watchedMovies.filter((id) => id !== movieId);
    localStorage.setItem('watchedMovies', JSON.stringify(updatedMovies));
  };
  
  export const getWatchedMoviesFromLocalStorage = () => {
    const watchedMovies = localStorage.getItem('watchedMovies');
    return watchedMovies ? JSON.parse(watchedMovies) : [];
  };
  