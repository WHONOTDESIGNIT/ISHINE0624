import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
  image?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  backgroundImage?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, backgroundImage }) => {
  const location = useLocation();
  const [showWhiteSection, setShowWhiteSection] = useState(true);
  
  // Generate breadcrumbs from current path if items not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      let label = segment.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      // Update product labels to include "IPL Hair Removal"
      if (segment === 'products') {
        label = 'IPL Hair Removal';
      }
      
      breadcrumbs.push({
        label,
        path: index === pathSegments.length - 1 ? undefined : currentPath
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  // Handle scroll to show/hide white section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 8) {
        setShowWhiteSection(false);
      } else {
        setShowWhiteSection(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* White section that appears/disappears on scroll */}
      <div 
        className={`bg-white transition-all duration-300 ${
          showWhiteSection ? 'h-16' : 'h-0'
        } overflow-hidden`}
      />
      
      {/* Breadcrumbs section */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-36"
        style={backgroundImage ? {
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(15, 118, 110, 0.8)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-blue-200" />}
                
                {item.path ? (
                  <Link 
                    to={item.path}
                    className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
                  >
                    {index === 0 && <Home className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <span className="flex items-center space-x-1 text-blue-100">
                    {index === 0 && <Home className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </span>
                )}
              </div>
            ))}
          </nav>
          
          {/* Current page title */}
          <h1 className="text-3xl font-bold mt-4">
            {breadcrumbItems[breadcrumbItems.length - 1].label}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;