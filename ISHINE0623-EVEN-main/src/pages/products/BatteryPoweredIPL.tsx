import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Zap, Plane, Award, CheckCircle, ArrowRight, MapPin, Clock, Wifi } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

const BatteryPoweredIPL: React.FC = () => {
  const features = [
    {
      icon: <Battery className="h-8 w-8 text-green-600" />,
      title: 'Long-Life Battery',
      description: 'Rechargeable lithium battery for 500+ treatments per charge'
    },
    {
      icon: <Plane className="h-8 w-8 text-green-600" />,
      title: 'Travel Friendly',
      description: 'Compact design perfect for travel and on-the-go treatments'
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: 'Fast Charging',
      description: 'Quick charge technology - 2 hours for full battery'
    },
    {
      icon: <Wifi className="h-8 w-8 text-green-600" />,
      title: 'Wireless Freedom',
      description: 'No cords or power outlets needed during treatment'
    }
  ];

  const specifications = [
    { label: 'Light Source', value: 'Cordless IPL System' },
    { label: 'Wavelength', value: '530-1200nm' },
    { label: 'Energy Density', value: '1-5 J/cm²' },
    { label: 'Battery Type', value: 'Lithium-ion rechargeable' },
    { label: 'Battery Life', value: '500+ flashes per charge' },
    { label: 'Charging Time', value: '2 hours (fast charge)' },
    { label: 'Treatment Window', value: '3.2 cm²' },
    { label: 'Weight', value: '280g (ultra-lightweight)' }
  ];

  const batteryBenefits = [
    'Complete freedom from power cords',
    'Perfect for travel and vacation use',
    'Treatments anywhere, anytime',
    'No outlet dependency',
    'Lightweight and portable design',
    'Quick 2-hour charging',
    'Battery level indicator',
    'Auto power-saving mode'
  ];

  const marketAdvantages = [
    {
      icon: <MapPin className="h-8 w-8 text-green-600" />,
      title: 'Global Appeal',
      description: 'Appeals to travelers and busy professionals who need flexibility'
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: 'Convenience Factor',
      description: 'Positions your brand as the most convenient IPL solution'
    },
    {
      icon: <Battery className="h-8 w-8 text-green-600" />,
      title: 'Modern Technology',
      description: 'Battery power represents cutting-edge, modern beauty technology'
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
                <Award className="h-6 w-6 text-green-600 mr-2" />
                <span className="text-green-600 font-semibold">Cordless IPL Innovation</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Battery Powered IPL
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ultimate freedom with our revolutionary battery-powered IPL device. No cords, no outlets needed - just grab and go for treatments anywhere, anytime.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  Request Cordless Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
                >
                  View Travel Features
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Battery Powered IPL Device"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Battery className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">500+ Flashes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Technology Features */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cordless Freedom Technology</h2>
            <p className="text-xl text-gray-600">Advanced battery system for ultimate convenience</p>
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

      {/* Technical Specifications */}
      <section className="py-16">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Battery Benefits</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  {batteryBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Travel Certification</h3>
                  <p className="text-green-700">TSA approved for air travel</p>
                  <p className="text-green-700">International voltage compatibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Advantages</h2>
            <p className="text-xl text-gray-600">Why cordless technology drives sales</p>
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

      {/* Usage Scenarios */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Perfect for Every Lifestyle</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <Plane className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Travel & Vacation</h3>
                <p className="text-green-100">Maintain your beauty routine anywhere in the world</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <Clock className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Busy Professionals</h3>
                <p className="text-green-100">Quick treatments between meetings or during commute</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <MapPin className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Outdoor Enthusiasts</h3>
                <p className="text-green-100">Perfect for camping, RV travel, and remote locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Offer Ultimate Freedom?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a custom quote for the Battery Powered IPL and give your customers complete treatment freedom.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
            >
              Get Cordless Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products/hebe-ipl"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              View Next Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BatteryPoweredIPL;