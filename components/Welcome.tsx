import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Award, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '../utils/i18n';

export const Welcome: React.FC = () => {
    const { t } = useLanguage();

    const values = [
        { Icon: Heart, color: 'from-red-500 to-pink-500', bgColor: 'bg-red-50 dark:bg-red-900/20' },
        { Icon: Users, color: 'from-sinai-teal to-cyan-400', bgColor: 'bg-teal-50 dark:bg-teal-900/20' },
        { Icon: Target, color: 'from-orange-500 to-amber-400', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
        { Icon: Award, color: 'from-purple-500 to-indigo-500', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
        { Icon: TrendingUp, color: 'from-green-500 to-emerald-400', bgColor: 'bg-green-50 dark:bg-green-900/20' },
        { Icon: Shield, color: 'from-blue-500 to-indigo-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20' }
    ];

    return (
        <section id="welcome" className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '48px 48px'
                }} />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                        x: [0, 30, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -right-48 rtl:-left-48 rtl:right-auto w-96 h-96 bg-gradient-to-br from-sinai-teal/30 to-sinai-tealLight/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, -40, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 -left-48 rtl:-right-48 rtl:left-auto w-[500px] h-[500px] bg-gradient-to-tr from-sinai-coral/20 to-orange-400/15 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sinai-teal/10 dark:bg-sinai-teal/20 border border-sinai-teal/20 dark:border-sinai-teal/30 mb-6"
                    >
                        <div className="w-2 h-2 rounded-full bg-sinai-teal animate-pulse" />
                        <span className="text-sinai-teal dark:text-sinai-tealLight font-bold tracking-wider uppercase text-xs">
                            {t.welcome.tag}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-display font-bold text-4xl md:text-6xl text-slate-900 dark:text-white mb-8 leading-tight"
                    >
                        {t.welcome.title}
                    </motion.h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">

                    {/* Left: Text Content with modern card design */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="p-8 rounded-3xl bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/30"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sinai-teal to-sinai-tealLight flex items-center justify-center shrink-0">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{t.welcome.cards.philosophy}</h3>
                                    <div className="h-1 w-16 bg-gradient-to-r from-sinai-teal to-sinai-coral rounded-full" />
                                </div>
                            </div>
                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                {t.welcome.paragraph1}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="p-8 rounded-3xl bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/30"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sinai-coral to-orange-400 flex items-center justify-center shrink-0">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{t.welcome.cards.commitment}</h3>
                                    <div className="h-1 w-16 bg-gradient-to-r from-sinai-coral to-orange-400 rounded-full" />
                                </div>
                            </div>
                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                {t.welcome.paragraph2}
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Values Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * idx }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={`p-6 rounded-2xl ${value.bgColor} border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg group`}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <value.Icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">
                                    {t.welcome.values[idx]}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats/Features Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { number: '24/7', label: t.welcome.stats.availability, icon: Shield },
                        { number: '3+', label: t.welcome.stats.languages, icon: Users },
                        { number: '100%', label: t.welcome.stats.satisfaction, icon: Award }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-white/60 to-slate-50/60 dark:from-slate-800/60 dark:to-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 text-center group hover:shadow-lg transition-all duration-300"
                        >
                            <stat.icon className="w-8 h-8 text-sinai-teal dark:text-sinai-tealLight mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                            <div className="text-3xl font-bold text-sinai-teal dark:text-sinai-tealLight mb-1">{stat.number}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
