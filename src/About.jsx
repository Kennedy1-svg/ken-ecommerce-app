import React from 'react'

const About = () => {
  return (
    <>
    <h1 className='border bg-red-500 text-4xl p-5 text-center text-white tracking-widest uppercase my-10 '>About Us</h1>
      <section class="why_section layout_padding">
         <div class="container">
            <div class="heading_container heading_center">
               <h2 className=' text-4xl font-bold my-5 text-center lg:ml-[150px] '>
                  Why Shop With Us
               </h2>
            </div>
            <div className=" w-screen lg:grid lg:grid-cols-3 p-3 ">

                  
                     <div className=" rounded bg-blue-900 text-white text-center text-3xl p-5 h-[200px] mx-3 mb-5">
                       <h1 className='text-2xl'>
                           Fast Delivery
                        </h1>
                        <p className='text-sm'>
                           Delivery is sure to be on time as soon as it is needed.
                        </p>
                     </div>
                  
                

                
                  
                     <div className=" rounded bg-red-600 text-white text-center text-3xl p-5 h-[200px] mx-3 mb-5">
                        <h1 className='text-2xl'>
                           Free Shipping
                        </h1>
                        <p className='rounded text-sm'>
                           Shipping is free for the first 5 deliveries for new users
                        </p>
                     </div>
                  
                     <div className=" rounded bg-green-900 text-white text-center text-3xl p-5 h-[200px] mx-3">
                       <h1 className='text-2xl'>
                           Best Quality
                      </h1>
                        <p className='text-sm'>
                           Quality of our products are tested and trusted and sure to never disappoint.
                        </p>
                     </div>
                  
               
            </div>
         </div>
      </section>

    </>
  )
}

export default About