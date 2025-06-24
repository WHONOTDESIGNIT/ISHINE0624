import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingWidgets: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/8613534567890', '_blank');
  };

  const openContact = () => {
    window.location.href = 'tel:+8613534567890';
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 group"
        title={t('whatsapp_us')}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {t('whatsapp_us')}
        </span>
      </button>

      {/* Contact Button */}
      <button
        onClick={openContact}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 group"
        title="Call Us"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Call Us
        </span>
      </button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 group"
          title={t('back_to_top')}
        >
          <ArrowUp className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {t('back_to_top')}
          </span>
        </button>
      )}
    </div>
  );
};

export default FloatingWidgets;