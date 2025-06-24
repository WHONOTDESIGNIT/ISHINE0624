import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Users, Award, Globe, Zap, Shield, ArrowRight, Target, CheckCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500K+', label: 'Devices Manufactured' },
    { number: '50+', label: 'Global Partners' },
    { number: '85+', label: 'Countries Served' }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Quality First',
      description: 'Uncompromising quality standards with rigorous testing and certification processes'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Client Success',
      description: 'Dedicated to our partners success with comprehensive support and guidance'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Innovation',
      description: 'Continuous R&D investment to deliver cutting-edge IPL technologies'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Global Vision',
      description: 'Connecting brands worldwide with premium IPL manufacturing solutions'
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'iShine Technology established in Shenzhen with focus on IPL device manufacturing'
    },
    {
      year: '2016',
      title: 'First International Partnership',
      description: 'Secured first major OEM contract with European beauty device brand'
    },
    {
      year: '2018',
      title: 'FDA Certification',
      description: 'Achieved FDA registration for IPL devices, opening US market opportunities'
    },
    {
      year: '2020',
      title: 'Production Scale-up',
      description: 'Expanded manufacturing capacity to 500,000+ units annually'
    },
    {
      year: '2022',
      title: 'Innovation Leadership',
      description: 'Launched industry-first ice cooling IPL technology'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Serving 50+ brands across 85+ countries with comprehensive OEM/ODM solutions'
    }
  ];

  const team = [
    {
      name: 'David Chen',
      position: 'CEO & Founder',
      description: 'Former Philips engineer with 15+ years in medical device manufacturing',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Wang',
      position: 'Head of OEM Services',
      description: 'International business expert specializing in brand partnerships',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Dr. Li Zhang',
      position: 'R&D Director',
      description: 'PhD in Optical Engineering, leading IPL technology innovations',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'FDA 510(k) Medical Device Registration',
    'CE Marking European Conformity',
    'FCC Part 15 Electronics Certification',
    'RoHS Compliance Environmental Standards',
    'UL Safety Testing Laboratory Approved'
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumbs 
        backgroundImage="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading IPL Device Manufacturer Since 2014
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                iShine Technology has been at the forefront of IPL hair removal device manufacturing, helping global brands bring premium products to market with our comprehensive OEM/ODM solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Factory className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">State-of-the-art manufacturing facilities in Shenzhen</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">ISO 9001 certified with FDA registration</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Specialized in B2B partnerships and brand development</span>
                </div>
              </div>
              <Link
                to="/services"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Manufacturing Facility"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">A decade of innovation and growth</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced leaders driving innovation and growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quality Certifications & Standards
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our commitment to quality is demonstrated through rigorous certifications and compliance with international standards.
              </p>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Quality Control"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Partner with Industry Leaders
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the 50+ global brands that trust iShine for their IPL device manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Start Partnership
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

export default About;