import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <div>
      <nav className="bg-neutral-primary  w-full z-20 top-0 start-0 border-b border-default">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
     
    <Link
  to="/"
  className="self-center text-xl font-semibold whitespace-nowrap text-purple-500"
>
  MyShop
</Link>
    
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <Link
            to={"/"}
            className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
            aria-current="page"
          >
            Home
          </Link>
        </li>
      
          <li>
          <Link
            to={'/product'}
            className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
          >
            Product
          </Link>
          
        </li>
        <Link
            to={'/product-api'}
            className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
          >
            ProductAPI
          </Link>
        <li>
          <Link
            to={'/cart'}
            className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
          >
          Cart
          </Link>
        </li>
          <li>
          <Link
            to={'/login'}
            className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
          >
            Login
          </Link>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
