import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Sparkles } from 'lucide-react';
import { useLanguage } from '../utils/i18n';

export const Mission: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="mission" className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sinai-teal/5 rounded-full blur-3xl -translate-y-1/2" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-sinai-coral/5 rounded-full blur-3xl translate-y-1/2" />
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '32px 32px' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -5 }}
                        className="relative group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 hover:border-sinai-teal/30 dark:hover:border-sinai-teal/30 transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                            <Target className="w-24 h-24 text-sinai-teal" />
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sinai-teal/10 text-sinai-teal mb-6">
                            <Target className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">{t.mission.purpose}</span>
                        </div>

                        <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 dark:text-white mb-6">
                            {t.mission.missionTitle}
                        </h2>

                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed relative z-10">
                            {t.mission.missionDesc}
                        </p>

                        <div className="mt-8 h-1 w-20 bg-gradient-to-r from-sinai-teal to-transparent rounded-full" />
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="relative group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 hover:border-sinai-coral/30 dark:hover:border-sinai-coral/30 transition-all duration-300 md:mt-12"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                            <Eye className="w-24 h-24 text-sinai-coral" />
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sinai-coral/10 text-sinai-coral mb-6">
                            <Eye className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">{t.mission.future}</span>
                        </div>

                        <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 dark:text-white mb-6">
                            {t.mission.visionTitle}
                        </h2>

                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed relative z-10">
                            {t.mission.visionDesc}
                        </p>

                        <div className="mt-8 h-1 w-20 bg-gradient-to-r from-sinai-coral to-transparent rounded-full" />
                    </motion.div>
                </div>

                {/* Feature Image Section */}
                <div className="mt-24 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent z-10" />

                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                            alt="Team Collaboration"
                            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                        />

                        <div className="absolute inset-0 z-20 flex items-center p-8 md:p-16">
                            <div className="max-w-xl">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-sinai-teal rounded-lg">
                                            <Sparkles className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-sinai-tealLight font-bold tracking-wide text-sm uppercase">Our Core Belief</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                                        {t.mission.cardTitle}
                                    </h3>
                                    <p className="text-slate-200 text-lg leading-relaxed">
                                        {t.mission.cardDesc}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Elements around image */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-sinai-coral rounded-full opacity-10 blur-3xl -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sinai-teal rounded-full opacity-10 blur-3xl -z-10" />
                </div>

            </div>
        </section>
    );
};