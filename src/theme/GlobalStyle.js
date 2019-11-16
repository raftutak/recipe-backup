import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700|Pacifico|Poppins:400,500,600,700&display=swap');

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        padding-top: 80px;
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        color: #222223;
    }
`;

export default GlobalStyle;
