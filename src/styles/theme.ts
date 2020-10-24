import { css } from 'styled-components'

const alignment = {
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

const elements = {
  button: css`
  color: var(--almond);
  background-color: var(--rust);
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.75rem 2rem;
  letter-spacing: 1.5px;
  font-weight: 300;
  transition: var(--transition);
  margin: 10px 0;

  &:hover, &:focus, &:active {
    background-color: var(--rust-dark-tint);
  }
  `,
}

const theme = {
  alignment: alignment,
  elements: elements,
}

export default theme
