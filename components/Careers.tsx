import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Calendar, MapPin, Phone, Mail, Building, Send, Loader2, CheckCircle, Briefcase, ArrowRight, TrendingUp, MessageSquare } from 'lucide-react';
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
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // Backend API URL
    const API_URL = "http://localhost:3000/api/job-application";

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applicationDate: formData.applicationDate,
          fullName: formData.fullName,
          birthday: formData.birthday,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          phone: formData.phone,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSuccess(true);

        // Store applicant ID to show in success message
        localStorage.setItem('lastApplicantId', result.applicantId);

        // Reset form
        setFormData({
          applicationDate: new Date().toISOString().split('T')[0],
          fullName: '',
          birthday: '',
          address: '',
          city: '',
          state: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error(result.error || result.warning || 'Unknown error');
      }

    } catch (error) {
      console.error("Submission Error:", error);
      setIsSubmitting(false);

      // Provide more specific error messages
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setSubmitError("Cannot connect to server. Please ensure the backend server is running (npm start in server folder).");
      } else {
        setSubmitError(error instanceof Error ? error.message : "Failed to submit application. Please try again.");
      }
    }
  };

  return (
    <section id="careers" className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sinai-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sinai-coral/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '32px 32px' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-sinai-coral animate-pulse" />
                <span className="text-xs font-bold tracking-wide uppercase text-slate-600 dark:text-slate-300">
                  {t.careers.tag}
                </span>
              </div>

              <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">
                {t.careers.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-teal to-sinai-tealLight">Sinai Connect</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 border-l-4 border-sinai-teal/30 pl-6">
                {t.careers.desc}
              </p>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sinai-teal/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-sinai-teal/10 dark:bg-sinai-teal/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-sinai-teal dark:text-sinai-tealLight" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{t.careers.growth}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{t.careers.growthDesc}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sinai-teal/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-sinai-coral/10 dark:bg-sinai-coral/20 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-sinai-coral" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{t.careers.culture}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{t.careers.cultureDesc}</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-sinai-teal/10 text-sinai-teal dark:text-sinai-tealLight font-semibold">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sinai-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sinai-teal"></span>
                </div>
                <span>{t.careers.hiring}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-white/50 dark:border-slate-800 p-8 md:p-12 relative overflow-hidden">

              {/* Decorative top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sinai-teal via-sinai-coral to-sinai-teal" />

              <AnimatePresence mode='wait'>
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-8 relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      >
                        <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <div className="absolute inset-0 border-4 border-green-200 dark:border-green-800 rounded-full animate-ping opacity-20" />
                    </div>

                    <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">{t.careers.success}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 max-w-md mx-auto text-lg leading-relaxed">{t.careers.successDesc}</p>
                    {localStorage.getItem('lastApplicantId') && (
                      <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-sinai-teal/10 border border-sinai-teal/20 mb-6">
                        <span className="text-sm font-mono font-bold text-sinai-teal dark:text-sinai-tealLight">
                          📋 Your ID: {localStorage.getItem('lastApplicantId')}
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData(prev => ({ ...prev, message: '' })); // Reset message specifically
                      }}
                      className="group flex items-center gap-2 text-sinai-teal dark:text-sinai-tealLight font-bold hover:text-sinai-tealLight transition-colors"
                    >
                      {t.careers.reset}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.careers.formTitle}</h3>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Join our growing team today.</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">{t.careers.secure}</span>
                      </div>
                    </div>

                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm border border-red-100 dark:border-red-800">
                        {submitError}
                      </div>
                    )}

                    {/* Date Field (Readonlyish) */}
                    <div className="grid grid-cols-1">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ms-1">{t.careers.labels.date}</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-4 rtl:pr-4 rtl:pl-0 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-slate-400 group-focus-within:text-sinai-teal transition-colors" />
                        </div>
                        <input
                          type="date"
                          name="applicationDate"
                          value={formData.applicationDate}
                          onChange={handleChange}
                          className="block w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sinai-teal/20 focus:border-sinai-teal transition-all bg-slate-50/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800"
                        />
                      </div>
                    </div>

                    {/* Two Col Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ms-1">{t.careers.labels.name} <span className="text-sinai-coral">*</span></label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-4 rtl:pr-4 rtl:pl-0 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-slate-400 group-focus-within:text-sinai-teal transition-colors" />
                          </div>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`block w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-4 border rounded-2xl text-slate-900 dark:text-white dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-sinai-teal/20 transition-all bg-slate-50/50 hover:bg-white dark:hover:bg-slate-800 ${errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-sinai-teal'}`}
                            placeholder="John Doe"
                          />
                        </div>
                        {errors.fullName && <p className="mt-1 text-xs text-red-500 font-medium ms-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ms-1">{t.careers.labels.dob} <span className="text-sinai-coral">*</span></label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-4 rtl:pr-4 rtl:pl-0 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-slate-400 group-focus-within:text-sinai-teal transition-colors" />
                          </div>
                          <input
                            type="date"
                            name="birthday"
                            value={formData.birthday}
                            onChange={handleChange}
                            className={`block w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-4 border rounded-2xl text-slate-900 dark:text-white dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-sinai-teal/20 transition-all bg-slate-50/50 hover:bg-white dark:hover:bg-slate-800 ${errors.birthday ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-sinai-teal'}`}
                          />
                        </div>
                        {errors.birthday && <p className="mt-1 text-xs text-red-500 font-medium ms-1">{errors.birthday}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ms-1">{t.careers.labels.phone} <span className="text-sinai-coral">*</span></label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-4 rtl:pr-4 rtl:pl-0 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-slate-400 group-focus-within:text-sinai-teal transition-colors" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`block w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-4 border rounded-2xl text-slate-900 dark:text-white dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-sinai-teal/20 transition-all bg-slate-50/50 hover:bg-white dark:hover:bg-slate-800 ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-sinai-teal'}`}
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        {errors.phone && <p className="mt-1 text-xs text-red-500 font-medium ms-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ms-1">{t.careers.labels.email} <span className="text-sinai-coral">*</span></label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-4 rtl:pr-4 rtl:pl-0 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-sinai-teal transition-colors" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`block w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-4 border rounded-2xl text-slate-900 dark:text-white dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-sinai-teal/20 transition-all bg-slate-50/50 hover:bg-white dark:hover:bg-slate-800 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-sinai-teal'}`}
                            placeholder="you@example.com"
                          />
                        </div>
                        {errors.email && <p className="mt-1 text-xs text-red-500 font-medium ms-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ms-1">{t.careers.labels.address} <span className="text-sinai-coral">*</span></label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-4 rtl:pr-4 rtl:pl-0 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-slate-400 group-focus-within:text-sinai-teal transition-colors" />
                        </div>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className={`block w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-4 border rounded-2xl text-slate-900 dark:text-white dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-sinai-teal/20 transition-all bg-slate-50/50 hover:bg-white dark:hover:bg-slate-800 ${errors.address ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-sinai-teal'}`}
                          placeholder="123 Main St, Apt 4B"
                        />
                      </div>
                      {errors.address && <p className="mt-1 text-xs text-red-500 font-medium ms-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ms-1">{t.careers.labels.city} <span className="text-sinai-coral">*</span></label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className={`block w-full px-4 py-4 border rounded-2xl text-slate-900 dark:text-white dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-sinai-teal/20 transition-all bg-slate-50/50 hover:bg-white dark:hover:bg-slate-800 ${errors.city ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-sinai-teal'}`}
                          placeholder="New York"
                        />
                        {errors.city && <p className="mt-1 text-xs text-red-500 font-medium ms-1">{errors.city}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ms-1">{t.careers.labels.state} <span className="text-sinai-coral">*</span></label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className={`block w-full px-4 py-4 border rounded-2xl text-slate-900 dark:text-white dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-sinai-teal/20 transition-all bg-slate-50/50 hover:bg-white dark:hover:bg-slate-800 ${errors.state ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-sinai-teal'}`}
                          placeholder="NY"
                        />
                        {errors.state && <p className="mt-1 text-xs text-red-500 font-medium ms-1">{errors.state}</p>}
                      </div>
                    </div>

                    {/* NEW Message Field */}
                    <div>
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block ms-1">{t.careers.labels.message || "Cover Letter / Message"}</label>
                      <div className="relative group">
                        <div className="absolute top-4 left-0 rtl:left-auto rtl:right-0 pl-4 rtl:pr-4 rtl:pl-0 flex items-start pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-slate-400 group-focus-within:text-sinai-teal transition-colors" />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={`block w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-4 border rounded-2xl text-slate-900 dark:text-white dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-sinai-teal/20 transition-all bg-slate-50/50 hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-sinai-teal`}
                          placeholder="Tell us why you're a great fit..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full bg-gradient-to-r from-sinai-teal to-sinai-tealLight text-white font-bold py-5 rounded-2xl shadow-xl shadow-sinai-teal/30 hover:shadow-2xl hover:shadow-sinai-teal/40 hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 rtl:flex-row-reverse"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> {t.careers.submitting}
                        </>
                      ) : (
                        <>
                          <span className="text-lg">{t.careers.submit}</span> <Send className="w-5 h-5 rtl:rotate-180 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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