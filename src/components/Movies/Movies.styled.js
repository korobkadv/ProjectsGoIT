import {
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  background-color: ${p => p.theme.colors.grey};
`;

export const Field = styled(FormikField)`
  display: block;
  width: 552px;
  height: 48px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: ${p => p.theme.colors.acent2};
  background-image: url('https://cdn.iconscout.com/icon/free/png-512/free-search-1364-458863.png?f=webp&w=256');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const FoundMoviesList = styled.ul`
  margin: ${p => p.theme.spacing(3)};
`;

export const FoundMoviesItem = styled.li`
  font-size: 20px;
  margin: ${p => p.theme.spacing(1)};
`;

export const ErrorMessage = styled(FormikError)`
  display: block;
  background-color: ${p => p.theme.colors.grey};
  color: ${p => p.theme.colors.error};
  font-size: 14px;

  padding-top: ${p => p.theme.spacing(1)};
`;
