import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';

import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin']
});

export const baseRem = 10;

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  :root {
    --base-rem: ${baseRem}px;

    --color-red: #FF0000;
    --color-black: #0A0B0C;
    --color-background-blue: #101113;
    --color-background-gray: #151719;
    --color-gray: #9FA2A8;
    --color-grayDark: #1D1F22;
    --color-grayLight: #AEB1B9;
    --color-light: #F1F2F3;
    --color-sign-bg: #0d0c16;

    --navbar-margin: 1.5rem;
    --navbar-height: 66px;

    --layout-row-gap: 1.5rem;
    --layout-col-gap: 3rem;

    --container-padding: 3rem;

    --content-padding-bottom: 3rem;
    --content-full-height: calc(100vh - var(--navbar-height) - var(--layout-row-gap) - (var(--container-padding) * 2) - var(--navbar-margin) - var(--content-padding-bottom));

    --sidebar-icon-size: 2.1em;
    --sidebar-items-display: initial;

    font-size: var(--base-rem);
  }

  body {
    /* font-family: ${montserrat.style.fontFamily}; */
    font-family: 'Montserrat', sans-serif;
    color: var(--color-light);
    letter-spacing: .1px;
    background-color: var(--color-background-gray);
    /* padding-right: 30px; */
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;