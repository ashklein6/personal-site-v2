import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;1,300;1,500&family=Rozha+One&display=swap');

  :root {
    --pine: #4C5C47;
    --almond: #F0EAE0;
    --rust: #954C2C;
    --rust-dark-tint: rgba(149, 76, 44, 0.8);
    --rust-tint: rgba(149, 76, 44, 0.2);
    --coffee: #5E463A;

    --font-serif: 'Rozha One', serif;
    --font-sans: 'Poppins', sans-serif;

    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-heading: 32px;

    --transition: all 0.25s cubic-bezier(0.645, 0.055, 0.305, 1);
  }

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
    background-color: var(--almond);
    color: var(--coffee);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: var(--fz-lg);
    }
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--pine);
  }

  h2 {
    font-family: var(--font-serif);
    font-weight: normal;
    font-size: var(--fz-heading);
    text-transform: uppercase;
  }

  .large-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  button {
    border: 0;
    border-radius: 0;
    cursor: pointer;
  }

  // ::-moz-selection {
  //   color: var(--accent-2);
  //   background-color: var(--light);
  // }
  
  // ::selection {
  //   color: var(--accent-2);
  //   background-color: var(--light);
  // }

  // a {
  //   color: var(--dark) !important;
  //   text-decoration: none;
  // }
  
  // a:visited {
  //   color: var(--dark) !important;
  //   text-decoration: none;
  // }
  
  // a:hover, a:focus, a:active {
  //   color: var(--dark) !important;
  // }
  
  // a:focus {
  //   outline: thin dotted;
  // }
  
  // a:hover, a:active {
  //   outline: 0;
  // }
  
  // .entry-content a {
  //   color: var(--dark) !important;
  //   background-image: linear-gradient(to bottom, transparent 0, var(--accent-3) 0);
  //   background-position-x: 0px !important;
  //   background-position-y: 0.65em !important;
  //   background-repeat: no-repeat;
  //   text-decoration: none;
  // }
  
  // .entry-content a:hover, .entry-content a:focus, .entry-content a:active {
  //   color: var(--dark) !important;
  //   background-image: linear-gradient(to bottom, transparent 0, var(--accent-3) 0);
  //   background-position-x: 0px !important;
  //   background-position-y: 0.15em !important;
  //   background-repeat: no-repeat;
  //   text-decoration: none;
  // }
`

export default GlobalStyle
