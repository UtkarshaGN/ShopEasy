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
       productlist.map((obj, index)=>{
        return <ProductCard key={index} data = {obj}/>
       })
     }

   
            </div>
        </section>
      
    </div>
  )
}


function ProductCard( {data}){
 let{title, thumbnail,description,id} = data
return(
    <figure className='shadow-2xl'>
        <img src={thumbnail} alt="" />
         <h3 className='text-center p-3'>{title} </h3>

         <Link to ={`/product/${id}`}>
          <button className='p-3 bg-amber-400 m-2 rounded-2xl'>Add to Cart</button>
         </Link>
        
    </figure>
)
}