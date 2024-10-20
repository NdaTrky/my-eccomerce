import React from 'react';
import ProductCard from '../components/ui/ProductCard'; 

const products = [
  {
    image: '/card1.png',
    description: 'Your Space',
    title: 'Unique Life',
    text: 'Explore Items',
  },
  {
    image: '/card2.png',
    description: 'Ends Today',
    title: 'Elements Style',
    text: 'Explore Items',
  },
  {
    image: 'card3.png',
    description: 'Ends Today',
    title: 'Elements Style',
    text: 'Explore Items',
  },
];

const ProductList = () => {
  return (
    <div className="card-grid bg-[#FAFAFA]">
      {products.map((product, index) => (
        <div 
          key={index} 
          className="flex flex-row-reverse items-start bg-white p-4 m-4"
        >
          {/* Kartın Görseli */}
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-32 h-32 object-cover rounded-md ml-4" 
          />

          {/* Kart İçeriği */}
          <div>
            <p>{product.description}</p>
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p>{product.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
