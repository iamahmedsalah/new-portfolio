import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, 
    FaGithub, FaNpm, FaFigma, FaDatabase, 
    FaSass, FaBootstrap, FaWordpress, 
} from 'react-icons/fa';
import { 
    SiVite, SiVercel, SiNetlify,
    SiJest,SiMongodb,
    SiGit, SiPostman
} from 'react-icons/si';

const Iconmition = () => {
    // Developer icons with their positions
    const icons = [
        { Icon: FaReact, color: '#61DAFB', size: 40, x: 50, y: 35 },
        { Icon: FaJs, color: '#F7DF1E', size: 32, x: 30, y: 60 },
        { Icon: FaSass, color: '#CC6699', size: 34, x: 40, y: 15 },
        { Icon: SiVite, color: '#646CFF', size: 32, x: 60, y: 25 },
        { Icon: FaHtml5, color: '#E34F26', size: 34, x: 20, y: 30 },
        { Icon: FaCss3Alt, color: '#1572B6', size: 34, x: 40, y: 55 },
        { Icon: FaBootstrap, color: '#7952B3', size: 32, x: 55, y: 45 },
        { Icon: FaNodeJs, color: '#339933', size: 32, x: 25, y: 45 },
        { Icon: FaWordpress, color: '#21759B', size: 30, x: 15, y: 75 },
        { Icon: FaGithub, color: '#ffffff', size: 32, x: 45, y: 20 },
        { Icon: SiVercel, color: '#ffffff', size: 28, x: 55, y: 40 },
        { Icon: FaNpm, color: '#CB3837', size: 34, x: 10, y: 50 },
        { Icon: SiMongodb, color: '#339933', size: 32, x: 50, y: 65 },
        { Icon: FaFigma, color: '#F24E1E', size: 28, x: 90, y: 40 },
        { Icon: FaDatabase, color: '#ffffff', size: 28, x: 35, y: 45 },
        { Icon: SiNetlify, color: '#00C7B7', size: 32, x: 35, y: 20 },
        { Icon: SiPostman, color: '#E34F26', size: 34, x: 20, y: 55 },
        { Icon: SiJest, color: '#C21325', size: 30, x: 20, y: 15 },
        { Icon: SiGit, color: '#F05032', size: 32, x: 25, y: 35 },
    ];

    return (
        <div className="w-[90%]  h-[50vh] lg:w-[45%] lg:h-[75vh] relative -z-1" >
            {/* Animated icons */}
            {icons.map((icon, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={{
                        left: `${icon.x}%`,
                        top: `${icon.y}%`,
                        color: icon.color,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                        scale: 1, 
                        opacity: 0.9,
                        // Increased movement range (was 8, now 15)
                        x: [0, Math.random() * 15 - 7.5, 0],
                        y: [0, Math.random() * 15 - 7.5, 0],
                    }}
                    transition={{
                        scale: { duration: 0.5, delay: index * 0.05 },
                        opacity: { duration: 0.5, delay: index * 0.05 },
                        x: { 
                            repeat: Infinity, 
                            repeatType: "reverse", 
                            duration: 2.5 + Math.random() * 1.5,
                        },
                        y: { 
                            repeat: Infinity, 
                            repeatType: "reverse", 
                            duration: 3 + Math.random() * 1.5,
                        }
                    }}
                    whileHover={{ 
                        scale: 1.2, 
                        opacity: 1,
                        transition: { duration: 0.2 }
                    }}
                >
                    <icon.Icon size={icon.size} />
                </motion.div>
            ))}
        </div>
    );
};

export default Iconmition;