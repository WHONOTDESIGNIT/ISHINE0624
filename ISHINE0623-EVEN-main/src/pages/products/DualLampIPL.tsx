import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Timer, Target, Award, CheckCircle, ArrowRight, TrendingUp, Users } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

const DualLampIPL: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: 'Dual Lamp System',
      description: 'Two independent IPL lamps for enhanced treatment coverage and speed'
    },
    {
      icon: <Timer className="h-8 w-8 text-orange-600" />,
      title: '2x Faster Treatment',
      description: 'Complete full-body treatment in half the time of single-lamp devices'
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: 'Precision Targeting',
      description: 'Alternating lamp system ensures even coverage and optimal results'
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: 'Extended Lamp Life',
      description: 'Shared workload extends overall device lifespan significantly'
    }
  ];

  const specifications = [
    { label: 'Light Source', value: 'Dual IPL Lamp System' },
    { label: 'Wavelength', value: '530-1200nm (both lamps)' },
    { label: 'Energy Density', value: '1-5 J/cm² per lamp' },
    { label: 'Treatment Window', value: '3.5 cm² × 2 lamps' },
    { label: 'Flash Rate', value: 'Up to 2 flashes per second' },
    { label: 'Lamp Life', value: '500,000 flashes per lamp' },
    { label: 'Total Flashes', value: '1,000,000 combined flashes' },
    { label: 'Treatment Speed', value: '50% faster than single lamp' }
  ];

  const dualLampBenefits = [
    'Faster full-body treatments (15 minutes vs 30 minutes)',
    'Enhanced treatment uniformity',
    'Reduced skin stress through alternating flash pattern',
    'Extended device lifespan with load sharing',
    'Higher energy efficiency',
    'Backup functionality if one lamp fails',
    'Professional-grade treatment speed',
    'Improved customer satisfaction'
  ];

  const businessAdvantages = [
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: 'Premium Market Position',
      description: 'Dual lamp technology positions your brand as innovative and professional'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: 'Better User Experience',
      description: 'Faster treatments lead to higher customer satisfaction and retention'
    },
    {
      icon: <Timer className="h-8 w-8 text-orange-600" />,
      title: 'Time-Conscious Appeal',
      description: 'Appeals to busy consumers who want effective results in less time'
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
                <Award className="h-6 w-6 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Professional Speed IPL</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Dual Lamp IPL
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Revolutionary dual lamp technology delivers professional-grade treatment speed without compromising safety or effectiveness. Complete full-body hair removal in just 15 minutes.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center justify-center"
                >
                  Request Speed Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center"
                >
                  View Professional Features
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dual Lamp IPL Device"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">2x Faster</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Lamp Technology */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dual Lamp Innovation</h2>
            <p className="text-xl text-gray-600">Two lamps working in perfect harmony for superior results</p>
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

      {/* How Dual Lamp Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How Dual Lamp Technology Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Alternating Flash Pattern</h3>
                    <p className="text-gray-600">Two lamps alternate flashes to provide continuous treatment without overheating.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enhanced Coverage</h3>
                    <p className="text-gray-600">Dual treatment windows ensure complete coverage with minimal overlap.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Load Distribution</h3>
                    <p className="text-gray-600">Workload sharing extends lamp life and maintains consistent performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dual Lamp Technology"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speed Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Speed Comparison</h2>
            <p className="text-xl text-gray-600">See the dramatic time savings with dual lamp technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-600 mb-6 text-center">Single Lamp IPL</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Full Legs</span>
                  <span className="font-semibold">15 minutes</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Arms</span>
                  <span className="font-semibold">8 minutes</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Underarms</span>
                  <span className="font-semibold">3 minutes</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Bikini Area</span>
                  <span className="font-semibold">4 minutes</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t-2 font-bold text-lg">
                  <span>Total Time</span>
                  <span className="text-gray-600">30 minutes</span>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">Dual Lamp IPL</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-orange-400">
                  <span>Full Legs</span>
                  <span className="font-semibold">7 minutes</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-orange-400">
                  <span>Arms</span>
                  <span className="font-semibold">4 minutes</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-orange-400">
                  <span>Underarms</span>
                  <span className="font-semibold">2 minutes</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-orange-400">
                  <span>Bikini Area</span>
                  <span className="font-semibold">2 minutes</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t-2 border-orange-400 font-bold text-lg">
                  <span>Total Time</span>
                  <span>15 minutes</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-2xl font-bold">50% Faster!</div>
              </div>
            </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Dual Lamp Benefits</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  {dualLampBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Professional Performance</h3>
                  <p className="text-orange-700">Matches salon-grade treatment speed at home</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Advantages */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Business Advantages</h2>
            <p className="text-xl text-orange-100 mb-12">Why dual lamp technology drives sales</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessAdvantages.map((advantage, index) => (
                <div key={index} className="bg-white bg-opacity-10 rounded-lg p-6">
                  <div className="mb-4 flex justify-center">{advantage.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-orange-100">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Success Story</h2>
              <p className="text-xl text-gray-600">How dual lamp technology transformed a beauty brand</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <blockquote className="text-xl italic text-gray-700 mb-6">
                  "The dual lamp IPL became our bestseller within 3 months. Customers love the faster treatment times, and it allowed us to position ourselves as the 'professional speed' option in the market."
                </blockquote>
                <div className="font-semibold text-gray-900">- SpeedBeauty Pro</div>
                <div className="text-gray-600">European Beauty Device Brand</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="text-2xl font-bold text-orange-600">300%</div>
                  <div className="text-sm text-gray-600">Sales Increase</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="text-2xl font-bold text-orange-600">4.8/5</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="text-2xl font-bold text-orange-600">85%</div>
                  <div className="text-sm text-gray-600">Repeat Customers</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="text-2xl font-bold text-orange-600">50%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
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
            Ready to Offer Professional Speed?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a custom quote for the Dual Lamp IPL and give your customers professional-grade speed.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center justify-center"
            >
              Get Dual Lamp Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products/premium-luxury-ipl"
              className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center"
            >
              View Next Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DualLampIPL;