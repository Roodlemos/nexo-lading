import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background com overlay elegante */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-secondary-900/90 z-10"></div>
        {/* Padrão geométrico sutil no fundo */}
        <div className="absolute inset-0 opacity-10 z-5" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}>
        </div>
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Sistema elétrico"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-max relative z-20">
        <div className="max-w-5xl">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md 
                          rounded-full border border-white/20 text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
              Sistema Interligado Nacional
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
            {t('hero.title')}{' '}
            <span className="text-gradient bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
              {t('hero.title.highlight')}
            </span>
            {t('hero.title.end')}
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-200 mb-10 leading-relaxed animate-slide-up max-w-4xl" 
             style={{animationDelay: '0.2s'}}>
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a
              href="#contato"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-accent-500 to-accent-600 
                       hover:from-accent-600 hover:to-accent-700 text-white font-semibold py-4 px-8 
                       rounded-xl transition-all duration-300 shadow-elegant-lg hover:shadow-2xl 
                       transform hover:-translate-y-1"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <button className="group inline-flex items-center justify-center px-8 py-4 
                             bg-white/10 backdrop-blur-md border-2 border-white/30 text-white 
                             font-semibold rounded-xl hover:bg-white hover:text-primary-900 
                             transition-all duration-300 shadow-elegant hover:shadow-elegant-lg">
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              {t('hero.video')}
            </button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll elegante */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>

      {/* Efeitos de luz elegantes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;
