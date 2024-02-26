import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  width: 100%;

  background-color: ${p => p.theme.colors.white};

  box-shadow: 3px 5px 5px ${p => p.theme.colors.greyText};

  padding: ${p => p.theme.spacing(3)};
  margin-bottom: ${p => p.theme.spacing(2)};
`;
