import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useLanguage } from '../utils/i18n';
import medicalSupport from '../assets/MedicalSupport.png';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-sinai-surface dark:bg-slate-950 transition-colors duration-300">
      {/* Animated Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] rtl:right-auto rtl:left-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-sinai-teal/20 dark:from-sinai-teal/10 to-transparent rounded-full blur-[100px] opacity-60"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] rtl:left-auto rtl:right-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-sinai-coral/15 dark:from-sinai-coral/10 to-transparent rounded-full blur-[100px] opacity-50"
        />
        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-10 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Text Content */}
        <div className="max-w-2xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="h-[1px] w-8 bg-sinai-teal dark:bg-sinai-tealLight"></div>
            <span className="text-sinai-teal dark:text-sinai-tealLight font-bold uppercase tracking-widest text-xs">{t.hero.tag}</span>
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-4"
          >
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-slate-700 dark:text-slate-300">
              {t.hero.welcome}
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display font-bold text-6xl md:text-8xl leading-[0.95] text-slate-900 dark:text-white mb-8 tracking-tight"
          >
            {t.hero.headlineStart} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-coral to-orange-400">
              {t.hero.headlineEnd}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg border-s-2 border-slate-200 dark:border-slate-800 ps-6"
          >
            {t.hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <MagneticButton
              onClick={scrollToContact}
              className="bg-sinai-teal text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-sinai-teal/20 hover:shadow-2xl hover:shadow-sinai-teal/30 transition-all flex items-center gap-3"
            >
              {t.hero.cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
            </MagneticButton>

            <button
              onClick={scrollToServices}
              className="text-slate-500 dark:text-slate-400 font-medium hover:text-sinai-coral dark:hover:text-sinai-coral transition-colors flex items-center gap-3 group px-6 py-4 rounded-full hover:bg-white/50 dark:hover:bg-slate-800/50"
            >
              <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:border-sinai-coral/30 group-hover:bg-sinai-coral/5 transition-colors shadow-sm">
                <Activity className="w-4 h-4 group-hover:text-sinai-coral transition-colors" />
              </div>
              {t.hero.services}
            </button>
          </motion.div>
        </div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 group transition-colors duration-300">
            <img
              src={medicalSupport}
              alt="Medical & Clinic Support Services"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sinai-teal/90 via-transparent to-transparent opacity-60" />

            {/* Floating Stat Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-10 left-10 right-10"
            >
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/40 dark:border-slate-700/50 flex items-center justify-between transition-colors duration-300">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white leading-tight text-lg">{t.hero.statLabel}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.hero.statSub}</p>
                </div>
                <div className="text-3xl font-bold text-sinai-coral">98%</div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-sinai-coral rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sinai-teal rounded-full blur-3xl opacity-20" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 dark:from-slate-600 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [-20, 40] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-sinai-teal absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
};