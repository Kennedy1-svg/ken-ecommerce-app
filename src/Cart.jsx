import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addItem, delFromcart, subtractItem} from './cartreducer'
import {  useNavigate } from 'react-router-dom'


const Cart = () => {
  const {cart, value} = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate()
 console.log(cart)
 
  const handleAdd = (product) => {
    dispatch(addItem(product))    
  }

  const handleSubtract = (product) => {
    dispatch(subtractItem(product))   
  }

  const handledelete =  (id) => {
     dispatch(delFromcart(id)) 
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert ("Cart must contain at least an item before checkout")
    } else {
      navigate('/checkout')
    }
  }


  return (
    <div >
      {cart.length === 0 && 
       <div>
         <h1 className='text-center text-3xl font-bold text-[#f7cb15] my-5'>Your Cart is Empty...</h1>
         <div className='mx-auto  flex justify-center '>
         <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><circle cx="10" cy="28" r="2" fill="black"/><circle cx="24" cy="28" r="2" fill="black"/><path fill="#f7cb15" d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z"/><path fill="black" d="M18.41 8L22 4.41L20.59 3L17 6.59L13.41 3L12 4.41L15.59 8L12 11.59L13.41 13L17 9.41L20.59 13L22 11.59L18.41 8z"/></svg>
         </div>
        

       </div>
     }

      {cart.map(productItem => (
        <div className=' lg:grid grid-cols-2 gap-6  p-20 ' key={productItem.id}>
          <div className='border rounded-lg shadow-lg p-3 flex justify-center shadow-black'>
          <img className='w-60' src={productItem.image}/>

          </div>
          
          <div className='my-5'>
            <p className='mx-1 lg:mr-10 font-bold text-xl text-center lg:text-left '>{productItem.title}</p>
            <p className='text-center lg:text-left'>Product Rating: {productItem.rating.rate}</p>
            <p className='text-center font-semibold lg:text-left'>{productItem.quantity} X ${productItem.price} = ${productItem.quantity * productItem.price}</p>
            <div className='flex justify-between border p-3 mt-6 lg:w-60 bg-slate-50'>
              <button className=' p-1 bg-black text-white rounded-lg  hover:bg-white hover:text-black' onClick={() => handleAdd(productItem)}>+</button>
              <p>{productItem.quantity}</p>
              <button onClick={() => handleSubtract(productItem)} className='border p-1 bg-black text-white rounded-lg  hover:bg-white hover:text-black'>-</button>
            </div>
            <div className='my-5 rounded-md text-center lg:text-left'>
            <button onClick={()=> handledelete(productItem)} className='border rounded-2xl p-3 bg-[#76bed0] text-white  shadow-lg shadow-black hover:bg-white hover:text-black' >Delete</button>
          </div>
         

          </div>

         
        </div>

      

      ))}

          <div className='my-5 rounded-md text-center'>
            
            <button onClick={handleCheckout} className='border rounded-2xl p-3 bg-[#f7cb15] text-white  shadow-lg shadow-black uppercase hover:bg-white hover:text-black' >Place Order</button>

           
          </div>
     
    </div>
  )
}

export default Cart