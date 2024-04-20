import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from './components/MovieList/MovieList';
import CategoryHeader from './components/CategoryHeader/CategoryHeader';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div>
      {/* <CategoryHeader category="Action" /> */}
      <MovieList />
    </div>
  );
};

export default App;
