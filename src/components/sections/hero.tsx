import React from 'react'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.alignment.flexCenter};
  min-height: 100vh;
  flex-direction: column;
  align-items: flex-start;
`

const Hero = () => {
  return (
    <StyledHeroSection>
      <h1>Ashley Klein</h1>
      <h2>I code neat things for web and mobile.</h2>
      <p>I'm a software engineer based in Minneapolis, MN.</p>
    </StyledHeroSection>
  )
}

export default Hero
