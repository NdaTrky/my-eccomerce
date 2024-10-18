import React from 'react';

const ProductCard = ({ image, title, description, text }) => {
  return (
    <div>
      <img 
        src={image} 
        alt={title} />
      <div>
      <p>{description}</p>
        <h3>{title}</h3>
      <p>{text}</p>
      </div>
    </div>
  );
};

export default ProductCard;
