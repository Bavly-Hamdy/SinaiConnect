import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Solutions } from './components/Solutions';
import { Mission } from './components/Mission';
import { Careers } from './components/Careers';
import { Footer } from './components/Footer';
import { LanguageProvider } from './utils/i18n';

function AppContent() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-sinai-teal/20 selection:text-sinai-teal transition-colors duration-300">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <BentoGrid />
        <Solutions />
        <Mission />
        <Careers />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;