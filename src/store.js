import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./cartreducer";

const store = configureStore ({
    reducer : {
        cart: cartreducer

    }
})

export default store;