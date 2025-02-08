import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import carsData from "../../data/cars.json";
import "./CarDetails.css";

const CarDetails = ({ onToggleFavorite, favorites }) => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id.toString() === id);

  // ✅ לוודא שה-hook `useState` תמיד רץ, גם אם אין רכב
  const [selectedImage, setSelectedImage] = useState(car ? car.image : "");
  const [imageSrc, setImageSrc] = useState(null);

  // ✅ לוודא שהרכב נמצא לפני השימוש ב-`useEffect`
  useEffect(() => {
    if (car) {
      import(`../../Assets/${car.image}`)
        .then((image) => setImageSrc(image.default))
        .catch((err) => console.error("Error loading image:", err));
    }
  }, [car]);

  // ✅ אם אין רכב – להציג הודעה ולהפסיק כאן
  if (!car) {
    return <h2>Car not found</h2>;
  }

  // ✅ פונקציה שמחזירה כוכבים לפי הדירוג
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`star ${i < rating ? "filled" : "empty"}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="car-details-container">
      <h3 className="page-title">Car Details</h3>
      <div className="car-details-content">
        {/* ✅ צד שמאל – תמונות */}
        <div className="car-images-section">
          <img className="main-image" src={imageSrc} alt={car.name} />
          <div className="thumbnail-container">
            {[car.image, car.image2, car.image3].map((img, index) => (
              <img
                key={index}
                src={`${process.env.PUBLIC_URL}/Assets/${img}`}
                alt={`${car.name} view ${index + 1}`}
                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* ✅ צד ימין – פרטים */}
        <div className="car-info-section">
          <div className="car-header">
            <h2 className="car-title">{car.name}</h2>
            <button
              className={`favorite-btn ${favorites && favorites[car.id] ? "active" : ""}`}
              onClick={() => onToggleFavorite(car.id)}
            >
              {favorites && favorites[car.id] ? "❤️" : "🤍"}
            </button>
          </div>

          {/* ✅ כוכבים ודירוג */}
          <div className="car-rating">
            {renderStars(4)} {/* ⭐ שינוי כאן בהתאם לדירוג מתוך JSON */}
            <span className="review-count">440 Reviewers</span>
          </div>

          <p className="car-description">
            {car.description || "A premium car with great performance and design."}
          </p>

          <div className="car-specs">
            <div className="spec-item"><strong>Type:</strong> {car.type}</div>
            <div className="spec-item"><strong>Capacity:</strong> {car.capacity} Person</div>
            <div className="spec-item"><strong>Transmission:</strong> {car.transmission}</div>
            <div className="spec-item"><strong>Fuel:</strong> {car.fuel}</div>
          </div>

          <div className="car-price-section">
            <h3>${car.price}.00<span className="per-day">/day</span></h3>
            <button className="rent-now">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
