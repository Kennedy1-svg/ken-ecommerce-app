import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { resetcart } from './cartreducer'

const Checkout = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch( resetcart())
    
    }, [])
    

  return (
    <div className='text-center h-[200px]'>
        <h1 className=' text-3xl  text-red-500 text-center p-4'>Order Placed! </h1>
        <p className=' text-3xl  text-red-500 text-center p-4  '>Thank you for shopping with us! Expect delivery within 2 working days.</p>
        <a href="#" class="inline-block text-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light"  role="button">Enter Card Details</a>
    </div>
  )
}

export default Checkout