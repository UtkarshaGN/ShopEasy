import React, { useContext } from "react";
import { CartContext } from "../../MainContext/MainContext";
import { toast } from 'react-toastify';

export default function Cart() {
 const { cart } = useContext(CartContext)
 const total = cart.reduce((sum, item) => sum + Number(item.price) * item.qty, 0)

const submit = ()=>{
  toast.success("Checout successfully")
 }
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold text-slate-900">
                  Cart items
                </h2>
            </div>
  {/* Cart Products */}
  <div className="space-y-5">
    {cart.length > 0 ? (
      cart.map((item) => (
        <CartRow key={item.id} item={item} />
      ))
    ) : (
      <p className="py-8 text-center text-slate-600">Your cart is empty.</p>
    )}
  </div>
            
          </section>
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Order summary
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
            
           
              <div className="border-t border-slate-200 pt-4 text-lg font-semibold text-slate-900">
                <div className="flex items-center justify-between">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button onClick ={submit} className="mt-8 w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Checkout now
            </button>
           
          </aside>
        </div>
      </main>
    </div>
  );
}


function CartRow({ item }) {
  const { removeFromCart, updateCartQuantity } = useContext(CartContext)

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
          ${(Number(item.price) * item.qty).toFixed(2)}
          </p>

        </div>

        {/* Quantity + Remove */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex w-fit items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2">

            <button
              type="button"
              aria-label={`Decrease quantity of ${item.name}`}
              onClick={() => updateCartQuantity(item.id, item.qty - 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-slate-700 shadow-sm "
            >
              -
            </button>

            <span className="min-w-[2rem] text-center font-semibold text-slate-700">
              {item.qty}
            </span>

            <button
              type="button"
              aria-label={`Increase quantity of ${item.name}`}
              onClick={() => updateCartQuantity(item.id, item.qty + 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-slate-700 shadow-sm "
            >
              +
            </button>

          </div>

          <button
            type="button"
            onClick={() => removeFromCart(item.id)}
            className="w-fit text-sm font-medium text-rose-600 transition hover:text-rose-700"
          >
            Remove
          </button>

        </div>

      </div>
    </article>
  );
}