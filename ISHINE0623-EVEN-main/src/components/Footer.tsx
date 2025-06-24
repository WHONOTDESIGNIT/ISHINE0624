import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">iS</span>
              </div>
              <span className="text-2xl font-bold">iShine</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading manufacturer of IPL hair removal devices with comprehensive OEM/ODM solutions for global brands.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Globe className="h-4 w-4" />
                <span className="text-sm">Global Shipping</span>
              </div>
            </div>
          </div>

          {/* IPL Hair Removal Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IPL Hair Removal</h3>
            <ul className="space-y-2">
              <li><Link to="/products/sapphire-ipl" className="text-gray-300 hover:text-white transition-colors">Sapphire IPL</Link></li>
              <li><Link to="/products/smart-app-ipl" className="text-gray-300 hover:text-white transition-colors">Smart App IPL</Link></li>
              <li><Link to="/products/emerald-ipl" className="text-gray-300 hover:text-white transition-colors">Emerald IPL</Link></li>
              <li><Link to="/products/dual-lamp-ipl" className="text-gray-300 hover:text-white transition-colors">Dual Lamp IPL</Link></li>
              <li><Link to="/products/premium-luxury-ipl" className="text-gray-300 hover:text-white transition-colors">Premium Luxury IPL</Link></li>
            </ul>
          </div>

          {/* Services & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services & Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">OEM/ODM Services</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Custom Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Industry Blog</Link></li>
              <li><Link to="/clients" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">business@ishine-tech.com</p>
                  <p className="text-gray-300">info@ishine-tech.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">+86 135 3456 7890</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <p className="text-gray-300">
                  Shenzhen, Guangdong Province<br />
                  China
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 iShine Technology. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/quality" className="text-gray-400 hover:text-white text-sm transition-colors">Quality Assurance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;