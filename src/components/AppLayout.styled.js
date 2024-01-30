import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid #ccc;

  margin-bottom: ${p => p.theme.spacing(3)};
`;

export const Layout = styled.div`
  width: 100%;

  padding: ${p => p.theme.spacing(7)};
`;

export const NavigationMenu = styled.ul`
  width: 100%;

  list-style: none;
  display: flex;
  gap: 15px;

  font-size: 24px;

  margin-bottom: ${p => p.theme.spacing(6)};
`;
