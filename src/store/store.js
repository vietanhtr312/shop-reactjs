import {configureStore} from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import searchSlice from './searchSlice';

const store = configureStore({
    reducer: {
        category: categorySlice,
        product: productSlice,
        cart: cartSlice,
        search: searchSlice,
    }
});

export default store;