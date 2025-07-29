import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="hero-container hero-container-mobile">
      {/* Background com overlay elegante */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-secondary-900/90 z-10"></div>
        <div className="absolute inset-0 opacity-5 z-5" 
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

      <div className="hero-content-container hero-content-responsive">
        <div className="max-w-5xl mx-auto text-left">
          <div className="mb-4">
            <div className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-md 
                          rounded-full border border-white/20 text-white/90 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
              Sistema Interligado Nacional
            </div>
          </div>
          
          {/* Título com largura justificada visualmente - tamanho ligeiramente menor */}
          <div className="mb-4 lg:mb-6 animate-slide-up">
            <h1 className="font-bold text-white leading-tight">
              {/* Linha 1 */}
              <div className="text-3xl sm:text-4xl lg:text-6xl tracking-wide">
                Somos uma consultoria de
              </div>
              
              {/* Linha 2 - ESTUDOS ELÉTRICOS em destaque */}
              <div className="text-3xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent font-black tracking-wider">
                ESTUDOS ELÉTRICOS,
              </div>
              
              {/* Linha 3 */}
              <div className="text-3xl sm:text-4xl lg:text-6xl tracking-widest">
                orgulhosamente brasileira
              </div>
            </h1>
          </div>
          
          {/* Parágrafo alinhado à esquerda do título - texto menor */}
          <div className="text-left max-w-4xl">
            <p className="text-sm sm:text-base lg:text-lg text-neutral-200 mb-6 lg:mb-8 leading-relaxed animate-slide-up" 
               style={{animationDelay: '0.2s'}}>
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a
              href="#contato"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-accent-500 to-accent-600 
                       hover:from-accent-600 hover:to-accent-700 text-white font-semibold py-3 px-6 
                       rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl 
                       transform hover:-translate-y-0.5 text-sm"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <button className="group inline-flex items-center justify-center px-6 py-3 
                             bg-white/10 backdrop-blur-md border-2 border-white/30 text-white 
                             font-semibold rounded-lg hover:bg-white hover:text-primary-900 
                             transition-all duration-300 shadow-lg hover:shadow-xl text-sm">
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              {t('hero.video')}
            </button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll compacto */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-0.5 h-2 bg-white/70 rounded-full mt-1.5"></div>
        </div>
      </div>

      {/* Efeitos de luz reduzidos */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default Hero;
