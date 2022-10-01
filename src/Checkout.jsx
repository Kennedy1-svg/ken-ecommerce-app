import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { resetcart } from './cartreducer'

const Checkout = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch( resetcart())
    
    }, [])
    

  return (
    <div className='text-center p-5'>
        <h1 className=' text-3xl  text-[#76bed0] text-center p-4'>Order Placed! </h1>
        <p className=' text-3xl  text-[#76bed0] text-center p-4  '>Thank you for shopping with us! Expect delivery within 2 working days.</p>
        <div className=' text-center  '>
        <svg className='mx-auto my-5 border p-2 rounded-lg shadow-lg shadow-[#f7cb15]' xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="#f7cb15" d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607l1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4a2 2 0 0 0 0-4h7a2 2 0 1 0 0 4a2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm-1.646-7.646l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/></svg>
        </div>
        
        <a href="/" class="inline-block text-center px-6 py-2.5 bg-[#76bed0] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light"  role="button">Go Home</a>
    </div>
  )
}

export default Checkout