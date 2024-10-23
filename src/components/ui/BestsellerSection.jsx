import React from 'react';
import ProductCard from './ProductCard';


const BestsellerSection = ({ products }) => {
    return (
      <div className="col-span-2">
        <h2 className="text-2xl font-bold mb-6">BESTSELLER PRODUCTS</h2>
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-6">
            <button className="text-sm font-bold text-gray-600 hover:text-black">Men</button>
            <button className="text-sm font-bold text-gray-600 hover:text-black">Women</button>
            <button className="text-sm font-bold text-gray-600 hover:text-black">Accessories</button>
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="text-gray-600 hover:text-black"><i className="fas fa-arrow-left"></i></button>
            <button className="text-gray-600 hover:text-black"><i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    );
  };

export default BestsellerSection;