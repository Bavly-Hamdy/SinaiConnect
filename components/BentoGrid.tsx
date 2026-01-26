import React from 'react';
import { motion } from 'framer-motion';
import { Globe, FileText, CheckCircle2, TrendingUp, ShieldCheck, Heart, UserCheck, ArrowUpRight, Star, Sparkles } from 'lucide-react';
import { useLanguage } from '../utils/i18n';

const Card: React.FC<{ text: string; icon: any; index: number }> = ({ text, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -8 }}
    className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/30 transition-all duration-300 flex flex-col gap-4 overflow-hidden hover:border-sinai-teal/30 dark:hover:border-sinai-teal/30"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-sinai-teal/5 dark:bg-sinai-teal/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500 rtl:right-auto rtl:left-0 rtl:rounded-bl-none rtl:rounded-br-full rtl:-ml-10" />

    <div className="w-14 h-14 rounded-2xl bg-sinai-teal/10 dark:bg-sinai-teal/20 flex items-center justify-center shrink-0 group-hover:bg-sinai-teal transition-colors duration-300 relative z-10">
      <Icon className="w-7 h-7 text-sinai-teal dark:text-sinai-tealLight group-hover:text-white transition-colors duration-300" />
    </div>

    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-lg relative z-10">
      {text}
    </p>

    {/* Decorative line */}
    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="flex items-center text-xs font-bold text-sinai-teal dark:text-sinai-tealLight uppercase tracking-widest gap-2">
        <span className="w-8 h-px bg-sinai-teal/50" />
        Sinai Benefit
      </div>
    </div>
  </motion.div>
);

export const BentoGrid: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Star, Globe, FileText, TrendingUp, ShieldCheck, UserCheck, Heart];

  const benefits = t.why.cards.map((text, i) => ({
    text,
    icon: icons[i % icons.length]
  }));

  return (
    <section id="why-partner" className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sinai-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-sinai-coral/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '32px 32px' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-sinai-coral animate-pulse" />
            <span className="text-xs font-bold tracking-wide uppercase text-slate-600 dark:text-slate-300">
              {t.why.tag}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6 leading-tight"
          >
            {t.why.title} <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-teal to-sinai-tealLight">Sinai Connect?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed"
          >
            {t.why.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              text={benefit.text}
              icon={benefit.icon}
              index={index}
            />
          ))}

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-slate-900 dark:bg-sinai-teal rounded-3xl p-10 flex flex-col justify-center items-center text-center text-white lg:col-span-2 shadow-2xl shadow-slate-900/20 dark:shadow-sinai-teal/20 relative overflow-hidden group"
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sinai-teal via-slate-900 to-sinai-coral opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 ring-1 ring-white/20">
                <Sparkles className="w-8 h-8 text-sinai-coral" />
              </div>

              <h3 className="text-3xl font-display font-bold mb-4">{t.why.ctaTitle}</h3>
              <p className="opacity-90 mb-8 text-lg max-w-lg leading-relaxed">{t.why.ctaDesc}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-white/10 transition-all shadow-lg flex items-center gap-3 group/btn"
              >
                {t.why.ctaButton}
                <div className="p-1 bg-slate-900 rounded-full text-white group-hover/btn:bg-sinai-teal transition-colors">
                  <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};