import { Button } from '@/components/ui/Button';
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  // Burada ürün verilerini id'ye göre çekme işlemi yapılacak
  // Şimdilik örnek veri kullanacağız
  const product = {
    id: id,
    imageUrl: "/shopimg.png",
    title: "Graphic Design",
    price: "$6.48",
    originalPrice: "$15.49",
    description: "English Department",
    colors: ['#4CAF50', '#FFC107', '#F44336']
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 py-8">
      <div className="w-full md:w-1/2">
        <img src={product.imageUrl} alt={product.title} className="w-full h-auto object-cover" />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-2xl font-bold text-blue-600">{product.price}</span>
          <span className="text-gray-500 line-through">{product.originalPrice}</span>
        </div>
        <div className="flex gap-2 mb-4">
          {product.colors.map((color, index) => (
            <button key={index} className="w-6 h-6 rounded-full" style={{ backgroundColor: color }}></button>
          ))}
        </div>
        <Button size="sm" variant="outline">Sepete Ekle</Button>
      </div>
    </div>
  );
}

export default ProductDetail;