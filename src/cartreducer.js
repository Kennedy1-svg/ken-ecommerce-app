import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        cart: [],
        value: 0

    },

    reducers: {
        addToCart : (state,action) => {
            const product = action.payload;
            const present = state.cart.find((x) => x.id === product.id) //checks to see if product exists in cart
            if (!present){
                state.cart.push({...product, quantity: 1})     
            } else {
                console.log(undefined)
            }     
        },

        addItem : (state,action) => {  //increases the quantity
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0){
                state.cart[itemIndex].quantity += 1
            }
         
        }, 

        subtractItem : (state,action) => {  //decreases the quantity
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0){
                state.cart[itemIndex].quantity -= 1 
            }
            
            if( state.cart[itemIndex].quantity < 1){
                state.cart[itemIndex].quantity = 1
            }
           
        }, 

        delFromcart: (state,action) => { //removes a product from cart
            const product = action.payload;
            const remove = state.cart.filter((x) => x.id !== product.id)
            state.cart = remove
        },

        resetcart: (state,action) => {  //resets the cart to an empty cart
            state.cart.length = 0

            
        },
    }
})

export const {addToCart, addItem, delFromcart, subtractItem, resetcart} = cartSlice.actions

export default cartSlice.reducer;

          