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
    <section id="servicos" className="section-full-height bg-white">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-6 py-2 bg-accent-100 text-accent-700 
                        rounded-full font-medium text-sm mb-6 border border-accent-200">
            <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative card-elegant p-8 hover:scale-105 transition-all duration-500 
                       border border-neutral-200/50 hover:border-primary-200"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Ícone com gradiente */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 
                             bg-gradient-to-br ${service.gradient} shadow-elegant 
                             group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-neutral-800 mb-4 group-hover:text-primary-600 
                           transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed">
                {service.description}
              </p>

              {/* Borda animada no hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                            group-hover:border-primary-200 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Seção especializada elegante */}
        <div className="relative mb-12">
          <div className="card-elegant p-8 bg-gradient-to-r from-primary-50 via-white to-accent-50 
                        border border-primary-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                  {t('services.specialized.title')}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {t('services.analysis.desc')}
                </p>
              </div>
              <div className="text-center md:text-right">
                <a
                  href="#contato"
                  className="btn-primary inline-block"
                >
                  {t('services.cta')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas elegantes */}
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { value: '99%', label: t('services.stats.approval'), color: 'primary' },
            { value: '200+', label: t('services.stats.projects'), color: 'accent' },
            { value: '10+', label: t('services.stats.experience'), color: 'primary' }
          ].map((stat, index) => (
            <div key={index} className="card-elegant p-6 group hover:scale-105 transition-all duration-300">
              <div className={`text-3xl font-bold mb-2 ${
                stat.color === 'primary' ? 'text-primary-600' : 'text-accent-500'
              }`}>
                {stat.value}
              </div>
              <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
