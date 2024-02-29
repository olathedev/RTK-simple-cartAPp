import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../data/data'


const initialState = {
    cartItems: cartItems,
    amount: 25,
    total: 0,
    isLoading: true
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state, action) => {
            console.log(action);
            state.cartItems = []
            state.amount = 0
        },

        removeItem: (state, action) => {
            console.log(action);
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },

        increase: (state, {payload}) => {
            console.log(payload);
            if(payload.type === 'INCREASE') {
                const cartItem = state.cartItems.find((item) => item.id === payload.id)
                cartItem.amount = cartItem.amount + 1
                // console.log(cartItem);
            }
            if(payload.type === 'DECREASE') {
                const cartItem = state.cartItems.find((item) => item.id === payload.id)
                cartItem.amount = cartItem.amount - 1
                // console.log(cartItem);
            }

            state.cartItems = state.cartItems
           
        },

        total: (state) => {
            let amount = 0
            let total = 0

            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })

            state.amount = amount
            state.total = total 
            // console.log(amount);


        }

    }

})

export const {clearCart, removeItem, increase, total} = cartSlice.actions
// console.log(cartSlice.actions);


// console.log(cartSlice);

export default cartSlice.reducer