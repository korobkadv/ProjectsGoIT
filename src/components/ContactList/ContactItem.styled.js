import styled from 'styled-components';

export const ContactsItem = styled.li`
  max-width: 100%;
  margin-bottom: ${p => p.theme.spacing(2)};
`;

export const Button = styled.button`
  padding: ${props => props.theme.spacing(1)};
  margin-left: ${p => p.theme.spacing(1)};
  border: 1px solid transparent;

  color: ${p => p.theme.colors.acent3};
  background-color: ${p => p.theme.colors.white};

  &:hover {
    border: 1px solid ${p => p.theme.colors.acent3};
  }
`;
