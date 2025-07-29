import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Zap, ChevronDown, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { href: '#inicio', label: t('nav.home') },
    { href: '#quem-somos', label: t('nav.about') },
    { href: '#servicos', label: t('nav.services') },
    { href: '#diferenciais', label: t('nav.differentials') },
    { href: '#contato', label: t('nav.contact') },
  ];

  const languages = [
    { code: 'pt-br', flag: '🇧🇷', label: 'Português' },
    { code: 'en-us', flag: '🇺🇸', label: 'English' },
    { code: 'es-es', flag: '🇪🇸', label: 'Español' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any);
    setIsLanguageOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-elegant border-b border-neutral-200/50' 
        : 'bg-white/90 backdrop-blur-lg border-b border-white/20'
    }`}>
      {/* Container principal com margens elegantes aumentadas */}
      <div className="section-padding-elegant">
        <div className="max-w-9xl mx-auto">
          <nav className="flex items-center justify-between py-3 lg:py-4">
            {/* Logo com espaçamento adequado */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-elegant">
                <Zap className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-700 to-secondary-600 bg-clip-text text-transparent">
                Nexo Estudos Elétricos
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-all duration-300 
                           relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                           after:bg-gradient-to-r after:from-primary-500 after:to-accent-500 
                           after:transition-all after:duration-300 hover:after:w-full text-base lg:text-base"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Language Dropdown */}
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 text-neutral-700 hover:text-primary-600 
                           font-medium transition-all duration-300 p-3 lg:p-3 rounded-xl hover:bg-primary-50
                           border border-transparent hover:border-primary-200"
                  title={t('nav.language')}
                >
                  <span className="text-xl lg:text-2xl drop-shadow-sm">{currentLanguage?.flag}</span>
                  <ChevronDown className={`h-4 w-4 lg:h-4 lg:w-4 transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-52 lg:w-56 card-compact py-2 z-50 animate-fade-in bg-white border border-neutral-200 shadow-elegant-lg">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 lg:px-5 py-3 lg:py-3 hover:bg-primary-50 flex items-center space-x-3 
                                 transition-all duration-300 group ${
                          language === lang.code 
                            ? 'bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 border-l-4 border-primary-500' 
                            : 'text-neutral-700 hover:text-primary-600'
                        }`}
                      >
                        <span className="text-lg lg:text-xl">{lang.flag}</span>
                        <span className="font-medium text-base lg:text-base">{lang.label}</span>
                        {language === lang.code && (
                          <span className="ml-auto text-accent-500 font-semibold">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Login Button */}
              <a
                href="/login"
                className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 
                         hover:from-primary-700 hover:to-primary-800 text-white font-semibold 
                         py-2.5 px-6 lg:py-3 lg:px-7 rounded-xl transition-all duration-300 shadow-elegant 
                         hover:shadow-elegant-lg transform hover:-translate-y-0.5 text-base lg:text-base"
              >
                <User className="h-4 w-4 lg:h-4 lg:w-4" />
                <span>{t('nav.login')}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-neutral-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-neutral-700" />
              ) : (
                <Menu className="h-5 w-5 text-neutral-700" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-neutral-200 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-elegant-lg mt-2 mx-4">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 
                             font-medium transition-all duration-300 rounded-lg text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              
              {/* Mobile Language Selection */}
              <div className="py-3 border-t border-neutral-200 mt-4">
                <div className="text-sm font-semibold text-neutral-500 mb-3 px-4">{t('nav.language')}</div>
                <div className="space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full text-left py-2 px-4 flex items-center space-x-3 transition-all duration-300 
                               rounded-lg text-base ${
                        language === lang.code 
                          ? 'text-primary-600 font-semibold bg-gradient-to-r from-primary-50 to-accent-50 border-l-4 border-primary-500' 
                          : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                      {language === lang.code && (
                        <span className="ml-auto text-accent-500 font-semibold">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Login Button */}
              <div className="pt-3 border-t border-neutral-200">
                <a
                  href="/login"
                  className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 
                           hover:from-primary-700 hover:to-primary-800 text-white font-semibold 
                           py-3 px-4 rounded-xl transition-all duration-300 shadow-elegant 
                           hover:shadow-elegant-lg justify-center text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>{t('nav.login')}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
