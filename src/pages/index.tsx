import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import Jobs from '../components/sections/jobs'
import Projects from '../components/sections/projects'
import Contact from '../components/sections/contact'

const Home: React.FC<PageProps> = () => (
  <Layout>
    <main>
      <Hero/>
      <About/>
      <Jobs/>
      <Projects/>
      <Contact/>
    </main>
  </Layout>
)

export default Home
