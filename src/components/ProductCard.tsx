import React from 'react'
import Image from 'next/image'
const ProductCard = () => {
  return (
    
        <div className='rounded-lg  sm:w-full  flex flex-col  items-center bg-green-500'>
            <div >
                <Image className='w-full object-cover ' src="/images/card1.jpg" alt='card 1'
                 width={400} height={200}/>

            </div>
            
            <p className='py-2'>
                Artifical intelligence
            </p>
            <p className=''>
                Artifical intelligence
            </p>
            
        </div>
    
  )
}

export default ProductCard