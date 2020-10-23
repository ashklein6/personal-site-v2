import React from 'react'
import styled from 'styled-components'

const StyledContactSection = styled.section`
  
`

const Contact = () => {
  const email = 'ashklein6@gmail.com'
  return (
    <StyledContactSection>
      <h2>Let's Chat</h2>
      <p>I'm actively searching for my next position and would love to discuss opportunities.</p>
      <a href={`mailto:${email}`}>Say Hello</a>
    </StyledContactSection>
  )
}

export default Contact
