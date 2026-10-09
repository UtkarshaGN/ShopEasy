import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <header className="w-full border-b border-amber-600 bg-white">
      <nav aria-label="Main navigation" className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6">
        <ul className="flex flex-col gap-1 font-medium sm:flex-row sm:items-center sm:gap-2">
          <li>
            <Link
              to="/product"
              className="block rounded-lg px-4 py-3 transition hover:bg-amber-50 hover:text-amber-800 sm:py-2"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/product-api"
              className="block rounded-lg px-4 py-3 transition hover:bg-amber-50 hover:text-amber-800 sm:py-2"
            >
              Product API
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="block rounded-lg px-4 py-3 transition hover:bg-amber-50 hover:text-amber-800 sm:py-2"
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
