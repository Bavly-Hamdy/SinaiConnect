import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, FileCheck, UserCheck, Phone, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../utils/i18n';

export const Solutions: React.FC = () => {
    const { t } = useLanguage();

    // Icon mapping for the 7 medical services
    const icons = [Calendar, Phone, Clock, FileCheck, Users, TrendingUp, Users];

    return (
        <section id="services" className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-6 relative z-20">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-sinai-teal dark:text-sinai-tealLight font-bold tracking-widest uppercase text-sm mb-2 block">{t.services.tag}</span>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">
                        Medical & Clinic <br /><span className="text-sinai-coral">{t.services.title}</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 dark:border-slate-800 aspect-[4/5] group transition-colors duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1516574187841-693083f69802?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Medical Support Team"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-sinai-teal/20 dark:bg-sinai-teal/30 group-hover:bg-sinai-teal/10 transition-colors duration-500" />
                        </div>
                    </motion.div>

                    {/* Service List */}
                    <div className="flex flex-col gap-5">
                        {t.services.medical.map((service, idx) => {
                            const Icon = icons[idx] || CheckCircle;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-750 hover:shadow-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-full bg-sinai-teal/10 dark:bg-sinai-teal/20 flex items-center justify-center shrink-0">
                                        <Icon className="w-5 h-5 text-sinai-teal dark:text-sinai-tealLight" />
                                    </div>
                                    <p className="text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed pt-1.5">{service}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};