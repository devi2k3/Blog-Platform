import React from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import './home.css';
const Home = ({ posts, onAddPost }) => (
  <div>
    <h2>Home</h2>
    <PostForm onSubmit={onAddPost} />
    <PostList posts={posts} />

  </div>
);

export default Home;
