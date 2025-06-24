import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cog, 
  Palette, 
  Package, 
  ShoppingCart, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Factory,
  Truck
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
      title: 'Product Design & Development',
      description: 'Custom IPL device design tailored to your brand requirements',
      features: [
        'Industrial design and styling',
        'Ergonomic optimization',
        'User interface design',
        'Technical specification development',
        'Prototype creation and testing'
      ]
    },
    {
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      title: 'Manufacturing & Production',
      description: 'State-of-the-art manufacturing facilities with quality assurance',
      features: [
        'ISO 9001 certified production',
        'Automated assembly lines',
        'Quality control at every stage',
        'Scalable production capacity',
        'Final product testing'
      ]
    },
    {
      icon: <Palette className="h-12 w-12 text-blue-600" />,
      title: 'Branding & Customization',
      description: 'Complete branding solutions for your IPL devices',
      features: [
        'Logo printing and engraving',
        'Custom color schemes',
        'Mobile app branding',
        'User manual customization',
        'Marketing material design'
      ]
    },
    {
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: 'Packaging Solutions',
      description: 'Premium packaging design that reflects your brand values',
      features: [
        'Custom packaging design',
        'Eco-friendly materials',
        'Unboxing experience optimization',
        'Retail-ready packaging',
        'Bulk shipping packaging'
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'Training & Support',
      description: 'Comprehensive support to ensure your success',
      features: [
        'Product training sessions',
        'Marketing strategy guidance',
        'Technical documentation',
        'After-sales support setup',
        'Customer service training'
      ]
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: 'Logistics & Fulfillment',
      description: 'Global shipping and fulfillment solutions',
      features: [
        'Worldwide shipping',
        'Customs documentation',
        'Inventory management',
        'Drop shipping services',
        'Returns processing'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Understand your brand requirements and market positioning'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Create custom designs and prototypes for your approval'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Develop and test the final product specifications'
    },
    {
      step: '04',
      title: 'Production',
      description: 'Manufacture your devices with quality control'
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'Package and ship your branded products worldwide'
    }
  ];

  const capabilities = [
    { metric: '500K+', label: 'Units Manufactured Annually' },
    { metric: '50+', label: 'Global Brand Partners' },
    { metric: '10+', label: 'Years Experience' },
    { metric: '99%', label: 'Quality Pass Rate' }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumbs 
        backgroundImage="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive OEM/ODM Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to market-ready products, we provide end-to-end solutions for your IPL device brand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Five-step process to bring your IPL brand to market</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Capabilities</h2>
            <p className="text-xl text-blue-100">Proven track record in IPL device manufacturing</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{capability.metric}</div>
                <div className="text-blue-100">{capability.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
              <p className="text-xl text-gray-600 mb-8">
                Every device undergoes rigorous testing to ensure it meets international safety and quality standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">ISO 9001:2015 Quality Management</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">FDA Registration & Compliance</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">CE Marking for European Markets</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">FCC Certification for Electronics</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Quality Control"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your IPL Brand?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your requirements and create a custom solution for your brand.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Get Started Today
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
      </section>
    </div>
  );
};

export default Services;