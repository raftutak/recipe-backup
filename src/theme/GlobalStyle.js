import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Merriweather:400,500,600,700|Pacifico|Poppins:400,500,600,700&display=swap');

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
        background-color: hsl(0, 100%, 100%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        color: #222223;
        text-align: center;
    }
`;

export default GlobalStyle;
