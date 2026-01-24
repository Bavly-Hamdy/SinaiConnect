import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { useLanguage } from '../utils/i18n';

export const Mission: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Mission Section */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
            >
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-sinai-teal/10 dark:bg-sinai-teal/20 rounded-full blur-2xl" />
                <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-sinai-teal dark:text-sinai-tealLight" />
                    <span className="text-sm font-bold text-sinai-teal dark:text-sinai-tealLight uppercase tracking-widest">{t.mission.purpose}</span>
                </div>
                <h2 className="font-display font-bold text-4xl text-sinai-coral mb-6">{t.mission.missionTitle}</h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed border-s-4 border-sinai-teal dark:border-sinai-tealLight ps-6">
                    {t.mission.missionDesc}
                </p>
            </motion.div>

            {/* Vision Section */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
            >
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-sinai-coral/10 dark:bg-sinai-coral/20 rounded-full blur-2xl" />
                <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-sinai-coral" />
                    <span className="text-sm font-bold text-sinai-coral uppercase tracking-widest">{t.mission.future}</span>
                </div>
                <h2 className="font-display font-bold text-4xl text-sinai-coral mb-6">{t.mission.visionTitle}</h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed border-s-4 border-sinai-coral ps-6">
                    {t.mission.visionDesc}
                </p>
            </motion.div>
        </div>

        {/* Circular Image Feature */}
        <div className="mt-20 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative max-w-4xl w-full rounded-[3rem] overflow-hidden shadow-2xl h-[400px]"
            >
                <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Team Collaboration" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-sinai-teal/90 to-transparent flex items-center rtl:bg-gradient-to-l">
                    <div className="p-12 max-w-lg text-white">
                        <h3 className="text-3xl font-display font-bold mb-4">{t.mission.cardTitle}</h3>
                        <p className="text-sinai-surface/90 text-lg">{t.mission.cardDesc}</p>
                    </div>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};