import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper, Main } from './App.styled';
import { fetchPixabayImages } from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    allPages: 1,
    isLoading: false,
    dateQuery: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.dateQuery !== this.state.dateQuery ||
      prevState.page !== this.state.page
    ) {
      if (
        prevState.query !== this.state.query ||
        prevState.dateQuery !== this.state.dateQuery
      ) {
        prevState.images = [];
      }

      try {
        this.setState({ isLoading: true });

        const initialImages = await fetchPixabayImages(
          this.state.query,
          this.state.page
        );

        this.setState({
          images: [...prevState.images, ...initialImages.hits],
          allPages: Math.round(initialImages.totalHits / 20),
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onSubmit = value => {
    const { searchInput } = value;

    this.setState({
      images: [],
      page: 1,
      allPages: 1,
      query: searchInput,
      dateQuery: Date.now(),
    });
  };

  loadMore = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  render() {
    const { images, page, allPages, isLoading } = this.state;

    return (
      <AppWrapper>
        <Searchbar onSubmit={this.onSubmit} />
        <Main>
          {images.length > 0 && <ImageGallery images={images} />}
          {isLoading && <Loader />}
          {(allPages > 0) &
          (page !== allPages) &
          (images.length > 0) &
          !isLoading ? (
            <Button title="Load more" loadMore={this.loadMore} />
          ) : (
            ''
          )}
        </Main>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}
