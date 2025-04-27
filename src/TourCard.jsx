import React from "react";

// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2>{name}</h2>
        <p className="tour-price">${price}</p>
        <p className="tour-info">{info}</p>
        <button className="not-interested-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;
