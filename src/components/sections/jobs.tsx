import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const StyledJobsSection = styled.section`
  
`

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
      ) {
        edges {
          node {
            frontmatter {
              company
              title
              location
              dateRange
              url
            }
            html
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <StyledJobsSection>
      <h2>Where I've Worked</h2>
      <p></p>
    </StyledJobsSection>
  )
}

export default Jobs
