import React from 'react';
import { motion } from 'framer-motion';
import { Settings, TrendingUp, Clock, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../utils/i18n';

export const Customized: React.FC = () => {
    const { t } = useLanguage();

    const features = [
        {
            Icon: Settings,
            color: 'text-sinai-teal',
            bg: 'bg-sinai-teal/10 dark:bg-sinai-teal/20',
            border: 'group-hover:border-sinai-teal/50'
        },
        {
            Icon: TrendingUp,
            color: 'text-sinai-coral',
            bg: 'bg-sinai-coral/10 dark:bg-sinai-coral/20',
            border: 'group-hover:border-sinai-coral/50'
        },
        {
            Icon: Clock,
            color: 'text-orange-500',
            bg: 'bg-orange-500/10 dark:bg-orange-500/20',
            border: 'group-hover:border-orange-500/50'
        },
        {
            Icon: Shield,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10 dark:bg-blue-500/20',
            border: 'group-hover:border-blue-500/50'
        }
    ];

    return (
        <section id="customized" className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sinai-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sinai-coral/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                {/* Dots Pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '32px 32px' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6"
                            >
                                <span className="w-2 h-2 rounded-full bg-sinai-teal animate-pulse" />
                                <span className="text-xs font-bold tracking-wide uppercase text-slate-600 dark:text-slate-300">
                                    {t.customized.tag}
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="font-display font-bold text-4xl md:text-5xl text-slate-900 dark:text-white leading-tight"
                            >
                                {t.customized.title}
                            </motion.h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-sm"
                        >
                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                {t.customized.paragraph1}
                            </p>
                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                {t.customized.paragraph2}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            {/* Decorative badges or quick stats could go here if needed, keeping it clean for now */}
                        </motion.div>
                    </div>

                    {/* Right Column: Features Grid */}
                    <div className="lg:col-span-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className={`group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 ${feature.border}`}
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-500`}>
                                        <feature.Icon className={`w-7 h-7 ${feature.color}`} />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                                            {t.customized.features[idx]}
                                        </h3>
                                        <ArrowRight className={`w-4 h-4 ${feature.color} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`} />
                                    </div>
                                </motion.div>
                            ))}

                            {/* Abstract Decorative Card - Maybe a 'Pro' badge or similar graphic element */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="col-span-1 sm:col-span-2 mt-4 p-6 rounded-3xl bg-gradient-to-r from-sinai-teal to-sinai-tealLight text-white shadow-xl shadow-sinai-teal/20 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />

                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">100% Tailored</p>
                                        <p className="text-white/80 text-sm">Built for your specific needs</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
