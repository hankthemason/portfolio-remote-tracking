import React from 'react'
import Project from '../components/project'
import {
  projects,
  headline
} from './projects.module.css'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Projects = ({ data }) => {

  let images = []
  for (const [key] of Object.entries(data)) {
    images.push(getImage(data[key]))
  }

  return (
    <Layout pageTitle='Projects'>
      <div className={headline}>
        <p>My Projects</p>
      </div>
      <div className={projects}>
        <Project 
          title='Know Your Cops'
          url='www.knowyourcops.com'
          urlFull='https://knowyourcops.com'
          repoUrl='https://github.com/hankthemason/knowyourcops.nyc'
          description='An interactive database of thousands of civilian complaints filed against the NYPD from 1985 - 2019, featuring interactive maps, charts, and graphs that visualize the data and break it down by individual officers and precincts. Uses React, D3, Node.js, and SQlite.'
        >
          <GatsbyImage image={images[0]} />
        </Project>
        <Project 
          title='Personal Budgeting App'
          url='www.dollarsdollarsdollars.club'
          urlFull='https://dollarsdollarsdollars.club'
          repoUrl='https://github.com/hankthemason/finances-tracker'
          description='A full-stack web app that allows a user to create a profile and customize the way that they track income and expenses.  It uses Typescript, React, Node.js, and PostgreSQL. (this project is still under active development)'
        >
          <GatsbyImage image={images[1]} />
        </Project>
        <Project 
          title='Thomas Pynchon Name Generator'
          url='www.pynchoname.com'
          urlFull='https://pynchoname.com'
          repoUrl='https://github.com/hankthemason/pynchon-name-generator'
          description='A TypeScript/React app that generates a name and character description in the style of author Thomas Pynchon based on a user’s input.'
        >
          <GatsbyImage image={images[2]} />
        </Project>
      </div>
    </Layout>
  )
}


export default Projects

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    gatsbyImageData(
      width: 200
    )
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "know-your-cops.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "finances-tracker.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "pynchoname.png" }) {
      ...fluidImage
    }
  }
`
