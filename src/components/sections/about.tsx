import React from 'react'
import styled from 'styled-components'

const StyledAboutSection = styled.section`
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    font-size: var(--fz-md);
    list-style: none;
    display: inline-block;
    padding: 2px 10px;
    margin: 5px;
    border-radius: 5px;
    background-color: var(--pine-dark-tint);
    color: var(--almond);
  }
`

const About = () => {

  const skills = ['JavaScript', 'TypeScript', 'React', 'React-Native', 'Gatsby', 'GraphQL', 'Node.js', 'PostgreSQL']
  return (
    <StyledAboutSection>
      <h2>About Me</h2>
      <p>Hey there! I'm Ashley, a full-stack software engineer based in Minneapolis, MN.</p>
      <p>I'm logically minded and creative at heart. I love to solve problems by designing
        and coding beautifully simple things. I thrive in a fast-paced environment and am
        passionately in the pursuit of knowledge and optimization.</p>
      <p>After graduating from the {' '}<a href='https://www.wisc.edu/'>University of Wisconsin–Madison</a>,
      I worked as a mechanical engineer in nuclear pharmaceuticals. I enjoyed troubleshooting our
      project's software so much that I attended {' '}<a href='https://primeacademy.io/'>Prime Academy</a>
      {' '} to transition to software development. I got my start in software working on the mobile
      application for {' '}<a href='https://www.trypikup.com/'>Pikup</a>.</p>
      <p>For the full story, check out my{' '}<a href='/resume.pdf'>resume</a>.
      For a sneak peek, here are a few technologies I've been working with recently:</p>
      <ul>
        {skills && skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
      <p></p>
    </StyledAboutSection>
  )
}

export default About
