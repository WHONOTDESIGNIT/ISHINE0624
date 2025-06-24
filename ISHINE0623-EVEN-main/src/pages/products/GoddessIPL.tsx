import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Sparkles, Star, Award, CheckCircle, ArrowRight, Gem, Heart, Users } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

const GoddessIPL: React.FC = () => {
  const features = [
    {
      icon: <Crown className="h-8 w-8 text-gold-600" />,
      title: 'Divine Design',
      description: 'Goddess-inspired aesthetic with celestial gold and pearl accents'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-gold-600" />,
      title: 'Multi-Dimensional Light',
      description: 'Advanced 9-wavelength spectrum for comprehensive hair removal'
    },
    {
      icon: <Gem className="h-8 w-8 text-gold-600" />,
      title: 'Crystal Fusion Technology',
      description: 'Combination of sapphire, emerald, and diamond crystal elements'
    },
    {
      icon: <Heart className="h-8 w-8 text-gold-600" />,
      title: 'Goddess Touch',
      description: 'Ultra-gentle treatment with divine comfort technology'
    }
  ];

  const specifications = [
    { label: 'Light Source', value: 'Divine Multi-Spectrum IPL' },
    { label: 'Wavelength Range', value: '500-1200nm (9 wavelengths)' },
    { label: 'Energy Density', value: '1-8 J/cm²' },
    { label: 'Crystal Technology', value: 'Tri-crystal fusion window' },
    { label: 'Treatment Window', value: '5.0 cm² (largest available)' },
    { label: 'Divine Modes', value: '9 intensity levels + Goddess mode' },
    { label: 'Luxury Features', value: 'Gold plating, pearl inlays, LED halo' },
    { label: 'Flash Life', value: '1,500,000 flashes (lifetime guarantee)' }
  ];

  const goddessFeatures = [
    'Hand-crafted celestial design',
    'Genuine pearl and gold accents',
    'Swarovski crystal embellishments',
    'LED halo lighting system',
    'Silk-lined presentation box',
    'Personalized goddess nameplate',
    'Lifetime VIP service program',
    'Exclusive goddess community access',
    'Annual device blessing ceremony',
    'Divine warranty (lifetime coverage)'
  ];

  const marketPositioning = [
    {
      icon: <Star className="h-8 w-8 text-gold-600" />,
      title: 'Ultra-Exclusive Segment',
      description: 'Limited edition positioning for the most discerning customers'
    },
    {
      icon: <Users className="h-8 w-8 text-gold-600" />,
      title: 'Celebrity Appeal',
      description: 'Designed for high-profile clients and luxury beauty enthusiasts'
    },
    {
      icon: <Crown className="h-8 w-8 text-gold-600" />,
      title: 'Prestige Branding',
      description: 'Establish your brand as the ultimate luxury beauty technology leader'
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
                <Crown className="h-6 w-6 text-yellow-600 mr-2" />
                <span className="text-yellow-600 font-semibold">Divine Luxury IPL</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Goddess IPL
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The ultimate expression of luxury and technology. Inspired by divine beauty, the Goddess IPL combines celestial aesthetics with the most advanced multi-spectrum technology ever created.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-yellow-600 transition-colors inline-flex items-center justify-center"
                >
                  Request Divine Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors inline-flex items-center justify-center"
                >
                  View Divine Features
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Goddess IPL Device"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border-2 border-yellow-400">
                <div className="text-center">
                  <Crown className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Divine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Features */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Divine Technology Features</h2>
            <p className="text-xl text-gray-600">Where celestial beauty meets cutting-edge innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-yellow-200">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Divine Specifications</h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-yellow-200">
                <div className="divide-y divide-gray-200">
                  {specifications.map((spec, index) => (
                    <div key={index} className="px-6 py-4 flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{spec.label}</span>
                      <span className="text-gray-900 font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Goddess Features</h2>
              <div className="bg-white rounded-lg shadow-lg p-6 border border-yellow-200">
                <div className="space-y-4">
                  {goddessFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-300">
                  <h3 className="font-semibold text-yellow-900 mb-2">Divine Exclusivity</h3>
                  <p className="text-yellow-700">Limited to 50 units worldwide per year</p>
                  <p className="text-yellow-700">Each device individually blessed and numbered</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Divine Market Positioning</h2>
            <p className="text-xl text-gray-600">Position your brand among the gods of luxury beauty</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketPositioning.map((position, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center border border-yellow-200">
                <div className="mb-6 flex justify-center">{position.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{position.title}</h3>
                <p className="text-gray-600">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divine Experience */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Divine Experience</h2>
            <p className="text-xl text-gray-600">More than a device - a celestial beauty ritual</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Divine Unboxing</h3>
              <p className="text-gray-600">Silk-lined presentation box with celestial music</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Goddess Blessing</h3>
              <p className="text-gray-600">Each device blessed in sacred ceremony</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Divine Treatment</h3>
              <p className="text-gray-600">Celestial light therapy with halo illumination</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Eternal Beauty</h3>
              <p className="text-gray-600">Lifetime results with divine technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Success Story */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Divine Success Story</h2>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 max-w-4xl mx-auto">
              <blockquote className="text-xl italic mb-6">
                "The Goddess IPL transformed our brand into a luxury icon. We now serve A-list celebrities and royalty. The divine positioning allowed us to achieve $5,000+ retail prices and created a waiting list of over 1,000 customers."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="flex text-yellow-300 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">Divine Beauty Luxe - Celebrity Beauty Brand</span>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold">$5,000+</div>
                  <div className="text-sm">Retail Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">1,000+</div>
                  <div className="text-sm">Waiting List</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Celebrity Satisfaction</div>
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
            Ready to Ascend to Divine Status?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get an exclusive quote for the Goddess IPL and join the pantheon of luxury beauty brands.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-amber-700 transition-colors inline-flex items-center justify-center"
            >
              Get Divine Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products/sapphire-ipl"
              className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors inline-flex items-center justify-center"
            >
              View Product Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoddessIPL;