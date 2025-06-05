import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { HiOutlineDownload } from 'react-icons/hi';


// Download CV
const DownloadCv = () => {
  const link = document.createElement('a');
  link.href = '/CV-Ahmed.pdf';
  link.download = 'A-S-E CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



const CvBtn = () => {
    return (
        <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
            className="flex justify-center relative"
        >
            {/* Spinning circles outside the button */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                    width: "calc(100% + 30px)",
                    height: "calc(100% + 30px)",
                    top: -15,
                    left: -15,
                }}
            >
                <motion.div
                    className="absolute w-[15px] h-[15px] rounded-full border-2 border-dashed border-amber-500/60"
                    style={{
                        top: 0,
                        left: "calc(50% - 7.5px)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <motion.div
                    className="absolute w-[12px] h-[12px] rounded-full border-2 border-dotted border-amber-500/80"
                    style={{
                        bottom: 5,
                        right: 10,
                    }}
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <motion.div
                    className="absolute w-[10px] h-[10px] rounded-full border-2 border-amber-500/70"
                    style={{
                        bottom: 12,
                        left: 15,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </motion.div>

            <motion.button
                onClick={DownloadCv}
                className="group relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-full
                           border-2 border-amber-500 bg-base-300/85 text-accent
                           hover:bg-amber-500 hover:text-base-100
                           transition-colors duration-300 ease-in-out
                           flex items-center gap-2 font-medium z-20 cursor-pointer"
                whileHover={{
                    y: -3,
                    boxShadow: "0 10px 15px -3px rgba(253, 154, 0, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Button text with underline animation */}
                <span className="relative">
                    <span className="block text-xs sm:text-sm md:text-base">Resume</span>
                    <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full"
                        initial={{ width: 0 }}
                        animate={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                    />
                </span>

                {/* Download icon with animation */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        times: [0, 0.5, 1]
                    }}
                    className="text-sm sm:text-base md:text-lg"
                >
                    <HiOutlineDownload />
                </motion.div>
            </motion.button>
        </motion.div>
    );
};

export default CvBtn;