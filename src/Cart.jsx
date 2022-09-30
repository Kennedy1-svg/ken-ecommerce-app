import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addItem, delFromcart, subtractItem} from './cartreducer'
import {  useNavigate } from 'react-router-dom'


const Cart = () => {
  const {cart, value} = useSelector((state) => state.cart)
  const [check, setcheck] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate()
 console.log(cart)
 
  const handleAdd = (product) => {
    console.log(product)
    // const updatedquantity = cart.filter((x)=> x.id === product.id)

    dispatch(addItem(product))


    
    //

    // 
    
    
  }

  const handleSubtract = (id) => {
    // const getId = cart.filter(x => x.id === id)
    // console.log(getId)
    // const add =

  
    dispatch(subtractItem(value))  
    
  }

  const handledelete =  (id) => {
     dispatch(delFromcart(id)) 
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert ("Cart must contain at least an item before checkout")
      // navigate("/cart")
    } else {
      navigate('/checkout')
    }
  }


  return (
    <div >
      {cart.length === 0 && <h1 className='text-center text-3xl font-bold text-red-500 my-5'>Your Cart is Empty...</h1>}

      {cart.map(productItem => (
        <div className=' lg:grid grid-cols-2 gap-6  p-20 border border-red-400 ' key={productItem.id}>
          <div className='border rounded-lg shadow-lg p-3 flex justify-center shadow-red-500'>
          <img className='w-60' src={productItem.image}/>

          </div>
          
          <div className='my-5'>
            <p className='mx-1 lg:mr-10 font-bold text-xl text-center lg:text-left '>{productItem.title}</p>
            <p className='text-center lg:text-left'>Product Rating: {productItem.rating.rate}</p>
            <p className='text-center font-semibold lg:text-left'>{productItem.quantity} X ${productItem.price} = ${productItem.quantity * productItem.price}</p>
            <div className='flex justify-between border p-3 mt-6 lg:w-60 bg-slate-50'>
              <button className=' p-1 bg-black text-white rounded-lg  hover:bg-white hover:text-black' onClick={() => handleAdd(productItem)}>+</button>
              <p>{productItem.quantity}</p>
              <button onClick={() => handleSubtract(productItem.id)} className='border p-1 bg-black text-white rounded-lg  hover:bg-white hover:text-black'>-</button>
            </div>
            <div className='my-5 rounded-md text-center lg:text-left'>
            <button onClick={()=> handledelete(productItem)} className='border rounded-2xl p-3 bg-black text-white  shadow-lg shadow-black hover:bg-white hover:text-black' >Delete</button>
          </div>
         

          </div>

         
        </div>

      

      ))}

          <div className='my-5 rounded-md text-center'>
            
            <button onClick={handleCheckout} className='border rounded-2xl p-3 bg-red-500 text-white  shadow-lg shadow-black uppercase hover:bg-white hover:text-black' >Place Order</button>

           
          </div>
     
    </div>
  )
}

export default Cart