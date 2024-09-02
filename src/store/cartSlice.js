import { createSlice } from '@reduxjs/toolkit';

const fetchFromLocalStorage = () => {
    let carts = localStorage.getItem('carts');
    if (carts) {
        return JSON.parse(carts);
    } else {
        return [];
    }
}

const saveToLocalStorage = (carts) => {
    localStorage.setItem('carts', JSON.stringify(carts));
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemsCount: 0,
    totalAmount: 0,
    isCartMessageOn: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemInCart = state.carts.find(item =>
                item.id === action.payload.id);

            if (isItemInCart) {
                const tempCarts = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotal = item.price * tempQty;

                        return { ...item, quantity: tempQty, total: tempTotal };
                    } else {
                        return item;
                    }
                }
                );
                state.carts = tempCarts;
                saveToLocalStorage(state.carts);
            } else {
                state.carts.push(action.payload);
                saveToLocalStorage(state.carts);
            }
        },

        removeFromCart: (state, action) => {
            const tempCarts = state.carts.filter(item =>
                item.id !== action.payload);
            state.carts = tempCarts;
            saveToLocalStorage(state.carts);
        },

        clearCart: (state) => {
            state.carts = [];
            saveToLocalStorage(state.carts);
        },

        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.total
            }, 0);

            state.itemsCount = state.carts.length;
        },

        toggleCartQty: (state, action) => {
            const tempCarts = state.carts.map(item => {
                if (item.id === action.payload.id) {
                    let tempQty = item.quantity;
                    let tempTotal = item.total;

                    if (action.payload.type === 'INC') {
                        tempQty++;
                        if (tempQty === item.stock) tempQty = item.stock;
                        tempTotal = tempQty * item.price;
                    }
                    if (action.payload.type === 'DEC') {
                        tempQty--;
                        if (tempQty < 1) tempQty = 1;
                        tempTotal = tempQty * item.price;
                    }

                    return { ...item, quantity: tempQty, total: tempTotal };
                } else {
                    return item;
                }
            });
            state.carts = tempCarts;
            saveToLocalStorage(state.carts);
        },
        
        setCartMessageOn: (state) => {
            state.isCartMessageOn = true;
        },

        setCartMessageOff: (state) => {
            state.isCartMessageOn = false;
        }
    }
});

export const { addToCart, setCartMessageOff, setCartMessageOn, getCartTotal, toggleCartQty, clearCart, removeFromCart } = cartSlice.actions;
export const getAllCart = (state) => state.cart.carts;
export const getCartItemsCount = (state) => state.cart.itemsCount;
export const getCartMessageStatus = (state) => state.cart.isCartMessageOn;
export default cartSlice.reducer;