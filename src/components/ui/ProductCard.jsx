import React from 'react';

const ProductCard = ({ image, title, description, text, oldPrice, newPrice, heading, isLarge }) => {
  return (
    <div className="bg-white">
      <img 
        src={image} 
        alt={title} 
        className={`object-cover ${isLarge ? 'h-80' : 'h-48'}`} /> 
      <div>
        {heading && <h2 className="text-lg font-bold">{heading}</h2>}
        <p className="text-sm">{description}</p>
        <h3 className="shop-title">{title}</h3>
        <p>{text}</p>
        <div className='price-wrapper'>
          <span className="price-old">{oldPrice}</span>
          <span className="price-new">{newPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;