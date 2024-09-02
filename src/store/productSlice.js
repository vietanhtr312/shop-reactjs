import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../utils/apiURL';
import { STATUS } from '../utils/status';

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productSingle: [],
    productSingleStatus: STATUS.IDLE,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncProducts.pending, (state ) => {
                state.productsStatus = STATUS.LOADING;
            })
            .addCase(fetchAsyncProducts.fulfilled, (state, { payload }) => {
                state.products = payload;
                state.productsStatus = STATUS.SUCCESS;
            })

            .addCase(fetchAsyncProducts.rejected, (state) => {
                state.productsStatus = STATUS.FAILED;
            })

            .addCase(fetchAsyncProductSingle.pending, (state) => {
                state.productSingleStatus = STATUS.LOADING;
            })

            .addCase(fetchAsyncProductSingle.fulfilled, (state, { payload }) => {
                state.productSingle = payload;
                state.productSingleStatus = STATUS.SUCCESS;
            })

            .addCase(fetchAsyncProductSingle.rejected, (state) => {
                state.productSingleStatus = STATUS.FAILED;
            })

            .addCase(fetchAsyncSortProducts.pending, (state) => {
                state.productsStatus = STATUS.LOADING;
            })

            .addCase(fetchAsyncSortProducts.fulfilled, (state, { payload }) => {
                state.products = payload;
                state.productsStatus = STATUS.SUCCESS;
            })

            .addCase(fetchAsyncSortProducts.rejected, (state) => {
                state.productsStatus = STATUS.FAILED;
            })

            .addCase(fetchAsyncFilterProducts.pending, (state) => {
                state.productsStatus = STATUS.LOADING;
            })

            .addCase(fetchAsyncFilterProducts.fulfilled, (state, { payload }) => {
                state.products = payload;
                state.productsStatus = STATUS.SUCCESS;
            })

            .addCase(fetchAsyncFilterProducts.rejected, (state) => {
                state.productsStatus = STATUS.FAILED;
            })
    }
});

export const fetchAsyncProducts = createAsyncThunk('products/fetch', async (limit) => {
    const response = await fetch(`${BASE_URL}products`);
    const data = await response.json();
    return data;
})

export const fetchAsyncProductSingle = createAsyncThunk('product-single/fetch', async (id) => {
    const response = await fetch(`${BASE_URL}products/${id}`);
    const data = await response.json();
    return data;
})

export const fetchAsyncSortProducts = createAsyncThunk('products/sort', async (sort) => {
    const response = await fetch(`${BASE_URL}products?_sort=${sort?.value}&_order=${sort?.option}`);
    const data = await response.json();
    return data;
})

export const fetchAsyncFilterProducts = createAsyncThunk('products/filter', async (price) => {
    const response = await fetch(`${BASE_URL}products?price_gte=${price.lowerPrice || 0}&price_lte=${price.upperPrice || 100000000}`);
    const data = await response.json();
    return data;
})



export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;
export const getProductSingle = (state) => state.product.productSingle;
export const getSingleProductStatus = (state) => state.product.productSingleStatus;

export default productSlice.reducer;