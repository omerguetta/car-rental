import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Filters from './components/Filters';
import CarGrid from './components/CarGrid';
import Favorites from './components/Favorites';
import CarDetails from './components/CarDetails';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="main-content">
              <Filters />
              <CarGrid />
            </div>
          } />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// Additional steps involve creating each component and handling dynamic data from the JSON file.
// JSON data handling example:

// Mock data (data.json)
// const cars = [
//   {
//     id: 1,
//     name: 'Toyota Camry',
//     type: 'Sedan',
//     capacity: 5,
//     price: 70,
//     image: '/images/camry.jpg',
//     favorite: false
//   },
//   {
//     id: 2,
//     name: 'Ford Explorer',
//     type: 'SUV',
//     capacity: 7,
//     price: 100,
//     image: '/images/explorer.jpg',
//     favorite: true
//   }
//   // Add more cars as needed.
// ];

// // CarGrid component example
// import React, { useState } from 'react';
// import CarCard from './CarCard';

// const CarGrid = () => {
//   const [filteredCars, setFilteredCars] = useState(cars);

//   return (
//     <div className="car-grid">
//       {filteredCars.map(car => (
//         <CarCard key={car.id} car={car} />
//       ))}
//     </div>
//   );
// };

// export default CarGrid;

// // Other components will follow similar patterns to ensure full functionality and dynamic updates.
