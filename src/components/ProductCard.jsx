import React from 'react';

const ProductCard = ({ image, title, description, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-md my-6 mx-6 flex flex-row-reverse items-center">
      <img 
        src={image} 
        alt={title} 
        className="w-[200px] object-cover"
      />
      <div className="text-content ml-4 ">
      <p className="text-sm text-gray">{description}</p>
        <h3 className="text-lg font-bold my-5 w-[22px]">{title}</h3>
      <p>{text}</p>
      </div>
    </div>
  );
};

export default ProductCard;
