import React, { useEffect, useMemo } from 'react';
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
    
    if (products.length === 0 && fetchState !== 'FETCHING') {
      console.log('Dispatching fetchProducts');
      dispatch(fetchProducts());
    }
  }, [dispatch, fetchState, products.length, gender, category]);

  const categoryInfo = useMemo(() => {
    const categoryCode = `${gender.charAt(0)}:${category}`;
    return categories.find(cat => cat.code === categoryCode);
  }, [categories, gender, category]);

  const filteredProducts = useMemo(() => {
    if (!categoryInfo) return [];
    return products.filter(product => product && product.category_id === categoryInfo.id);
  }, [products, categoryInfo]);

  useEffect(() => {
    console.log('Filtered Products:', filteredProducts);
    console.log('Category Info:', categoryInfo);
  }, [filteredProducts, categoryInfo]);

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
            (Toplam Ürün Sayısı: {products.length})
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.images?.[0]?.url || '/placeholder.png'}
              title={product.name || 'İsimsiz Ürün'}
              description={product.description || ''}
              oldPrice={product.original_price || ''}
              newPrice={product.price || ''}
            />
          ))}
        </div>
      )}

      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-bold mb-2">Debug Bilgileri:</h3>
          <p>Gender: {gender}</p>
          <p>Category: {category}</p>
          <p>Category ID: {categoryInfo?.id}</p>
          <p>Total Products: {products.length}</p>
          <p>Filtered Products: {filteredProducts.length}</p>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;