import { SearchbarWrapper } from './Searchbar.styled';
import { SearchForm } from './SearchForm';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={onSubmit} />
    </SearchbarWrapper>
  );
};
