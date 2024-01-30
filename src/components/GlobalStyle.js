import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body, html {
    max-width: 100%;
    margin: 0;
    padding: 0;
    background-color: ${p => p.theme.colors.grey};
    color: ${p => p.theme.colors.black};
  }

  h1, h2, h3, h4, ul {
    margin: 0;
    padding: 0;
  }

nav a,
nav a:visited {
  color: ${p => p.theme.colors.greyText};
  text-decoration: none;
  font-style: normal;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
  color: ${p => p.theme.colors.acent};
  text-decoration: underline;
  }

  &.active {
  color: ${p => p.theme.colors.acent3};
  position: relative;
  }
}

a,
a:visited {
  color: ${p => p.theme.colors.acent};
  text-decoration: none;
  font-style: normal;

  &:hover,
  &:focus {
  color: ${p => p.theme.colors.acent};
  }

  &.active {
  color: ${p => p.theme.colors.acent};
  position: relative;
  }
}
`;
