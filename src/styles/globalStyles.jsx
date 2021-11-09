import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --green: #00AB0F;
    --white: #fff;
    --black: #151515;
    --grey: #E1E1E1;
    --grey-light: #F3F3F3;
    --grey-dark: #767676;
    --red: #E70000;
  }

  body {
    padding: 0;
    margin: 0;

    background: var(--black);
  }

  /* p {
    font-family: 'Open Sans', sans-serif !important;
  }

  h1 {
    font-family: 'Simplon BP Headline' !important;
  }

  h2, h3, h4, h5 {
    font-family: 'Simplon BP Bold' !important;
  } */
`;
