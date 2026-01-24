import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../utils/i18n';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-slate-50 dark:bg-slate-900 pt-24 pb-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="Sinai Connect Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-display font-bold text-xl text-slate-900 dark:text-white">{t.brandName}</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {t.footer.tag}
            </p>
            <div className="flex items-center gap-2">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://sinaiconnect.com" alt="QR Code" className="w-20 h-20 rounded-lg" />
              <span className="text-xs font-bold text-sinai-coral">{t.footer.scan}</span>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">{t.footer.company}</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#mission" className="hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors">{t.nav.mission}</a></li>
              <li><a href="#why-partner" className="hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors">{t.nav.whyUs}</a></li>
              <li><a href="#careers" className="hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors">{t.nav.careers}</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">{t.footer.services}</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#services" className="hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors">{t.services.medical[0]}</a></li>
              <li><a href="#services" className="hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors">{t.services.medical[1]}</a></li>
              <li><a href="#services" className="hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors">{t.services.medical[2]}</a></li>
              <li><a href="#services" className="hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors">{t.services.medical[3]}</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">{t.footer.connect}</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sinai-teal" />
                <a href="mailto:info@sinaiconnect.com" className="hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors">info@sinaiconnect.com</a>
              </li>
              <li className="flex items-center gap-3">
                <GlobeIcon className="w-4 h-4 text-sinai-teal" />
                <a href="https://www.sinaiconnect.com" className="hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors">www.sinaiconnect.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sinai-teal" />
                <span className="ltr:text-left rtl:text-right" dir="ltr">+1 949 - 771 - 5377 (USA)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sinai-teal" />
                <span className="ltr:text-left rtl:text-right" dir="ltr">+20 115 1735 777 (Egypt)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>
);