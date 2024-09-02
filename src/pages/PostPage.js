import React from 'react';
import './postpage.css';
import { useParams } from 'react-router-dom';

const PostPage = ({ posts }) => {
  // Use useParams to get the post ID from the URL
  const { id } = useParams();

  // Find the post by ID
  const post = posts.find(post => post.id === parseInt(id, 10));

  // If post not found, return a message or redirect
  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
