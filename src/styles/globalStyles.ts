import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --pine: #4C5C47;
    --pine-dark-tint: rgba(76, 92, 71, 0.8);
    --pine-tint: rgba(76, 92, 71, 0.1);
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
  h6,
  p {
    a {
      display: inline-block;
      cursor: pointer;
      text-decoration: none;
      position: relative;
      color: var(--rust);
      font-weight: bold;
      background: linear-gradient(to bottom, var(--rust-tint) 0%, var(--rust-tint) 0%);
      background-size: 0 0;
      background-position: 0 100%;
      background-repeat: repeat-x;
      transition: background-size 0.25s cubic-bezier(0.645, 0.055, 0.305, 1);
      &:hover,
      &:focus,
      &:active {
        color: var(--rust);
        background: linear-gradient(to bottom, var(--rust-tint) 0%, var(--rust-tint) 100%);
        background-position: 0 100%;
        background-repeat: repeat-x;
        background-size: 4px 12px;
      }
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

  ::-moz-selection {
    background-color: var(--rust-tint);
  }

  ::selection {
    background-color: var(--rust-tint);
  }

  a {
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    color: var(--rust);
    font-weight: bold;
    transition: all 0.25s cubic-bezier(0.645, 0.055, 0.305, 1);
    &:hover,
    &:focus,
    &:active {
      color: var(--rust-dark-tint);
    }
  }
`

export default GlobalStyle
