// Product Actions
import { api } from '@/api';
import axios from 'axios';

export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories,
});

export const setProductList = (productList) => ({
    type: 'SET_PRODUCT_LIST',
    payload: productList,
});

export const setTotal = (total) => ({
    type: 'SET_TOTAL',
    payload: total,
});

export const setFetchState = (fetchState) => ({
    type: 'SET_FETCH_STATE',
    payload: fetchState,
});

export const setLimit = (limit) => ({
    type: 'SET_LIMIT',
    payload: limit,
});

export const setOffset = (offset) => ({
    type: 'SET_OFFSET',
    payload: offset,
});

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter,
});

// Thunk Action Creator to fetch categories
export const fetchCategories = () => {
    return async (dispatch) => {
      dispatch(setFetchState('FETCHING'));
      try {
        const response = await api.get('/categories');
        console.log('Categories fetched:', response.data); //! Kontrol için log ekle (yorum satırı yapmayı unutma)
        dispatch(setCategories(response.data));
        dispatch(setFetchState('FETCHED'));
      } catch (error) {
        console.error('Error fetching categories:', error);
        dispatch(setFetchState('FAILED'));
      }
    };
  };
// Thunk Action Creator to fetch products
export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(setFetchState('FETCHING'));
        try {
            const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/products');
            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));
            dispatch(setFetchState('FETCHED'));
        } catch (error) {
            dispatch(setFetchState('FAILED'));
            console.error(error);
        }
    };
};