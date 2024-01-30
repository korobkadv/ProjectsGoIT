import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'api';
import { Loader } from 'components/Loader/Loader';
import { CastList, CastItem, Image } from './Cast.styled';

export default function Cast() {
  const [moviesCast, setCast] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [fetchStatus, setIsFetchStatus] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (fetchStatus) {
      return;
    }
    async function getCast() {
      try {
        setIsLoading(true);
        const initialCast = await fetchCast(params.movieId);
        setCast(initialCast.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetchStatus(true);
        setIsLoading(false);
      }
    }
    getCast();
  }, [fetchStatus, params.movieId, moviesCast]);

  return (
    <div>
      <h2>Actors:</h2>
      {isLoading && <Loader />}
      <CastList>
        {moviesCast.length
          ? moviesCast.map(actor => (
              <CastItem key={actor.id}>
                {actor.profile_path ? (
                  <Image
                    src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
                    alt={actor.name}
                  />
                ) : (
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
                    alt={actor.name}
                  />
                )}
                <span>
                  <b>Name:</b> {actor.name}
                </span>
                <span>
                  <b>Сharacter:</b> {actor.character}
                </span>
              </CastItem>
            ))
          : 'No Cast'}
      </CastList>
    </div>
  );
}
