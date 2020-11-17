import React from 'react'
import { Link, PageProps } from 'gatsby'
import Layout from '../components/layout'

const Home: React.FC<PageProps> = () => (
  <main>
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <Link to='/'>Go Home</Link>
  </main>
)

export default Home
