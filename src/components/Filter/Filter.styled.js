import styled from 'styled-components';

export const FilterInput = styled.input`
  width: 100%;

  padding: ${p => p.theme.spacing(1)};
  margin: ${p => p.theme.spacing(2)} 0;

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
