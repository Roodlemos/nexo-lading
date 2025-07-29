import React from 'react';
import { Zap, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'contato@nexoestudos.com.br',
      href: 'mailto:contato@nexoestudos.com.br'
    },
    {
      icon: Phone,
      label: '+55 (11) 99999-9999',
      href: 'tel:+5511999999999'
    },
    {
      icon: MapPin,
      label: 'São Paulo, Brasil',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Seg-Sex: 8h-18h',
      href: '#'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}>
      </div>

      {/* Main footer content */}
      <div className="section-padding-elegant relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="py-12 lg:py-16">
            <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2 content-padding-elegant">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl shadow-elegant">
                    <Zap className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <span className="text-xl lg:text-2xl font-bold">Nexo Estudos Elétricos</span>
                </div>
                
                <p className="text-primary-200 text-sm lg:text-base leading-relaxed mb-6 max-w-lg">
                  {t('footer.description')}
                </p>

                {/* Contact info compacto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-3 text-primary-200 hover:text-white 
                               transition-colors duration-300 text-sm group"
                    >
                      <div className="bg-primary-800 p-2 rounded-lg group-hover:bg-accent-500 
                                    transition-colors duration-300">
                        <item.icon className="h-3 w-3" />
                      </div>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="bg-primary-800 hover:bg-accent-500 p-3 rounded-xl transition-all duration-300 
                             shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:contato@nexoestudos.com.br"
                    className="bg-primary-800 hover:bg-accent-500 p-3 rounded-xl transition-all duration-300 
                             shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    title="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+5511999999999"
                    className="bg-primary-800 hover:bg-accent-500 p-3 rounded-xl transition-all duration-300 
                             shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    title="Telefone"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Company Links */}
              <div className="content-padding-elegant">
                <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">{t('footer.company')}</h3>
                <ul className="space-y-2 lg:space-y-3">
                  {links.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-primary-200 hover:text-white transition-colors duration-300 
                                 text-sm lg:text-base flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-3 
                                       group-hover:bg-white transition-colors duration-300"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal & Languages */}
              <div className="content-padding-elegant">
                <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">{t('footer.legal')}</h3>
                <ul className="space-y-2 lg:space-y-3 mb-6">
                  {links.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-primary-200 hover:text-white transition-colors duration-300 
                                 text-sm lg:text-base flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-3 
                                       group-hover:bg-white transition-colors duration-300"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Language Selector */}
                <div>
                  <h4 className="text-sm lg:text-base font-medium mb-3 text-primary-200">
                    {t('footer.languages')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as any)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 
                                 text-xs lg:text-sm font-medium ${
                          language === lang.code
                            ? 'bg-accent-500 text-white shadow-lg'
                            : 'bg-primary-800 hover:bg-accent-500 text-primary-200 hover:text-white'
                        }`}
                      >
                        <span className="text-sm">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-700/50 py-6 lg:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 
                          content-padding-elegant">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 
                            text-primary-200 text-xs lg:text-sm">
                <p>© {currentYear} Nexo Estudos Elétricos. {t('footer.rights')}</p>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span>Sistema Online</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-accent-400 rounded-full"></span>
                    <span>SSL Seguro</span>
                  </span>
                </div>
              </div>

              {/* Quick actions */}
              <div className="flex items-center space-x-3">
                <a
                  href="#contato"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg 
                           transition-all duration-300 text-xs lg:text-sm font-semibold
                           shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Solicitar Orçamento
                </a>
                <a
                  href="#inicio"
                  className="bg-primary-800 hover:bg-primary-700 text-primary-200 hover:text-white 
                           px-4 py-2 rounded-lg transition-all duration-300 text-xs lg:text-sm
                           border border-primary-700"
                >
                  Voltar ao Topo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary-400/10 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
