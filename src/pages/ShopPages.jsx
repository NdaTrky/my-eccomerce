import { Button } from '@/components/ui/Button';
import React from 'react';
import {Link } from "react-router-dom";

const shops = [
  {
    id: 1,
    imageUrl: "/shop1.png",
    title: "Vintage Home Decor",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 2,
    imageUrl: "/shop2.png",
    title: "Vintage Home Decor",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 3,
    imageUrl: "/shop3.png",
    title: "Vintage Home Decor",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 4,
    imageUrl: "/shop4.png",
    title: "Vintage Home Decor",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 5,
    imageUrl: "/shop5.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 6,
    imageUrl: "/shop6.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 7,
    imageUrl: "/shop7.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 8,
    imageUrl: "/shop8.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 9,
    imageUrl: "/shop9.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 10,
    imageUrl: "/shop10.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 11,
    imageUrl: "/shop11.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
  {
    id: 12,
    imageUrl: "/shop12.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  },
];

const shopCategories = [
  {
    id: 1,
    imageUrl: "/shop-c-1.png",
    title: "Home",
    description: "The latest technology to elevate your home."
  },
  {
    id: 2,
    imageUrl: "/shop-c-2.png",
    title: "Art",
    description: "Trendy pieces where fashion meets art."
  },
  {
    id: 3,
    imageUrl: "/shop-c-3.png",
    title: "Vintage",
    description: "Elegant and nostalgic touches from the past to the present."
  },
  {
    id: 4,
    imageUrl: "/shop-c-1.png",
    title: "Clothing",
    description: "Stylish and comfortable products for your active lifestyle."
  }
];


function ShopPages() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Yeni Kart Düzeni (Sayfanın Üst Kısmında) */}
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shopCategories.map((category) => (
          <div key={category.id} className="relative aspect-w-1 aspect-h-1">
            <img
              src={category.imageUrl}
              alt={category.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
              <div className="text-center">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p>{category.description}</p>
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
      <div class="flex justify-center items-center p-10 font-bold text-gray ">
    <button class="py-2 px-4 cursor-not-allowed border hover:text-blue rounded">First</button>
    <button class="py-2 px-4 text-blue-500 hover:bg-gray-200 border hover:text-blue">1</button>
    <button class="py-2 px-4 bg-blue-500 text-white border">2</button>
    <button class="py-2 px-4 text-blue-500 hover:text-blue border">3</button>
    <button class="py-2 px-4 text-blue-50 border hover:text-blue rounded">Next</button>
</div>

    </div>
  );
}

export default ShopPages;