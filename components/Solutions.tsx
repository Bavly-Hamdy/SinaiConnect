import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Calendar, Clock, FileCheck, UserCheck, Phone, Users, TrendingUp, Headphones, Package, BarChart3, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '../utils/i18n';
import medicalSupport from '../assets/MedicalSupport.png';
import customerSupport from '../assets/CustomerService.png';

export const Solutions: React.FC = () => {
    const { t } = useLanguage();


    // Let's stick to standard internal state
    const [activeTab, setActiveTab] = useState<'medical' | 'customer'>('medical');

    // Icon mapping for the 7 medical services
    const medicalIcons = [Calendar, Phone, Clock, FileCheck, Users, TrendingUp, Users];

    // Icon mapping for the 7 customer service items
    const customerIcons = [Headphones, CheckCircle, Package, Globe, Clock, UserCheck, BarChart3];

    const currentServices = activeTab === 'medical' ? t.services.medical : t.services.customer;
    const currentIcons = activeTab === 'medical' ? medicalIcons : customerIcons;

    return (
        <section id="services" className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">

            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-sinai-teal/5 rounded-full blur-3xl -translate-x-1/2" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-sinai-coral/5 rounded-full blur-3xl translate-x-1/2" />
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '24px 24px' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-sinai-coral animate-pulse" />
                        <span className="text-xs font-bold tracking-wide uppercase text-slate-600 dark:text-slate-300">
                            {t.services.tag}
                        </span>
                    </motion.div>

                    <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 dark:text-white mb-8 leading-tight">
                        {activeTab === 'medical' ? (
                            <>Medical & Clinic <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-teal to-sinai-tealLight">{t.services.title}</span></>
                        ) : (
                            <>Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-coral to-orange-400">Service Solutions</span></>
                        )}
                    </h2>

                    {/* Premium Tabs */}
                    <div className="flex justify-center">
                        <div className="bg-slate-200/50 dark:bg-slate-800/50 p-1.5 rounded-full inline-flex relative backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                            {/* Animated Background Pill */}
                            <motion.div
                                className="absolute top-1.5 bottom-1.5 rounded-full bg-white dark:bg-slate-700 shadow-sm z-0"
                                initial={false}
                                animate={{
                                    left: activeTab === 'medical' ? '0.375rem' : '50%',
                                    width: 'calc(50% - 0.75rem)',
                                    translateX: activeTab === 'customer' ? '0.375rem' : '0'
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />

                            <button
                                onClick={() => setActiveTab('medical')}
                                className={`px-8 py-3 rounded-full font-semibold relative z-10 transition-colors duration-300 min-w-[160px] ${activeTab === 'medical'
                                    ? 'text-sinai-teal dark:text-sinai-tealLight'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                    }`}
                            >
                                {t.services.tabs.medical}
                            </button>
                            <button
                                onClick={() => setActiveTab('customer')}
                                className={`px-8 py-3 rounded-full font-semibold relative z-10 transition-colors duration-300 min-w-[160px] ${activeTab === 'customer'
                                    ? 'text-sinai-coral'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                    }`}
                            >
                                {t.services.tabs.customer}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Visual Side */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        key={activeTab} // To force re-render/animate on tab switch if desired, mainly for content
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="sticky top-32">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 aspect-[4/5] group">
                                {activeTab === 'medical' ? (
                                    <>
                                        <img
                                            src={medicalSupport}
                                            alt="Medical Support Team"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="p-2 bg-sinai-teal rounded-lg">
                                                    <Users className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="font-semibold text-sinai-tealLight">Professional Care</span>
                                            </div>
                                            <p className="opacity-90 leading-relaxed text-sm">Our medical support team is trained in HIPAA compliance and patient empathy.</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={customerSupport}
                                            alt="Customer Service Team"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="p-2 bg-sinai-coral rounded-lg">
                                                    <Headphones className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="font-semibold text-sinai-coral">Customer Success</span>
                                            </div>
                                            <p className="opacity-90 leading-relaxed text-sm">We treat your customers like our own, ensuring every interaction builds loyalty and trust.</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Service List Side */}
                    <div className="lg:col-span-7">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <AnimatePresence mode='wait'>
                                {currentServices.map((service, idx) => {
                                    const Icon = currentIcons[idx] || CheckCircle;
                                    return (
                                        <motion.div
                                            key={`${activeTab}-${idx}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ delay: idx * 0.05, duration: 0.3 }}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sinai-teal/30 dark:hover:border-sinai-teal/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className={`p-3 rounded-xl ${activeTab === 'medical' ? 'bg-sinai-teal/10 text-sinai-teal' : 'bg-sinai-coral/10 text-sinai-coral'} group-hover:scale-110 transition-transform duration-300`}>
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                {/* Optional Arrow for interaction hint */}
                                                <ArrowRight className={`w-4 h-4 text-slate-300 group-hover:text-sinai-teal transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300`} />
                                            </div>

                                            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                                                {service}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};