import React, { useState, useEffect } from "react";
import "./Filters.css";

const Filters = ({ onFilterChange }) => {
    const [selectedTypes, setSelectedTypes] = useState(["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"]);
    const [selectedCapacities, setSelectedCapacities] = useState(["2", "4", "6"]);
    const [price, setPrice] = useState(100);

    useEffect(() => {
        updateSliderBackground(price);
    }, [price]);

    useEffect(() => {
        applyFilters();
    }, [selectedTypes, selectedCapacities, price]);

    const handleTypeChange = (type) => {
        setSelectedTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const handleCapacityChange = (capacity) => {
        setSelectedCapacities((prev) =>
            prev.includes(capacity) ? prev.filter((c) => c !== capacity) : [...prev, capacity]
        );
    };

    const handlePriceChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setPrice(value);
        updateSliderBackground(value);
    };

    const updateSliderBackground = (value) => {
        const percent = (value / 100) * 100;
        document.documentElement.style.setProperty("--slider-fill", `${percent}%`);
    };

    const applyFilters = () => {
        onFilterChange({
            types: selectedTypes,
            capacities: selectedCapacities,
            maxPrice: price,
        });
    };

    return (
        <aside className="filters">
            <div className="filter-group">
                <h3>Type</h3>
                {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
                    <label key={type}>
                        <input
                            type="checkbox"
                            checked={selectedTypes.includes(type)}
                            onChange={() => handleTypeChange(type)}
                        />
                        {type}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h3>Capacity</h3>
                {["2", "4", "6"].map((capacity) => (
                    <label key={capacity}>
                        <input
                            type="checkbox"
                            checked={selectedCapacities.includes(capacity)}
                            onChange={() => handleCapacityChange(capacity)}
                        />
                        {capacity} People
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h3>Price (per day)</h3>
                <input type="range" min="0" max="100" value={price} onChange={handlePriceChange} />
                <span className="filter-price">Max. ${price}.00</span>
            </div>
        </aside>
    );
};

export default Filters;
