import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Gem, Star, Award, CheckCircle, ArrowRight, Sparkles, Heart, Users } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

const PremiumLuxuryIPL: React.FC = () => {
  const features = [
    {
      icon: <Crown className="h-8 w-8 text-purple-600" />,
      title: 'Luxury Design',
      description: 'Premium materials with gold accents and crystal elements'
    },
    {
      icon: <Gem className="h-8 w-8 text-purple-600" />,
      title: 'Diamond Crystal Window',
      description: 'Genuine diamond-coated crystal for superior light transmission'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      title: 'Multi-Spectrum Technology',
      description: 'Advanced 7-wavelength system for all skin types and hair colors'
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: 'Comfort Plus',
      description: 'Ultra-gentle treatment with advanced cooling and vibration therapy'
    }
  ];

  const specifications = [
    { label: 'Light Source', value: 'Multi-Spectrum IPL with Diamond Crystal' },
    { label: 'Wavelength Range', value: '515-1200nm (7 wavelengths)' },
    { label: 'Energy Density', value: '1-7 J/cm²' },
    { label: 'Treatment Window', value: '4.5 cm² diamond crystal' },
    { label: 'Cooling System', value: 'Dual-stage thermoelectric + vibration' },
    { label: 'Flash Modes', value: '7 intensity levels + Auto-adjust' },
    { label: 'Luxury Features', value: 'Gold accents, LED ambient lighting' },
    { label: 'Lamp Life', value: '1,000,000 flashes guaranteed' }
  ];

  const luxuryFeatures = [
    'Hand-polished premium finish',
    'Swarovski crystal accents',
    '24k gold-plated components',
    'Silk-lined luxury gift box',
    'Personalized engraving available',
    'Premium leather carrying case',
    'Certificate of authenticity',
    'Concierge customer service',
    'Extended 5-year warranty',
    'VIP maintenance program'
  ];

  const marketPositioning = [
    {
      icon: <Star className="h-8 w-8 text-purple-600" />,
      title: 'Ultra-Premium Segment',
      description: 'Target luxury beauty market with 200%+ premium pricing'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'Exclusive Distribution',
      description: 'Limited edition positioning for high-end beauty retailers'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: 'Prestige Branding',
      description: 'Establish your brand as the ultimate luxury IPL manufacturer'
    }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumbs 
        backgroundImage="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      
      {/* Product Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Crown className="h-6 w-6 text-purple-600 mr-2" />
                <span className="text-purple-600 font-semibold">Ultra-Luxury IPL Device</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Premium Luxury IPL
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The pinnacle of IPL technology meets uncompromising luxury. Featuring diamond crystal technology, gold accents, and the most advanced multi-spectrum system available.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
                >
                  Request Luxury Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
                >
                  View Luxury Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Premium Luxury IPL Device"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Crown className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Ultra-Luxury</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Luxury Technology Features</h2>
            <p className="text-xl text-gray-600">Where cutting-edge technology meets unparalleled luxury</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Luxury Features</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  {luxuryFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Exclusive Manufacturing</h3>
                  <p className="text-purple-700">Limited production of 100 units per month</p>
                  <p className="text-purple-700">Each device individually crafted and tested</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Positioning */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ultra-Premium Market Positioning</h2>
            <p className="text-xl text-gray-600">Position your brand at the apex of luxury beauty technology</p>
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Luxury Brand Success</h2>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 max-w-4xl mx-auto">
              <blockquote className="text-xl italic mb-6">
                "The Premium Luxury IPL allowed us to enter the ultra-high-end market with 300% margins. The diamond crystal technology and luxury presentation created a new category for our brand."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">LuxeBeauty International - Ultra-Premium Brand</span>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold">300%</div>
                  <div className="text-sm">Profit Margins</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$2,500</div>
                  <div className="text-sm">Average Retail Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Customer Retention</div>
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
            Ready to Enter the Ultra-Luxury Market?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get an exclusive quote for the Premium Luxury IPL with full luxury customization and limited edition positioning.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
            >
              Get Luxury Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products/battery-powered-ipl"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
            >
              View Next Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumLuxuryIPL;