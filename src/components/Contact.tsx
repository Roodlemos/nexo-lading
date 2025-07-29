import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

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
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
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
    <section id="contato" className="section-container section-container-mobile">
      {/* Background elegante */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900"></div>
      
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
      </div>

      {/* Efeitos de luz */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl"></div>

      <div className="content-container content-container-responsive">
        {/* Header da seção */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-md 
                        text-white/90 rounded-full font-medium text-sm mb-6 border border-white/20">
            <span className="w-2 h-2 bg-accent-400 rounded-full mr-3 animate-pulse"></span>
            Entre em contato
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 px-4 sm:px-0">
            {t('contact.title')}
          </h2>
          <div className="content-padding-elegant">
            <p className="text-lg lg:text-xl text-neutral-200 max-w-4xl mx-auto text-compact">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>

        <div className="section-padding-elegant">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de contato */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-white mb-6 px-2 sm:px-0">
                {t('contact.lets.talk')}
              </h3>
              
              <div className="content-padding-elegant">
                <p className="text-neutral-200 text-base mb-8 text-compact">
                  {t('contact.description')}
                </p>
              </div>

              <div className="space-y-5 px-2 sm:px-0">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="group flex items-center p-6 bg-white/10 backdrop-blur-md 
                             rounded-lg hover:bg-white/20 transition-all duration-300 
                             border border-white/20 hover:border-white/30"
                  >
                    <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-3 rounded-lg mr-6 
                                  group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-neutral-300 text-sm font-medium">{item.title}</div>
                      <div className="text-white font-semibold text-base">{item.info}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Formulário */}
            <div className="animate-slide-up">
              <div className="card-compact bg-white/95 backdrop-blur-md border border-white/20 mx-2 sm:mx-0">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-neutral-800 mb-2">Solicite seu Orçamento</h4>
                  <p className="text-base text-neutral-600">Nossa equipe entrará em contato</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg 
                               focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 
                               transition-all duration-300 bg-white/80 backdrop-blur-sm text-base"
                      placeholder={t('contact.form.name.placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg 
                               focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 
                               transition-all duration-300 bg-white/80 backdrop-blur-sm text-base"
                      placeholder={t('contact.form.email.placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg 
                               focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 
                               transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm text-base"
                      placeholder={t('contact.form.message.placeholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 
                             hover:from-primary-700 hover:to-primary-800 disabled:from-neutral-400 
                             disabled:to-neutral-500 text-white font-semibold py-3 px-6 rounded-lg 
                             transition-all duration-300 flex items-center justify-center 
                             shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base"
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
                                  bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-lg 
                                  border border-emerald-200 animate-fade-in text-base">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      {t('contact.form.success')}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
