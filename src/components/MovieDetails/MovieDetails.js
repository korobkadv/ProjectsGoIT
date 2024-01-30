import { useState, useEffect } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchDetailsMovie } from 'api';
import { Loader } from 'components/Loader/Loader';
import {
  MovieCard,
  Image,
  GenresList,
  GenresItem,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [fetchStatus, setIsFetchStatus] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (fetchStatus) {
      return;
    }
    async function getMovies() {
      try {
        setIsLoading(true);
        const initialMoviesDetails = await fetchDetailsMovie(params.movieId);
        setMovieDetails(initialMoviesDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetchStatus(true);
        setIsLoading(false);
      }
    }
    getMovies();
  }, [fetchStatus, movieDetails, params.movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {movieDetails.poster_path && (
        <MovieCard>
          <Image
            src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path}
            alt={movieDetails.title}
          />
          <h2>{movieDetails.title}</h2>
          <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {movieDetails.genres.map(genre => (
              <GenresItem key={genre.id}> {genre.name} </GenresItem>
            ))}
          </GenresList>
        </MovieCard>
      )}
    </div>
  );
};
