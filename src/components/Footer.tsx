import React from 'react';
import { Zap, Linkedin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  const languages = [
    { code: 'pt-br', flag: '🇧🇷', label: 'PT' },
    { code: 'en-us', flag: '🇺🇸', label: 'EN' },
    { code: 'es-es', flag: '🇪🇸', label: 'ES' },
  ];

  const links = {
    company: [
      { name: t('nav.about'), href: '#quem-somos' },
      { name: t('nav.services'), href: '#servicos' },
      { name: t('nav.differentials'), href: '#diferenciais' },
      { name: t('nav.contact'), href: '#contato' },
    ],
    legal: [
      { name: t('footer.privacy'), href: '#' },
      { name: t('footer.terms'), href: '#' },
      { name: t('footer.cookies'), href: '#' },
    ],
  };

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-accent-500" />
              <span className="text-2xl font-bold">Nexo Estudos Elétricos</span>
            </div>
            
            <p className="text-primary-200 text-lg leading-relaxed mb-6">
              {t('footer.description')}
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary-800 hover:bg-accent-500 p-3 rounded-lg transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@nexoestudos.com.br"
                className="bg-primary-800 hover:bg-accent-500 p-3 rounded-lg transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+5511999999999"
                className="bg-primary-800 hover:bg-accent-500 p-3 rounded-lg transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.legal')}</h3>
            <ul className="space-y-3 mb-6">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Selector */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-primary-200">{t('footer.languages')}</h4>
              <div className="flex space-x-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-300 text-sm ${
                      language === lang.code
                        ? 'bg-accent-500 text-white'
                        : 'bg-primary-800 hover:bg-accent-500 text-primary-200 hover:text-white'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-12 pt-8 text-center">
          <p className="text-primary-200">
            © {currentYear} Nexo Estudos Elétricos. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
