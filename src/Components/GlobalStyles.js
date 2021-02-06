import { createGlobalStyle } from "styled-components";
import resetCss from "styled-reset";

const globalStyles = createGlobalStyle`
    ${resetCss};
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color:rgba(20,20,20,1);
        color:white;
        font-size:12px;
        margin-top:60px;
    }
    a{
        text-decoration: none;
        color:inherit;
    }
`;

export default globalStyles;