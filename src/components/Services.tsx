import React from 'react';
import { FileText, Zap, Settings, BarChart3, Database, Wind } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: FileText,
      title: t('services.basic.title'),
      description: t('services.basic.desc'),
      gradient: 'from-blue-500 to-primary-600'
    },
    {
      icon: Zap,
      title: t('services.access.title'),
      description: t('services.access.desc'),
      gradient: 'from-accent-500 to-orange-600'
    },
    {
      icon: Settings,
      title: t('services.preop.title'),
      description: t('services.preop.desc'),
      gradient: 'from-primary-500 to-secondary-600'
    },
    {
      icon: BarChart3,
      title: t('services.r2.title'),
      description: t('services.r2.desc'),
      gradient: 'from-emerald-500 to-primary-600'
    },
    {
      icon: Database,
      title: t('services.sgbdit.title'),
      description: t('services.sgbdit.desc'),
      gradient: 'from-purple-500 to-primary-600'
    },
    {
      icon: Wind,
      title: t('services.renewable.title'),
      description: t('services.renewable.desc'),
      gradient: 'from-accent-500 to-red-500'
    },
  ];

  return (
    <section id="servicos" className="section-container section-container-mobile bg-white">
      <div className="content-container content-container-responsive flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header centralizado */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-6 py-2.5 bg-accent-100 text-accent-700 
                          rounded-full font-medium text-sm mb-8 border border-accent-200">
              <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
              Nossos Serviços
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-800 mb-6">
              {t('services.title')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed">
                {t('services.subtitle')}
              </p>
            </div>
          </div>

          {/* Grid de serviços centralizado e otimizado */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative w-full max-w-sm bg-white/90 backdrop-blur-md border border-neutral-200/50 
                           rounded-2xl p-8 hover:scale-105 hover:shadow-xl hover:border-primary-200
                           transition-all duration-300 text-center"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Ícone destacado */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 
                                 bg-gradient-to-br ${service.gradient} shadow-lg 
                                 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 group-hover:text-primary-600 
                               transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Efeito hover sutil */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-accent-500/5 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action centralizado */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6">
              <p className="text-lg text-neutral-700 font-medium">
                Precisa de uma solução personalizada?
              </p>
              <a
                href="#contato"
                className="btn-primary inline-flex items-center space-x-2 text-base"
              >
                <span>Solicitar Orçamento</span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
