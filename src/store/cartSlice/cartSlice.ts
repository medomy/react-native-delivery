import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import CartItem from '../../types/cartItem'
import MenuItem from '../../types/menu'

export interface CartState {
    cartItems: CartItem[],
    totalPrice: number,
    numberOfElements: number
}

const initialState: CartState = {
    cartItems: [],
    totalPrice: 0,
    numberOfElements: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, payload: PayloadAction<CartItem>) => {
            if (state.cartItems.find((item) => item.menuId === payload.payload.menuId)) {
                state.cartItems.find((item) => item.menuId === payload.payload.menuId)!.count += 1;
            }
            else {
                state.cartItems.push({ ...payload.payload});
            }
            state.totalPrice = state.cartItems.reduce((a, b) => a + b.price * b.count, 0);
            state.numberOfElements = state.cartItems.length;
        },

    },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer