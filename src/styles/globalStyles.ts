import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 150px 150px;

    @media (max-width: 1080px) {
      padding: 150px 100px;
    }

    @media (max-width: 768px) {
      padding: 125px 50px;
    }

    @media (max-width: 480px) {
      padding: 100px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
  
      @media (max-width: 768px) {
        padding: 0 50px;
      }
  
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 75px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 60px 0;
    }

    @media (max-width: 480px) {
      padding: 50px 0;
    }
  }
`

export default GlobalStyle
