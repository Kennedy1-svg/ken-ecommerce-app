import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        cart: [],
        value: 0

    },

    reducers: {
        addToCart: (state,action) => {
            const product = action.payload;
            const present = state.cart.find((x) => x.id === product.id)
            if (!present){
                state.cart.push({...product, quantity: 1})
                

            } else {
                console.log(undefined)
            }     
        },

        addItem : (state,action) => {
            // state.value = state.value + 1
            const quantities = state.cart.filter((x) => x.id === action.payload.id) //specific product
            const quantities1 = state.cart.filter((x) => x.id !== action.payload.id) //
            const quantityIncrement = quantities.quantity + 1
            state.cart.push({...quantities, })
            console.log(quantities)
        }, 

        subtractItem : (state,action) => {
            if(state.value === 0){
                state.value = 0
            } else {
                state.value = state.value - 1
            }
        }, 

        delFromcart: (state,action) => {
            const product = action.payload;
            const remove = state.cart.filter((x) => x.id !== product.id)
            state.cart = remove
        },

        resetcart: (state,action) => {
            state.cart.length = 0

            
        },
    }
})

export const {addToCart, addItem, delFromcart, subtractItem, resetcart} = cartSlice.actions

export default cartSlice.reducer;

          