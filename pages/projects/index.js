import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { TbApi } from "react-icons/tb";
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs,
  SiExpress, SiMongodb, SiBootstrap, SiHandlebarsdotjs, 
  SiVite, SiRender,SiMockserviceworker, SiChartdotjs, SiFramer,
  SiVercel
} from 'react-icons/si';


import {containerVariants ,cardVariants } from '../../variants'

// Project data with categories
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Full-stack e-commerce was a graduation project that includes user authentication, product management, and a shopping cart.",
    image: "/projects/graduation-project.png",
    category: "fullstack",
    technologies: ["Handlebarsjs", "Express", "MongoDB", "Bootstrap", "OnRender"],
    techIcons: [SiHandlebarsdotjs, SiExpress, SiMongodb, SiBootstrap, SiRender],
    demoLink: "https://toy-toon.onrender.com/",
    githubLink: "https://github.com/iamahmedsalah/Toy-Toon-Full-Stack",
    note: "This project is hosted on Render free tier, so it may take a few seconds to load the first time.",
  },
  {
    id: 2,
    title: "Authnication System",
    description: "A full-stack suthnication system with user authentication, and progress tracking password.",
    image: "/projects/auth-shot.png",
    category: "fullstack",
    technologies: ["vite.js", "Node.js", "MongoDB", "Tailwind CSS", "Express" ,"API Integration"],
    techIcons: [SiVite, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress ,SiVercel],
    demoLink: "https://auth-mern-gilt.vercel.app",
    githubLink: "https://github.com/iamahmedsalah/AUTH-MERN",
    note: "Tested in locahost work good but in vercel depoly have a problem can fixed .",
  },
  {
    id: 3,
    title: "CureHub Dashboard",
    description: " A modern and responsive dashboard for managing healthcare appointments, patient records, and analytics.",
    image: "/projects/curehub-task.png",
    category: "frontend",
    technologies: ["vite.js", "React", "Tailwind CSS", "Framer Motion , rechart.js"],
    techIcons: [SiVite, SiReact, SiTailwindcss, SiFramer, SiChartdotjs ,SiVercel],
    demoLink: "https://cure-hub-task.vercel.app/",
    githubLink: "https://github.com/iamahmedsalah/cure-hub-task",
    note: "UI Figma Task from CodeZone Co.",
  },
  {
    id: 4,
    title: "Weatherly ",
    description: "A weatherthat provides real-time weather updates, forecasts, and location-based weather information.",
    image: "/projects/weatherly.png",
    category: "frontend",
    technologies: ["React", "Node.js", "Weather API" ,"Tailwind CSS"],
    techIcons: [ SiNextdotjs,SiReact, SiNodedotjs, TbApi,SiVercel],
    demoLink: "https://weatherly-five-pi.vercel.app/",
    githubLink: "https://github.com/iamahmedsalah/Weatherly",
  },
  {
    id: 5,
    title: "Movie Browser",
    description: "A responsive movie browsing application with search, filtering, and user reviews functionality.",
    image: "/projects/dashborad-shot.png",
    category: "frontend",
    technologies: ["React", "MockAPI Integration", "Styled Components"],
    techIcons: [ SiVite,SiReact , TbApi, SiTailwindcss, SiVercel],
    demoLink: "https://dashborad-front-end.vercel.app/login",
    githubLink: "https://github.com/iamahmedsalah/DASHBORAD-FRONT-END",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Filter projects based on active tab
  const filteredProjects = activeTab === "all"
    ? projectsData
    : projectsData.filter(project => project.category === activeTab);


  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-info"
        >
          My <span className='text-accent mx-1 animate-pulse'>Projects.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base md:text-lg text-center text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Explore my latest web development projects, from responsive frontends to full-stack applications
        </motion.p>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {["all", "frontend", "fullstack"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm  transition-all duration-300 cursor-pointer shadow-md ${activeTab === tab
                ? "bg-accent text-base-100 shadow-md"
                : "bg-base-300 text-primary hover:bg-accent/30 hover:text-white/80"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab === "all" ? "All Projects" : tab === "frontend" ? "Front-End" : "Full-Stack"}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="bg-base-300 rounded-xl overflow-hidden shadow-lg group relative "
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-gray-800"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2 text-accent">
                    <h3 className="text-xs lg:text-lg font-bold">{project.title}</h3>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs">
                      {project.category === "frontend" ? "Front-End" : "Full-Stack"}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm h-20 overflow-hidden">
                    {project.description}
                  </p>

                  {/* Tech Icons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techIcons.map((Icon, index) => (
                      <div key={index} className="text-gray-400">
                        <Icon size={20} />
                      </div>
                    ))}
                  </div>

                  {/* Hover Action Buttons */}
                  <motion.div
                    className={`absolute inset-0 bg-base-100/50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  >
                    {/* Animated tech icons wrapper */}
                    <div className="relative w-24 h-24 mb-12 animate-spin-slow">
                      <AnimatePresence>
                        {hoveredProject === project.id && project.techIcons.map((Icon, idx) => {
                          // Calculate positions in a circle around the center
                          const angle = (idx * (360 / project.techIcons.length)) * (Math.PI / 180);
                          const radius = 40; // Distance from center
                          const x = Math.cos(angle) * radius;
                          const y = Math.sin(angle) * radius;

                          return (
                            <motion.div
                              key={`tech-${idx}`}
                              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                              animate={{
                                opacity: 0.9,
                                scale: 1,
                                x: x,
                                y: y,
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0,
                                transition: { duration: 0.2 }
                              }}
                              transition={{
                                delay: 0.1 + (idx * 0.08),
                                duration: 0.3,
                                type: "spring",
                                stiffness: 200
                              }}
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100/50 p-2 rounded-full shadow-lg"
                              style={{ color: project.category === "frontend" ? "#61DAFB" : "#F9DC3E" }}
                            >
                              <Icon size={18} />
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-base-100 px-5 py-3 rounded-full flex items-center gap-2 shadow-xl hover:bg-accent/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-base-300 text-primary px-5 py-3 rounded-full flex items-center gap-2 hover:bg-accent/30 shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub />
                        Code
                      </motion.a>
                    </div>


                    {/* Note if exists */}
                    <div className="text-xs text-primary text-left mt-7 px-4">
                      {project.note && (
                        <p>
                          <span className="text-accent">Note:</span> {project.note}
                        </p>
                      )}
                    </div>

                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-400">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;