import React from 'react'
import { productlist } from '../../data/productdata'
import { Link } from 'react-router'

export default function Product() {
  return (
    <div>
        <section>
            <h1 className='font-bold text-center py-10 text-3xl'>Our Products</h1>
            <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-4'>

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
    <figure className='shadow-2xl rounded-lg overflow-hidden'>
        <Link
          to={`/product/${id}`}
          className='block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500'
          aria-label={`View details for ${title}`}
        >
          <img src={thumbnail} alt={title} className='w-full aspect-square object-cover' />
          <h3 className='text-center p-3'>{title}</h3>
        </Link>

         <Link to ={`/product/${id}`}>
          <button className='p-3 bg-amber-400 m-2 rounded-2xl'>View Details</button>
         </Link>
        
    </figure>
)
}