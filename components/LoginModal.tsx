import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Mail, Loader2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../utils/i18n';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Required');
      return;
    }

    setIsLoading(true);

    // Simulate network delay and authentication
    setTimeout(() => {
      setIsLoading(false);
      onLogin(); // Successful login
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-[70] p-4"
          >
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative border border-slate-100 dark:border-slate-800">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-sinai-teal/10 dark:bg-sinai-teal/20 flex items-center justify-center mb-6 text-sinai-teal dark:text-sinai-tealLight">
                  <Lock className="w-6 h-6" />
                </div>

                <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">{t.login.title}</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-8">{t.login.subtitle}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.login.email}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pr-3 rtl:pl-0 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full pl-10 rtl:pl-3 rtl:pr-10 pr-4 py-3 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl focus:ring-2 focus:ring-sinai-teal/50 focus:border-sinai-teal outline-none transition-all"
                        placeholder="admin@clinic.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.login.password}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pr-3 rtl:pl-0 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-5 h-5" />
                      </div>
                      <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full pl-10 rtl:pl-3 rtl:pr-10 pr-4 py-3 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl focus:ring-2 focus:ring-sinai-teal/50 focus:border-sinai-teal outline-none transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm font-medium animate-pulse">{error}</p>
                  )}

                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-sinai-teal hover:bg-sinai-tealLight text-white font-bold py-3 rounded-xl shadow-lg shadow-sinai-teal/20 transition-all flex items-center justify-center gap-2 rtl:flex-row-reverse"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        {t.login.button} <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <a href="#" className="text-sm text-slate-400 hover:text-sinai-teal transition-colors">{t.login.forgot}</a>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-4 border-t border-slate-100 dark:border-slate-800 text-center">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{t.login.secure}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};