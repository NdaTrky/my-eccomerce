import React from 'react';

const ProductCard = ({ image, title, description, text, oldPrice, newPrice, heading, isLarge }) => {
  return (
    <div className="bg-white">
      <img 
        src={image} 
        alt={title} 
        className={`object-cover w-full ${isLarge ? 'h-80' : 'h-48'}`} /> 
      <div>
        {heading && <h2 className="text-lg font-bold">{heading}</h2>}
        <p className="text-sm">{description}</p>
        <h3 className="text-base font-semibold">{title}</h3>
        <p>{text}</p>
        <div className='font-bold flex gap-2'>
          <span className="text-gray line-through">{oldPrice}</span>
          <span className="text-green">{newPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;