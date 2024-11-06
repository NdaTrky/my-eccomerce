import { api } from '@/api';

// Action Types
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Action Creators
export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
});

export const setProductList = (productList) => ({
    type: SET_PRODUCT_LIST,
    payload: productList,
});

export const setTotal = (total) => ({
    type: SET_TOTAL,
    payload: total,
});

export const setFetchState = (fetchState) => ({
    type: SET_FETCH_STATE,
    payload: fetchState,
});

// Thunk Actions
export const fetchCategories = () => async (dispatch) => {
    dispatch(setFetchState('FETCHING'));
    try {
        const response = await api.get('/categories');
        dispatch(setCategories(response.data));
        dispatch(setFetchState('FETCHED'));
    } catch (error) {
        console.error('Error fetching categories:', error);
        dispatch(setFetchState('FAILED'));
    }
};

export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    dispatch(setFetchState('FETCHING'));

    try {
        // Tüm ürünleri almak için limit ve offset kullanımı
        const limit = 100; // Veya ihtiyacınıza göre ayarlayın
        const response = await api.get('/products', {
            params: {
                limit,
                offset: 0,
            }
        });

        console.log('API response:', response);

        if (response.data && Array.isArray(response.data.products)) {
            const products = response.data.products.map(product => ({
                ...product,
                images: product.images?.map(img => ({
                    ...img,
                    url: img.url || '/placeholder.png' // Varsayılan görsel URL'si
                }))
            }));

            console.log('Processed products:', products);

            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: {
                    products,
                    total: response.data.total
                }
            });

            dispatch(setProductList(products));
            dispatch(setTotal(response.data.total));
            dispatch(setFetchState('FETCHED'));
        } else {
            throw new Error('Invalid data format received from API');
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
        dispatch(setFetchState('FAILED'));
    }
};

// Kategoriye göre ürün filtreleme action'ı (isteğe bağlı)
export const fetchProductsByCategory = (categoryId) => async (dispatch) => {
    dispatch(setFetchState('FETCHING'));
    try {
        const response = await api.get('/products', {
            params: {
                category_id: categoryId
            }
        });

        if (response.data && Array.isArray(response.data.products)) {
            const products = response.data.products.map(product => ({
                ...product,
                images: product.images?.map(img => ({
                    ...img,
                    url: img.url || '/placeholder.png'
                }))
            }));

            dispatch(setProductList(products));
            dispatch(setTotal(response.data.total));
            dispatch(setFetchState('FETCHED'));
        } else {
            throw new Error('Invalid data format');
        }
    } catch (error) {
        console.error('Error fetching products by category:', error);
        dispatch(setFetchState('FAILED'));
    }
};