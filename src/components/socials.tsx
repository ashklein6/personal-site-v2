import React from 'react'
import styled from 'styled-components'
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin
} from 'react-icons/fa'
import {
  MdAccountBox
} from 'react-icons/md'

const StyledPositioningElement = styled.div`
  width: 45px;
  position: fixed;
  bottom: 40px;
  left: 20px;

  @media (max-width: 768px) {
    width: auto;
    position: relative;
    bottom: auto;
    left: auto;
  }
`

const StyledSocialsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  color: var(--rust);

  @media (max-width: 768px) {
    flex-direction: row;
    bottom: 20px;
  }

  li {
    padding: 5px;

    @media (max-width: 768px) {
      padding: 5px 10px;
    }

    a {
      &:hover,
      &:focus {
        color: var(--rust-dark-tint);
        transform: translateY(-3px);
      }
  }
`

export default function Socials () {
  const size = 28

  return (
    <StyledPositioningElement>
      <StyledSocialsList>
        <li>
          <a href={''}>
            <MdAccountBox size={size + 3}/>
          </a>
        </li>
        <li>
          <a href={'https://www.linkedin.com/in/kleinashley/'}>
            <FaLinkedin size={size}/>
          </a>
        </li>
        <li>
          <a href={'https://github.com/ashklein6'}>
            <FaGithubSquare size={size}/>
          </a>
        </li>
        <li>
          <a href={'mailto:ashklein6@gmail.com'}>
            <FaEnvelopeSquare size={size}/>
          </a>
        </li>
      </StyledSocialsList>
    </StyledPositioningElement> 
 )
}
