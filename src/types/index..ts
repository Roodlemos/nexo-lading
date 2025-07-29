export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export type Language = 'pt-br' | 'en-us' | 'es-es';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
