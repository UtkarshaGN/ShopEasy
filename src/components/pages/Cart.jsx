
import React, { useContext } from "react";
import Header from "../common/Header";
import { CartContext } from "../../MainContext/MainContext";


export default function Cart() {
  
const{cart, setCart} = useContext(CartContext)

console.log(cart)
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Shopping Cart
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Your Cart
            </h1>
            <p className="mt-2 text-sm text-slate-600 sm:max-w-xl">
              Review your selected items, update quantities, and proceed to
              checkout with confidence.
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Continue shopping
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Cart items
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                   items in your bag
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  Free delivery over $75
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  Easy returns
                </span>
              </div>
            </div>
  {/* Cart Products */}
  <div className="space-y-5">
    {cart.map((item) => (
      <CartRow key={item.id} item={item} />
    ))}
  </div>
            
          </section>















          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Order summary
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Subtotal</span>
                <span>$297</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Estimated shipping</span>
                <span>$12</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Discount</span>
                <span className="text-emerald-600">-$15</span>
              </div>
              <div className="border-t border-slate-200 pt-4 text-lg font-semibold text-slate-900">
                <div className="flex items-center justify-between">
                  <span>Total</span>
                  <span>$294</span>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Checkout now
            </button>
            <p className="mt-4 text-sm text-slate-500">
              Secure checkout with fast payment options.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}


function CartRow({ item }) {
  return (
    <article className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-4 transition hover:shadow-md sm:flex-row sm:items-center">

      {/* Product Image */}
      <div className="flex h-32 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-100 sm:h-28 sm:w-28">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col gap-4">

        <div className="flex items-start justify-between gap-4">

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {item.name}
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </div>

          <p className="whitespace-nowrap text-lg font-semibold text-slate-900">
            ${item.price}
          </p>

        </div>

        {/* Quantity + Remove */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex w-fit items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2">

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-slate-700 shadow-sm transition hover:bg-slate-200">
              -
            </button>

            <span className="min-w-[2rem] text-center font-semibold text-slate-700">
              {item.qty}
            </span>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-slate-700 shadow-sm transition hover:bg-slate-200">
              +
            </button>

          </div>

          <button className="w-fit text-sm font-medium text-rose-600 transition hover:text-rose-700">
            Remove
          </button>

        </div>

      </div>
    </article>
  );
}