import React from 'react';
import { Link } from 'react-router-dom';
import { Hand, Zap, Target, Award, CheckCircle, ArrowRight, Smartphone, Users, Clock } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

const HandheldIPL: React.FC = () => {
  const features = [
    {
      icon: <Hand className="h-8 w-8 text-indigo-600" />,
      title: 'Ergonomic Design',
      description: 'Perfectly balanced handheld design for comfortable extended use'
    },
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: 'Precision Control',
      description: 'Pinpoint accuracy for detailed and targeted treatments'
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: 'Quick Treatment',
      description: 'Fast and efficient treatments with optimized flash patterns'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      title: 'User-Friendly',
      description: 'Simple operation with intuitive controls and LED indicators'
    }
  ];

  const specifications = [
    { label: 'Light Source', value: 'Handheld IPL System' },
    { label: 'Wavelength', value: '530-1200nm' },
    { label: 'Energy Density', value: '1-5 J/cm²' },
    { label: 'Treatment Window', value: '3.0 cm²' },
    { label: 'Weight', value: '250g (ultra-lightweight)' },
    { label: 'Flash Modes', value: '5 intensity levels' },
    { label: 'Ergonomic Features', value: 'Non-slip grip, balanced weight' },
    { label: 'Flash Life', value: '500,000 flashes' }
  ];

  const handheldBenefits = [
    'Perfect grip and balance',
    'Reduced hand fatigue',
    'Precise treatment control',
    'Easy maneuverability',
    'Compact storage',
    'Travel-friendly size',
    'Quick setup and use',
    'Intuitive operation'
  ];

  const marketSegments = [
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Mass Market Appeal',
      description: 'Familiar handheld format appeals to broad consumer base'
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: 'Quick Treatment Users',
      description: 'Perfect for users who want fast, efficient treatments'
    },
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: 'Precision Seekers',
      description: 'Appeals to users who want control over treatment areas'
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
                <Award className="h-6 w-6 text-indigo-600 mr-2" />
                <span className="text-indigo-600 font-semibold">Ergonomic IPL Design</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Handheld IPL
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Classic handheld design meets modern IPL technology. Perfectly balanced and ergonomically designed for comfortable, precise treatments that feel natural in your hand.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
                >
                  Request Handheld Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center justify-center"
                >
                  View Ergonomic Features
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Handheld IPL Device"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Hand className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Ergonomic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ergonomic Features */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ergonomic Excellence</h2>
            <p className="text-xl text-gray-600">Designed for comfort and precision in every treatment</p>
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

      {/* Design Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ergonomic Design Philosophy
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Balanced Weight Distribution</h3>
                    <p className="text-gray-600">Carefully engineered weight balance reduces hand fatigue during extended treatments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Natural Grip Position</h3>
                    <p className="text-gray-600">Contoured grip follows natural hand position for maximum comfort and control.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Intuitive Controls</h3>
                    <p className="text-gray-600">All controls positioned for easy thumb access without changing grip.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Ergonomic Design"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Handheld Benefits</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  {handheldBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-indigo-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                  <h3 className="font-semibold text-indigo-900 mb-2">Ergonomic Testing</h3>
                  <p className="text-indigo-700">Tested with 1000+ users for optimal comfort</p>
                  <p className="text-indigo-700">Reduces treatment time by 25%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect Market Segments</h2>
            <p className="text-xl text-gray-600">Handheld design appeals to diverse user preferences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketSegments.map((segment, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="mb-6 flex justify-center">{segment.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{segment.title}</h3>
                <p className="text-gray-600">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Experience */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Superior User Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <Hand className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Comfort First</h3>
                <p className="text-indigo-100">Ergonomic design reduces fatigue and increases treatment satisfaction</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <Target className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Precision Control</h3>
                <p className="text-indigo-100">Handheld design allows for precise targeting of specific areas</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <Clock className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Efficient Treatment</h3>
                <p className="text-indigo-100">Familiar handheld format reduces learning curve and treatment time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Offer Ergonomic Excellence?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a custom quote for the Handheld IPL and give your customers the comfort and control they deserve.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
            >
              Get Handheld Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products/goddess-ipl"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center justify-center"
            >
              View Next Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandheldIPL;