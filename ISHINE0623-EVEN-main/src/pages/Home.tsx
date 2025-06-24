import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users, Globe, Award, CheckCircle, Home as HomeIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Premium Quality',
      description: 'FDA-approved components with rigorous quality control standards'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Advanced Technology',
      description: 'Cutting-edge IPL technology with ice cooling and smart sensors'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'OEM/ODM Expertise',
      description: 'Full-service manufacturing from design to delivery'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Global Reach',
      description: 'Serving brands worldwide with flexible shipping solutions'
    }
  ];

  const stats = [
    { number: '50+', label: 'Global Clients' },
    { number: '500K+', label: 'Devices Manufactured' },
    { number: '10+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const services = [
    {
      title: 'Custom Design',
      description: 'Tailored IPL device designs to match your brand identity',
      features: ['Logo customization', 'Color schemes', 'Packaging design']
    },
    {
      title: 'Manufacturing',
      description: 'State-of-the-art production facilities with quality assurance',
      features: ['ISO certified', 'Quality control', 'Scalable production']
    },
    {
      title: 'Brand Support',
      description: 'Complete support package for successful market entry',
      features: ['Marketing materials', 'Training', 'After-sales support']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                {t('hero_title')}
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                {t('hero_subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  {t('get_quote')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/products/sapphire-ipl"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  {t('learn_more')}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="IPL Device"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sapphire Ice Feeling IPL</h3>
                  <p className="text-gray-600">Premium ice cooling technology for comfortable hair removal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose iShine?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced technology with exceptional manufacturing expertise to deliver premium IPL devices for your brand.
            </p>
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

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive OEM/ODM solutions to bring your IPL device vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Launch Your IPL Brand?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Partner with iShine for premium IPL devices that will set your brand apart in the market.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/clients"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;