import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';
import { useLanguage } from '../utils/i18n';
import logo from '../assets/logo.png';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { Icon: Facebook, href: 'https://facebook.com/sinaiconnect', label: 'Facebook' },
    { Icon: Twitter, href: 'https://twitter.com/sinaiconnect', label: 'Twitter' },
    { Icon: Linkedin, href: 'https://linkedin.com/company/sinaiconnect', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://instagram.com/sinaiconnect', label: 'Instagram' }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 pt-24 pb-8 border-t border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand Column - Spans 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Sinai Connect Logo"
                className="w-14 h-14 object-contain"
              />
              <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">{t.brandName}</span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
              {t.footer.tagline}
            </p>

            {/* Social Media Links */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">{t.footer.followUs}</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-sinai-teal dark:hover:bg-sinai-teal flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* QR Code */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://sinaiconnect.com"
                alt="QR Code"
                className="w-20 h-20 rounded-lg shadow-md"
              />
              <div>
                <p className="text-xs font-bold text-sinai-teal dark:text-sinai-tealLight mb-1">{t.footer.scan}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.footer.scanDesc}</p>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-lg">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sinai-teal opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t.footer.home}
                </a>
              </li>
              <li>
                <a href="#why-partner" className="text-slate-600 dark:text-slate-400 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sinai-teal opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t.nav.whyUs}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 dark:text-slate-400 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sinai-teal opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t.nav.solutions}
                </a>
              </li>
              <li>
                <a href="#mission" className="text-slate-600 dark:text-slate-400 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sinai-teal opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t.nav.mission}
                </a>
              </li>
              <li>
                <a href="#careers" className="text-slate-600 dark:text-slate-400 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sinai-teal opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t.nav.careers}
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-lg">{t.footer.services}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-slate-600 dark:text-slate-400 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sinai-coral opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t.footer.medicalSupport}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 dark:text-slate-400 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sinai-coral opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t.footer.customerService}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 dark:text-slate-400 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sinai-coral opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t.footer.appointmentScheduling}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 dark:text-slate-400 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-sinai-coral opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t.footer.support247}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-lg">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sinai-teal mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">{t.footer.email}</p>
                  <a
                    href="mailto:info@sinaiconnect.com"
                    className="text-slate-700 dark:text-slate-300 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors break-all font-medium"
                  >
                    info@sinaiconnect.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sinai-teal mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">USA</p>
                  <span className="text-slate-700 dark:text-slate-300 font-medium ltr:text-left rtl:text-right" dir="ltr">
                    +1 949-771-5377
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sinai-teal mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">Egypt</p>
                  <span className="text-slate-700 dark:text-slate-300 font-medium ltr:text-left rtl:text-right" dir="ltr">
                    +20 115-1735-777
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-sinai-teal mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">{t.footer.website}</p>
                  <a
                    href="https://www.sinaiconnect.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 dark:text-slate-300 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors break-all font-medium"
                  >
                    sinaiconnect.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-left">
              {t.footer.copyright}
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors">
                {t.footer.privacy}
              </a>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-sinai-teal dark:hover:text-sinai-tealLight transition-colors">
                {t.footer.terms}
              </a>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {t.footer.poweredBy} <span className="text-sinai-teal dark:text-sinai-tealLight font-bold">Bavly Hamdy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};