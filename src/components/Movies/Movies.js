import { useState, useEffect } from 'react';
import { searchMovies } from 'api';
import { Loader } from 'components/Loader/Loader';
import { Formik } from 'formik';
import {
  Form,
  SearchFormButton,
  SearchFormButtonLabel,
  Field,
  FoundMoviesList,
  FoundMoviesItem,
} from './Movies.styled';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [foundMovie, setFoundMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [params, setParams] = useSearchParams();

  const queryParams = params.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if ((query === '') & (queryParams === '')) {
      setFoundMovie([]);
      return;
    }

    async function getMovies() {
      try {
        setIsLoading(true);

        const initialMovies = await searchMovies(
          queryParams !== '' ? queryParams : query
        );
        setFoundMovie(initialMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [queryParams, query, params]);

  return (
    <div>
      <Formik
        initialValues={{
          searchInput: queryParams !== '' ? queryParams : '',
        }}
        onSubmit={values => {
          params.set('query', values.searchInput);
          setParams(params);

          setQuery(values.searchInput);
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            <SearchFormButton>
              <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            </SearchFormButton>

            <Field
              name="searchInput"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              value={values.searchInput}
              onChange={handleChange}
            />
          </Form>
        )}
      </Formik>

      <FoundMoviesList>
        {isLoading && <Loader />}
        {foundMovie.length
          ? foundMovie.map(movie => (
              <FoundMoviesItem key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </FoundMoviesItem>
            ))
          : query !== '' && 'No movies found'}
      </FoundMoviesList>
    </div>
  );
};
