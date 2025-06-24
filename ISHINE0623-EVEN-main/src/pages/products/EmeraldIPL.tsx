import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, Zap, Shield, Award, CheckCircle, ArrowRight, Star, Heart } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

const EmeraldIPL: React.FC = () => {
  const features = [
    {
      icon: <Gem className="h-8 w-8 text-emerald-600" />,
      title: 'Emerald Crystal Window',
      description: 'Premium emerald crystal for enhanced light transmission and durability'
    },
    {
      icon: <Zap className="h-8 w-8 text-emerald-600" />,
      title: 'Precision Light Control',
      description: 'Advanced optical system for consistent and effective treatments'
    },
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: 'Gentle Treatment',
      description: 'Optimized for sensitive skin with comfort-focused design'
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: 'Safety Sensors',
      description: 'Multiple safety features including skin contact and tone detection'
    }
  ];

  const specifications = [
    { label: 'Light Source', value: 'IPL with Emerald Crystal Filter' },
    { label: 'Wavelength', value: '550-950nm optimized' },
    { label: 'Energy Density', value: '1-5 J/cm²' },
    { label: 'Treatment Window', value: '3.5 cm² emerald crystal' },
    { label: 'Flash Modes', value: '5 intensity levels' },
    { label: 'Safety Features', value: 'Skin sensor, UV filter, contact sensor' },
    { label: 'Crystal Durability', value: '1M+ flashes guaranteed' },
    { label: 'Skin Types', value: 'Suitable for skin types I-V' }
  ];

  const luxuryFeatures = [
    'Premium emerald crystal light window',
    'Elegant metallic finish options',
    'Ergonomic premium grip design',
    'LED status indicators',
    'Luxury gift box packaging',
    'Premium instruction manual',
    'Certificate of authenticity',
    'Extended warranty coverage'
  ];

  const marketPositioning = [
    {
      icon: <Star className="h-8 w-8 text-emerald-600" />,
      title: 'Luxury Market',
      description: 'Perfect for premium brand positioning with emerald crystal technology'
    },
    {
      icon: <Gem className="h-8 w-8 text-emerald-600" />,
      title: 'Unique Differentiation',
      description: 'Emerald crystal sets your brand apart from standard IPL devices'
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: 'Premium Pricing',
      description: 'Justify higher price points with luxury materials and superior performance'
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
                <Award className="h-6 w-6 text-emerald-600 mr-2" />
                <span className="text-emerald-600 font-semibold">Luxury IPL Device</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Emerald IPL
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience the luxury of emerald crystal technology. Our premium IPL device combines the beauty of emerald crystal with advanced light therapy for an unparalleled hair removal experience.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center justify-center"
                >
                  Request Luxury Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
                >
                  View Luxury Packaging
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Emerald IPL Device"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Gem className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Emerald Crystal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emerald Crystal Technology</h2>
            <p className="text-xl text-gray-600">Luxury meets performance in every treatment</p>
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

      {/* Crystal Technology Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Emerald Crystal?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Gem className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Superior Light Transmission</h3>
                    <p className="text-gray-600">Emerald crystal provides optimal light transmission properties, ensuring consistent and effective IPL treatments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enhanced Durability</h3>
                    <p className="text-gray-600">Premium emerald crystal window withstands over 1 million flashes while maintaining crystal clarity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Luxury Appeal</h3>
                    <p className="text-gray-600">The emerald crystal creates a distinctive premium appearance that justifies luxury pricing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Emerald Crystal Technology"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Luxury Features</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  {luxuryFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                  <h3 className="font-semibold text-emerald-900 mb-2">Minimum Order Quantity</h3>
                  <p className="text-emerald-700">300 units for luxury customization</p>
                  <p className="text-emerald-700">Custom emerald crystal engraving available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Positioning */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Luxury Brands</h2>
            <p className="text-xl text-gray-600">Position your brand in the premium market segment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketPositioning.map((position, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="mb-6 flex justify-center">{position.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{position.title}</h3>
                <p className="text-gray-600">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Success Story */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Luxury Brand Success</h2>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 max-w-4xl mx-auto">
              <blockquote className="text-xl italic mb-6">
                "The Emerald IPL allowed us to position our brand in the luxury segment with 50% higher margins. The emerald crystal technology became our key differentiator in the competitive beauty device market."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">ROSESKINCO - Premium Skincare Brand</span>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold">50%</div>
                  <div className="text-sm">Higher Margins</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">200%</div>
                  <div className="text-sm">Sales Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Enter the Luxury Market?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a custom quote for the Emerald IPL with luxury packaging and branding options.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center justify-center"
            >
              Get Luxury Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products/ice-cooling-ipl"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
            >
              View Next Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmeraldIPL;