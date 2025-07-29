import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt-br' | 'en-us' | 'es-es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  'pt-br': {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Quem Somos',
    'nav.services': 'Serviços',
    'nav.differentials': 'Diferenciais',
    'nav.contact': 'Contato',
    'nav.login': 'Login',
    'nav.language': 'Idioma',
    
    // Hero
    'hero.title': 'Somos uma consultoria de',
    'hero.title.highlight': 'estudos elétricos',
    'hero.title.end': ', orgulhosamente brasileira',
    'hero.subtitle': 'Especializada no Sistema Interligado Nacional, entendemos a necessidade de elaboração de estudos elétricos com viés prático, customizados para cada aplicação e embasados em modelos apropriados e tecnicamente consistentes.',
    'hero.cta': 'Solicite seu Estudo',
    'hero.video': 'Conheça nossa história',
    
    // About
    'about.title': 'Quem Somos',
    'about.subtitle': 'A Nexo Estudos Elétricos é uma empresa brasileira de consultoria especializada em estudos elétricos para o Sistema Interligado Nacional.',
    'about.excellence.title': 'Excelência em Estudos Elétricos',
    'about.excellence.desc1': 'Nossa empresa nasceu da necessidade do mercado de ter uma consultoria que combine rigor técnico com agilidade operacional. Desenvolvemos estudos customizados, sempre com foco na aplicação prática e fundamentados em modelos tecnicamente consistentes.',
    'about.excellence.desc2': 'Com atuação nacional, nosso time de especialistas possui vasta experiência no Sistema Interligado Nacional, garantindo que cada projeto seja desenvolvido com a qualidade e confiabilidade que nossos clientes merecem.',
    'about.stats.experience': 'Anos de Experiência',
    'about.stats.projects': 'Projetos Realizados',
    'about.stats.coverage': 'Nacional',
    'about.stats.approval': 'Taxa de Aprovação',
    'about.badge.quality': 'Qualidade',
    'about.badge.reliability': 'Confiabilidade',
    'about.badge.agility': 'Agilidade',
    
    // Services
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Soluções completas em estudos elétricos para o Sistema Interligado Nacional',
    'services.basic.title': 'Projetos Básicos',
    'services.basic.desc': 'Estudos associados ao Projeto Básico de Empreendimentos da Rede Básica, solicitados pelo ONS',
    'services.access.title': 'Estudos de Acesso',
    'services.access.desc': 'Estudos para emissão de Parecer de Acesso para integração à Rede Básica ou Distribuição',
    'services.preop.title': 'Pré-operacionais',
    'services.preop.desc': 'Estudos para integração de instalações à Rede Básica na fase pré-operacional',
    'services.r2.title': 'Relatórios R2',
    'services.r2.desc': 'Estudos para emissão dos relatórios técnicos referentes às novas instalações',
    'services.sgbdit.title': 'Cadastramento SGBDIT',
    'services.sgbdit.desc': 'Cadastramento de equipamentos de pátio e sistemas de proteção no ONS',
    'services.renewable.title': 'Usinas Renováveis',
    'services.renewable.desc': 'Modelagem para estudos de transitórios eletromagnéticos e eletromecânicos',
    'services.specialized.title': 'Serviços Especializados',
    'services.analysis.desc': 'Análise de Ocorrências: Diagnóstico e solução de problemas no sistema elétrico',
    'services.cta': 'Solicite um Orçamento',
    'services.stats.approval': 'Taxa de Aprovação',
    'services.stats.projects': 'Projetos Entregues',
    'services.stats.experience': 'Anos Experiência',
    
    // Differentials
    'differentials.title': 'Nossos Diferenciais',
    'differentials.subtitle': 'Conheça os pilares que fundamentam nossa atuação e nos tornam referência no mercado de estudos elétricos.',
    'differentials.mission.title': 'MISSÃO',
    'differentials.mission.desc': 'Fornecer estudos elétricos de excelência técnica, com foco na aplicação prática e customizados para cada necessidade específica do cliente.',
    'differentials.vision.title': 'VISÃO',
    'differentials.vision.desc': 'Ser a consultoria de referência nacional em estudos elétricos para o Sistema Interligado Nacional, reconhecida pela qualidade e inovação.',
    'differentials.values.title': 'VALORES',
    'differentials.values.desc': 'Qualidade técnica, confiabilidade, agilidade, transparência e compromisso com a excelência em todos os nossos projetos.',
    'differentials.why.title': 'Por que escolher a Nexo?',
    'differentials.quality': 'Qualidade',
    'differentials.quality.desc': 'Rigor técnico em todos os estudos',
    'differentials.reliability': 'Confiabilidade',
    'differentials.reliability.desc': 'Resultados consistentes e precisos',
    'differentials.agility': 'Agilidade',
    'differentials.agility.desc': 'Prazos otimizados sem perder qualidade',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Pronto para iniciar seu projeto? Entre em contato conosco e solicite seu estudo personalizado.',
    'contact.lets.talk': 'Vamos Conversar',
    'contact.description': 'Nossa equipe está pronta para atender suas necessidades de estudos elétricos. Entre em contato e descubra como podemos ajudar seu projeto.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telefone',
    'contact.info.location': 'Localização',
    'contact.form.name': 'Nome Completo',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensagem',
    'contact.form.name.placeholder': 'Seu nome completo',
    'contact.form.email.placeholder': 'seu.email@exemplo.com',
    'contact.form.message.placeholder': 'Descreva seu projeto e suas necessidades...',
    'contact.form.submit': 'Solicitar Estudo',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Mensagem enviada com sucesso!',
    'contact.support.text': 'Problemas para acessar? Entre em contato conosco',
    
    // Login
    'login.title': 'Login',
    'login.subtitle': 'Acesse sua conta para gerenciar seus projetos',
    'login.form.username': 'Usuário ou Email',
    'login.form.password': 'Senha',
    'login.form.remember': 'Lembrar de mim',
    'login.form.forgot': 'Esqueceu a senha?',
    'login.form.submit': 'Entrar',
    'login.form.register': 'Não tem conta? Cadastre-se',
    'login.back': 'Voltar ao site',
    'login.support.text': 'Problemas para acessar? Entre em contato conosco',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.languages': 'Idiomas',
    'footer.description': 'Consultoria brasileira especializada em estudos elétricos para o Sistema Interligado Nacional. Qualidade, confiabilidade e agilidade em cada projeto.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.cookies': 'Cookies',
    'footer.rights': 'Todos os direitos reservados.',
  },
  'en-us': {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.differentials': 'Differentials',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.language': 'Language',
    
    // Hero
    'hero.title': 'We are an',
    'hero.title.highlight': 'electrical studies',
    'hero.title.end': ' consultancy, proudly Brazilian',
    'hero.subtitle': 'Specialized in the National Interconnected System, we understand the need for electrical studies with a practical approach, customized for each application and based on appropriate and technically consistent models.',
    'hero.cta': 'Request Your Study',
    'hero.video': 'Know our story',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Nexo Electrical Studies is a Brazilian consulting company specialized in electrical studies for the National Interconnected System.',
    'about.excellence.title': 'Excellence in Electrical Studies',
    'about.excellence.desc1': 'Our company was born from the market\'s need to have a consultancy that combines technical rigor with operational agility. We develop customized studies, always focusing on practical application and based on technically consistent models.',
    'about.excellence.desc2': 'With national coverage, our team of specialists has extensive experience in the National Interconnected System, ensuring that each project is developed with the quality and reliability our clients deserve.',
    'about.stats.experience': 'Years of Experience',
    'about.stats.projects': 'Projects Completed',
    'about.stats.coverage': 'National',
    'about.stats.approval': 'Approval Rate',
    'about.badge.quality': 'Quality',
    'about.badge.reliability': 'Reliability',
    'about.badge.agility': 'Agility',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete solutions in electrical studies for the National Interconnected System',
    'services.basic.title': 'Basic Projects',
    'services.basic.desc': 'Studies associated with the Basic Project of Basic Network Enterprises, requested by ONS',
    'services.access.title': 'Access Studies',
    'services.access.desc': 'Studies for issuing Access Opinion for integration to the Basic Network or Distribution',
    'services.preop.title': 'Pre-operational',
    'services.preop.desc': 'Studies for integration of facilities to the Basic Network in the pre-operational phase',
    'services.r2.title': 'R2 Reports',
    'services.r2.desc': 'Studies for issuing technical reports regarding new installations',
    'services.sgbdit.title': 'SGBDIT Registration',
    'services.sgbdit.desc': 'Registration of yard equipment and protection systems at ONS',
    'services.renewable.title': 'Renewable Plants',
    'services.renewable.desc': 'Modeling for electromagnetic and electromechanical transient studies',
    'services.specialized.title': 'Specialized Services',
    'services.analysis.desc': 'Occurrence Analysis: Diagnosis and solution of electrical system problems',
    'services.cta': 'Request a Quote',
    'services.stats.approval': 'Approval Rate',
    'services.stats.projects': 'Projects Delivered',
    'services.stats.experience': 'Years Experience',
    
    // Differentials
    'differentials.title': 'Our Differentials',
    'differentials.subtitle': 'Learn about the pillars that support our work and make us a reference in the electrical studies market.',
    'differentials.mission.title': 'MISSION',
    'differentials.mission.desc': 'Provide electrical studies of technical excellence, with focus on practical application and customized for each specific client need.',
    'differentials.vision.title': 'VISION',
    'differentials.vision.desc': 'To be the national reference consultancy in electrical studies for the National Interconnected System, recognized for quality and innovation.',
    'differentials.values.title': 'VALUES',
    'differentials.values.desc': 'Technical quality, reliability, agility, transparency and commitment to excellence in all our projects.',
    'differentials.why.title': 'Why choose Nexo?',
    'differentials.quality': 'Quality',
    'differentials.quality.desc': 'Technical rigor in all studies',
    'differentials.reliability': 'Reliability',
    'differentials.reliability.desc': 'Consistent and precise results',
    'differentials.agility': 'Agility',
    'differentials.agility.desc': 'Optimized deadlines without losing quality',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start your project? Contact us and request your customized study.',
    'contact.lets.talk': 'Let\'s Talk',
    'contact.description': 'Our team is ready to meet your electrical studies needs. Contact us and discover how we can help your project.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.message.placeholder': 'Describe your project and your needs...',
    'contact.form.submit': 'Request Study',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.support.text': 'Having trouble accessing? Contact us',
    
    // Login
    'login.title': 'Login',
    'login.subtitle': 'Access your account to manage your projects',
    'login.form.username': 'Username or Email',
    'login.form.password': 'Password',
    'login.form.remember': 'Remember me',
    'login.form.forgot': 'Forgot password?',
    'login.form.submit': 'Sign In',
    'login.form.register': 'Don\'t have an account? Sign up',
    'login.back': 'Back to website',
    'login.support.text': 'Having trouble accessing? Contact us',
    
    // Footer
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.languages': 'Languages',
    'footer.description': 'Brazilian consultancy specialized in electrical studies for the National Interconnected System. Quality, reliability and agility in every project.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.cookies': 'Cookies',
    'footer.rights': 'All rights reserved.',
  },
  'es-es': {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Quiénes Somos',
    'nav.services': 'Servicios',
    'nav.differentials': 'Diferenciales',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar Sesión',
    'nav.language': 'Idioma',
    
    // Hero
    'hero.title': 'Somos una consultoría de',
    'hero.title.highlight': 'estudios eléctricos',
    'hero.title.end': ', orgullosamente brasileña',
    'hero.subtitle': 'Especializada en el Sistema Interconectado Nacional, entendemos la necesidad de elaborar estudios eléctricos con enfoque práctico, personalizados para cada aplicación y basados en modelos apropiados y técnicamente consistentes.',
    'hero.cta': 'Solicite su Estudio',
    'hero.video': 'Conozca nuestra historia',
    
    // About  
    'about.title': 'Quiénes Somos',
    'about.subtitle': 'Nexo Estudios Eléctricos es una empresa brasileña de consultoría especializada en estudios eléctricos para el Sistema Interconectado Nacional.',
    'about.excellence.title': 'Excelencia en Estudios Eléctricos',
    'about.excellence.desc1': 'Nuestra empresa nació de la necesidad del mercado de tener una consultoría que combine rigor técnico con agilidad operacional. Desarrollamos estudios personalizados, siempre con enfoque en la aplicación práctica y fundamentados en modelos técnicamente consistentes.',
    'about.excellence.desc2': 'Con cobertura nacional, nuestro equipo de especialistas posee vasta experiencia en el Sistema Interconectado Nacional, garantizando que cada proyecto sea desarrollado con la calidad y confiabilidad que nuestros clientes merecen.',
    'about.stats.experience': 'Años de Experiencia',
    'about.stats.projects': 'Proyectos Realizados',
    'about.stats.coverage': 'Nacional',
    'about.stats.approval': 'Tasa de Aprobación',
    'about.badge.quality': 'Calidad',
    'about.badge.reliability': 'Confiabilidad',
    'about.badge.agility': 'Agilidad',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones completas en estudios eléctricos para el Sistema Interconectado Nacional',
    'services.basic.title': 'Proyectos Básicos',
    'services.basic.desc': 'Estudios asociados al Proyecto Básico de Emprendimientos de la Red Básica, solicitados por ONS',
    'services.access.title': 'Estudios de Acceso',
    'services.access.desc': 'Estudios para emisión de Dictamen de Acceso para integración a la Red Básica o Distribución',
    'services.preop.title': 'Pre-operacionales',
    'services.preop.desc': 'Estudios para integración de instalaciones a la Red Básica en la fase pre-operacional',
    'services.r2.title': 'Informes R2',
    'services.r2.desc': 'Estudios para emisión de informes técnicos referentes a las nuevas instalaciones',
    'services.sgbdit.title': 'Registro SGBDIT',
    'services.sgbdit.desc': 'Registro de equipos de patio y sistemas de protección en ONS',
    'services.renewable.title': 'Plantas Renovables',
    'services.renewable.desc': 'Modelado para estudios de transitorios electromagnéticos y electromecánicos',
    'services.specialized.title': 'Servicios Especializados',
    'services.analysis.desc': 'Análisis de Ocurrencias: Diagnóstico y solución de problemas del sistema eléctrico',
    'services.cta': 'Solicite un Presupuesto',
    'services.stats.approval': 'Tasa de Aprobación',
    'services.stats.projects': 'Proyectos Entregados',
    'services.stats.experience': 'Años Experiencia',
    
    // Differentials
    'differentials.title': 'Nuestros Diferenciales',
    'differentials.subtitle': 'Conozca los pilares que fundamentan nuestra actuación y nos convierten en referencia en el mercado de estudios eléctricos.',
    'differentials.mission.title': 'MISIÓN',
    'differentials.mission.desc': 'Proporcionar estudios eléctricos de excelencia técnica, con enfoque en la aplicación práctica y personalizados para cada necesidad específica del cliente.',
    'differentials.vision.title': 'VISIÓN',
    'differentials.vision.desc': 'Ser la consultoría de referencia nacional en estudios eléctricos para el Sistema Interconectado Nacional, reconocida por la calidad e innovación.',
    'differentials.values.title': 'VALORES',
    'differentials.values.desc': 'Calidad técnica, confiabilidad, agilidad, transparencia y compromiso con la excelencia en todos nuestros proyectos.',
    'differentials.why.title': '¿Por qué elegir Nexo?',
    'differentials.quality': 'Calidad',
    'differentials.quality.desc': 'Rigor técnico en todos los estudios',
    'differentials.reliability': 'Confiabilidad',
    'differentials.reliability.desc': 'Resultados consistentes y precisos',
    'differentials.agility': 'Agilidad',
    'differentials.agility.desc': 'Plazos optimizados sin perder calidad',
    
    // Contact
    'contact.title': 'Contáctanos',
    'contact.subtitle': '¿Listo para iniciar su proyecto? Contáctenos y solicite su estudio personalizado.',
    'contact.lets.talk': 'Hablemos',
    'contact.description': 'Nuestro equipo está listo para atender sus necesidades de estudios eléctricos. Contáctenos y descubra cómo podemos ayudar su proyecto.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Teléfono',
    'contact.info.location': 'Ubicación',
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensaje',
    'contact.form.name.placeholder': 'Su nombre completo',
    'contact.form.email.placeholder': 'su.email@ejemplo.com',
    'contact.form.message.placeholder': 'Describa su proyecto y sus necesidades...',
    'contact.form.submit': 'Solicitar Estudio',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Mensaje enviado con éxito!',
    'contact.support.text': '¿Problemas para acceder? Contáctenos',
    
    // Login
    'login.title': 'Iniciar Sesión',
    'login.subtitle': 'Accede a tu cuenta para gestionar tus proyectos',
    'login.form.username': 'Usuario o Email',
    'login.form.password': 'Contraseña',
    'login.form.remember': 'Recordarme',
    'login.form.forgot': '¿Olvidaste la contraseña?',
    'login.form.submit': 'Ingresar',
    'login.form.register': '¿No tienes cuenta? Regístrate',
    'login.back': 'Volver al sitio',
    'login.support.text': '¿Problemas para acceder? Contáctenos',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.languages': 'Idiomas',
    'footer.description': 'Consultoría brasileña especializada en estudios eléctricos para el Sistema Interconectado Nacional. Calidad, confiabilidad y agilidad en cada proyecto.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Uso',
    'footer.cookies': 'Cookies',
    'footer.rights': 'Todos los derechos reservados.',
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('nexo-language');
    return (saved as Language) || 'pt-br';
  });

  useEffect(() => {
    localStorage.setItem('nexo-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
