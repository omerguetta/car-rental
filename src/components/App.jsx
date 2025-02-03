
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import FavoritesPage from './Favorites/Favorites';
import Footer from './Footer/Footer';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const toggleFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  return (
    <Router>
      <div className="app-container">
        <Header onSearch={handleSearch} onShowFavorites={toggleFavorites} />
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} showFavorites={showFavorites} />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
