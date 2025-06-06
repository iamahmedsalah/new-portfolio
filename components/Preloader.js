import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, logoVariants, textVariants } from '../variants';
import Image from 'next/image';
import logo from '../public/logo.png';


const Preloader = ({ onComplete}) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);


    useEffect(() => {
        // Reset progress when component mounts or type changes
        setProgress(0);

        const targetProgress = 100;
        const intervalTime = 50; // Adjust for smoother animation

        const interval = setInterval(() => {
            setProgress(prev => {
                // Calculate smooth increment
                const remaining = targetProgress - prev;
                const increment = Math.max(remaining * 0.1, 1);
                const newProgress = Math.min(prev + increment, targetProgress);

                if (newProgress >= targetProgress) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsVisible(false);
                        onComplete && onComplete();
                    }, 300); 
                    return targetProgress;
                }

                return newProgress;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, [onComplete]);


    const progressVariants = {
        hidden: { width: "0%" },
        visible: {
            width: `${progress}%`,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };



    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[3px] ">
                    <div className=" flex flex-col justify-center items-center flex-nowrap gap-4">
                        {/* Logo with spinning border */}
                        <motion.div
                            variants={logoVariants}
                            className="relative mx-auto mb-8"
                        >
                            <div className="relative">
                                {/* Spinning border */}
                                <div className="absolute inset-0 w-24 h-24 border-4 border-dashed rounded-full animate-spin-slow border-accent/50"></div>
                                <div className="absolute inset-2 w-20 h-20 border-2 border-solid rounded-full animate-ping border-accent"></div>

                                {/* Logo */}
                                <div className="relative w-24 h-24 flex items-center justify-center">
                                    <Image
                                        src={logo}
                                        alt="Logo"
                                        width={74}
                                        height={74}
                                        className="animate-pulse z-10"
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Progress bar */}
                        <motion.div
                            variants={textVariants}
                            className="w-64 mx-auto"
                        >
                            <div className="bg-base-300 rounded-full h-2 mb-3 overflow-hidden shadow-inner">
                                <motion.div
                                    variants={progressVariants}
                                    className="h-full bg-accent rounded-full shadow-md"
                                    style={{
                                        width: `${Math.max(0, Math.min(100, progress))}%`,
                                        willChange: 'width'
                                    }}
                                />
                            </div>
                            <p className="text-lg text-primary font-semibold text-center">
                                {Math.round(Math.max(0, Math.min(100, progress)))}%
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;