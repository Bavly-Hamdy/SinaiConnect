import React from 'react';
import { motion } from 'framer-motion';
import { Globe, FileText, CheckCircle2, TrendingUp, ShieldCheck, Heart, UserCheck, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../utils/i18n';

const Card: React.FC<{ text: string; icon: any; index: number }> = ({ text, icon: Icon, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(8, 145, 178, 0.1)" }}
        className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 flex flex-col gap-4 overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-sinai-teal/5 dark:bg-sinai-teal/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500 rtl:right-auto rtl:left-0 rtl:rounded-bl-none rtl:rounded-br-full rtl:-ml-10" />
        
        <div className="w-14 h-14 rounded-2xl bg-sinai-teal/10 dark:bg-sinai-teal/20 flex items-center justify-center shrink-0 group-hover:bg-sinai-teal transition-colors duration-300 relative z-10">
            <Icon className="w-7 h-7 text-sinai-teal dark:text-sinai-tealLight group-hover:text-white transition-colors duration-300" />
        </div>
        
        <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-lg relative z-10 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
            {text}
        </p>

        <div className="mt-auto flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 rtl:-translate-x-4 group-hover:translate-x-0 rtl:group-hover:translate-x-0">
            <ArrowUpRight className="w-5 h-5 text-sinai-coral rtl:rotate-[-90deg]" />
        </div>
    </motion.div>
);

export const BentoGrid: React.FC = () => {
  const { t } = useLanguage();

  const icons = [TrendingUp, Globe, FileText, CheckCircle2, ShieldCheck, UserCheck, Heart];
  
  const benefits = t.why.cards.map((text, i) => ({
    text,
    icon: icons[i % icons.length]
  }));

  return (
    <section id="why-partner" className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none">
         <div className="absolute top-20 right-0 rtl:right-auto rtl:left-0 w-96 h-96 bg-sinai-coral/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-20 left-0 rtl:left-auto rtl:right-0 w-96 h-96 bg-sinai-teal/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sinai-teal dark:text-sinai-tealLight font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            {t.why.tag}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6"
          >
            {t.why.title} <br /><span className="text-sinai-coral">Sinai Connect?</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-gradient-to-br from-sinai-teal to-sinai-tealLight rounded-3xl p-10 flex flex-col justify-center items-center text-center text-white lg:col-span-2 shadow-2xl shadow-sinai-teal/30 dark:shadow-sinai-teal/10 relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                
                <h3 className="text-3xl font-display font-bold mb-4 relative z-10">{t.why.ctaTitle}</h3>
                <p className="opacity-90 mb-8 text-lg max-w-md relative z-10">{t.why.ctaDesc}</p>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-sinai-teal px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all shadow-xl relative z-10 flex items-center gap-2"
                >
                    {t.why.ctaButton} <ArrowUpRight className="w-5 h-5 rtl:rotate-[-90deg]" />
                </motion.button>
            </motion.div>
        </div>
      </div>
    </section>
  );
};