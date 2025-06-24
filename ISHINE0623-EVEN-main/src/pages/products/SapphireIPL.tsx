import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RefreshCcw,
  Snowflake,
  Zap,
  Layers,
  Clock,
  ArrowRight,
  MessageSquare,
  Send,
  Check
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

/**
 * SapphireIPL – benchmark product detail page
 * ------------------------------------------------
 * This page mirrors the structure of popular DTC e-commerce product pages.
 * It will serve as a template for the other IPL product detail pages.
 */
const SapphireIPL: React.FC = () => {
  // Simple gallery state (no external slider lib to keep bundle slim)
  const images = [
    'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7323618/pexels-photo-7323618.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8534272/pexels-photo-8534272.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];
  const [selectedImg, setSelectedImg] = useState(images[0]);

  const features = [
    {
      icon: <Snowflake className="h-6 w-6 text-blue-600" />,
      title: 'Integrated Ice-Cool Mode',
      desc: 'Soothes the skin instantly for a truly pain-free session.'
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: '9 Intensity Levels',
      desc: 'Precisely adapt the energy to every zone & skin tone.'
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: '500,000 Lifetime Flashes',
      desc: 'Enough pulses for decades of full-body treatments.'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: '15-min Full-Body Routine',
      desc: 'Save salon visits & enjoy silky skin at home.'
    }
  ];

  const guarantees = [
    { icon: <ShieldCheck className="h-5 w-5" />, label: '2-Year Warranty' },
    { icon: <RefreshCcw className="h-5 w-5" />, label: '40-Day Money-Back' },
    { icon: <Truck className="h-5 w-5" />, label: 'Free Express Shipping' }
  ];

  const specifications = [
    { label: 'Technology', value: 'Intense Pulsed Light (IPL)' },
    { label: 'Energy Density', value: '1–5 J/cm²' },
    { label: 'Flashes', value: '≈500,000 lifetime pulses' },
    { label: 'Intensity Levels', value: '9' },
    { label: 'Cooling', value: 'Sapphire contact, real-time ❄️' },
    { label: 'Rated Power', value: '48 W' },
    { label: 'Adapter Input', value: '100-240 V, 50-60 Hz' }
  ];

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: 'Sapphire Ice Feeling IPL',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network call
    await new Promise((res) => setTimeout(res, 1000));

    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      productInterest: 'Sapphire Ice Feeling IPL',
      timeline: '',
      message: ''
    });

    setIsSubmitting(false);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero breadcrumb banner */}
      <Breadcrumbs backgroundImage="https://images.pexels.com/photos/8534272/pexels-photo-8534272.jpeg?auto=compress&cs=tinysrgb&w=1200" />

      {/* PRODUCT HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <div>
            <div className="w-full aspect-square overflow-hidden rounded-lg shadow-lg mb-4">
              <img
                src={selectedImg}
                alt="Sapphire IPL device"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex space-x-2">
              {images.map((src) => (
                <button
                  key={src}
                  className={`h-20 w-20 rounded-md overflow-hidden border focus:outline-none ${
                    selectedImg === src ? 'border-blue-600' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImg(src)}
                >
                  <img src={src} alt="thumbnail" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Sapphire Ice Feeling IPL Hair Removal Device
            </h1>
            {/* Rating */}
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} className="h-5 w-5 text-yellow-400" fill="currentColor" />
              ))}
              <span className="ml-2 text-sm text-gray-600">4.8/5 (23 reviews)</span>
            </div>
            {/* Price */}
            <div className="flex items-end space-x-3 mb-6">
              <span className="text-3xl font-bold text-blue-600">$149</span>
              <span className="text-lg line-through text-gray-400">$199</span>
            </div>

            {/* Bullet Features */}
            <ul className="space-y-2 mb-6">
              {features.map((f) => (
                <li key={f.title} className="flex items-start">
                  {f.icon}
                  <div className="ml-3">
                    <p className="font-medium text-gray-900 leading-none">{f.title}</p>
                    <p className="text-sm text-gray-600">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none"
              >
                <ShoppingCart className="h-5 w-5 mr-2" /> Buy Now
              </Link>
              <Link
                to="#details"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-50"
              >
                Product Details <ArrowRight className="h-5 w-5 ml-1" />
              </Link>
            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap gap-4">
              {guarantees.map((g) => (
                <div
                  key={g.label}
                  className="flex items-center space-x-2 text-sm text-gray-700"
                >
                  {g.icon}
                  <span>{g.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="py-16 border-l-4 border-blue-600 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Row 1: Text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="leading-relaxed text-gray-800 order-1 lg:order-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-amber-400 text-3xl mr-2">✨</span> Why Sapphire IPL?
              </h2>
              <p className="mb-6">
                Say goodbye to unwanted hair – <strong>permanently</strong>. The&nbsp;
                <strong>Sapphire Ice Feeling IPL</strong> merges clinically proven
                <strong>Intense Pulsed Light</strong> technology with a soothing
                <span className="whitespace-nowrap">❄️ Ice-Cool Mode</span> for visibly smoother skin in record time —
                totally pain-free.
              </p>
              <ul className="space-y-3">
                <li className="flex">
                  <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="ml-3">Long-lasting smoothness – IPL disables the follicle to prevent regrowth.</span>
                </li>
                <li className="flex">
                  <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="ml-3">Pain-free &amp; gentle – real-time cooling minimises heat sensation.</span>
                </li>
                <li className="flex">
                  <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="ml-3">9 intensity levels – perfect control for every zone &amp; skin tone.</span>
                </li>
                <li className="flex">
                  <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="ml-3">Save time &amp; money – skip expensive salon visits forever.</span>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="order-0 lg:order-none">
              <img
                src={images[0]}
                alt="Cooling IPL device close-up"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 2: Image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div>
              <img
                src={images[1]}
                alt="Woman using Sapphire IPL"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="leading-relaxed text-gray-800">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Truck className="h-6 w-6 text-blue-600 mr-2" /> Immediate Availability
              </h3>
              <p className="mb-4">
                Only <strong>32 devices</strong> left in stock. Order before
                <span className="whitespace-nowrap"> 2&nbsp;PM&nbsp;UTC </span> and receive
                <strong>free next-day delivery</strong> worldwide.
              </p>
              <p>
                Every purchase is protected by our <strong>40-day money-back guarantee</strong> and backed
                by a <strong>2-year replacement warranty</strong> for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL INFORMATION */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
          <div className="border rounded-lg divide-y">
            <div className="flex justify-between px-4 py-3 bg-white">
              <span className="font-medium text-gray-700">SKU</span>
              <span className="text-gray-900">4260516960809</span>
            </div>
            <div className="flex justify-between px-4 py-3 bg-white">
              <span className="font-medium text-gray-700">Category</span>
              <span className="text-gray-900">Hair Removal</span>
            </div>
            <div className="flex justify-between px-4 py-3 bg-white">
              <span className="font-medium text-gray-700">Availability</span>
              <span className="text-gray-900">32 units in stock</span>
            </div>
            <div className="flex justify-between px-4 py-3 bg-white">
              <span className="font-medium text-gray-700">Delivery</span>
              <span className="text-gray-900">Free, arrives tomorrow*</span>
            </div>
          </div>
        </div>
      </section>

      {/* VISIBLE RESULTS (FEATURE GRID) */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Visible Results. Zero Compromises.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                {f.icon}
                <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS & SPECIFICATIONS */}
      <section id="details" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Product Details</h2>
          <div className="prose max-w-none mb-10">
            <p>
              Say goodbye to daily shaving and stubborn stubble. The Sapphire Ice Feeling IPL delivers
              clinically proven IPL energy deep into the hair follicle while the integrated ice-cool
              plate keeps the skin surface at a comfortable 10 °C. Enjoy smooth skin in just 3–4
              sessions and experience up to 92 % hair reduction after a complete treatment plan.
            </p>
            <p>
              Thanks to nine adjustable intensity levels you stay in full control – from sensitive
              facial areas to larger body zones such as legs, arms or back. One full-body routine
              takes as little as 15&nbsp;minutes.
            </p>
          </div>

          {/* Specifications table */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Specifications</h3>
          <div className="border rounded-lg overflow-hidden divide-y">
            {specifications.map((s) => (
              <div key={s.label} className="flex justify-between px-4 py-3 bg-white odd:bg-gray-50">
                <span className="font-medium text-gray-700">{s.label}</span>
                <span className="text-gray-900">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SAFETY */}
      <section className="bg-red-50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-red-700 mb-4">Safety Notice</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-red-700">
            <li>
              Do not use on tattoos, dark brown or black spots, nipples, genital area or around the
              eyes.
            </li>
            <li>
              Not suitable for very dark skin tones (Fitzpatrick VI) or light blond, red or grey hair.
            </li>
            <li>
              Always wear the provided safety goggles and avoid direct eye exposure to the flash
              window.
            </li>
            <li>
              Keep the device dry and store it in a cool, ventilated environment.
            </li>
          </ul>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-3xl font-bold text-gray-900">4.8</span>
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} className="h-5 w-5 text-yellow-400" fill="currentColor" />
            ))}
            <span className="text-sm text-gray-600">23 verified reviews</span>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Dummy reviews – replace with dynamic data later */}
            <blockquote className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-800 italic">
                "Works incredibly well – already noticing much slower regrowth after just two
                sessions!"
              </p>
              <footer className="mt-4 text-sm font-medium text-gray-700">Alina – April 04, 2025</footer>
            </blockquote>
            <blockquote className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-800 italic">
                "Handy, lightweight and absolutely pain-free thanks to the cooling plate. Loving it so
                far."
              </p>
              <footer className="mt-4 text-sm font-medium text-gray-700">Gabriela – May 27, 2025</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Custom Quote</h2>
              <p className="text-gray-600 leading-relaxed">
                Fill out the form below and our team will contact you within 24 hours with a detailed
                proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Beauty Tech Inc."
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="productInterest"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Product Interest *
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Sapphire Ice Feeling IPL">Sapphire Ice Feeling IPL</option>
                    <option value="Custom Design Required">Custom Design Required</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush order)</option>
                    <option value="1-2months">1-2 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your needs here"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SapphireIPL;