import styled from 'styled-components';

export const Submit = styled.button`
  width: 400px;
  display: inline-block;
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(3)};
  margin: ${p => p.theme.spacing(5)} auto;
  font-size: 26px;
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
