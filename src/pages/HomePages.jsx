import React from 'react';
import ProductCard from '../components/ui/ProductCard';
import Brand from '@/components/ui/Brand';
import Slider from '@/components/ui/Slider';
import BestsellerSection from  '@/components/ui/BestsellerSection';
import { Button } from '@/components/ui/Button';
import PopularCategories from '@/components/ui/PopularCategories';


const products = [
  { image: '/s-card1.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/s-card2.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/s-card3.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/s-card4.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/s-card5.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/s-card6.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
];

const popularProducts = [
  {
    title: 'Woman in the Window Vintage Art',
    image: '/s-h1.png',
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
  { image: '/s-c1.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/s-c2.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
  { image: '/s-c3.png', title: 'Graphic Design', oldPrice: '$16.48', newPrice: '$6.48' },
];

const featuredPosts = [
  {
    image: '/card-a1.png',
    tag: 'NEW',
    title: 'Loudest à la Madison #1 (L\'integral)',
    description: 'We focus on ergonomics and meeting you where you work. Its only a keystroke away.',
    date: '22 April 2021',
    comments: 10,
  },
  {
    image: '/card-a2.png',
    tag: 'NEW',
    title: 'Loudest à la Madison #2 (L\'integral)',
    description: 'We focus on ergonomics and meeting you where you work. Its only a keystroke away.',
    date: '22 April 2021',
    comments: 10,
  },
  {
    image: '/card-a3.png',
    tag: 'NEW',
    title: 'Loudest à la Madison #3 (L\'integral)',
    description: 'We focus on ergonomics and meeting you where you work. Its only a keystroke away.',
    date: '22 April 2021',
    comments: 10,
  },
];


function HomePages() {
  return (
    <div>
      <Slider />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="my-16 space-y-16">
          {/* Top Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
             {/* Popüler Kategoriler Bölümü - YENİ */}
        <div className="my-16">
          <h2 className="text-2xl font-bold text-center mb-8">Popular Categories</h2>
          <PopularCategories />
        </div>
            {topProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {/* Bestseller Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-400 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">FURNITURE</h2>
                <p className="text-sm font-bold">5 Items</p>
              </div>
              <img src="/s-col1.png" alt="Furniture" className="bg-[transparent]" />
            </div>
            <BestsellerSection products={products} />
          </div>

          {/* Most Popular */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100">
            <img src="/s-col3.png" alt="Delivery" className="w-full h-full object-cover" />
            <div className="flex flex-col justify-center items-center p-8">
              {popularProducts.map((product, index) => (
                <div key={index} className="text-center max-w-md">
                  <h3 className="text-xl font-bold mb-4">{product.heading}</h3>
                  <p className="mb-6">{product.description}</p>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>

          {/* Featured Products */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="p-4">
                <h3 className="text-4xl font-bold text-red-500 mb-2">{product.number}</h3>
                <h4 className="text-lg font-bold mb-2">{product.title}</h4>
                <p className="text-sm text-gray-600">{product.text}</p>
              </div>
            ))}
          </div>

          {/* İkinci Bestseller Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BestsellerSection products={products} />
            <img src="/s-col2.png" alt="Description" className="w-full h-full object-cover" />
          </div>

          {/* İkinci Most Popular */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100">
            <div className="flex flex-col justify-center items-center p-8">
              {popularProducts.map((product, index) => (
                <div key={index} className="text-center max-w-md">
                  <h3 className="text-xl font-bold mb-4">{product.heading}</h3>
                  <p className="mb-6">{product.description}</p>
                  <ProductCard image="/card5.png" {...product} />
                </div>
              ))}
            </div>
            <img src="/s-col3.png" alt="Delivery" className="w-full h-full object-cover" />
          </div>

          {/* Featured Posts */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mb-2">{post.tag}</span>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.comments} comments</span>
                    </div>
                    <Button size="sm" variant="destructiveghost">Popularıty</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePages;