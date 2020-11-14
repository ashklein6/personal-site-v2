import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.alignment.flexCenter};
  min-height: 100vh;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    color: var(--pine);
    font-family: var(--font-serif);
    font-weight: normal;
    margin: 0;
  }

  h2 {
    color: var(--pine);
    font-family: var(--font-serif);
    font-weight: normal;
    text-transform: uppercase;
    margin: 0 0 40px 0;
    line-height: 80%;
  }

  p {
    margin: 5px 0;
  }

  a {
    ${({ theme }) => theme.elements.button};
  }

  .floral_2 {
    position: absolute;
    z-index: -5;
    top: -30px;
    left: -10px;
    height: 400px;
    width: 400px;

    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
      left: -30px;
    }
  }
`

const StyledHeadshot = styled.div`
  position: absolute;
  right: 10%;
  bottom: 30px;
  height: 300px;
  width: 300px;
  z-index: -5;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  .headshot-shadow {
    position: absolute;
    height: 300px;
    width: 300px;
    margin: 10px -10px -10px 10px;
    background-color: var(--pine);

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }

  .floral_1 {
    position: absolute;
    bottom: -150px;
    right: 100px;
    height: 400px;
    width: 400px;

    @media (max-width: 768px) {
      bottom: -100px;
      right: 80px;
      width: 250px;
      height: 250px;
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "headshot.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floral_1: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "floral_1.png"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floral_2: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "floral_2.png"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const email = 'ashklein6@gmail.com'
  return (
    <StyledHeroSection>
      <h1>Greetings, my name is</h1>
      <h2 className='large-heading'>Ashley Klein.</h2>
      <p>I code neat things for web and mobile.</p>
      <p>Based in Minneapolis.</p>
      <a href={`mailto:${email}`}>Say Hello</a>
      <StyledHeadshot>
        <div className={'headshot-shadow'}/>
        <Img fluid={data.headshot.childImageSharp.fluid}/>
        <div className={'floral_1'}>
          <Img fluid={data.floral_1.childImageSharp.fluid}/>
        </div>
      </StyledHeadshot>
      <div className={'floral_2'}>
        <Img fluid={data.floral_2.childImageSharp.fluid}/>
      </div>
    </StyledHeroSection>
  )
}

export default Hero
