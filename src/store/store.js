import {configureStore} from '@reduxjs/toolkit';
import productSlide from './productSlice';

const store = configureStore({
    reducer: {
        product: productSlide
    }
});

export default store;