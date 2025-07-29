import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Differentials: React.FC = () => {
  const { t } = useLanguage();
  
  const differentials = [
    {
      icon: Target,
      title: t('differentials.mission.title'),
      description: t('differentials.mission.desc'),
      color: 'primary',
    },
    {
      icon: Eye,
      title: t('differentials.vision.title'),
      description: t('differentials.vision.desc'),
      color: 'accent',
    },
    {
      icon: Heart,
      title: t('differentials.values.title'),
      description: t('differentials.values.desc'),
      color: 'primary',
    },
  ];

  return (
    <section id="diferenciais" className="section-container section-container-mobile bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="content-container content-container-responsive">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-800 mb-5 px-4 sm:px-0">
            {t('differentials.title')}
          </h2>
          <div className="content-padding-elegant">
            <p className="text-lg lg:text-xl text-neutral-600 max-w-4xl mx-auto text-compact">
              {t('differentials.subtitle')}
            </p>
          </div>
        </div>

        <div className="section-padding-elegant">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1 mx-2 sm:mx-0"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 ${
                  item.color === 'primary' ? 'bg-primary-100' : 'bg-accent-100'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-7 w-7 ${
                    item.color === 'primary' ? 'text-primary-600' : 'text-accent-600'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-neutral-800 mb-4">
                  {item.title}
                </h3>
                
                <div className="px-2 sm:px-0">
                  <p className="text-base text-neutral-600 text-compact line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6 px-4 sm:px-0">
                {t('differentials.why.title')}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="px-2 sm:px-0">
                  <div className="text-3xl font-bold text-accent-500 mb-2">{t('differentials.quality')}</div>
                  <p className="text-base text-neutral-600">{t('differentials.quality.desc')}</p>
                </div>
                <div className="px-2 sm:px-0">
                  <div className="text-3xl font-bold text-accent-500 mb-2">{t('differentials.reliability')}</div>
                  <p className="text-base text-neutral-600">{t('differentials.reliability.desc')}</p>
                </div>
                <div className="px-2 sm:px-0">
                  <div className="text-3xl font-bold text-accent-500 mb-2">{t('differentials.agility')}</div>
                  <p className="text-base text-neutral-600">{t('differentials.agility.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
