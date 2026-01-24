import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Clock, FileText, Download, Phone, LogOut, Bell, Search, Sun, Moon, Activity } from 'lucide-react';
import { useLanguage } from '../utils/i18n';

interface ClientPortalProps {
  onLogout: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const ClientPortal: React.FC<ClientPortalProps> = ({ onLogout, isDark, toggleTheme }) => {
  const { t } = useLanguage();
  
  // Real-time stats simulation
  const [stats, setStats] = useState({
    calls: 142,
    answerRate: 98.5,
    appointments: 38
  });
  
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Simulate live call activity
    const interval = setInterval(() => {
      const random = Math.random();
      if (random > 0.6) { // 40% chance of a new call
        setIsLive(true);
        setStats(prev => ({
          ...prev,
          calls: prev.calls + 1,
          answerRate: Math.min(100, Math.max(90, prev.answerRate + (Math.random() - 0.5) * 0.2)),
          appointments: Math.random() > 0.8 ? prev.appointments + 1 : prev.appointments
        }));
        
        // Reset live indicator
        setTimeout(() => setIsLive(false), 2000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans transition-colors duration-300">
      {/* Dashboard Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sinai-teal to-sinai-tealLight flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-sinai-teal/20">
              S
            </div>
            <div>
              <h1 className="font-display font-bold text-slate-900 dark:text-white text-lg leading-tight">Sinai Connect</h1>
              <span className="text-[10px] font-bold tracking-wider text-sinai-teal dark:text-sinai-tealLight uppercase">{t.nav.portal}</span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 w-96 mx-8 transition-colors">
            <Search className="w-4 h-4 text-slate-400 mx-3 rtl:mx-0 rtl:ml-3" />
            <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-full text-slate-700 dark:text-slate-200 placeholder-slate-400" />
          </div>

          <div className="flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-400 hover:text-sinai-coral dark:hover:text-sinai-tealLight hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="relative p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors bg-slate-50 dark:bg-slate-800 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 rtl:right-auto rtl:left-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white dark:border-slate-800 animate-pulse"></span>
            </button>
            <div className="hidden md:flex items-center gap-3 pl-4 rtl:pl-0 rtl:pr-4 border-l rtl:border-l-0 rtl:border-r border-slate-100 dark:border-slate-800">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm" />
              <div className="text-sm">
                <p className="font-bold text-slate-900 dark:text-white leading-none">Dr. Sarah Miller</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">Miller Family Practice</p>
              </div>
            </div>
            <button 
              onClick={onLogout}
              className="ml-2 rtl:ml-0 rtl:mr-2 p-2 text-slate-400 hover:text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full"
              title="Sign Out"
            >
              <LogOut className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-end justify-between"
        >
          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">{t.portal.dashboard}</h2>
            <p className="text-slate-500 dark:text-slate-400">{t.portal.welcome}</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-300">LIVE</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: t.portal.stats.calls, value: stats.calls, icon: Phone, color: 'text-blue-500', trend: '+12%', live: true },
            { label: t.portal.stats.answer, value: `${stats.answerRate.toFixed(1)}%`, icon: TrendingUp, color: 'text-green-500', trend: 'Top 5%' },
            { label: t.portal.stats.handle, value: '2m 14s', icon: Clock, color: 'text-orange-500', trend: '-15s' },
            { label: t.portal.stats.appt, value: stats.appointments, icon: Users, color: 'text-purple-500', trend: '85%' },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/30 transition-all cursor-default relative overflow-hidden"
            >
              {stat.live && isLive && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-0 right-0 p-2"
                  >
                    <Activity className="w-4 h-4 text-green-500 animate-bounce" />
                  </motion.div>
              )}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 dark:bg-slate-800 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full uppercase tracking-wider">{stat.trend}</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1 transition-all duration-300">{stat.value}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Chart Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-sinai-teal" />
                {t.portal.chart}
              </h3>
            </div>
            
            <div className="h-64 flex items-end gap-4 justify-between px-2">
              {[65, 45, 75, 55, 85, 95, 70].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -mt-8 bg-slate-800 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded pointer-events-none mb-1">
                        {h}
                    </div>
                  <div className="relative w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg h-full overflow-hidden">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1), type: "spring" }}
                      className="absolute bottom-0 left-0 right-0 bg-sinai-teal group-hover:bg-sinai-tealLight transition-colors rounded-t-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reports Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors"
          >
             <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-sinai-coral" />
                {t.portal.reports}
              </h3>
              <a href="#" className="text-xs font-bold text-sinai-teal dark:text-sinai-tealLight hover:underline">{t.portal.viewAll}</a>
            </div>

            <div className="space-y-4">
              {[
                { name: 'Weekly Performance', date: 'Oct 24, 2023', size: '2.4 MB' },
                { name: 'Patient Satisfaction', date: 'Oct 21, 2023', size: '1.1 MB' },
                { name: 'Transcript Analysis', date: 'Oct 18, 2023', size: '4.2 MB' },
              ].map((file, i) => (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 dark:text-red-400 group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sinai-teal dark:group-hover:text-sinai-tealLight transition-colors">{file.name}</p>
                      <p className="text-xs text-slate-400">{file.date} • {file.size}</p>
                    </div>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors hover:bg-white dark:hover:bg-slate-700 rounded-full">
                    <Download className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-sm font-medium hover:border-sinai-teal dark:hover:border-sinai-tealLight hover:text-sinai-teal dark:hover:text-sinai-tealLight hover:bg-sinai-teal/5 transition-colors">
              {t.portal.request}
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};