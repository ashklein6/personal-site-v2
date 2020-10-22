import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import theme from '../styles/theme'

export default function Layout ({ children }) {
  return (
    <div id='root'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </div>
  )
}
