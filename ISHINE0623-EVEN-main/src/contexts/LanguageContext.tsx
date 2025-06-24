import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    home: 'Home',
    products: 'IPL Hair Removal',
    services: 'OEM/ODM Services',
    about: 'About Us',
    contact: 'Contact',
    clients: 'Our Clients',
    hero_title: 'Leading IPL Hair Removal Device Manufacturer',
    hero_subtitle: 'Professional OEM/ODM solutions for global brands',
    get_quote: 'Get Quote',
    learn_more: 'Learn More',
    whatsapp_us: 'WhatsApp Us',
    back_to_top: 'Back to Top'
  },
  zh: {
    home: '首页',
    products: 'IPL脱毛设备',
    services: 'OEM/ODM服务',
    about: '关于我们',
    contact: '联系我们',
    clients: '我们的客户',
    hero_title: '领先的IPL脱毛设备制造商',
    hero_subtitle: '为全球品牌提供专业OEM/ODM解决方案',
    get_quote: '获取报价',
    learn_more: '了解更多',
    whatsapp_us: 'WhatsApp联系',
    back_to_top: '返回顶部'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};