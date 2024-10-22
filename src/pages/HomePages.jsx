import React from 'react';
import ProductCard from '../components/ui/ProductCard';
import Brand from '@/components/ui/Brand';
import Slider from '@/components/ui/Slider'
//TODO : Slider yapısını düzenle!

const products = [
  { image: '/card1.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/card2.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/card3.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/card1.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/card2.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/card3.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
];

const popularProducts = [
  {
    title: 'Fresh Meat',
    image: '/card4.png',
    oldPrice: '$20.00',
    newPrice: '$15.00',
    heading: 'MOST POPULAR',
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
  },
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

const topProducts = [
  { image: '/card1.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/card2.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/card3.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
];

  function HomePages() {
    return (
      <div className="space-y-12 my-8 container mx-auto px-4">
        <div className="w-full">
          <Slider />  
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
            />
          ))}
        </div>
  
        {/* BESTSELLER PRODUCTS Bölümü */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-yellow-400 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">FURNITURE</h2>
              <p className="text">5 Items</p>
            </div>
            <img src="/colimg.png" alt="Furniture" className="object-cover w-full mt-4" />
          </div>
  
          <div className="md:col-span-2">
            <h2 className="text-lg font-bold mb-4">BESTSELLER PRODUCTS</h2>
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4">
                <button className="text">Men</button>
                <button className="text">Women</button>
                <button className="text">Accessories</button>
              </div>
              <div className="hidden md:flex space-x-2">
                <a href="#"><i className="fa-solid fa-arrow-left"></i></a>
                <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
  
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products.slice(0, 6).map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                />
              ))}
            </div>
          </div>
        </div>
  
        {/* MOST POPULAR Bölümü */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAFAFA]">
          <div className="flex">
            <img src="/colimg1.png" alt="Delivery" className="object-cover w-full" />
          </div>
  
          <div className="flex flex-col justify-center items-center p-6">
            {popularProducts.map((popularProduct, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-bold mb-2">{popularProduct.heading}</h3>
                <p className="mb-4">{popularProduct.description}</p>
                <ProductCard
                  image={popularProduct.image}
                  title={popularProduct.title}
                  oldPrice={popularProduct.oldPrice}
                  newPrice={popularProduct.newPrice}
                />
              </div>
            ))}
          </div>
        </div>
  
        {/* FEATURED PRODUCTS Bölümü */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index} className="p-4">
              <h3 className="text-4xl font-bold text-red-500">{product.number}</h3>
              <h4 className="text-sm font-bold">{product.title}</h4>
              <p className="text-xs text-gray-500">{product.text}</p>
            </div>
          ))}
        </div>
  
        {/* İkinci BESTSELLER PRODUCTS Bölümü */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-lg font-bold mb-4">BESTSELLER PRODUCTS</h2>
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4">
                <button className="text">Men</button>
                <button className="text">Women</button>
                <button className="text">Accessories</button>
              </div>
              <div className="hidden md:flex space-x-2">
                <a href="#"><i className="fa-solid fa-arrow-left"></i></a>
                <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
  
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products.slice(0, 6).map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                />
              ))}
            </div>
          </div>
  
          <div className="flex">
            <img src="/colimg2.png" alt="Description" className="object-cover w-full" />
          </div>
        </div>
  
        {/* İkinci MOST POPULAR Bölümü */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAFAFA]">
          <div className="flex flex-col justify-center items-center p-6">
            {popularProducts.map((popularProduct, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-bold mb-2">{popularProduct.heading}</h3>
                <p className="mb-4">{popularProduct.description}</p>
                <ProductCard
                  image="/card5.png"
                  title={popularProduct.title}
                  oldPrice={popularProduct.oldPrice}
                  newPrice={popularProduct.newPrice}
                />
              </div>
            ))}
          </div>
          <div className="flex">
            <img src="/colimg3.png" alt="Delivery" className="object-cover w-full" />
          </div>
        </div>
       </div>
    );
  }
  
  export default HomePages