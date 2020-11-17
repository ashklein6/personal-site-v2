import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const StyledJobsSection = styled.section`
  display: block;
`

const StyledTabList = styled.ul`
  width: calc(100% + 50px);
  padding: 0;
  margin: 0;
  margin-left: -25px;
  list-style: none;
  display: flex;
  overflow-x: auto;

  li {
    &:first-of-type {
      margin-left: 25px;
    }
    &:last-of-type {
      padding-right: 25px;
    }
  }
`

const StyledTabButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100px;
  height: 40px;
  padding: 2px 12px;
  background-color: ${({ isSelected }) => isSelected ? 'var(--rust)' : 'var(--rust-tint)'};
  color: ${({ isSelected }) => isSelected ? 'var(--almond)' : 'var(--rust)'};
  border: 0;
  border-bottom: 2px solid var(--coffee);
  font-size: var(--fz-sm);
  transition: var(--transition);
  text-transform: uppercase;

  &:focus {
    outline: 0;
  }
`

const StyledTabContent = styled.div`

`

interface JobQueryData {
  node: {
    frontmatter: {
      company: string
      companyShort?: string
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
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              date
              company
              companyShort
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

  const [selectedJobIndex, setSelectedJobIndex] = React.useState<number>(0)

  return (
    <StyledJobsSection>
      <h2>Where I've Worked</h2>
      <StyledTabList>
        {jobs && jobs.map(({ node }, index) => {
          const { company, companyShort } = node.frontmatter
          return (
            <li key={index}>
              <StyledTabButton
                isSelected={index === selectedJobIndex}
                onClick={() => setSelectedJobIndex(index)}>
                <span>{companyShort ? companyShort : company}</span>
              </StyledTabButton>
            </li>
          )
        })}
      </StyledTabList>
      {jobs && jobs.map(({ node }, index) => {
        if (index === selectedJobIndex) {
          const { frontmatter, html } = node
          const { title, url, company, dateRange, location } = frontmatter
          return (
            <StyledTabContent key={index}>
              <div>
                <h3><a href={url}>{company}</a> &mdash; {title}</h3>
                <h4>{dateRange} &thinsp; // &thinsp; {location}</h4>
                <p></p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </StyledTabContent>
          )
        }
      })}
    </StyledJobsSection>
  )
}

export default Jobs
