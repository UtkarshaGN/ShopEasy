import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/*  HERO SECTION */}
      <section className="w-full  sm:px-4 ">

        <div className="grid min-h-[650px] overflow-hidden rounded-lg bg-slate-900 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-20 xl:px-28">

            

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Everything you love,
              <span className="block text-purple-400">
                all in one place.
              </span>
            </h1>

           

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-slate-200">
                Shop Collection
              </button>

              <button className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10">
                Explore More
              </button>

            </div>

           

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[450px] overflow-hidden lg:min-h-full">

            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=90"
              alt="Fashion collection"
              className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to from-black/60 via-black/10 to-transparent" />

          

          </div>

        </div>

      </section>


      {/* IMAGE GALLERY  */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Shop by style
            </h2>
          </div>

          <button className="hidden rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:block">
            View all
          </button>

        </div>


        {/* GALLERY */}
        <div className="grid h-auto grid-cols-2 gap-4 md:h-[600px] md:grid-cols-4">

          {/* LARGE IMAGE */}
          <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-[2rem]">

            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=85"
              alt="Fashion collection"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 text-white">

              <p className="text-sm uppercase tracking-wider text-white/70">
                Collection
              </p>

              <h3 className="mt-1 text-2xl font-bold">
                Modern Fashion
              </h3>

              <button className="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                Shop Now
              </button>

            </div>

          </div>


          {/* HEADPHONES */}
          <div className="group relative overflow-hidden rounded-[2rem]">

            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85"
              alt="Headphones"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Electronics</p>
              <p className="text-sm text-white/80">
                Explore →
              </p>
            </div>

          </div>


          {/* SHOES */}
          <div className="group relative overflow-hidden rounded-[2rem]">

            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85"
              alt="Shoes"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Footwear</p>
              <p className="text-sm text-white/80">
                Explore →
              </p>
            </div>

          </div>


          {/* WATCH */}
          <div className="group relative overflow-hidden rounded-[2rem]">

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85"
              alt="Smart watch"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Accessories</p>
              <p className="text-sm text-white/80">
                Explore →
              </p>
            </div>

          </div>


          {/* BAG */}
          <div className="group relative overflow-hidden rounded-[2rem]">

            <img
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85"
              alt="Backpack"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Bags</p>
              <p className="text-sm text-white/80">
                Explore →
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}