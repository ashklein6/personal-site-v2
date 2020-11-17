import React from 'react'
import { Helmet } from 'react-helmet'

export default function Head () {
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Ashley Klein</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  )
}
