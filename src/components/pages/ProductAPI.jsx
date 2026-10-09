// let apiRes = await axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)

//let apiRes =  await axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)

// let apiRes = await axios.get(`https://wscubetech.co/ecommerce-api/products.php`,{

import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Loading from '../common/Loading'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { CartContext } from '../../MainContext/MainContext';

export default function ProductAPI() {

  let [categoryData, setCategoryData] = useState([])
  let [brandData, setBrandData] = useState([])
  let [productData, setProductData] = useState([])
  let [loading, setLoading] = useState(false)

  let[sorting, setSorting] = useState()
  let[categoryFilter, setCategoryFilter] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState('')
  const[totalPages, setTotalPages] = useState('')


  //console.log(sorting)
  //console.log(categoryFilter)

  let getCategory = async () => {
    let apiRes = await axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)
    let apiData = apiRes.data
    //console.log(apiData)
    let { data } = apiData
    //console.log(data)
    setCategoryData(data)
  }


  let getBrand = async () => {
    let apiRes = await axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)
    let apiData = apiRes.data
    //console.log(apiData)
    let { data } = apiData
    //console.log(data)
    setBrandData(data)

  }

  let getProducts = () => {

    setLoading(true)
    axios.get(`https://wscubetech.co/ecommerce-api/products.php`,{
      

      //backend developer gives keys to frontend developer
      
      params:{
        page:currentPage,
        limit:limit,
        sorting:sorting,
        price_from: null,
        price_to:null,
        discount_from:null,
        discount_to:null,
        name:null,
        rating:null,
        brands:null,
        categories:categoryFilter.join(",")
      }
    })
      .then((res) => res.data)
      .then((finalRes) => {
        //console.log(finalRes)
        setTotalPages(finalRes.total_pages)
        setLimit(finalRes.limit)
        let { data } = finalRes
        setProductData(data)
        setLoading(false)
      })
  }



  let categoryfilHandle =(e)=>{
    let value = e.target.value

    //console.log(value)

    setCategoryFilter(prev =>(
      [...prev, value]
    ))
  }
  useEffect(() => {
    getProducts()
  }, [sorting, categoryFilter, currentPage])


  useEffect(() => {
    getCategory()
    getBrand()
  }, [])



  return (

    <section className='mx-auto grid max-w-[1320px] grid-cols-1 gap-5 px-4 py-8 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:py-12'>
      <aside className='min-w-0 border border-[#ccc] p-3 sm:p-4'>
        <div className='flex justify-between p-3'>
          <h3 className=''>Filters</h3>
          <button className='text-red-500 font-bold text-md'>Clear All</button>
        </div>

        <div>
          <h3 className='font-bold text-xl '>Categories</h3>
          <ul className='grid max-h-[180px] grid-cols-1 gap-2 overflow-y-auto p-2 sm:grid-cols-2 lg:grid-cols-1'>
            {
              categoryData.map((obj, index) => {
                return (
                  <li key={obj.slug ?? index} className='flex items-center gap-2 text-sm'>
                    <input type="checkbox" value={obj.slug} onChange={categoryfilHandle} />
                    <span>{obj.name}</span>
                  </li>
                )
              })
            }


          </ul>
        </div>

        <div>
          <h3 className='font-bold text-xl '>Brand</h3>
          <ul className='grid max-h-[180px] grid-cols-1 gap-2 overflow-y-auto p-3 sm:grid-cols-2 lg:grid-cols-1'>
            {
              brandData.map((obj, index) => {
                return (
                  <li key={index} className='flex items-center gap-2 text-sm'>
                    <input type="checkbox" />
                    <span>{obj.name}</span>
                  </li>
                )
              })
            }


          </ul>
        </div>

       

        

      </aside>

      <div className='min-w-0 border border-[#ccc] p-3 sm:p-4'>
        <div className='flex justify-stretch sm:justify-end'>
          <select onChange={(e)=>setSorting(e.target.value)} className='w-full min-w-0 border p-2 sm:w-auto' name='' id=''>
            <option value="">Sort by: Recommanded</option>
            <option value='1'>Name: A to Z </option>
            <option value='2'> Name: Z to A</option>
            <option value='3'> Price: Low to High</option>
            <option value='4'>Price: High to Low</option>
            
          </select>
        </div>


{
  loading ? ( 
        <div className='grid grid-cols-1 gap-4 p-1 sm:grid-cols-2 sm:gap-5 sm:p-3 xl:grid-cols-4'>
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />

        </div>):(

        <div className='grid grid-cols-1 gap-4 p-1 sm:grid-cols-2 sm:gap-5 sm:p-3 xl:grid-cols-4'>
          {
            productData.map((obj, index) => {
              return (
                <ProductCard productData={obj} key={index} />
              )
            })
          }
        </div>

        )
}

       
{/*pagination*/}

    <div className='mt-5 overflow-x-auto'>
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>


       

      </div>
    </section>

  )
}



function ProductCard({ productData }) {
  let { name, description, image, price } = productData
  const { addToCart } = useContext(CartContext)

  return (
    <div className='flex min-w-0 flex-col gap-4 border p-3'>
      <img src={image} alt={name} className='aspect-square w-full object-cover' />
      <div className='flex flex-1 flex-col'>
        <h3 className='font-bold'>{name}</h3>
        <p className='mt-2 line-clamp-3 text-sm text-slate-600'>{description}</p>
        <div>
          <p className='mt-2 font-semibold'>${Number(price).toFixed(2)}</p>
        </div>

        <button
          type='button'
          className='mt-auto self-start rounded-md bg-amber-300 p-2'
          onClick={() => addToCart({ ...productData, cartId: `api-${productData.id ?? name}` })}
        >
          Add to Cart
        </button>
      </div>

    </div>
  )
}