
import React from "react";
import { Link } from "react-router-dom"; // 🔹 הוספת הייבוא של Link
import "./CarCard.css";

const CarCard = ({ car, onToggleFavorite }) => {
  return (
    <div className="car-card">
      <div className="card-header">
        <div className="car-details">
          <h3 className="car-name">{car.name}</h3>
          <p className="car-type">{car.type}</p>
        </div>
        <button className="favorite-btn" onClick={() => onToggleFavorite(car.id)}>
          {car.favorite ? "❤️" : "🤍"}
        </button>
      </div>

      {/* <img src={require(`../../Assets/${car.image}`)} alt={car.name} className="car-image" /> */}
      <Link to={`/car/${car.id}`} className="car-image-link">
        <img src={require(`../../Assets/${car.image}`)} alt={car.name} className="car-image" />
      </Link>

      <div className="car-info">
        <span>⛽ {car.fuel}</span>
        <span>⚙ {car.transmission}</span>
        <span>👥 {car.capacity} People</span>
      </div>

      <div className="car-footer">
        <span className="car-price">
          ${car.price}.00<span className="per-day">/day</span>
        </span>
        <button className="rent-now">Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;