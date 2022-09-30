import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect (()=> {
        const getProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get("https://fakestoreapi.com/products");
                setLoading(false)
                setProducts(response.data)
            
            } catch (error) {
                console.log(error)
                
            }
           
        }
        getProducts()

    },[])

    const handlejewel = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/category/jewelery");
        setProducts(response.data)
    }

    const handleElect = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/category/electronics");
        setProducts(response.data)
    }

    const handleWomen = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
        setProducts(response.data)
    }

    const handleMen = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
        setProducts(response.data)
    }

    const handleAll = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data)
    }

    const handleNavigate = (id) => {
        navigate(`/products/${id}`)
    }

  
     return (
    <div>
        <div>
        <h1 className='border bg-red-500 text-4xl p-5 text-center text-white tracking-widest uppercase my-10 '>Latest Products</h1>
        </div>

        <div className='text-center'>
            <button onClick={handleAll} className='mx-3 border p-3 rounded-full bg-blue-500 text-white font-semibold cursor-pointer hover:bg-black'>All</button>
            <button onClick={handleMen} className='mx-3 border p-3 rounded-full bg-blue-500 text-white font-semibold cursor-pointer hover:bg-black'>Men Clothing</button>
            <button onClick={handleWomen} className='mx-3 border p-3 rounded-full bg-blue-500 text-white font-semibold cursor-pointer hover:bg-black'>Women Clothing</button>
            <button onClick={handleElect} className='mx-3 border p-3 rounded-full bg-blue-500 text-white font-semibold cursor-pointer hover:bg-black'>Electronics</button>
            <button onClick={handlejewel} className='mx-3 border p-3 rounded-full bg-blue-500 text-white font-semibold cursor-pointer hover:bg-black'>Jewelry</button>
            
        </div>

        {loading ? ( <p className='text-center text-2xl  text-blue-500 my-7'>Hold on a bit....</p>)

        : (
            <div className='lg:grid grid-cols-4 gap-5 p-5'>
            {products.map(product => (
                <div className='border p-3 rounded-xl shadow-2xl my-4 transition-all duration-500' key={product.id}>
                    <p className='my-5 text-center font-bold text-red-500'>{product.title}</p>
                    <div className='flex justify-center'>
                    <img className='w-60 text-center ' src={product.image}/>
                    </div>
                   
                    <p className='text-center mt-7 font-bold'>${product.price}</p>
                    <p onClick={() => handleNavigate(product.id)} className='text-center my-5 border rounded-full p-3 text-white bg-blue-500 cursor-pointer hover:bg-black '>View Details</p>

                </div>


            ))}
        </div>
            
        )
    }        

    </div>
  )
}

export default Products