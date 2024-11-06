import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '@/components/ui/ProductCard';
import { fetchProducts } from '../actions/productActions';

function CategoryPage() {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.productList);
  const categories = useSelector(state => state.product.categories);
  const fetchState = useSelector(state => state.product.fetchState);

  useEffect(() => {
    console.log('CategoryPage mounted. FetchState:', fetchState);
    console.log('URL Parameters:', { gender, category });
    
    if (!products?.length && fetchState !== 'FETCHING') {
      console.log('Dispatching fetchProducts');
      dispatch(fetchProducts());
    }
  }, [dispatch, fetchState, products]);

  useEffect(() => {
    console.log('Products updated:', products);
    console.log('Categories:', categories);
  }, [products, categories]);

  // Kategori ID'sini bul
  const getCategoryId = () => {
    if (!categories) return null;
    const categoryCode = `${gender.charAt(0)}:${category}`; // Örnek: "k:tisort"
    const foundCategory = categories.find(cat => cat.code === categoryCode);
    return foundCategory?.id;
  };

  // Ürünleri filtrele
  const filteredProducts = products?.filter(product => {
    // Ürün kontrolü
    if (!product) return false;

    const categoryId = getCategoryId();
    console.log('Filtering product:', product);
    console.log('Looking for categoryId:', categoryId);

    return product.category_id === categoryId;
  }) || [];

  if (fetchState === 'FETCHING') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold">Ürünler Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {gender.charAt(0).toUpperCase() + gender.slice(1)} {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">
            Bu kategoride ürün bulunamadı.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            (Toplam Ürün Sayısı: {products?.length || 0})
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.images?.[0] || '/placeholder.png'}
              title={product.name || 'İsimsiz Ürün'}
              description={product.description || ''}
              oldPrice={product.original_price || ''}
              newPrice={product.price || ''}
            />
          ))}
        </div>
      )}

      {/* Debug bilgileri - geliştirme aşamasında yardımcı olması için */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-bold mb-2">Debug Bilgileri:</h3>
          <p>Gender: {gender}</p>
          <p>Category: {category}</p>
          <p>Category ID: {getCategoryId()}</p>
          <p>Total Products: {products?.length}</p>
          <p>Filtered Products: {filteredProducts.length}</p>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;