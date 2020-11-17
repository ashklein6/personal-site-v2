import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import theme from '../styles/theme'
import Head from './head'

export default function Layout ({ children }) {
  return (
    <>
    <Head />
    <div id='root'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </div>
    </>
  )
}
