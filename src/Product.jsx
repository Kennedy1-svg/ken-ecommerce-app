import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from  'react-redux'
import { addToCart } from './cartreducer'

const Product = () => {

    const {id} = useParams()
    const [item, setitem] = useState([])
    const dispatch = useDispatch()

    const {cart} = useSelector((state) => state.cart)

    useEffect (()=> {
        const getProducts = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setitem(response.data)
        }
        getProducts()

    },[id])
    const addProduct = (item) => {
      dispatch(addToCart(item))
      
    }

  return (
    <div>
        <section class="p-5 lg:p-20 lg:text-xl "> 
            <section className='lg:grid lg:grid-cols-2 gap-4 '>
              <div className='border rounded-xl shadow-lg p-6 lg:w-80'>
              <img className='' src={item.image}/>
              </div>

              <div>
                <h1 class="my-3 font-bold text-sm uppercase  text-red-500 tracking-widest ">{item.category}</h1>
                <article class="font-kumb">
                    <h1 class="font-bold text-2xl lg:text-5xl"> {item.title}</h1>
                    <p class="my-6 text-md text-black opacity-40 font-bold">
                       {item.description}
                      </p> 

                      <p className='font-bold text-3xl'>${item.price}</p>
                      <div className='flex justify-between items-center my-3'>
                      <button  onClick={()=> addProduct(item)} className='border p-3 button-3 bg-blue-500 text-white font-semibold rounded-xl cursor-pointer hover:bg-black'>Add to Cart</button>
                      <Link to="/cart"> 
                       <a className='border p-3 bg-blue-500 text-white font-semibold rounded-xl cursor-pointer hover:bg-black'>Go to Cart</a> 
                      </Link>


                      </div>
                </article>
              </div>
              
                
            </section>
        </section>

    </div>
  )
}

export default Product