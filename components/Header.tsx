import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage, flags, languageNames, Language } from '../utils/i18n';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

import logo from '../assets/logo.png';

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const { t, language, setLanguage } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: t.nav.welcome, href: '#welcome' },
    { name: t.nav.customized, href: '#customized' },
    { name: t.nav.whyUs, href: '#why-partner' },
    { name: t.nav.solutions, href: '#services' },
    { name: t.nav.mission, href: '#mission' },
    { name: t.nav.careers, href: '#careers' },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  // Scroll Spy Logic
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'welcome', 'customized', 'why-partner', 'services', 'mission', 'careers'];

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if top is near top of screen OR it takes up majority of viewport
          const isNearTop = rect.top <= 150 && rect.bottom >= 150;
          return isNearTop;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-3 shadow-lg shadow-slate-200/5 dark:shadow-black/20'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src={logo}
              alt="Sinai Connect Logo"
              className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-tight tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}>
                {t.brandName}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative text-sm font-medium transition-colors py-2 ${isActive
                    ? 'text-sinai-teal dark:text-sinai-tealLight'
                    : 'text-slate-600 dark:text-slate-300 hover:text-sinai-teal dark:hover:text-sinai-tealLight'
                    }`}
                >
                  {link.name}
                  {(hoveredLink === link.name || isActive) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-sinai-teal rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2" />

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                <img src={flags[language]} alt={languageNames[language]} className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                <span className="hidden lg:inline">{languageNames[language]}</span>
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden"
                  >
                    {(Object.keys(flags) as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${language === lang ? 'bg-sinai-teal/5 text-sinai-teal font-semibold' : 'text-slate-700 dark:text-slate-300'}`}
                      >
                        <img src={flags[lang]} alt={languageNames[lang]} className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                        <span>{languageNames[lang]}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 hover:text-sinai-coral hover:bg-slate-100 dark:text-slate-400 dark:hover:text-sinai-tealLight dark:hover:bg-slate-800 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center"
            >
              <img src={flags[language]} alt={languageNames[language]} className="w-6 h-4 object-cover rounded-sm shadow-sm" />
            </button>
            <button
              className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 z-40 overflow-hidden shadow-2xl md:hidden"
          >
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={link.href}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-lg font-medium text-slate-800 dark:text-slate-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-slate-400 rtl:rotate-180" />
                </motion.a>
              ))}

              <div className="grid grid-cols-4 gap-2 my-2">
                {(Object.keys(flags) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { handleLanguageChange(lang); }}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 ${language === lang ? 'border-sinai-teal bg-sinai-teal/10' : 'border-slate-200 dark:border-slate-700'}`}
                  >
                    <img src={flags[lang]} alt={languageNames[lang]} className="w-8 h-6 object-cover rounded-md shadow-sm" />
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300">{lang.toUpperCase()}</span>
                  </button>
                ))}
              </div>

              <hr className="border-slate-100 dark:border-slate-800 my-4" />

              {/* Theme Toggle in Mobile Menu */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </span>
                {isDark ? <Sun className="w-5 h-5 text-slate-600 dark:text-slate-300" /> : <Moon className="w-5 h-5 text-slate-600 dark:text-slate-300" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};