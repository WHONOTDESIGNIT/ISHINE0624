import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Wifi, BarChart3, Shield, Award, CheckCircle, ArrowRight, Zap, Users } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

const SmartAppIPL: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: 'Smart App Control',
      description: 'Bluetooth connectivity with comprehensive mobile app for iOS and Android'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: 'Progress Tracking',
      description: 'Real-time treatment tracking with progress photos and calendar'
    },
    {
      icon: <Wifi className="h-8 w-8 text-blue-600" />,
      title: 'Cloud Sync',
      description: 'Secure cloud synchronization across multiple devices'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Smart Safety',
      description: 'AI-powered skin tone detection and automatic safety adjustments'
    }
  ];

  const specifications = [
    { label: 'Light Source', value: 'IPL (Intense Pulsed Light)' },
    { label: 'Wavelength', value: '530-1200nm' },
    { label: 'Energy Density', value: '1-6 J/cm²' },  
    { label: 'Treatment Window', value: '4.1 cm²' },
    { label: 'Flash Modes', value: '5 intensity levels + Auto mode' },
    { label: 'Connectivity', value: 'Bluetooth 5.0' },
    { label: 'App Platform', value: 'iOS 12+ / Android 8+' },  
    { label: 'Battery Life', value: '600,000 flashes' }
  ];

  const appFeatures = [
    'Personalized treatment plans',
    'Progress photo comparison',
    'Treatment calendar & reminders',
    'Skin tone analysis',
    'Usage statistics & analytics',
    'Video tutorials & guides',
    'Customer support chat',
    'Multi-user profiles'
  ];

  const brandBenefits = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Enhanced User Engagement',
      description: 'App connectivity increases customer retention and brand loyalty'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: 'Data Insights',
      description: 'Valuable user behavior data for product improvement and marketing'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Premium Positioning',
      description: 'Smart technology differentiates your brand in the competitive market'
    }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumbs 
        backgroundImage="https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      
      {/* Product Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-blue-600 font-semibold">Smart Technology IPL</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Smart App Control IPL
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The future of hair removal with intelligent app connectivity. Track progress, get personalized treatments, and enjoy seamless user experience with our smart IPL device.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Request OEM Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  View App Customization
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Smart App IPL Device"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Smartphone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">App Connected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Features</h2>
            <p className="text-xl text-gray-600">Advanced technology meets intelligent user experience</p>
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

      {/* App Features Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Mobile App Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">App Customization Available</h3>
                <p className="text-blue-700 mb-4">
                  We can customize the mobile app with your brand colors, logo, and additional features specific to your target market.
                </p>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Custom app branding and UI design</li>
                  <li>• White-label app store publishing</li>
                  <li>• Additional feature development</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4474041/pexels-photo-4474041.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mobile App Interface"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">Professional-grade performance with smart connectivity</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
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
      </section>

      {/* Brand Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits for Your Brand</h2>
            <p className="text-xl text-gray-600">Why smart connectivity gives you competitive advantage</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="mb-6 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Smart IPL Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">BeautyTech Pro</h3>
                <p className="text-purple-100 mb-4">
                  "The app connectivity increased our customer engagement by 300% and reduced support inquiries significantly."
                </p>
                <div className="text-2xl font-bold">300%</div>
                <div className="text-sm">Engagement Increase</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">TechBeauty Global</h3>
                <p className="text-purple-100 mb-4">
                  "Smart features allowed us to position as premium brand with 40% higher margins than competitors."
                </p>
                <div className="text-2xl font-bold">40%</div>
                <div className="text-sm">Higher Margins</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">SmartSkin Solutions</h3>
                <p className="text-purple-100 mb-4">
                  "User data insights helped us improve product features and launch targeted marketing campaigns."
                </p>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">User Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Launch Your Smart IPL Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a custom quote for the Smart App IPL with your branding and app customization.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Get Smart IPL Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products/emerald-ipl"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              View Next Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartAppIPL;