import React from 'react';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, Globe, Users, Award, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Clients: React.FC = () => {
  const clients = [
    {
      name: 'KU-2 Beauty',
      logo: 'KU-2',
      industry: 'Beauty Tech',
      partnership: '2019-Present',
      description: 'Leading beauty device brand in Asia-Pacific region',
      results: [
        '500K+ devices sold',
        '95% customer satisfaction',
        '40+ countries distribution'
      ],
      testimonial: "iShine's manufacturing quality and support have been instrumental in our success. Their OEM services allowed us to launch premium IPL devices that exceeded our expectations.",
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Costco Private Label',
      logo: 'COSTCO',
      industry: 'Retail',
      partnership: '2020-Present',
      description: 'Exclusive IPL devices for Costco wholesale members',
      results: [
        '1M+ units distributed',
        'Top seller in beauty category',
        'Premium quality at wholesale prices'
      ],
      testimonial: "The quality and reliability of iShine's devices have made them our preferred partner for IPL products. Their ability to scale production while maintaining quality is exceptional.",
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'ROSESKINCO',
      logo: 'ROSE',
      industry: 'Skincare',
      partnership: '2021-Present',
      description: 'Premium skincare brand with focus on at-home devices',
      results: [
        'Luxury market positioning',
        '300% ROI in first year',
        'Expanded to 15 countries'
      ],
      testimonial: "iShine understood our vision for luxury skincare devices. Their customization capabilities and attention to detail helped us create products that truly represent our brand.",
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const successMetrics = [
    { metric: '50+', label: 'Brand Partners' },
    { metric: '2.5M+', label: 'Devices Manufactured' },
    { metric: '85+', label: 'Countries Served' },
    { metric: '98%', label: 'Client Retention Rate' }
  ];

  const caseStudies = [
    {
      title: 'Startup to Market Leader',
      brand: 'Beauty Tech Startup',
      challenge: 'New brand needed to establish market presence with limited budget',
      solution: 'Flexible MOQ and comprehensive marketing support package',
      result: 'Achieved 25% market share in target region within 18 months',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Retail Chain Expansion',
      brand: 'Major Retail Chain',
      challenge: 'Needed consistent quality for mass distribution',
      solution: 'Scaled production capacity and implemented quality control systems',
      result: 'Successfully launched in 500+ stores with zero quality issues',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Premium Brand Launch',
      brand: 'Luxury Skincare Brand',
      challenge: 'Required premium positioning with advanced features',
      solution: 'Custom ice cooling technology and luxury packaging',
      result: 'Achieved 40% higher margins than competitor products',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumbs 
        backgroundImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      
      {/* Client Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnering with leading brands worldwide to deliver exceptional IPL devices and drive market success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.metric}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Client Partnerships</h2>
            <p className="text-xl text-gray-600">Long-term partnerships that drive mutual success</p>
          </div>
          
          <div className="space-y-16">
            {clients.map((client, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      {client.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{client.name}</h3>
                      <p className="text-gray-600">{client.industry} • {client.partnership}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{client.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {client.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-sm font-semibold text-gray-900">{result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <blockquote className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <p className="text-gray-700 italic mb-4">"{client.testimonial}"</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">5.0 Partnership Rating</span>
                    </div>
                  </blockquote>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600">Real challenges, innovative solutions, measurable results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{study.brand}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Result:</h4>
                      <p className="text-green-600 text-sm font-semibold">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Why Brands Choose iShine</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <Globe className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
                <p className="text-blue-100">Established distribution networks in 85+ countries worldwide</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <Users className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Dedicated Support</h3>
                <p className="text-blue-100">Assigned account managers and technical support teams</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <Award className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
                <p className="text-blue-100">98% client retention rate and 10+ years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to become our next success story? Let's discuss how we can help your brand thrive.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Start Your Partnership
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;