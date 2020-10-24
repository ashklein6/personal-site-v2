import React from 'react'
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
`

const Hero = () => {
  const email = 'ashklein6@gmail.com'
  return (
    <StyledHeroSection>
      <h1>Greetings, my name is</h1>
      <h2 className='large-heading'>Ashley Klein.</h2>
      <p>I code neat things for web and mobile.</p>
      <p>Based in Minneapolis.</p>
      <a href={`mailto:${email}`}>Say Hello</a>
    </StyledHeroSection>
  )
}

export default Hero
