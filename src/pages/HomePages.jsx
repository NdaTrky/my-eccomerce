import React from 'react';
import ProductCard from '../components/ui/ProductCard';

const products = [
  { image: '/card1.png', title: 'Graphic Design', text: '$16.48 $6.48' },
  { image: '/card2.png', title: 'Graphic Design', text: '$16.48 $6.48' },
  { image: '/card3.png', title: 'Graphic Design', text: '$16.48 $6.48' },
  { image: '/card1.png', title: 'Graphic Design', text: '$16.48 $6.48' },
  { image: '/card2.png', title: 'Graphic Design', text: '$16.48 $6.48' },
  { image: '/card3.png', title: 'Graphic Design', text: '$16.48 $6.48' },
];

const popularProducts = [
  { image: '/card4.png', title: 'Fresh Meat', text: '$22.00 $14.00' },
];

const featuredProducts = [
  {
    number: "1.",
    title: "Easy to use",
    text: "Things on a very small that you have any direct"
  },
  {
    number: "2.",
    title: "Easy to use",
    text: "Things on a very small that you have any direct"
  },
  {
    number: "3.",
    title: "Easy to use",
    text: "Things on a very small that you have any direct"
  },
  {
    number: "4.",
    title: "Easy to use",
    text: "Things on a very small that you have any direct"
  },
];

function HomePages() {
  return (
    <div className="flex flex-col space-y-12 my-8 min-h-screen">
      {/* BESTSELLER PRODUCTS Bölümü */}
      <div className="flex md:flex-row flex-col">
        <div className="md:w-1/3 bg-yellow-400 p-6">
          <h2 className="text-xl font-bold mb-2">FURNITURE</h2>
          <p className="text-gray-600 mb-4">5 Items</p>
          <img src="/colimg.png" alt="Furniture" className="object-cover w-full" />
        </div>

        <div className="md:w-2/3 px-4">
          <h2 className="text-lg font-bold mb-4">BESTSELLER PRODUCTS</h2>
          <div className="flex justify-between mb-4">
            <button className="card-button">Men</button>
            <button className="card-button">Women</button>
            <button className="card-button">Accessories</button>
            <a href="#"><i className="fa-solid fa-arrow-left"></i></a>
            <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                text={product.text}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MOST POPULAR Bölümü */}
      <div className="flex md:flex-row flex-col items-center bg-gray-100 p-6 bg-[#FAFAFA]">
        <div className="md:w-1/2">
          <img src="/colimg1.png" alt="Delivery" className="object-cover w-full" />
        </div>

        <div className="md:w-1/2 p-6">
          <h2 className="text-lg font-bold mb-4">MOST POPULAR</h2>
          <p className="text-gray-600 mb-4">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {popularProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                text={product.text}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED PRODUCTS Bölümü */}
      <div className='flex ml-5'>
        {featuredProducts.map((product, index) => (
          <div key={index} className="featured-product">
            <h3 className='text-4xl font-bold text-red text-left'>{product.number}</h3>
            <div>
            <h4 className="text-sm font-bold">{product.title}</h4>
            <p className='text-xs font-normal text-left text-gray'>{product.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePages;
