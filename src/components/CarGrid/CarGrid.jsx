import React from "react";
import CarCard from "../CarCard/CarCard";
import "./CarGrid.css";

const CarGrid = ({ cars, onToggleFavorite, favorites }) => {
  return (
    <div className="car-grid-container">
      <div className="car-grid-header">
        <h2 className="grid-title">Cars Catalogue</h2>
        <span className="grid-count">{cars.length} Cars</span>
      </div>

      <div className="car-grid">
        {cars.length > 0 ? (
          cars.map((car) => (
            <CarCard 
              key={car.id} 
              car={{ ...car, favorite: favorites[car.id] || false }} 
              onToggleFavorite={onToggleFavorite}
              imageLink={`/car/${car.id}`} // 🔹 נוסיף את הקישור לעמוד הרכב
            />
          ))
        ) : (
          <p className="loading-text">No cars available</p>
        )}
      </div>
    </div>
  );
};

export default CarGrid;
