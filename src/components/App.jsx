import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper, Main } from './App.styled';
import { fetchPixabayImages } from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [dateQuery, setDateQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getImages() {
      try {
        setIsLoading(true);
        const initialImages = await fetchPixabayImages(query, page);
        setImages(prevState => [...prevState, ...initialImages.hits]);
        setAllPages(Math.round(initialImages.totalHits / 20));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [query, dateQuery, page]);

  const onSubmit = value => {
    const { searchInput } = value;

    setImages([]);
    setQuery(searchInput);
    setPage(1);
    setAllPages(1);
    setDateQuery(Date.now());
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <AppWrapper>
      <Searchbar onSubmit={onSubmit} />
      <Main>
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {(allPages > 0) &
        (page !== allPages) &
        (images.length > 0) &
        !isLoading ? (
          <Button title="Load more" loadMore={loadMore} />
        ) : (
          ''
        )}
      </Main>
      <GlobalStyle />
    </AppWrapper>
  );
};
