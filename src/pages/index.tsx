import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import Jobs from '../components/sections/jobs'

const Home: React.FC<PageProps> = () => (
  <Layout>
    <Hero/>
    <About/>
    <Jobs/>
  </Layout>
)

export default Home
