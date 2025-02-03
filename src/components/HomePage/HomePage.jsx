import React, { useState } from "react";
import Filters from "../Filters/Filters";
import CarGrid from "../CarGrid/CarGrid";
import Header from "../Header/Header";
import carsData from "../../data/cars.json";
import "./HomePage.css";

const HomePage = () => {
  const [cars, setCars] = useState(carsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState({});
  const [filters, setFilters] = useState({
    types: [],
    capacities: [],
    maxPrice: 100,
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterCars(query, showFavorites, filters);
  };

  const handleFavoritesToggle = () => {
    setShowFavorites((prev) => !prev);
    filterCars(searchQuery, !showFavorites, filters);
  };

  const toggleFavorite = (carId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [carId]: !prevFavorites[carId],
    }));
    filterCars(searchQuery, showFavorites, filters);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    filterCars(searchQuery, showFavorites, newFilters);
  };

  const filterCars = (query, showFavorites, filters) => {
    let filteredCars = carsData.map(car => ({
      ...car,
      favorite: favorites[car.id] || false,
    }));

    if (query.length >= 2) {
      filteredCars = filteredCars.filter((car) =>
        car.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (showFavorites) {
      filteredCars = filteredCars.filter((car) => car.favorite);
    }

    if (filters.types.length > 0) {
      filteredCars = filteredCars.filter((car) => filters.types.includes(car.type));
    }

    if (filters.capacities.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        filters.capacities.includes(car.capacity.toString())
      );
    }

    filteredCars = filteredCars.filter((car) => car.price <= filters.maxPrice);

    setCars(filteredCars);
  };

  return (
    <div className="homepage">
      <Header onSearch={handleSearch} onShowFavorites={handleFavoritesToggle} />
      <div className="content">
        <Filters onFilterChange={handleFilterChange} />
        <CarGrid cars={cars} onToggleFavorite={toggleFavorite} favorites={favorites} />
      </div>
    </div>
  );
};

export default HomePage;
