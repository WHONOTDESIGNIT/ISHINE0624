import React, { useState } from 'react';
import { Star, CheckCircle, ShoppingCart, ShieldCheck, Clock, Truck } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Link } from 'react-router-dom';
/**
 * SupersilkIPLPage – pixel-oriented clone of KU-Europe Supersilk landing page.
 * Notes on fidelity can be found at the very end of the file.
 */
const SupersilkIPLPage: React.FC = () => {
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

        {/* description bullets */}
        <section className="mt-16 border-l-4 border-blue-700 pl-6">
          <p className="text-lg leading-relaxed font-medium text-gray-800">
            ✨ Say farewell to unwanted hair forever – the KU2 IPL Supersilk combines clinically proven
            IPL technology with an ice-cool mode to keep skin calm and comfortable.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex text-gray-700">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <span className="ml-3">Long-lasting smooth skin – destroys the root, prevents regrowth</span>
            </li>
            <li className="flex text-gray-700">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <span className="ml-3">Pain-free thanks to ❄️ ice-cool sapphire plate</span>
            </li>
            <li className="flex text-gray-700">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <span className="ml-3">9 intensity levels cover every skin tone &amp; body zone</span>
            </li>
            <li className="flex text-gray-700">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <span className="ml-3">Save salon costs – enjoy pro results at home</span>
            </li>
          </ul>
        </section>

        {/* safety notice */}
        <section className="bg-red-50 rounded-lg p-6 mt-12">
          <h2 className="font-bold text-red-700 mb-3">Safety Notice</h2>
          <ul className="text-sm text-red-700 list-disc list-inside space-y-1">
            <li>Not suitable for very dark skin tones or light blond/red/grey hair.</li>
            <li>Do not flash on tattoos, nipples or genitals. Avoid eye exposure.</li>
            <li>Keep device dry. Use provided goggles.</li>
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

export default SupersilkIPLPage; 