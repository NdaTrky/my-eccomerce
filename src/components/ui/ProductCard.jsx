import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, title, oldPrice, newPrice, description }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title || 'Product image'} // Başlık yoksa varsayılan bir açıklama ekler
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {title}
          </h3>
          
          {description && (
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {description}
            </p>
          )}

          <div className="flex items-center gap-2">
            {oldPrice && (
              <span className="price-old text-gray-500 line-through text-sm">
                {oldPrice} 
              </span>
            )}
            <span className="price-new text-blue-600 font-bold">
              {newPrice}
            </span>
          </div>
        </div>
      </Link>

      {/* Hızlı işlem butonları - Sepet ve Favoriye ekleme */}
      <div className="absolute top-2 left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50" title="Favorilere Ekle">
          <i className="fas fa-heart text-gray-600 hover:text-red-500"></i>
        </button>
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50" title="Sepete Ekle">
          <i className="fas fa-shopping-cart text-gray-600 hover:text-blue-500"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
