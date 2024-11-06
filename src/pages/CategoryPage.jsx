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
    if (products.length === 0 && fetchState !== 'FETCHING') {
      dispatch(fetchProducts());
    }
  }, [dispatch, fetchState, products.length]);

  // Debug için kategori kodunu ve bulunan kategoriyi kontrol edelim
  const categoryInfo = useMemo(() => {
    const categoryCode = `${gender.charAt(0)}:${category}`;
    console.log('Searching for category code:', categoryCode);
    
    const foundCategory = categories.find(cat => {
      //!console.log('Checking category:', cat.code, 'against:', categoryCode);
      return cat.code === categoryCode;
    });
    
    console.log('Found category:', foundCategory);
    return foundCategory;
  }, [categories, gender, category]);

  // Debug için filtreleme işlemini kontrol edelim
  const filteredProducts = useMemo(() => {
    if (!categoryInfo) {
      console.log('No category info found');
      return [];
    }

    console.log('Filtering products with category ID:', categoryInfo.id);
    
    return products.filter(product => {
      console.log('Product:', product.id, 'Category ID:', product.category_id);
      return product && product.category_id === categoryInfo.id;
    });
  }, [products, categoryInfo]);

  // Debug bilgilerini görüntüleyelim
  useEffect(() => {
    console.log('Current State:', {
      gender,
      category,
      categoryInfo,
      totalProducts: products.length,
      filteredCount: filteredProducts.length,
      categories: categories.map(c => ({
        code: c.code,
        id: c.id,
        title: c.title
      }))
    });
  }, [gender, category, categoryInfo, products, filteredProducts, categories]);

  if (fetchState === 'FETCHING') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold">Loading...</div>
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
          {/* Debug bilgilerini göster */}
          <div className="mt-4 p-4 bg-gray-100 rounded-lg text-left">
            <p>Category Code: {`${gender.charAt(0)}:${category}`}</p>
            <p>Category ID: {categoryInfo.id}</p>
            <p>Available Categories:</p>
            <ul className="list-disc pl-5">
              {categories.map(cat => (
                <li key={cat.id}>
                  {cat.code} (ID: {cat.id}) - {cat.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.images?.[0]?.url || '/placeholder.png'}
              title={product.name || 'İsimsiz Ürün'}
              description={product.description || ''}
              oldPrice={product.original_price || ''}
              newPrice={product.price || ''}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;