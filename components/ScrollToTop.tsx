import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.3 },
                        rotate: { duration: 0.6, ease: 'easeInOut' },
                    }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 ltr:right-8 rtl:left-8 z-50 p-4 rounded-full bg-gradient-to-br from-sinai-teal to-sinai-coral shadow-2xl shadow-sinai-teal/30 text-white hover:shadow-sinai-coral/50 transition-shadow duration-300 group"
                    aria-label="Scroll to top"
                >
                    <div className="relative">
                        {/* Pulsing background effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        {/* Arrow Icon */}
                        <ArrowUp className="w-6 h-6 relative z-10" strokeWidth={2.5} />
                    </div>

                    {/* Animated ring effect */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{
                            scale: [1, 1.3],
                            opacity: [0.5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeOut',
                        }}
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
