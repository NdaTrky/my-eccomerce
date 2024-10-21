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
    <div className="py-8">
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-28 m-4">
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={brand.image}
              alt={brand.name}
              className="object-contain h-12"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
