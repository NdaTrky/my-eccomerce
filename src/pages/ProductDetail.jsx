import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Star, ShoppingCart, Heart } from 'lucide-react';

function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);

  const product = {
    id: id,
    imageUrl: "/shopimg1.png",
    thumbnails: ["/shopimg.png", "/shopimg-2.png", "/shopimg-3.png"],
    title: "Floating Phone",
    price: "$1,139.33",
    description: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    colors: ['#3498db', '#e74c3c', '#2ecc71', '#34495e'],
    availability: 'In Stock',
    rating: 4.5,
    reviews: 97
  };

  const handleQuantityChange = (change) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + change));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 py-8">
      <div className="w-full md:w-1/2 space-y-4">
        <img src={product.imageUrl} alt={product.title} className="w-full h-auto object-cover rounded-lg shadow-md" />
        <div className="flex gap-2">
          {product.thumbnails.map((thumb, index) => (
            <img key={index} src={thumb} alt={`Thumbnail ${index + 1}`} className="w-20 h-20 object-cover rounded-md cursor-pointer" />
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
          ))}
          <span className="text-blue-600 font-semibold">{product.rating}</span>
          <span className="text-gray-600">({product.reviews} Reviews)</span>
        </div>
        <p className="text-2xl font-bold text-blue-600">{product.price}</p>
        <p className="text-gray-600">{product.description}</p>
        <div>
          <h3 className="font-semibold mb-2">Color:</h3>
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
              <button 
                key={index} 
                className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-blue-500' : 'border-gray-300'}`} 
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button onClick={() => handleQuantityChange(-1)} className="px-3 py-1 text-xl">-</button>
            <span className="px-3 py-1">{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="px-3 py-1 text-xl">+</button>
          </div>
          <Button size="lg" variant="primary" className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </Button>
          <Button size="lg" variant="outline" className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Add to Wishlist
          </Button>
        </div>
        <p className="text-sm text-gray-600">Availability: <span className="text-green-500 font-semibold">{product.availability}</span></p>
      </div>
    </div>
  );
}

export default ProductDetail;