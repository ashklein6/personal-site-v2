import React from 'react'
import GlobalStyle from '../styles/globalStyles'

export default function Layout ({children}) {
  return (
    <div id='root'>
      <GlobalStyle />
      {children}
    </div>
  )
}