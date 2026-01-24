import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileCheck, PhoneOutgoing, UserCheck, HeartPulse } from 'lucide-react';
import { ServiceItemProps } from '../types';

const services: ServiceItemProps[] = [
  {
    title: "Appointment Management",
    description: "Seamless scheduling and reminders to reduce no-show rates.",
    icon: Calendar
  },
  {
    title: "Insurance Verification",
    description: "Real-time eligibility checks to streamline revenue cycles.",
    icon: FileCheck
  },
  {
    title: "Patient Outreach",
    description: "Proactive health campaigns and follow-up care coordination.",
    icon: PhoneOutgoing
  },
  {
    title: "Patient Intake",
    description: "Efficient data collection and registration support.",
    icon: UserCheck
  }
];

export const MedicalServices: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <span className="text-sinai-coral font-bold tracking-widest uppercase text-sm">Specialized Care</span>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mt-2">
                        Medical Support <br /> Ecosystem
                    </h2>
                </div>
                <p className="text-slate-600 max-w-md pb-2 border-b border-sinai-teal/20">
                    Behind every call is a team that listens, understands, and acts with clinical precision.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300"
                    >
                        <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-sinai-teal group-hover:text-white transition-colors duration-300 text-sinai-teal">
                            <service.icon className="w-7 h-7" />
                        </div>
                        <h3 className="font-display font-bold text-lg text-slate-900 mb-3">{service.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};