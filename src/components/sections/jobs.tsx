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

  const jobs = data.jobs.edges

  return (
    <StyledJobsSection>
      <h2>Where I've Worked</h2>
      {jobs && jobs.map(({ node }, index) => {
        const { frontmatter, html } = node
        const { title, url, company, dateRange } = frontmatter
        return (
          <div key={index}>
            <div>
              <h3>{title}</h3>
              <h4><a href={url}>{company}</a></h4>
              <p>{dateRange}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html}} />
          </div>
        )
      })}
    </StyledJobsSection>
  )
}

export default Jobs
