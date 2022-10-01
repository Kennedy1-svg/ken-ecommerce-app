import React from "react";
import Home from "./Home";
import Products from "./Products";
import Product from "./Product";
import Cart from './Cart'
import About from "./About";
import Footer from "./Footer";
import Navbar from './Navbar'
import Checkout from "./Checkout";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./store";

function App() {
  return (
    <div className="font-font">
     
      
       
      <Provider store ={store}>
        <BrowserRouter >
        <Navbar />
        <Routes>
        <Route path= "/" element={<Home />}/>
        <Route path= "/products" element={<Products />}/>
        <Route path= "/products/:id" element={<Product />}/>
        <Route path= "/cart" element={<Cart />}/>
        <Route path= "/about" element={<About />}/>
        <Route path= "/checkout" element={<Checkout />}/>
        </Routes>
        </BrowserRouter>
        <Footer />

      </Provider>
     

     
     
    </div>
  );
}

export default App;
