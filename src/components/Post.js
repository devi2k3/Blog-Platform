import React from 'react';
import './post.css';
const Post = ({ title, content }) => (
  <article>
    <h2>{title}</h2>
    <p>{content}</p>
  </article>
);

export default Post;
