import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PopularCategories() {
  const categories = useSelector(state => state.product?.categories);
  const fetchState = useSelector(state => state.product?.fetchState);

  if (fetchState === 'FETCHING') {
    return <div>Kategoriler Yükleniyor...</div>;
  }

  if (!categories || categories.length === 0) {
    return <div>Hiç kategori bulunamadı.</div>;
  }

  // Kategorileri puanlarına göre sıralayıp en yüksek 5'ini alıyoruz
  const topCategories = categories
  .flatMap(category => 
    (category.categories || []).map(subCat => ({
      ...subCat,
      gender: category.gender,
      rating: Math.floor(Math.random() * 5) + 1 // Örnek puanlama
    }))
  )
  .sort((a, b) => b.rating - a.rating) // Puanlarına göre azalan sırala
  .slice(0, 5); // İlk 5'ini al

  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6">
        {topCategories.map((category) => (
          <Link 
            key={category.id}
            to={`/shop/${category.gender.toLowerCase()}/${category.code}`} // Doğru yönlendirme
            className="relative group overflow-hidden rounded-lg"
          >
            <img 
              src={category.image} 
              alt={category.title}
              className="w-full h-48 object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h3 className="text-white font-bold">{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
  );
}

export default PopularCategories;