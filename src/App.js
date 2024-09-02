import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home posts={posts} onAddPost={addPost} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
