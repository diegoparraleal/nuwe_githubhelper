import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body, #root {
      height: 100%;
      width: 100%;
      margin: 0;
    }

    .gh-align-right{
        text-align: right;
    }
  
    .gh-error{
        color: red;
        margin-top: 8px !important;
    }
`