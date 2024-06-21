import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, price, description }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}$</p>
      <p className="product-description">{description}</p>
      <div 
        className={`product-favorite ${isFavorited ? 'favorited' : ''}`} 
        onClick={toggleFavorite}
      >
        ♡
      </div>
    </div>
  );
};

export default ProductCard;
