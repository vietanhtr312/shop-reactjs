import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../utils/apiURL';
import { STATUS } from '../utils/status';

const initialState = {
    categories: [],
    categoriesStatus: STATUS.IDLE,
    categoryProducts: [],
    categoryProductsStatus: STATUS.IDLE
}

const categoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncCategories.pending, (state ) => {
                state.categoriesStatus = STATUS.LOADING;
            })
            .addCase(fetchAsyncCategories.fulfilled, (state, { payload }) => {
                state.categories = payload;
                state.categoriesStatus = STATUS.SUCCESS;
            })

            .addCase(fetchAsyncCategories.rejected, (state) => {
                state.categoriesStatus = STATUS.FAILED;
            })
            .addCase(fetchAsyncProductsOfCategory.pending, (state) => {
                state.categoryProductsStatus = STATUS.LOADING;
            })
    
            .addCase(fetchAsyncProductsOfCategory.fulfilled, (state, action) => {
                state.categoryProducts = action.payload;
                state.categoryProductsStatus = STATUS.SUCCEEDED;
            })
    
            .addCase(fetchAsyncProductsOfCategory.rejected, (state) => {
                state.categoryProductsStatus = STATUS.FAILED;
            })
    }
});

export const fetchAsyncCategories = createAsyncThunk('categories/fetch', async () => {
    const response = await fetch(`${BASE_URL}products/categories`);
    const data = await response.json();
    return data;
})

export const fetchAsyncProductsOfCategory = createAsyncThunk('categories/fetchProducts', async (id) => {
    const response = await fetch(`${BASE_URL}products/category/${id}`);
    const data = await response.json();
    return data;
})

export const getAllCategories = (state) => state.product.categories;
export const getAllCategoriesStatus = (state) => state.product.categoriesStatus;

export default categoriesSlice.reducer;