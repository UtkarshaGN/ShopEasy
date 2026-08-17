
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">

          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold">
              MyShop
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Your simple online shopping destination for quality products
              at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-slate-400">
              <li className="cursor-pointer hover:text-white">
                Home
              </li>

              <li className="cursor-pointer hover:text-white">
                Products
              </li>

              <li className="cursor-pointer hover:text-white">
                About Us
              </li>

              <li className="cursor-pointer hover:text-white">
                Contact
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4 font-semibold">
              Customer Service
            </h3>

            <ul className="space-y-2 text-sm text-slate-400">
              <li className="cursor-pointer hover:text-white">
                Shipping
              </li>

              <li className="cursor-pointer hover:text-white">
                Returns
              </li>

              <li className="cursor-pointer hover:text-white">
                FAQ
              </li>

              <li className="cursor-pointer hover:text-white">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">
              Contact Us
            </h3>

            <p className="text-sm text-slate-400">
              Email: support@myshop.com
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Phone: +61 400 123 456
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Brisbane, Australia
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-700 pt-6 text-center">
          <p className="text-sm text-slate-400">
            © 2026 MyShop. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}