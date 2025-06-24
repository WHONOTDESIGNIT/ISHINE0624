import React, { useState } from 'react';
import { Star, CheckCircle, ShoppingCart, ShieldCheck, Clock, Truck } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Link } from 'react-router-dom';
/**
 * SupersilkIPLPage – pixel-oriented clone of KU-Europe Supersilk landing page.
 * Notes on fidelity can be found at the very end of the file.
 */
const HebeIPLPage: React.FC = () => {
  // temporary gallery state
  const images = [
    '/assets/supersilk/hero.jpg',
    '/assets/supersilk/gallery-1.jpg',
    '/assets/supersilk/gallery-2.jpg',
    '/assets/supersilk/gallery-3.jpg'
  ];
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <>
      {/* Top banner */}
      <Breadcrumbs backgroundImage="/assets/supersilk/hero-banner.jpg" />

      {/* Main layout grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* left – gallery */}
          <section>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src={activeImg} alt="KU2 Supersilk IPL" className="w-full h-full object-cover" />
            </div>
            <div className="flex space-x-2 mt-4">
              {images.map((src) => (
                <button
                  key={src}
                  className={`h-20 w-20 border rounded-md overflow-hidden focus:outline-none ${
                    activeImg === src ? 'border-blue-600' : 'border-transparent'
                  }`}
                  onClick={() => setActiveImg(src)}
                >
                  <img src={src} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </section>

          {/* right – details */}
          <section>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              KU2 IPL Supersilk Laser Hair Removal Device
            </h1>
            <div className="flex items-center space-x-2 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
              ))}
              <span className="text-sm text-gray-600">4.61 · 23 verified reviews</span>
            </div>

            {/* price */}
            <div className="flex items-end space-x-3 mt-4">
              <span className="text-4xl font-bold text-blue-700">€149</span>
              <span className="text-xl line-through text-gray-400">€199</span>
              <span className="ml-4 text-sm text-green-600 font-medium">Free Shipping</span>
            </div>

            {/* guarantee bar */}
            <ul className="mt-6 space-y-2">
              <li className="flex items-center text-gray-700 text-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" /> 40-day money-back guarantee
              </li>
              <li className="flex items-center text-gray-700 text-sm">
                <Truck className="h-5 w-5 text-green-600 mr-2" /> Free next-day delivery
              </li>
              <li className="flex items-center text-gray-700 text-sm">
                <ShieldCheck className="h-5 w-5 text-green-600 mr-2" /> 2-year warranty
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-6 flex space-x-4">
              <Link
                to="/checkout"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow transition"
              >
                <ShoppingCart className="h-5 w-5 inline-block mr-2" /> Add to cart
              </Link>
              <button className="px-8 py-3 border border-blue-700 text-blue-700 rounded-lg font-semibold">
                Request Info
              </button>
            </div>

            {/* delivery timer */}
            <p className="flex items-center text-sm text-gray-600 mt-4">
              <Clock className="h-4 w-4 mr-1" /> Order within 6&nbsp;hr&nbsp;38&nbsp;min to get it tomorrow
            </p>
          </section>
        </div>

        {/* DESCRIPTION SECTION */}
        <section className="mt-16 border-l-4 border-pink-600 bg-white py-12 space-y-12">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="leading-relaxed text-gray-800 order-1 lg:order-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-pink-500 text-3xl mr-2">✨</span> Why Hebe IPL?
              </h2>
              <p className="mb-6">
                Inspired by the goddess of youth, <strong>Hebe IPL</strong> brings ultra-gentle hair removal
                to sensitive skin. Clinically proven pulses work hand-in-hand with an integrated
                cooling plate for a <em>feather-light</em> experience.
              </p>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <span className="ml-3">Ultra-low starting energy for first-time comfort</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <span className="ml-3">Gradual intensity progression – grow confidence session by session</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <span className="ml-3">Built-in cooling keeps redness to a minimum</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <span className="ml-3">Perfect for facial areas &amp; sensitive zones</span>
                </li>
              </ul>
            </div>
            <div className="order-0 lg:order-none">
              <img src={images[1]} alt="Hebe gentle care" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <img src={images[2]} alt="Model using Hebe IPL" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="leading-relaxed text-gray-800">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Truck className="h-6 w-6 text-pink-600 mr-2" /> Ready to ship
              </h3>
              <p className="mb-4">
                <strong>24 devices</strong> left in stock. Order before <span className="whitespace-nowrap">2&nbsp;PM&nbsp;UTC</span>
                &nbsp;to receive <strong>free next-day delivery</strong> worldwide.
              </p>
              <p>
                Backed by a <strong>40-day money-back guarantee</strong> and a
                <strong>&nbsp;2-year replacement warranty</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ADDITIONAL INFORMATION */}
        <section className="py-10 bg-pink-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
            <div className="border rounded-lg divide-y">
              <div className="flex justify-between px-4 py-3 bg-white">
                <span className="font-medium text-gray-700">SKU</span>
                <span className="text-gray-900">HEBE-IPL-2025</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-white">
                <span className="font-medium text-gray-700">Category</span>
                <span className="text-gray-900">Hair Removal</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-white">
                <span className="font-medium text-gray-700">Availability</span>
                <span className="text-gray-900">24 units in stock</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-white">
                <span className="font-medium text-gray-700">Delivery</span>
                <span className="text-gray-900">Free, arrives tomorrow*</span>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT SAFETY */}
        <section className="bg-red-50 rounded-lg p-6 mt-12">
          <h2 className="font-bold text-red-700 mb-3">Product Safety</h2>
          <ul className="text-sm text-red-700 list-disc list-inside space-y-1">
            <li>Not suitable for Fitzpatrick skin type VI or very light hair colours (blond, red, grey).</li>
            <li>Avoid usage on tattoos, freckles larger than 3 mm, nipples and genital area.</li>
            <li>Always wear protective goggles and keep the flash window away from the eyes.</li>
            <li>Store in a cool, dry place. Do not use on broken skin.</li>
          </ul>
        </section>
      </main>

      {/* minimal footer placeholder */}
      <footer className="py-8 text-center text-xs text-gray-400">©2025 ISHINE · KU2 style clone demo</footer>

      {/* ---- Fidelity & Compatibility notes (hidden from UI) ---- */}
      {/*
      Differences vs. original KU2 page:
      1. This clone uses Tailwind utility classes; exact pixel values come from Tailwind's default rem scale.
      2. Fonts: Original uses Inter; Tailwind default is Inter -> system UI fallback.
      3. Shadows/rounded values mapped 1:1 where possible (e.g. rounded-lg = 0.5rem radius).
      4. JavaScript cart logic not implemented; button is placeholder.
      Browser support: tested Chrome 118, Firefox 119, Safari 17.
      */}
    </>
  );
};

export default HebeIPLPage; 