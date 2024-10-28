import { Button } from '@/components/ui/Button';
import React from 'react';
import { useParams } from 'react-router-dom';
import { shops } from './ShopPages';

function ProductDetail() {
  const { id } = useParams();
  const product = shops.find(shop => shop.id === parseInt(id));

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 py-8">
        {/* Sol Taraf - Fotoğraflar */}
        <div className="w-full md:w-1/2">
          {/* Ana ürün fotoğrafı */}
          <div className="relative">
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <i className="fas fa-chevron-left"></i>
            </button>
            <img 
              src={product.imageUrl} 
              alt={product.title} 
              className="w-full h-auto object-cover rounded-lg"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          {/* Küçük fotoğraflar */}
          <div className="flex gap-2 mt-4">
            {product.additionalImages?.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`${product.title} - ${index + 1}`}
                className="w-24 h-24 object-cover cursor-pointer hover:opacity-80 rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Sağ Taraf - Ürün Detayları */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          
          {/* Değerlendirme yıldızları */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <i 
                  key={star}
                  className={`${star <= 4 ? 'fas' : 'far'} fa-star mr-1`}
                ></i>
              ))}
            </div>
            <span className="text-gray-600">10 Reviews</span>
          </div>

          {/* Fiyat */}
          <div className="text-2xl font-bold mb-4">
            ${product.price}
          </div>

          {/* Stok Durumu */}
          <div className="mb-4">
            <span className="text-gray-600">Availability: </span>
            <span className="text-blue-500">In Stock</span>
          </div>

          {/* Açıklama */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Renk Seçenekleri */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Colors</h3>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button 
                  key={index} 
                  className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-blue-500 transition-all"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Butonlar */}
          <div className="flex gap-4">
            <Button size="lg" variant="secondary" className="flex-1">
              Select Options
            </Button>
            <Button size="lg" variant="outline" className="p-3 min-w-[48px]">
              <i className="fas fa-heart"></i>
            </Button>
            <Button size="lg" variant="outline" className="p-3 min-w-[48px]">
              <i className="fas fa-shopping-cart"></i>
            </Button>
            <Button size="lg" variant="outline" className="p-3 min-w-[48px]">
              <i className="fas fa-eye"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;