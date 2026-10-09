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

    <section className='grid lg:grid-cols-[20%_auto]  grid-cols-1 gap-10 py-12'>
      <aside className='border-1 border-[#ccc]'>
        <div className='flex justify-between p-3'>
          <h3 className=''>Filters</h3>
          <button className='text-red-500 font-bold text-md'>Clear All</button>
        </div>

        <div>
          <h3 className='font-bold text-xl '>Categories</h3>
          <ul className='h-[130px] overflow-y-scroll p-2'>
            {
              categoryData.map((obj, index) => {
                return (
                  <li> <input type="checkbox" value ={obj.slug} onChange={categoryfilHandle} />{obj.name}</li>
                )
              })
            }


          </ul>
        </div>

        <div>
          <h3 className='font-bold text-xl '>Brand</h3>
          <ul className='h-[130px] overflow-y-scroll p-3'>
            {
              brandData.map((obj, index) => {
                return (
                  <li key={index}> <input type="checkbox" />{obj.name}</li>
                )
              })
            }


          </ul>
        </div>

       

        

      </aside>

      <div className='border-1 border-[#ccc] p-3'>
        <div className='flex justify-end'>
          <select onChange={(e)=>setSorting(e.target.value)} className='border-1 p-2' name='' id=''>
            <option value="">Sort by: Recommanded</option>
            <option value='1'>Name: A to Z </option>
            <option value='2'> Name: Z to A</option>
            <option value='3'> Price: Low to High</option>
            <option value='4'>Price: High to Low</option>
            
          </select>
        </div>


{
  loading ? ( 
        <div className='grid grid-cols-4 gap-6 p-3'>
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />

        </div>):(

        <div className='grid grid-cols-4 gap-6 p-3'>
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

    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />


       

      </div>
    </section>

  )
}



function ProductCard({ productData }) {
  let { name, description, image, price } = productData
  const { addToCart } = useContext(CartContext)

  return (
    <div className='border-1 p-3 flex flex-col gap-4'>
      <img src={image} alt="" />
      <div>
        <h3 className='font-bold'>{name}</h3>
        <p>{description}</p>
        <div>
          <p>{price}</p>
        </div>

        <button
          type='button'
          className='bg-amber-300 p-2 rounded-md mt-4'
          onClick={() => addToCart({ ...productData, cartId: `api-${productData.id ?? name}` })}
        >
          Add to Cart
        </button>
      </div>

    </div>
  )
}