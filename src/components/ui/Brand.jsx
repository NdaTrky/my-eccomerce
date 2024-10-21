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
    <div className="flex flex-wrap justify-between gap-4 py-6">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-auto flex justify-center"
        >
          <img
            src={brand.image}
            alt={brand.name}
            className="object-contain w-24 h-12"
          />
        </div>
      ))}
    </div>
  );
};

export default Brand;
