import { useState, useEffect, Suspense, useRef } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useParams,
  Link,
} from 'react-router-dom';
import { fetchDetailsMovie } from 'api';
import { Loader } from 'components/Loader/Loader';
import {
  CardWrapper,
  MovieCard,
  Image,
  GenresList,
  GenresItem,
  Information,
  InformationLinksList,
  BackLink,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [fetchStatus, setIsFetchStatus] = useState(false);
  const params = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location);

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
      <Link to={backLinkRef.current.state?.from ?? '/'}>
        <BackLink>Back</BackLink>
      </Link>
      {movieDetails.poster_path && (
        <CardWrapper>
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
          <Information>
            <h3>Additional Information</h3>
            <InformationLinksList>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </InformationLinksList>

            <Suspense fallback={<div>Loading subpage...</div>}>
              <Outlet />
            </Suspense>
          </Information>
        </CardWrapper>
      )}
    </div>
  );
};
