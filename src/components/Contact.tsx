import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { ContactForm } from '../types';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email'),
      info: 'contato@nexoestudos.com.br',
      link: 'mailto:contato@nexoestudos.com.br',
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      info: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      title: t('contact.info.location'),
      info: 'São Paulo, Brasil',
      link: '#',
    },
  ];

  return (
    <section id="contato" className="section-full-height relative overflow-hidden">
      {/* Background elegante com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900"></div>
      
      {/* Padrão geométrico sutil */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
           }}>
      </div>

      {/* Efeitos de luz elegantes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="container-max relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-md 
                        text-white/90 rounded-full font-medium text-sm mb-6 border border-white/20">
            <span className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
            Entre em contato
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informações de contato */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-white mb-8">
              {t('contact.lets.talk')}
            </h3>
            
            <p className="text-neutral-200 text-lg mb-10 leading-relaxed">
              {t('contact.description')}
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="group flex items-center p-6 bg-white/10 backdrop-blur-md 
                           rounded-2xl hover:bg-white/20 transition-all duration-300 
                           border border-white/20 hover:border-white/30 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-4 rounded-xl mr-6 
                                group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-neutral-300 text-sm font-medium">{item.title}</div>
                    <div className="text-white font-semibold text-lg">{item.info}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Informações adicionais elegantes */}
            <div className="mt-10 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <h4 className="text-white font-semibold mb-3">Horário de Atendimento</h4>
              <div className="text-neutral-300 text-sm space-y-1">
                <div>Segunda à Sexta: 08:00 - 18:00</div>
                <div>Sábado: 08:00 - 12:00</div>
                <div className="text-accent-300 font-medium">Plantão 24h para emergências</div>
              </div>
            </div>
          </div>

          {/* Formulário elegante */}
          <div className="animate-slide-in-right">
            <div className="card-elegant p-8 bg-white/95 backdrop-blur-md border border-white/20">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-neutral-800 mb-2">Solicite seu Orçamento</h4>
                <p className="text-neutral-600">Preencha o formulário e nossa equipe entrará em contato</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-3">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-neutral-300 rounded-xl 
                             focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 
                             transition-all duration-300 bg-white/80 backdrop-blur-sm
                             hover:border-primary-400"
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-3">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-neutral-300 rounded-xl 
                             focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 
                             transition-all duration-300 bg-white/80 backdrop-blur-sm
                             hover:border-primary-400"
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-3">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-neutral-300 rounded-xl 
                             focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 
                             transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm
                             hover:border-primary-400"
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>

                {/* Checkbox de concordância */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agree"
                    required
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  />
                  <label htmlFor="agree" className="text-xs text-neutral-600 leading-relaxed">
                    Concordo com o processamento dos meus dados pessoais de acordo com a 
                    <a href="#" className="text-primary-600 hover:text-primary-700 font-medium"> Política de Privacidade</a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 
                           hover:from-primary-700 hover:to-primary-800 disabled:from-neutral-400 
                           disabled:to-neutral-500 text-white font-semibold py-4 px-6 rounded-xl 
                           transition-all duration-300 flex items-center justify-center 
                           shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-0.5
                           disabled:transform-none disabled:hover:shadow-elegant"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-3" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>

                {isSubmitted && (
                  <div className="flex items-center justify-center text-emerald-600 font-medium 
                                bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-xl 
                                border border-emerald-200 animate-fade-in">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {t('contact.form.success')}
                  </div>
                )}
              </form>

              {/* Informação adicional */}
              <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-200">
                <div className="flex items-center text-primary-700 text-sm">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                  <span className="font-medium">Resposta em até 2 horas úteis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer da seção de contato */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center space-x-8 text-neutral-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
              <span className="text-sm">Atendimento personalizado</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span className="text-sm">Orçamento sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-sm">Resposta rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
