import { api } from '@/api';

// Action Types
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';

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
    console.log("fetchProducts action started");
    dispatch(setFetchState('FETCHING'));
    try {
        const response = await api.get('/products');
        console.log('API response:', response);
        if (response.data && Array.isArray(response.data.products)) {
            console.log('Products fetched successfully:', response.data.products);
            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));
            dispatch(setFetchState('FETCHED'));
        } else {
            console.error('Invalid data format:', response.data);
            throw new Error('Invalid data format');
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        dispatch(setFetchState('FAILED'));
    }
};