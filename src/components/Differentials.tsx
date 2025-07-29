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
    <section id="diferenciais" className="section-full-height bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {t('differentials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('differentials.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                item.color === 'primary' ? 'bg-primary-100' : 'bg-accent-100'
              } group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`h-10 w-10 ${
                  item.color === 'primary' ? 'text-primary-600' : 'text-accent-600'
                }`} />
              </div>
              
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary-900 mb-6">
              {t('differentials.why.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-accent-500 mb-2">{t('differentials.quality')}</div>
                <p className="text-gray-600">{t('differentials.quality.desc')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-500 mb-2">{t('differentials.reliability')}</div>
                <p className="text-gray-600">{t('differentials.reliability.desc')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-500 mb-2">{t('differentials.agility')}</div>
                <p className="text-gray-600">{t('differentials.agility.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
