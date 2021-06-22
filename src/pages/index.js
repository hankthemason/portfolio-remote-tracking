import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage
        alt="a mask falling"
        src="../images/maskFalling.jpg"
      />
    </Layout>
  )
}

export default IndexPage
