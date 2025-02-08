import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import Filters from './Filters/Filters';
import CarDetails from './CarDetails/CarDetails';
import carsData from '../data/cars.json';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const [filters, setFilters] = useState({
    types: [],
    capacities: [],
    maxPrice: 100,
  });
  const [favorites, setFavorites] = useState({});

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const toggleFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  const toggleFavorite = (carId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [carId]: !prevFavorites[carId],
    }));
  };

  return (
    <Router>
      <div className="app-container">
        <Header onSearch={handleSearch} onShowFavorites={toggleFavorites} />
        <Filters onFilterChange={setFilters} />
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} showFavorites={showFavorites} filters={filters} favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="/car/:id" element={<CarDetails onToggleFavorite={toggleFavorite} favorites={favorites} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
