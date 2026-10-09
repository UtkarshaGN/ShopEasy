import React, { useContext } from 'react'
import { Link, useParams } from 'react-router'
import { productlist } from '../../data/productdata'
import { CartContext } from '../../MainContext/MainContext'
import { toast } from 'react-toastify';
export default function ProductDetails() {
  const { id } = useParams()
  const product = productlist.find((item) => item.id === Number(id))
  const { addToCart } = useContext(CartContext)

  if (!product) {
    return (
      <main className='max-w-[1320px] mx-auto px-4 py-16 text-center'>
        <h1 className='text-3xl font-bold'>Product not found</h1>
        <Link to='/product' className='inline-block mt-6 text-amber-700 underline'>
          Back to products
        </Link>
      </main>
    )
  }
const handleAddToCart = () => {
  addToCart({
    ...product,
    cartId: `product-${product.id}`,
  });

  toast.success('Product added to cart successfully!');
};
  return (
    <main className='max-w-[1320px] mx-auto px-4 py-12'>
      <Link to='/product' className='inline-block mb-8 text-amber-700 hover:underline'>
        &larr; Back to products
      </Link>

      <section className='grid gap-10 md:grid-cols-2 items-start'>
        <img
          src={product.images?.[0] ?? product.thumbnail}
          alt={product.title}
          className='w-full rounded-xl object-cover shadow-lg'
        />

        <div>
          <p className='mb-2 text-sm uppercase tracking-wide text-slate-500'>{product.category}</p>
          <h1 className='text-3xl font-bold'>{product.title}</h1>
          {product.brand && <p className='mt-2 text-slate-600'>Brand: {product.brand}</p>}
          <p className='mt-5 text-2xl font-semibold'>${product.price.toFixed(2)}</p>
          <p className='mt-5 leading-7 text-slate-700'>{product.description}</p>
          <p className='mt-5'>Rating: {product.rating} / 5</p>
          <p className='mt-2'>{product.availabilityStatus} ({product.stock} available)</p>
          <p className='mt-2 text-slate-600'>{product.shippingInformation}</p>
          
          <button
  type="button"
  onClick={handleAddToCart}
  className="mt-8 rounded-2xl bg-amber-400 px-6 py-3 font-semibold transition hover:bg-amber-500"
>
  Add to Cart
</button>
        </div>
      </section>
    </main>
  )
}
