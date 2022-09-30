import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <div class="text-center bg-gray-50 text-gray-800 py-20 px-6">
       <h1 class="text-5xl font-bold mt-0 tracking-widest mb-6 text-red-500">Kenny.Com</h1>
       <h3 class="text-2xl italic font-bold mb-8">Online Shopping made easy.....</h3>
       <a href="#products1" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light"  role="button">View Products</a>
      </div>

      <About />

      <div id="products1">
        <h1 className='border bg-red-500 text-4xl p-5 text-center text-white tracking-widest uppercase my-10 '> Our Products</h1>

        <div className='mx-auto lg:grid lg:grid-cols-3 p-10 items-center justify-center'>
          <div className='w-100 rounded lg:w-60'>
            <img classname= 'w-20'src="/images/dell-ff11JzQk690-unsplash.jpg" alt='image'/>
          </div>
          <div className='w-100 mt-5 lg:w-60'>
            <img src="/images/md-salman-tWOz2_EK5EQ-unsplash.jpg" alt='image'/>
          </div>
          <div className='w-100 mt-5 lg:w-80 '>
            <img src="/images/milada-vigerova-p8Drpg_duLw-unsplash.jpg" alt='image'/>
          </div>
          <div className='w-100 mt-5 lg:w-60 mx-auto'>
            <img src="/images/andres-vera-202NAwjisYA-unsplash.jpg " alt='image'/>
          </div>
          <div className='w-100 lg:w-100 mt-7 mx-auto'>
            <img classname= '' src="/images/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg" alt='image'/>
          </div>
        </div>
        </div>
         <Link to="/products">
         <a className="block text-center w-40  my-10 mx-auto px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light"  role="button">View More</a>
         </Link>
    </div>
  )
}

export default Home