import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.spacing(2)};
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
