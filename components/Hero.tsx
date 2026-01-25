import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Users } from 'lucide-react';
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

  // Staggered animation variants for text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const // Custom refined easing
      }
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-br from-sinai-teal/15 via-sinai-teal/5 to-transparent rounded-full blur-[120px] opacity-70 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-15%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-sinai-coral/15 via-orange-300/10 to-transparent rounded-full blur-[100px] opacity-60 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen"
        />
        {/* Subtle Grain Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 dark:opacity-20 mix-blend-soft-light" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">

        {/* Text Content */}
        <div className="max-w-3xl relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-start"
          >
            {/* Tag / Badge */}
            <motion.div variants={itemVariants} className="mb-6 inline-flex">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-sinai-teal/10 dark:bg-sinai-teal/20 border border-sinai-teal/20 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-sinai-teal" />
                <span className="text-sinai-teal dark:text-sinai-tealLight font-bold uppercase tracking-wider text-[11px] md:text-xs">
                  {t.hero.tag}
                </span>
              </div>
            </motion.div>

            {/* Welcome Message */}
            <motion.div variants={itemVariants} className="mb-4 flex items-center gap-3">
              <div className="h-[2px] w-8 md:w-12 bg-gradient-to-r from-sinai-teal to-transparent rounded-full" />
              <span className="font-sans text-lg md:text-xl font-bold uppercase tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-sinai-teal to-sinai-coral dark:from-sinai-tealLight dark:to-sinai-coral">
                {t.hero.welcome}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="relative mb-6">
              <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] md:leading-[1] text-slate-900 dark:text-white tracking-tight">
                {t.hero.headlineStart}{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sinai-coral to-orange-500 pb-2">
                  {t.hero.headlineEnd}
                  {/* Underline decoration */}
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-sinai-coral opacity-40" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 5.51354 150.001 -2.53676 195 2.05374" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </h1>
            </motion.div>

            {/* Subheadline/Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300/90 mb-10 leading-relaxed max-w-lg"
            >
              {t.hero.subhead}
            </motion.p>

            {/* Use to Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 w-full sm:w-auto">
              <MagneticButton
                onClick={scrollToContact}
                className="bg-sinai-teal text-white px-8 py-4 rounded-full font-semibold text-lg shadow-[0_10px_40px_-10px_rgba(45,212,191,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(45,212,191,0.6)] transition-all flex items-center justify-center gap-3 min-w-[160px]"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
              </MagneticButton>

              <button
                onClick={scrollToServices}
                className="group flex items-center gap-3 px-6 py-4 rounded-full font-medium text-slate-600 dark:text-slate-300 hover:text-sinai-coral dark:hover:text-sinai-coral hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              >
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-5 h-5 text-slate-400 group-hover:text-sinai-coral transition-colors" />
                </div>
                <span>{t.hero.services}</span>
              </button>
            </motion.div>

            {/* Trust Indicator / Social Proof (Optional Addition) */}
            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px]">Img</div>
                <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px]">Img</div>
                <div className="w-8 h-8 rounded-full bg-slate-400 dark:bg-slate-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px]">Img</div>
              </div>
              <p>Trusted by <span className="text-slate-900 dark:text-white font-bold">Sinai's Best</span></p>
            </motion.div>
          </motion.div>
        </div>

        {/* Visual Content (Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 30 }}
          className="relative hidden lg:block h-full min-h-[500px]"
        >
          {/* Main Image Container */}
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sinai-teal/10 border-[6px] border-white/80 dark:border-slate-800/60 backdrop-blur-sm group z-20 transform hover:scale-[1.01] transition-all duration-500">
            <img
              src={medicalSupport}
              alt="Medical & Clinic Support Services"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            />
            {/* Gradient Overlay for text readability if needed, or just aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40" />

            {/* Floating Glass Card (Stat) */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-8 left-8 right-8 z-30"
            >
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/50 dark:border-slate-700/50 flex items-center justify-between hover:translate-y-[-5px] transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sinai-coral/10 flex items-center justify-center text-sinai-coral">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-white leading-tight">{t.hero.statLabel}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t.hero.statSub}</p>
                  </div>
                </div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-sinai-coral to-orange-500">98%</div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Back Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-sinai-teal/20 rounded-full blur-[80px] -z-10 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-sinai-coral/20 rounded-full blur-[80px] -z-10" />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] -left-12 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl z-30 border border-slate-100 dark:border-slate-700 rotate-[-5deg]"
          >
            <Activity className="w-8 h-8 text-sinai-teal" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 dark:text-slate-500 group-hover:text-sinai-teal transition-colors">Scroll</span>
        <div className="w-[24px] h-[40px] rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center p-1 group-hover:border-sinai-teal/50 transition-colors">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-sinai-teal"
          />
        </div>
      </motion.div>
    </section>
  );
};