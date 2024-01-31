import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api';
import { Loader } from 'components/Loader/Loader';
import { ReviewsList, ReviewsItem } from './Reviews.styled';

export default function Reviews() {
  const [moviesReviews, setReviews] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [fetchStatus, setIsFetchStatus] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (fetchStatus) {
      return;
    }
    async function getReviews() {
      try {
        setIsLoading(true);
        const initialReviews = await fetchReviews(params.movieId);
        setReviews(initialReviews.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetchStatus(true);
        setIsLoading(false);
      }
    }
    getReviews();
  }, [fetchStatus, params.movieId, moviesReviews]);

  return (
    <div>
      <h2>Rewiews:</h2>
      {isLoading && <Loader />}
      <ReviewsList>
        {moviesReviews.length
          ? moviesReviews.map(review => (
              <ReviewsItem key={review.id}>
                <span>
                  <b>Author:</b> {review.author}
                </span>
                <span>
                  <b>Review:</b> {review.content}
                </span>
              </ReviewsItem>
            ))
          : 'We don`t have any reviews for this movie.'}
      </ReviewsList>
    </div>
  );
}
