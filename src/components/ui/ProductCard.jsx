import React from 'react';

const ProductCard = ({ image, title, oldPrice, newPrice }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={title} className="w-full h-64 object-cover mb-4" />
      <h3 className="text-base font-bold text-center mb-2">{title}</h3>
      <div className="flex gap-2">
        <span className="price-old line-through">{oldPrice}</span>
        <span className="price-new">{newPrice}</span>
      </div>
    </div>
  );
};

export default ProductCard;