import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Calendar, MapPin, Phone, Mail, Building, Send, Loader2, CheckCircle } from 'lucide-react';
import { useLanguage } from '../utils/i18n';

export const Careers: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    applicationDate: new Date().toISOString().split('T')[0],
    fullName: '',
    birthday: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = "Required";
    if (!formData.birthday) newErrors.birthday = "Required";
    if (!formData.address) newErrors.address = "Required";
    if (!formData.city) newErrors.city = "Required";
    if (!formData.state) newErrors.state = "Required";
    if (!formData.phone) newErrors.phone = "Required";
    if (!formData.email) {
        newErrors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <section id="careers" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-sinai-teal/5 dark:bg-sinai-teal/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sinai-coral/5 dark:bg-sinai-coral/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Content */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sinai-coral font-bold tracking-widest uppercase text-sm mb-2 block">{t.careers.tag}</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">
                {t.careers.title} <br />
                <span className="text-sinai-teal dark:text-sinai-tealLight">Sinai Connect</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                {t.careers.desc}
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-sinai-teal/10 dark:bg-sinai-teal/20 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-sinai-teal dark:text-sinai-tealLight" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t.careers.growth}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.careers.growthDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-sinai-teal/10 dark:bg-sinai-teal/20 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-sinai-teal dark:text-sinai-tealLight" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t.careers.culture}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.careers.cultureDesc}</p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>{t.careers.hiring}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/30 border border-slate-100 dark:border-slate-700 p-8 md:p-10 relative overflow-hidden transition-colors duration-300">
                <AnimatePresence mode='wait'>
                    {isSuccess ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="flex flex-col items-center justify-center text-center py-12"
                        >
                            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.careers.success}</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-xs mx-auto">{t.careers.successDesc}</p>
                            <button 
                                onClick={() => {
                                    setIsSuccess(false);
                                    setFormData({ ...formData, fullName: '', email: '', phone: '' }); // Partial reset
                                }}
                                className="text-sinai-teal dark:text-sinai-tealLight font-semibold hover:text-sinai-tealLight transition-colors"
                            >
                                {t.careers.reset}
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit} 
                            className="space-y-6"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.careers.formTitle}</h3>
                                <span className="text-xs font-mono text-slate-400">{t.careers.secure}</span>
                            </div>

                            {/* Date Field (Auto/Readonly style) */}
                            <div className="relative">
                                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 block ms-1">{t.careers.labels.date}</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pr-3 rtl:pl-0 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="date"
                                        name="applicationDate"
                                        value={formData.applicationDate}
                                        onChange={handleChange}
                                        className="block w-full pl-10 rtl:pl-3 rtl:pr-10 pr-3 py-3 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sinai-teal/50 focus:border-sinai-teal transition-all bg-slate-50 dark:bg-slate-700/50"
                                    />
                                </div>
                            </div>

                            {/* Name & Birthday Group */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 block ms-1">{t.careers.labels.name} *</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pr-3 rtl:pl-0 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className={`block w-full pl-10 rtl:pl-3 rtl:pr-10 pr-3 py-3 border rounded-xl text-slate-900 dark:text-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-sinai-teal/50 transition-all ${errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-sinai-teal'}`}
                                        />
                                    </div>
                                    {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 block ms-1">{t.careers.labels.dob} *</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pr-3 rtl:pl-0 flex items-center pointer-events-none">
                                            <Calendar className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="date"
                                            name="birthday"
                                            value={formData.birthday}
                                            onChange={handleChange}
                                            className={`block w-full pl-10 rtl:pl-3 rtl:pr-10 pr-3 py-3 border rounded-xl text-slate-900 dark:text-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-sinai-teal/50 transition-all ${errors.birthday ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-sinai-teal'}`}
                                        />
                                    </div>
                                    {errors.birthday && <p className="mt-1 text-xs text-red-500">{errors.birthday}</p>}
                                </div>
                            </div>

                            {/* Contact Info Group */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 block ms-1">{t.careers.labels.phone} *</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pr-3 rtl:pl-0 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`block w-full pl-10 rtl:pl-3 rtl:pr-10 pr-3 py-3 border rounded-xl text-slate-900 dark:text-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-sinai-teal/50 transition-all ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-sinai-teal'}`}
                                        />
                                    </div>
                                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 block ms-1">{t.careers.labels.email} *</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pr-3 rtl:pl-0 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`block w-full pl-10 rtl:pl-3 rtl:pr-10 pr-3 py-3 border rounded-xl text-slate-900 dark:text-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-sinai-teal/50 transition-all ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-sinai-teal'}`}
                                        />
                                    </div>
                                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                                </div>
                            </div>

                            {/* Address Full Width */}
                            <div>
                                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 block ms-1">{t.careers.labels.address} *</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pr-3 rtl:pl-0 flex items-center pointer-events-none">
                                        <MapPin className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className={`block w-full pl-10 rtl:pl-3 rtl:pr-10 pr-3 py-3 border rounded-xl text-slate-900 dark:text-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-sinai-teal/50 transition-all ${errors.address ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-sinai-teal'}`}
                                    />
                                </div>
                                {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
                            </div>

                            {/* City State Group */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 block ms-1">{t.careers.labels.city} *</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className={`block w-full px-4 py-3 border rounded-xl text-slate-900 dark:text-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-sinai-teal/50 transition-all ${errors.city ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-sinai-teal'}`}
                                    />
                                     {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 block ms-1">{t.careers.labels.state} *</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className={`block w-full px-4 py-3 border rounded-xl text-slate-900 dark:text-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-sinai-teal/50 transition-all ${errors.state ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-sinai-teal'}`}
                                    />
                                    {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-sinai-teal to-sinai-tealLight text-white font-bold py-4 rounded-xl shadow-lg shadow-sinai-teal/30 hover:shadow-xl hover:shadow-sinai-teal/40 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 rtl:flex-row-reverse"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> {t.careers.submitting}
                                    </>
                                ) : (
                                    <>
                                        {t.careers.submit} <Send className="w-4 h-4 rtl:rotate-180" />
                                    </>
                                )}
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};