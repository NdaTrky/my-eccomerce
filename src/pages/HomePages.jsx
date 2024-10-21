import React from 'react';
import ProductCard from '../components/ui/ProductCard';
import Brand from '@/components/ui/Brand';
import Slider from '@/components/ui/Slider'


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
  
    <div className="flex flex-col space-y-12 my-8 min-h-screen">
     <div className="w-full">
    <Slider />
    </div>
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-yellow-400">
          <h2 className="text-xl font-bold mb-2">FURNITURE</h2>
          <p className="text">5 Items</p>
          <img src="/colimg.png" alt="Furniture" className="object-cover w-full pt-16" />
        </div>

        <div className="md:w-2/3 px-4">
          <h2 className="text-lg font-bold mb-4">BESTSELLER PRODUCTS</h2>
          <div className="flex flex-wrap justify-between mb-4">
            <button className="text">Men</button>
            <button className="text">Women</button>
            <button className="text">Accessories</button>
            <a href="#" className="hidden md:inline"><i className="fa-solid fa-arrow-left"></i></a>
            <a href="#" className="hidden md:inline"><i className="fa-solid fa-arrow-right"></i></a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product, index) => (
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
      <div className="flex flex-col md:flex-row bg-[#FAFAFA]">
        <div className="md:w-1/2 flex">
          <img src="/colimg1.png" alt="Delivery" className="object-cover w-full md:w-auto" />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 gap-4 text-center">
            {popularProducts.map((popularProduct, index) => (
              <div key={index} className="flex flex-col items-center">
                <h3 className="text-lg font-bold">{popularProduct.heading}</h3>
                <p>{popularProduct.description}</p>
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
      </div>

      {/* FEATURED PRODUCTS Bölümü */}
      <div className="flex flex-wrap ml-5">
        {featuredProducts.map((product, index) => (
          <div key={index} className="featured-product p-4">
            <h3 className="text-4xl font-bold text-red text-left">{product.number}</h3>
            <div>
              <h4 className="text-sm font-bold">{product.title}</h4>
              <p className="text-xs font-normal text-left text-gray">{product.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BESTSELLER PRODUCTS Bölümü */}
      <div className="flex flex-col md:flex-row md:px-4">
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-4">BESTSELLER PRODUCTS</h2>
          <div className="flex flex-wrap justify-between mb-4">
            <button className="text">Men</button>
            <button className="text">Women</button>
            <button className="text">Accessories</button>
            <a href="#" className="hidden md:inline"><i className="fa-solid fa-arrow-left"></i></a>
            <a href="#" className="hidden md:inline"><i className="fa-solid fa-arrow-right"></i></a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product, index) => (
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

        {/* Sağ Taraf için Resim */}
        <div className="md:w-1/3 flex">
          <img src="/colimg2.png" alt="Description" className="object-cover w-full" />
        </div>
      </div>

      {/* MOST POPULAR Bölümü */}
      <div className="flex flex-col md:flex-row bg-[#FAFAFA]">
        <div className="md:w-1/2 flex flex-col justify-center items-center p-4">
          <div className="grid grid-cols-1 gap-4 text-center">
            {popularProducts.map((popularProduct, index) => (
              <div key={index} className="flex flex-col items-center">
                <h3 className="text-lg font-bold">{popularProduct.heading}</h3>
                <p>{popularProduct.description}</p>
                <ProductCard
                  image="/card5.png"
                  title={popularProduct.title}
                  oldPrice={popularProduct.oldPrice}
                  newPrice={popularProduct.newPrice}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img src="/colimg3.png" alt="Delivery" className="object-cover w-full md:w-auto" />
        </div>
      </div>

 







 

      {/* Markalar Bölümü */}
    
    
            

    </div>
  );
}

export default HomePages;
