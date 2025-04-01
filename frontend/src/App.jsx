import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/HomePage/Home"
import AuthorLinks from "/src/global/AuthorLinks/AuthorLinks";
import Navbar from "/src/global/Navbar/Navbar";
import GuideSelection from "/src/pages/GuidePages/GuideSelection";
import GuidePage from "/src/pages/GuidePages/GuidePage";
import NewsFeed from "/src/pages/News/NewsFeed";
import Discussion from "/src/pages/Discussion/Discussion"
function App() {
  return (
    <Router>
       <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<GuideSelection />} />
          <Route path="/guides/:spec" element={<GuidePage />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
        <AuthorLinks /> 
        </div>
    </Router>
  );
}

export default App;