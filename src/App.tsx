import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Router from './components/Router';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <Router />
      </div>
    </LanguageProvider>
  );
};

export default App;
