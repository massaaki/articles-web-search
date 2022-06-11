import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	list-style: none;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans','Helvetica Neue', sans-serif;
  }

`

export default GlobalStyles
