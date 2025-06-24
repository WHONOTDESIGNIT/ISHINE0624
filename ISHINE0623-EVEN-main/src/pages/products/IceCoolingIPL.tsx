import React from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, Thermometer, Shield, Award, CheckCircle, ArrowRight, Heart, Users } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

const IceCoolingIPL: React.FC = () => {
  const features = [
    {
      icon: <Snowflake className="h-8 w-8 text-cyan-600" />,
      title: 'Advanced Ice Cooling',
      description: 'Thermoelectric cooling system maintains 5°C treatment temperature'
    },
    {
      icon: <Thermometer className="h-8 w-8 text-cyan-600" />,
      title: 'Temperature Control',
      description: 'Precise temperature regulation for consistent cooling performance'
    },
    {
      icon: <Heart className="h-8 w-8 text-cyan-600" />,
      title: 'Pain-Free Treatment',
      description: 'Virtually painless experience even on sensitive areas'
    },
    {
      icon: <Shield className="h-8 w-8 text-cyan-600" />,
      title: 'Skin Protection',
      description: 'Cooling protects skin while maximizing treatment effectiveness'
    }
  ];

  const specifications = [
    { label: 'Light Source', value: 'IPL with Cooling System' },
    { label: 'Wavelength', value: '530-1200nm' },
    { label: 'Energy Density', value: '1-6 J/cm²' },
    { label: 'Cooling Temperature', value: '5°C ± 2°C' },
    { label: 'Treatment Window', value: '4.0 cm² with cooling contact' },
    { label: 'Cooling Technology', value: 'Thermoelectric (TEC) cooling' },
    { label: 'Flash Modes', value: '5 intensity levels' },
    { label: 'Suitable Skin Types', value: 'All skin types I-VI' }
  ];

  const coolingBenefits = [
    'Reduces treatment pain by 90%',
    'Enables higher energy settings safely',
    'Suitable for sensitive skin areas',
    'Minimizes post-treatment redness',
    'Allows continuous treatment sessions',
    'No cooling gel required',
    'Consistent temperature throughout use',
    'Enhanced user comfort and satisfaction'
  ];

  const marketAdvantages = [
    {
      icon: <Users className="h-8 w-8 text-cyan-600" />,
      title: 'Wider Target Market',
      description: 'Appeals to users who avoided IPL due to discomfort concerns'
    },
    {
      icon: <Award className="h-8 w-8 text-cyan-600" />,
      title: 'Premium Positioning',
      description: 'Ice cooling technology commands premium pricing in the market'
    },
    {
      icon: <Heart className="h-8 w-8 text-cyan-600" />,
      title: 'Higher Satisfaction',
      description: 'Comfortable treatments lead to better reviews and repeat customers'
    }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumbs 
        backgroundImage="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      
      {/* Product Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-cyan-600 mr-2" />
                <span className="text-cyan-600 font-semibold">Advanced Cooling IPL</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Ice Cooling IPL
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Revolutionary ice cooling technology makes hair removal virtually painless. Our advanced thermoelectric cooling system maintains 5°C temperature for maximum comfort during treatment.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center justify-center"
                >
                  Request Cooling Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors inline-flex items-center justify-center"
                >
                  View Cooling Technology
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Ice Cooling IPL Device"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Snowflake className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">5°C Cooling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooling Technology Features */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ice Cooling System</h2>
            <p className="text-xl text-gray-600">Breakthrough technology for pain-free hair removal</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Cooling Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How Ice Cooling Technology Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Thermoelectric Cooling</h3>
                    <p className="text-gray-600">Advanced TEC system rapidly cools the treatment window to 5°C before and during IPL flash.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Skin Protection</h3>
                    <p className="text-gray-600">Cooling numbs nerve endings and protects skin surface while IPL energy targets hair follicles.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enhanced Comfort</h3>
                    <p className="text-gray-600">Continuous cooling throughout treatment ensures maximum comfort and allows higher energy settings.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cooling Technology Diagram"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {specifications.map((spec, index) => (
                    <div key={index} className="px-6 py-4 flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{spec.label}</span>
                      <span className="text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Cooling Benefits</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  {coolingBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-cyan-50 rounded-lg">
                  <h3 className="font-semibold text-cyan-900 mb-2">Customer Feedback</h3>
                  <p className="text-cyan-700">"90% less pain compared to traditional IPL"</p>
                  <p className="text-cyan-700">"Can treat sensitive areas comfortably"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Advantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Advantages</h2>
            <p className="text-xl text-gray-600">Why ice cooling gives your brand competitive edge</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="mb-6 flex justify-center">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Ice Cooling Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-cyan-100">Pain Reduction</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-cyan-100">User Comfort Rating</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">80%</div>
                <div className="text-cyan-100">Repeat Purchase Rate</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-cyan-100">Premium Pricing Uplift</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Offer Pain-Free Hair Removal?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a custom quote for the Ice Cooling IPL and give your customers the comfort they deserve.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center justify-center"
            >
              Get Cooling IPL Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products/dual-lamp-ipl"
              className="border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors inline-flex items-center justify-center"
            >
              View Next Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IceCoolingIPL;