import React from 'react';

const Brand = () => {
  const brands = [
    { image: '/hooli.png', name: 'Hooli' },
    { image: '/lyA.png', name: 'Lyft' },
    { image: '/icon.png', name: 'Leaf' },
    { image: '/stripe.png', name: 'Stripe' },
    { image: '/aws.png', name: 'AWS' },
    { image: '/icon2.png', name: 'Reddit' },
  ];

  return (
    <div className="flex justify-between items-center py-6">
      {brands.map((brand, index) => (
        <img
          key={index}
          src={brand.image}
          alt={brand.name}
          
        />
      ))}
    </div>
  );
};

export default Brand;
