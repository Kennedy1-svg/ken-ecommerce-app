import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <div class="text-center bg-gray-50 text-gray-800 py-20 px-6">
        <div className=' w-30  ml-[70px] lg:mx-auto lg:absolute left-[320px]'>
          <svg className='w-40' xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="#76bed0" d="M53.1 38.6h-7.5v3.8h7.5c1 0 1.9.8 1.9 1.9s-.8 1.9-1.9 1.9H6.3c-1 0-1.9.8-1.9 1.9c0 1 .8 1.9 1.9 1.9h46.9c3.1 0 5.6-2.5 5.6-5.6c0-3.3-2.6-5.8-5.7-5.8m1.4-12.9l-3.7-.3c0-.1 2.3-13.8 2.8-16.6c.3-1.6.9-6.1 6.6-6.1v3.8c-2.3 0-2.6.9-2.8 2.6c-.6 2.8-2.9 16.4-2.9 16.6"/><path fill="#f7cb15" d="M54.7 12.3H4c-1.9 0-2.2 1.8-1.9 2.8l5.7 25.4c.3 1 1.3 1.8 2.4 1.8H50c1 0 2-.8 2.2-1.9l4.2-26.3c.1-.9-.7-1.8-1.7-1.8M6.9 20.8l-1-3.8c-.1-.5.2-.9.7-.9h7.1c.5 0 1 .4 1 .9l.4 3.8c.1.5-.3.9-.8.9H8c-.5 0-1-.4-1.1-.9m3.2 9.3c-.5 0-1-.4-1.2-.9l-.7-2.9c-.1-.5.2-.9.7-.9h5.7c.5 0 1 .4 1 .9l.3 2.8c.1.5-.3.9-.8.9c.1.1-5 .1-5 .1m6 8.5h-3.9c-.5 0-1-.4-1.2-.9l-.7-2.9c-.1-.5.2-.9.7-.9h4.5c.5 0 1 .4 1 .9l.3 2.8c.2.5-.2 1-.7 1m11.5-1c0 .5-.4.9-.9.9h-4.9c-.5 0-1-.4-1-.9l-.3-2.8c-.1-.5.3-.9.8-.9h5.4c.5 0 .9.4.9.9v2.8m0-8.4c0 .5-.4.9-.9.9h-5.8c-.5 0-1-.4-1-.9l-.3-2.8c-.1-.5.3-.9.8-.9h6.3c.5 0 .9.4.9.9v2.8m0-8.4c0 .5-.4.9-.9.9H20c-.5 0-1-.4-1-.9l-.5-3.8c-.1-.5.3-.9.8-.9h7.3c.5 0 .9.4.9.9c.1 0 .1 3.8.1 3.8m10.2 16.8c-.1.5-.5.9-1 .9h-4.4c-.5 0-.9-.4-.9-.9v-2.8c0-.5.4-.9.9-.9h4.9c.5 0 .9.4.8.9l-.3 2.8m.9-8.4c-.1.5-.5.9-1 .9h-5.3c-.5 0-.9-.4-.9-.9v-2.8c0-.5.4-.9.9-.9h5.8c.5 0 .9.4.8.9l-.3 2.8m.9-8.4c-.1.5-.5.9-1 .9h-6.2c-.5 0-.9-.4-.9-.9V17c0-.5.4-.9.9-.9h6.8c.5 0 .9.4.8.9l-.4 3.8m8.7 16.8c-.1.5-.6.9-1.1.9h-4.8c-.5 0-.9-.4-.8-.9l.3-2.8c.1-.5.5-.9 1-.9H48c.5 0 .9.4.8.9l-.5 2.8m1.3-8.4c-.1.5-.6.9-1.1.9h-5.3c-.5 0-.9-.4-.8-.9l.3-2.8c.1-.5.5-.9 1-.9h5.5c.5 0 .9.4.8.9l-.4 2.8m1.3-8.4c-.1.5-.6.9-1.1.9h-5.7c-.5 0-.9-.4-.8-.9l.4-3.8c.1-.5.5-.9 1-.9h5.9c.5 0 .9.4.8.9l-.5 3.8"/><circle cx="12.3" cy="56.4" r="5.6" fill="black"/><circle cx="12.3" cy="56.4" r="2.8" fill="#fff"/><circle cx="46.1" cy="56.4" r="5.6" fill="black"/><path fill="#fff" d="M48.9 56.4c0 1.6-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8c0-1.6 1.3-2.8 2.8-2.8c1.5 0 2.8 1.2 2.8 2.8"/><path fill="#yellow" d="M61.1 2h-2.8v5.6h2.8c.5 0 .9-.4.9-.9V2.9c0-.5-.4-.9-.9-.9"/><path fill="#f15744" d="M12.3 48.9c-4.1 0-7.5 3.4-7.5 7.5h15c0-4.2-3.3-7.5-7.5-7.5m33.8 0c-4.1 0-7.5 3.4-7.5 7.5h15c0-4.2-3.4-7.5-7.5-7.5"/></svg>

        </div>
        
       <h1 class="text-3xl lg:text-5xl font-bold mt-0 tracking-widest mb-6 text-black">Kenny.Com</h1>
       <h3 class="text-2xl italic font-bold mb-8">Online Shopping made easy.....</h3>
       <a href="#products1" class="inline-block px-6 py-2.5 bg-[#76bed0] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light"  role="button">View Products</a>
      </div>

      <About />

      <div id="products1">
        <h1 className='border bg-[#76bed0] text-4xl p-5 text-center text-white tracking-widest uppercase my-10 '> Our Products</h1>

        <div className='mx-auto grid grid-cols-2 gap-6 lg:grid lg:grid-cols-3 p-10 items-center justify-center'>
          <div className='w-100   p-3 rounded-xl shadow-2xl lg:w-60'>
            <img classname= 'w-20'src="/images/dell-ff11JzQk690-unsplash.jpg" alt='image'/>
          </div>
          <div className='w-100   p-3 rounded-xl shadow-2xl mt-5 lg:w-60'>
            <img src="/images/md-salman-tWOz2_EK5EQ-unsplash.jpg" alt='image'/>
          </div>
          <div className='w-100   p-3 rounded-xl shadow-2xl mt-5 lg:w-80 '>
            <img src="/images/milada-vigerova-p8Drpg_duLw-unsplash.jpg" alt='image'/>
          </div>
          <div className='w-100   p-3 rounded-xl shadow-2xl mt-5 lg:w-60 mx-auto'>
            <img src="/images/andres-vera-202NAwjisYA-unsplash.jpg " alt='image'/>
          </div>
          <div className='w-100   p-3 rounded-xl shadow-2xl lg:w-100 mt-7 mx-auto'>
            <img classname= '' src="/images/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg" alt='image'/>
          </div>
          <div className='w-100   p-3 rounded-xl shadow-2xl lg:w-100 mt-7 mx-5'>
            <img classname= '' src="/images/alex-chambers-TxCbfMc854c-unsplash.jpg.crdownload" alt='image'/>
          </div>
        </div>
        </div>
         <Link to="/products">
         <a className="block text-center w-40  my-10 mx-auto px-6 py-2.5 bg-[#76bed0] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light"  role="button">View More</a>
         </Link>
    </div>
  )
}

export default Home