import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productLinks = [
    { path: '/products/sapphire-ipl', name: 'Sapphire Ice Feeling IPL' },
    { path: '/products/smart-app-ipl', name: 'Smart App Control IPL' },
    { path: '/products/emerald-ipl', name: 'Emerald IPL' },
    { path: '/products/ice-cooling-ipl', name: 'Ice Cooling IPL' },
    { path: '/products/dual-lamp-ipl', name: 'Dual Lamp IPL' },
    { path: '/products/premium-luxury-ipl', name: 'Premium Luxury IPL' },
    { path: '/products/battery-powered-ipl', name: 'Battery Powered IPL' },
    { path: '/products/hebe-ipl', name: 'Hebe IPL' },
    { path: '/products/handheld-ipl', name: 'Handheld IPL' },
    { path: '/products/goddess-ipl', name: 'Goddess IPL' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'shadow-sm border-b border-gray-100' 
        : 'border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">iS</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">iShine</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                IPL Hair Removal
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                  <div className="py-2">
                    {productLinks.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/services') ? 'text-blue-600 font-semibold' : ''}`}
            >
              {t('services')}
            </Link>
            
            <Link
              to="/about"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/about') ? 'text-blue-600 font-semibold' : ''}`}
            >
              {t('about')}
            </Link>

            <Link
              to="/blog"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/blog') ? 'text-blue-600 font-semibold' : ''}`}
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/contact') ? 'text-blue-600 font-semibold' : ''}`}
            >
              {t('contact')}
            </Link>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-500" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="text-sm border-none bg-transparent focus:ring-0 cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="zh">中文</option>
              </select>
            </div>
            
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {t('get_quote')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="px-3 py-2">
              <span className="text-gray-700 font-semibold">IPL Hair Removal</span>
              <div className="mt-2 space-y-1">
                {productLinks.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('services')}
            </Link>
            
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </Link>

            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;