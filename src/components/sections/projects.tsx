import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const StyledProjectsSection = styled.section`
  
`

interface ProjectsQueryData {
  node: {
    frontmatter: {
      priority: number
      title: string
      github: string
      tech: string[]
    }
    html: string
  }
}

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: [frontmatter___priority], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              github
              tech
            }
            html
          }
        }
      }
    }
  `)

  const projects: ProjectsQueryData[] = data.projects.edges

  return (
    <StyledProjectsSection>
      <h2>Things I've Worked On</h2>
      {projects && projects.map(({ node }, index) => {
        const { frontmatter, html } = node
        const { title, github, tech } = frontmatter
        return (
          <div key={index}>
            <div>
              <h3>{title}</h3>
              {github && <p><a href={github}>View GitHub</a></p>}
            </div>
            <div dangerouslySetInnerHTML={{ __html: html}} />
            {tech && (
              <ul>
                {tech.map((tech, index) => <li key={index}>{tech}</li>)}
              </ul>
            )}
          </div>
        )
      })}
    </StyledProjectsSection>
  )
}

export default Projects
