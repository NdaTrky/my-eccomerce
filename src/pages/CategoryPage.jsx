// src/pages/CategoryPage.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '@/components/ui/ProductCard';

function CategoryPage() {
  const { gender, category } = useParams();
  const products = useSelector(state => state.product.productList);

  // Ürünleri cinsiyet ve kategoriye göre filtrele
  const filteredProducts = products.filter(product => 
    product.gender.toLowerCase() === gender.toLowerCase() && 
    product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {gender.charAt(0).toUpperCase() + gender.slice(1)} {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            oldPrice={product.oldPrice}
            newPrice={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;