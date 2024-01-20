import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 320px;
`;

export const Field = styled(FormikField)`
  width: 100%;

  padding: ${p => p.theme.spacing(1)};
  margin: ${p => p.theme.spacing(1)} 0;

  border: 1px solid ${p => p.theme.colors.greyText};
  border-radius: ${p => p.theme.spacing(1)};
  background-color: ${p => p.theme.colors.white};

  transition: border-color 0.3s ease-in-out;

  &:focus {
    border: 1px solid ${p => p.theme.colors.acent};
    outline: none;
  }

  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.error};
  font-size: 14px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid ${p => p.theme.colors.acent};
  color: ${p => p.theme.colors.acent};
  border-radius: ${p => p.theme.spacing(1)};
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${p => p.theme.colors.acent};
    color: ${p => p.theme.colors.white};
  }

  &:active {
    background-color: ${p => p.theme.colors.acent2};
    border-color: ${p => p.theme.colors.acent2};
    color: ${p => p.theme.colors.white};
  }
`;
