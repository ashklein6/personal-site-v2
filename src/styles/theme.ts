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

const theme = {
  alignment: alignment,
}

export default theme
