import {
  Form,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <SearchFormButton>
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>

      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </Form>
  );
};
