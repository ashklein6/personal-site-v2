import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { IoLogoGithub } from 'react-icons/io'

const StyledProjectsSection = styled.section`
  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

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
    background-color: var(--pine);
    color: var(--almond);
  }

  .card {
    background-color: var(--pine-tint);
    padding: 20px;
    margin: 30px 0px;
    border-radius: 24px;
  }

  .icon-container {
    display: flex;
    align-items: center;
    margin-left: 6px;
  }

  .inline {
    display: flex;
    align-items: center;
  }
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
          <div key={index} className={'card'}>
            <div className={'inline'}>
              <h3>{title}</h3>
              {github && <a href={github} className={'icon-container'}><IoLogoGithub size={'1.17em'} /></a>}
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
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
