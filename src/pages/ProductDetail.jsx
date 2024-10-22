import { Button } from '@/components/ui/Button';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Örnek ürün verisi (gerçek uygulamada bu veri bir API'den gelecektir)
  const product = {
    id: id,
    imageUrl: "/shopimg.png",
    title: "Grafik Tasarım Kursu",
    price: "₺129.99",
    originalPrice: "₺299.99",
    description: "Bu kapsamlı grafik tasarım kursu, Adobe Creative Suite kullanımını öğretir ve modern tasarım prensiplerini kapsar.",
    colors: ['#4CAF50', '#FFC107', '#F44336'],
    sizes: ['S', 'M', 'L', 'XL'],
    availability: 15,
    rating: 4.5,
    reviews: 128
  };

  const handleQuantityChange = (change) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + change));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 py-8">
      <div className="w-full md:w-1/2">
        <img src={product.imageUrl} alt={product.title} className="w-full h-auto object-cover rounded-lg shadow-md" />
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">{'★'.repeat(Math.floor(product.rating))}</span>
          <span className="text-gray-600">({product.reviews} değerlendirme)</span>
        </div>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-blue-600">{product.price}</span>
          <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
          <span className="text-green-500 font-semibold">%{Math.round((1 - parseFloat(product.price.slice(1)) / parseFloat(product.originalPrice.slice(1))) * 100)} indirim</span>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Renk Seçenekleri:</h3>
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
              <button key={index} className="w-8 h-8 rounded-full border-2 border-gray-300" style={{ backgroundColor: color }}></button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Beden:</h3>
          <div className="flex gap-2">
            {product.sizes.map((size, index) => (
              <button key={index} className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">{size}</button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button onClick={() => handleQuantityChange(-1)} className="px-3 py-1 text-xl">-</button>
            <span className="px-3 py-1">{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="px-3 py-1 text-xl">+</button>
          </div>
          <Button size="lg" variant="primary">Sepete Ekle</Button>
        </div>
        <p className="text-sm text-gray-600">Stok durumu: {product.availability} adet mevcut</p>
      </div>
    </div>
  );
}

export default ProductDetail;