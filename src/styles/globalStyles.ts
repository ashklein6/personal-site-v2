import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
`

export default GlobalStyle