import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${p => p.theme.colors.grey};
    color: ${p => p.theme.colors.black};
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  h1, h2, h3, h4, p, ul {
    margin: 0;
    padding: 0;
  }
`;
