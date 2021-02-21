// @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,700i');
import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#172241',
    gray: '#f4f7f6',
    grayDark: '#6c7680',
    earthBrown: '#EF5B5B',
  },
};

export const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: 'Roboto', sans-serif;
    font-display: 'Segoe UI', 'Fira Sans', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    color: ${theme.colors.black}
    text-align: left;
    background-color: ${theme.colors.gray};
  }
  p{
    color: ${theme.colors.grayDark};
  }  
  * {
    margin: 0;
    padding: 0;
  }
  h1 {
    color: ${theme.colors.earthBrown};
    font-weight: 400;
  }
  h2 {
    font-size: 2.125rem;
    padding: 0 1rem;
  }
  h3 {
    font-size: 1.5rem;
    padding: 0 .5rem;
    font-weight: 300;
  }
  ul {
    list-style-type: none;
  }
  .flex-container {
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    max-width: 1400px;
    margin: 2rem auto;
  }
  .flex-container > * {
    padding: 15px;
    flex: 1 100%;
  }
  .apps-list {
    flex: 1;
    order: 2;
    text-align: left;
  }
`;
