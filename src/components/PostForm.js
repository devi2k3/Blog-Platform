import React, { useState } from 'react';
import './postform.css';
const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // State to store the selected image

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object including the image
    const newPost = {
      title,
      content,
      image, // This can be a URL, file object, etc., depending on your backend setup
    };

    onSubmit(newPost); // Call the parent's onSubmit handler

    // Clear the form fields after submission
    setTitle('');
    setContent('');
    setImage(null);
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      >
      </textarea>

      <button type="submit">Add Post</button>
      
    </form>
  );
};

export default PostForm;
