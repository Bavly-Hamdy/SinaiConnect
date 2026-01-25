import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

interface LoadingScreenProps {
    onComplete: () => void;
    isDark: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, isDark }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate progress based on document ready state
        const updateProgress = () => {
            if (document.readyState === 'loading') {
                setProgress(30);
            } else if (document.readyState === 'interactive') {
                setProgress(60);
            } else if (document.readyState === 'complete') {
                setProgress(100);
            }
        };

        updateProgress();

        const handleReadyStateChange = () => {
            updateProgress();
        };

        document.addEventListener('readystatechange', handleReadyStateChange);

        // Real window.onload listener
        const handleLoad = () => {
            setProgress(100);
            // Small delay for smooth UX before calling onComplete
            setTimeout(() => {
                onComplete();
            }, 500);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            document.removeEventListener('readystatechange', handleReadyStateChange);
            window.removeEventListener('load', handleLoad);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-white'
                }`}
        >
            {/* Logo with Breathing Animation */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.9, 1, 0.9]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="mb-12"
            >
                <img
                    src={logo}
                    alt="Sinai Connect"
                    className="w-32 h-32 object-contain"
                />
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-sinai-teal to-sinai-tealLight rounded-full"
                />
            </div>

            {/* Loading Text */}
            <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`mt-6 text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
            >
                Loading...
            </motion.p>
        </motion.div>
    );
};
