import { useState, useEffect } from 'react';
import { fetchPopularMovies } from 'api';
import { Loader } from 'components/Loader/Loader';
import { PopularMoviesList, PopularMoviesItem } from './Home.styled';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [fetchStatus, setIsFetchStatus] = useState(false);

  useEffect(() => {
    if (fetchStatus) {
      return;
    }
    async function getMovies() {
      try {
        setIsLoading(true);
        const initialMovies = await fetchPopularMovies();
        setPopularMovies(initialMovies.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetchStatus(true);
        setIsLoading(false);
      }
    }
    getMovies();
  }, [fetchStatus]);

  return (
    <div>
      <h2>Popular movies:</h2>
      <PopularMoviesList>
        {isLoading && <Loader />}
        {popularMovies.length &&
          popularMovies.map(movie => (
            <PopularMoviesItem key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </PopularMoviesItem>
          ))}
      </PopularMoviesList>
    </div>
  );
};
