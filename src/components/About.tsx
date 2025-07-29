import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Award, value: '10+', label: t('about.stats.experience'), color: 'primary' },
    { icon: Users, value: '200+', label: t('about.stats.projects'), color: 'accent' },
    { icon: Globe, value: t('about.stats.coverage'), label: 'Atuação', color: 'primary' },
    { icon: TrendingUp, value: '99%', label: t('about.stats.approval'), color: 'accent' },
  ];

  return (
    <section id="quem-somos" className="section-full-height gradient-background">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-6 py-2 bg-primary-100 text-primary-700 
                        rounded-full font-medium text-sm mb-6 border border-primary-200">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Conheca nossa história
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8">
              {t('about.excellence.title')}
            </h3>
            
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              {t('about.excellence.desc1')}
            </p>

            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              {t('about.excellence.desc2')}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="card-elegant p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 
                                   ${stat.color === 'primary' 
                                     ? 'bg-gradient-to-br from-primary-500 to-primary-600' 
                                     : 'bg-gradient-to-br from-accent-500 to-accent-600'}`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-800 mb-1">{stat.value}</div>
                    <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Equipe Nexo"
                className="rounded-2xl shadow-elegant-lg"
              />
            </div>
            
            {/* Badge flutuante elegante */}
            <div className="absolute -bottom-8 -right-8 z-20">
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white p-6 
                            rounded-2xl shadow-elegant-lg border border-accent-400/20 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">{t('about.badge.quality')}</div>
                <div className="text-sm opacity-90">{t('about.badge.reliability')}</div>
                <div className="text-sm opacity-90">{t('about.badge.agility')}</div>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500/10 rounded-2xl -rotate-12"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-500/10 rounded-xl rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
