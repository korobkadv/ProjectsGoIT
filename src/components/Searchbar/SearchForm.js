import { Formik } from 'formik';
import {
  Form,
  SearchFormButton,
  SearchFormButtonLabel,
  Field,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        searchInput: '',
      }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      <Form>
        <SearchFormButton>
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <Field
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Formik>
  );
};
