import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from '../../Assets/Logo.png';
import ProfileIcon from '../../Assets/Profil & Notification.png';
import SearchIcon from '../../Assets/search-normal.png';

const Header = ({ onSearch, onShowFavorites }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFavoritesActive, setIsFavoritesActive] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.length >= 2) {
      onSearch(value);
    } else {
      onSearch('');
    }
  };

  const toggleFavorites = () => {
    setIsFavoritesActive((prev) => !prev);
    onShowFavorites();
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <img src={Logo} alt="ShenCarCar" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by car name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <img src={SearchIcon} alt="Search" className="search-icon" />
      </div>
      <div
        className={`favorites ${isFavoritesActive ? "active" : ""}`}
        onClick={toggleFavorites}
      >
        <img src={ProfileIcon} alt="Favorites" className="favorites-icon" />
      </div>
    </header>
  );
};

export default Header;
