import React from 'react'
import { productlist } from '../../data/productdata'
import { Link } from 'react-router'

export default function Product() {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
        <section className='mx-auto max-w-[1320px] pb-12'>
            <h1 className='py-8 text-center text-2xl font-bold sm:py-10 sm:text-3xl'>Our Products</h1>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

     {
       productlist.map((obj)=>{
        return <ProductCard key={obj.id} data = {obj}/>
       })
     }

   
            </div>
        </section>
      
    </div>
  )
}


function ProductCard( {data}){
 let{title, thumbnail,id} = data
return(
    <figure className='flex flex-col overflow-hidden rounded-lg shadow-2xl'>
        <Link
          to={`/product/${id}`}
          className='block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500'
          aria-label={`View details for ${title}`}
        >
          <img src={thumbnail} alt={title} className='aspect-square w-full object-cover' />
          <h3 className='p-3 text-center'>{title}</h3>
        </Link>

         <Link to={`/product/${id}`} className='mt-auto self-start'>
          <button className='m-2 rounded-2xl bg-amber-400 px-4 py-3'>View Details</button>
         </Link>
        
    </figure>
)
}