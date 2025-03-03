import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/HomePage/Home"
import AuthorLinks from "/src/global/AuthorLinks/AuthorLinks";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <AuthorLinks /> 

    </Router>
  );
}

export default App;