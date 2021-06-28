import React from 'react';
import Layout from '../components/layout'
import { headline } from './blog.module.css'
import { graphql } from 'gatsby'
import Post from '../components/post'

const Blog = ({ data }) => {

  console.log(data)

  return (
    <Layout>
      <div className={headline}>
        Blog
      </div>
      <div>
        {
          data.allMarkdownRemark.edges.map(post => (
            <Post 
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              description={post.node.frontmatter.description}
              key={`${post.node.frontmatter.date}__${post.node.frontmatter.title}`}
              path={post.node.frontmatter.path}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default Blog

export const blogQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            date
            title
            description
            path
          }
        }
      }
    }
  }
`