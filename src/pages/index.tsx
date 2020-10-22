import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/sections/hero'

const Home: React.FC<PageProps> = () => (
  <Layout>
    <Hero/>
  </Layout>
)

export default Home
