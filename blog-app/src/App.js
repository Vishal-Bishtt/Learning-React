import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <div className="App">
      <Link to="/"><h2>Home</h2></Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
