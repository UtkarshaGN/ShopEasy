import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './components/common/MainLayout'
import Cart from './components/pages/Cart'

import Home from './components/pages/Home'


import Product from './components/pages/Product'
import ProductDetails from './components/pages/ProductDetails'
import ProductAPI from './components/pages/ProductAPI'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <Routes>
          <Route element = {<MainLayout/>}>
            <Route path={'/'} element ={<Home/>}/>
         <Route path={'/product'} element = {<Product/>}/>
             <Route path={'/product/:id'} element = {<ProductDetails/>}/>
             <Route path= {'/product-api'} element = {<ProductAPI/>}/>
     <Route  path={'/cart'} element ={<Cart/>}/>
             </Route>
             
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
