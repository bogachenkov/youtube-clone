import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';

// import { Montserrat } from '@next/font/google';

// const montserrat = Montserrat({
//   weight: ["300", "500", "700", "800"]
// });

/* font-family: ${montserrat.style.fontFamily}; */

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  :root {
    --color-red: #FF0000;
    --color-black: #0A0B0C;
    --color-background-blue: #101113;
    --color-background-gray: #151719;
    --color-gray: #9FA2A8;
    --color-grayDark: #1D1F22;
    --color-grayLight: #AEB1B9;
    --color-light: #F1F2F3;

    --sidebar-icon-size: 2.1em;
    --sidebar-items-display: initial;

    font-size: 10px;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: var(--color-light);
    background-color: var(--color-background-gray);
    padding-right: 30px;
  }
`;

export default GlobalStyle;