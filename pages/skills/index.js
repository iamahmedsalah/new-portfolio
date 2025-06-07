import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs,
  FaGithub, FaNpm, FaFigma, FaSass, FaBootstrap, FaDatabase,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiTypescript,
  SiFirebase, SiMongodb, SiGraphql, SiRedux, SiFramer,
  SiVite, SiVercel, SiExpress ,SiGithubcopilot
} from 'react-icons/si';
import { TbBrandVscode } from "react-icons/tb";


// Skill categories with icons and proficiency levels
const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB", level: 95 },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 90 },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 95 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 55 },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 98 },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 95 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 92 },
      { name: "Framer Motion", icon: SiFramer, color: "#F7DF1E", level: 75 },
      { name: "Redux", icon: SiRedux, color: "#764ABC", level: 65 },
      { name: "Sass", icon: FaSass, color: "#CC6699", level: 88 },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", level: 90 },
      { name: "Vite", icon: SiVite, color: "#646CFF", level: 80 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 80 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 75 },
      { name: "SQL", icon: FaDatabase, color: "#00758F", level: 55 },
      { name: "Express", icon: SiExpress, color: "#fff", level: 75 },
      // { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 85 },
      // { name: "GraphQL", icon: SiGraphql, color: "#E10098", level: 70 },
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", icon: FaGithub, color: "#fff", level: 90 },
      { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#CC6699", level: 90 },
      { name: "npm", icon: FaNpm, color: "#CB3837", level: 92 },
      { name: "Vs Code", icon: TbBrandVscode, color: "#1572B6", level: 92 },
      { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 85 },
      { name: "Vercel", icon: SiVercel, color: "#fff", level: 88 },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const activeSkills = skillsData.find(cat => cat.category === activeCategory)?.skills || [];

  // Mini icons positions for hover effect
  const miniIconPositions = [
    { x: -20, y: -20, delay: 0, size: 12 },
    { x: 20, y: -25, delay: 0.1, size: 14 },
    { x: 30, y: 5, delay: 0.2, size: 10 },
    { x: 15, y: 25, delay: 0.15, size: 12 },
    { x: -25, y: 20, delay: 0.25, size: 13 },
    { x: -35, y: 0, delay: 0.05, size: 11 },
  ];

  return (
    <section className="py-12 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1000px] mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-8 "
        >
          Technical
          <span className='text-accent mx-1 animate-pulse'>Skills.</span> 
        </motion.h2>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {skillsData.map((category) => (
            <motion.button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm transition-all duration-300 cursor-pointer shadow-md ${activeCategory === category.category
                ? "bg-accent text-base-100 shadow-lg"
                : "bg-base-300 text-primary hover:bg-accent/30 hover:text-white/70  hover:shadow-lg"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
          key={activeCategory}
        >
          {activeSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="bg-base-300 rounded-xl p-6 flex flex-col items-center hover:bg-accent/30 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Mini icons that appear on hover */}
              <AnimatePresence>
                {hoveredSkill === skill.name && miniIconPositions.map((pos, idx) => (
                  <motion.div
                    key={`mini-${idx}`}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{ 
                      opacity: 0.7, 
                      scale: 1,
                      x: pos.x, 
                      y: pos.y,
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0,
                      transition: { duration: 0.2 } 
                    }}
                    transition={{ 
                      delay: pos.delay, 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="absolute"
                    style={{ 
                      color: skill.color,
                      top: "50%",
                      left: "50%",
                    }}
                  >
                    <skill.icon size={pos.size} />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Main skill icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1
                }}
                className="w-16 h-16 flex items-center justify-center rounded-full mb-4 relative z-10"
                style={{ color: skill.color }}
              >
                <skill.icon size={42} />
              </motion.div>

              {/* Skill name and progress bar */}
              <h3 className="text-lg font-medium text-primary mb-3 z-10">{skill.name}</h3>
              <div className="w-full bg-base-300 h-3 rounded-full overflow-hidden z-10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: skill.color,
                    opacity: 0.8
                  }}
                />
              </div>
              <p className="text-xs text-primary mt-2 font-medium z-10">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating background elements */}
      <div className="hidden md:block -z-20">
        {[
          { top: "15%", left: "20%", width: "80px", height: "80px", xMove: [-30, 30], yMove: [-20, 20], scale: [0.7, 1], duration: 15 },
          { top: "25%", left: "75%", width: "120px", height: "120px", xMove: [20, -20], yMove: [30, -30], scale: [0.8, 0.9], duration: 18 },
          { top: "60%", left: "15%", width: "100px", height: "100px", xMove: [-40, 40], yMove: [15, -15], scale: [0.6, 0.8], duration: 16 },
          { top: "75%", left: "65%", width: "70px", height: "70px", xMove: [25, -25], yMove: [-25, 25], scale: [0.5, 0.7], duration: 20 },
          { top: "85%", left: "40%", width: "90px", height: "90px", xMove: [-20, 20], yMove: [20, -20], scale: [0.7, 0.9], duration: 17 },
        ].map((elem, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            initial={{
              x: elem.xMove[0],
              y: elem.yMove[0],
              scale: elem.scale[0],
            }}
            animate={{
              x: elem.xMove[1],
              y: elem.yMove[1],
              scale: elem.scale[1],
            }}
            transition={{
              duration: elem.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              top: elem.top,
              left: elem.left,
              width: elem.width,
              height: elem.height,
              backgroundColor: activeSkills[i % activeSkills.length].color || "#ffffff",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;