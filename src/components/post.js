import React from 'react';
import { Link } from 'gatsby'
import {
  post,
  postTitle,
  postDescription,
  postDate
} from './post.module.css'

const Post = ({ title, date, description, path }) => {

  return (
    <div className={post}>
      <div className={postTitle}>{ title }</div>
      <div className={postDescription}>
        <p>{ description }</p>
        <p className={postDate}>Posted on { date }</p>
      </div>
      
        <Link to={ path }>Read more</Link>
      
    </div>
  )
}

export default Post