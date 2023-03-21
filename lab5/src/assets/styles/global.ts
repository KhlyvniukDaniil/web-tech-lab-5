import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { color }       from 'assets/styles/colors'


const GlobalStyle = createGlobalStyle`
  ${ styledNormalize }
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: ${ color.black };
    font-family: 'Outfit Regular', sans-serif;
  }
`

export default GlobalStyle