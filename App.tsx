import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Welcome } from './components/Welcome';
import { Customized } from './components/Customized';
import { BentoGrid } from './components/BentoGrid';
import { Solutions } from './components/Solutions';
import { Mission } from './components/Mission';
import { Careers } from './components/Careers';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { LanguageProvider } from './utils/i18n';

function AppContent() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} isDark={isDark} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-sinai-teal/20 selection:text-sinai-teal transition-colors duration-300"
          >
            <Header isDark={isDark} toggleTheme={toggleTheme} />

            <main>
              <Hero />
              <Welcome />
              <Customized />
              <BentoGrid />
              <Solutions />
              <Mission />
              <Careers />
            </main>

            <Footer />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
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