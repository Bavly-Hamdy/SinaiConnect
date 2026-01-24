import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Phone, Clock, FileCheck, Users, MessageSquare, BarChart, ChevronRight, Inbox, MessageCircle, ShoppingBag, PieChart } from 'lucide-react';
import { useLanguage } from '../utils/i18n';

export const Solutions: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'medical' | 'customer'>('medical');

  // Mapping string titles to icons for the dynamic content
  const iconMap: Record<string, any> = {
    'Appointment Management': Calendar,
    'Insurance Verification': FileCheck,
    'Patient Outreach': Phone,
    'After Hours Support': Users,
    'Inbound Support': Inbox,
    'Omnichannel Support': MessageCircle,
    'Order Taking': ShoppingBag,
    'Feedback Collection': PieChart,
    // Arabic Mappings
    'إدارة المواعيد': Calendar,
    'التحقق من التأمين': FileCheck,
    'التواصل مع المرضى': Phone,
    'دعم خارج أوقات العمل': Users,
    'الدعم الوارد': Inbox,
    'دعم متعدد القنوات': MessageCircle,
    'استلام الطلبات': ShoppingBag,
    'جمع الملاحظات': PieChart,
     // Spanish Mappings
    'Gestión de Citas': Calendar,
    'Verificación de Seguros': FileCheck,
    'Alcance al Paciente': Phone,
    'Soporte Fuera de Horario': Users,
    'Soporte Entrante': Inbox,
    'Soporte Omnicanal': MessageCircle,
    'Toma de Pedidos': ShoppingBag,
    'Recolección de Feedback': PieChart,
    // German Mappings
    'Terminverwaltung': Calendar,
    'Versicherungsprüfung': FileCheck,
    'Patientenansprache': Phone,
    'After-Hours-Support': Users,
    'Inbound-Support': Inbox,
    'Omnichannel-Support': MessageCircle,
    'Bestellannahme': ShoppingBag,
    'Feedback-Sammlung': PieChart,
  };

  // Fallback icon if translation doesn't match exactly
  const getIcon = (title: string) => iconMap[title] || BarChart;

  const currentServices = activeTab === 'medical' ? t.services.medical : t.services.customer;

  return (
    <section id="services" className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-sinai-teal dark:text-sinai-tealLight font-bold tracking-widest uppercase text-sm mb-2 block">{t.services.tag}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">
            {activeTab === 'medical' ? (
                <>Medical & Clinic <br /><span className="text-sinai-coral">{t.services.title}</span></>
            ) : (
                <>Business & Customer <br /><span className="text-sinai-coral">{t.services.title}</span></>
            )}
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
            <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full flex items-center gap-1 shadow-inner">
                <button
                    onClick={() => setActiveTab('medical')}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'medical' ? 'bg-white dark:bg-slate-700 text-sinai-teal dark:text-sinai-tealLight shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                >
                    {t.services.tabs.medical}
                </button>
                <button
                    onClick={() => setActiveTab('customer')}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'customer' ? 'bg-white dark:bg-slate-700 text-sinai-teal dark:text-sinai-tealLight shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                >
                    {t.services.tabs.customer}
                </button>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Visual */}
            <motion.div
                key={activeTab} // Triggers animation on tab change
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative sticky top-32"
            >
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 dark:border-slate-800 aspect-[4/5] group transition-colors duration-300">
                    <img 
                        src={activeTab === 'medical' 
                            ? "https://images.unsplash.com/photo-1516574187841-693083f69802?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            : "https://images.unsplash.com/photo-1556745754-38308024cc54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        }
                        alt="Support" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-sinai-teal/20 dark:bg-sinai-teal/30 group-hover:bg-sinai-teal/10 transition-colors duration-500" />
                </div>
            </motion.div>

            {/* Service List */}
            <div className="flex flex-col gap-4">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeTab + "-list"}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-4"
                    >
                        {currentServices.map((service, idx) => {
                            const Icon = getIcon(service.title);
                            return (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="group flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all duration-300 cursor-default"
                                >
                                    <div className="w-12 h-12 rounded-full bg-sinai-coral/10 dark:bg-sinai-coral/20 flex items-center justify-center shrink-0 group-hover:bg-sinai-coral group-hover:text-white transition-all duration-300">
                                        <Icon className="w-5 h-5 text-sinai-coral dark:text-sinai-coral group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-sinai-teal dark:group-hover:text-sinai-tealLight transition-colors">{service.title}</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{service.desc}</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-sinai-coral opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 rtl:translate-x-4 group-hover:translate-x-0 rtl:group-hover:translate-x-0 rtl:rotate-180" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};