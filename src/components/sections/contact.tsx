import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const StyledContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;

  a {
    ${({ theme }) => theme.elements.button};
  }

  .floral_3 {
    top: -30px;
    left: -10px;
    width: calc(100% - 200px);
    margin: 60px 0 30px;

    @media (max-width: 768px) {
      width: calc(100% - 50px)
    }
  }
`

const Contact = () => {
  const email = 'ashklein6@gmail.com'

  return (
    <StyledContactSection>
      <h2>Let's Chat</h2>
      <p>
        I'm actively searching for my next position and would love to discuss
        opportunities.
      </p>
      <a href={`mailto:${email}`}>Say Hello</a>
      <div className={"floral_3"}>
        <StaticImage
          alt="floral 3"
          src={"../../images/floral_3.png"}
          placeholder="blurred"
          layout="constrained"
        />
      </div>
    </StyledContactSection>
  )
}

export default Contact
