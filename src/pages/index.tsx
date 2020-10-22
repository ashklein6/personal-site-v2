import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/sections/hero'
import About from '../components/sections/about'

const Home: React.FC<PageProps> = () => (
  <Layout>
    <Hero/>
    <About/>
  </Layout>
)

export default Home
