import { Button } from '@/components/ui/Button';
import React from 'react';
import {Link } from "react-router-dom";

const shops = [
  {
    id: 1,
    imageUrl: "/shopimg.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 2,
    imageUrl: "/shopimg1.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 3,
    imageUrl: "/shopimg2.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 4,
    imageUrl: "/shopimg3.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 5,
    imageUrl: "/shopimg4.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 6,
    imageUrl: "/shopimg5.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 7,
    imageUrl: "/shopimg6.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 8,
    imageUrl: "/shopimg7.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 9,
    imageUrl: "/shopimg8.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 10,
    imageUrl: "/shopimg9.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 11,
    imageUrl: "/shopimg10.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 12,
    imageUrl: "/shopimg11.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
];

function ShopPages() {
  return (
     <div className="my-8">
      {/* Yeni Kart Düzeni (Sayfanın Üst Kısmında) */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {shops.slice(0, 4).map((shop, index) => (
            <div key={index} className="relative aspect-w-1 aspect-h-1">
              <img
                src={shop.imageUrl}
                alt={shop.title}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                <div className="text-center">
                  <h3 className="text-xl font-bold">{shop.title}</h3>
                  <p>{shop.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Varolan Shop Kartları */}
      <div className='flex justify-between items-center gap-6'>
  <a href="#" className='text'>Showing all 12 results</a>
  
  <div className='flex items-center gap-4'>
    <p className='text'>Views:</p>
    <a href="#">
      <img src="/btn-sm-24.png" alt="" />
    </a>
    <a href="#">
      <img src="/btn-sm-25.png" alt="" />
    </a>
  </div>
  
  <div className='flex gap-3'>
    <Button size="sm" variant="outline">Popularıty</Button>
    <Button size="sm" variant="secondary">Filter</Button>
  </div>

     
    </div>
      <div className="card-grid lg:grid-cols-4 gap-4">
        {shops.map((shop) => (
          <Link to={`/product/${shop.id}`} key={shop.id} className="bg-white p-4">
            <img src={shop.imageUrl} alt={shop.title} className='w-full object-cover mb-4'/>
            <div>
              <h2 className="shop-title text-lg font-semibold">{shop.title}</h2>
              <div className="price-wrapper flex justify-between mt-2">
                <p className='price-old text-gray-500 line-through'>{shop.originalPrice}</p>
                <p className='price-new text-blue-600 font-bold'>{shop.price}</p>
              </div>
              <p className='text mt-'>{shop.description}</p>
              <div className="flex gap-2 mt-2">
                {shop.colors.map((color, index) => (
                  <button key={index} style={{ backgroundColor: color, width: 12, height: 12, borderRadius: '50%' }}></button>
                ))}
              </div>
              
              
            </div>
          </Link>
        ))}
      </div>
      
      <div className="flex text-center"> 
     <a href="#" >
        <img src="/Pagination.png" alt="" />
    </a>
      </div>
    </div>
  );
}

export default ShopPages;