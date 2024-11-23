import React from 'react'
import ProductCard from '@/components/ProductCard'
const Product = () => {
  return (
    <div className='sm:mx-20  mx-10 mt-10 flex sm:justify-between gap-3 sm:flex-row flex-col'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default Product
