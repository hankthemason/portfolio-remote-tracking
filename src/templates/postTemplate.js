import React from "react";
import { graphql, Link } from "gatsby";
import { 
  postBody,
  postTitle,
  postDate,
  returnLink
 } from './postTemplate.module.css'

import Layout from "../components/layout";

const Template = ({ data }) => {
  const post = data.markdownRemark;
  const {title, date} = post.frontmatter;

  return (
    <Layout>
      <div className={postBody}>
        <div className={returnLink}>
          <Link to='/blog'>Back to blog home</Link>
        </div>
        <div className={postTitle}>{title}</div>
        <p className={postDate}>Posted on {date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className={returnLink}>
          <Link to='/blog'>Back to blog home</Link>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      frontmatter {
        date
        title
        path
      }
      html
    }
  }
`;

export default Template