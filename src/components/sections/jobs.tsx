import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const StyledJobsSection = styled.section`
  
`

const StyledTabList = styled.ul`

`

const StyledTabButton = styled.button`

`

const StyledTabContent = styled.div`

`

interface JobQueryData {
  node: {
    frontmatter: {
      company: string
      title: string
      location: string
      dateRange: string
      url: string
    }
    html: string
  }
}

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

  const jobs: JobQueryData[] = data.jobs.edges

  const [selectedJobIndex, setSelectedJobIndex] = React.useState<number>()

  return (
    <StyledJobsSection>
      <h2>Where I've Worked</h2>
      <StyledTabList>
        {jobs && jobs.map(({ node }, index) => {
          const { company } = node.frontmatter
          return (
            <li key={index}>
              <StyledTabButton
                isSelected={index === selectedJobIndex}
                onClick={() => setSelectedJobIndex(index)}>
                <span>{company}</span>
              </StyledTabButton>
            </li>
          )
        })}
      </StyledTabList>
      {jobs && jobs.map(({ node }, index) => {
        if (index === selectedJobIndex) {
          const { frontmatter, html } = node
          const { title, url, company, dateRange } = frontmatter
          return (
            <StyledTabContent key={index}>
              <div>
                <h3>{title}</h3>
                <h4><a href={url}>{company}</a></h4>
                <p>{dateRange}</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: html}} />
            </StyledTabContent>
          )
        }
      })}
    </StyledJobsSection>
  )
}

export default Jobs
