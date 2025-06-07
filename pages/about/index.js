import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGraduationCap, FaBriefcase, FaCode, FaTools, FaAward, FaLink,
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt,
  FaDatabase, FaFigma, FaServer, FaGithub, FaNpm, FaPalette,
  FaUsers, FaPencilAlt, FaMobileAlt, FaBolt,
  FaUniversalAccess, FaSearch, FaClipboardList, FaFileAlt
} from 'react-icons/fa';
import {
  SiNextdotjs, SiRedux, SiTypescript, SiMongodb,
  SiTailwindcss, SiExpress, SiGraphql, SiFirebase,
  SiJest,  SiReactrouter,SiMongoose
} from 'react-icons/si';

import { PiXCircleFill } from "react-icons/pi";
import Image from 'next/image';


import { containerVariants, itemVariants } from '../../variants'
// CV
import CvBtn from '@/components/CvBtn';


// Add this after your imports
const getSkillIcon = (skill) => {
  const icons = {
    'React': { icon: FaReact, color: '#61DAFB' },
    'Redux': { icon: SiRedux, color: '#764ABC' },
    'Hooks': { icon: FaReact, color: '#61DAFB' },
    'Next.js': { icon: SiNextdotjs, color: '#000000' },
    'JavaScript': { icon: FaJs, color: '#F7DF1E' },
    'Algorithms': { icon: FaCode, color: '#007ACC' },
    'Data Structures': { icon: FaDatabase, color: '#4DB33D' },
    'HTML/CSS': { icon: FaHtml5, color: '#E34F26' },
    'HTML': { icon: FaHtml5, color: '#E34F26' },
    'CSS': { icon: FaCss3Alt, color: '#1572B6' },
    'Node.js': { icon: FaNodeJs, color: '#339933' },
    'Express': { icon: SiExpress, color: '#000000' },
    'MongoDB': { icon: SiMongodb, color: '#47A248' },
    'Figma': { icon: FaFigma, color: '#F24E1E' },
    'UI Design': { icon: FaPalette, color: '#FF7262' },
    'UX Research': { icon: FaUsers, color: '#0ACF83' },
    'Wireframing': { icon: FaPencilAlt, color: '#7B61FF' },
    'TypeScript': { icon: SiTypescript, color: '#3178C6' },
    'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
    'Git': { icon: FaGitAlt, color: '#F05032' },
    'GitHub': { icon: FaGithub, color: '#181717' },
    'REST APIs': { icon: FaServer, color: '#FF6C37' },
    'GraphQL': { icon: SiGraphql, color: '#E10098' },
    'Firebase': { icon: SiFirebase, color: '#FFCA28' },
    'Testing (Jest)': { icon: SiJest, color: '#C21325' },
    'Responsive Design': { icon: FaMobileAlt, color: '#5EDDAF' },
    'Performance Optimization': { icon: FaBolt, color: '#FFD700' },
    'Web Accessibility': { icon: FaUniversalAccess, color: '#0076FF' },
    'Mongoose': { icon: SiMongoose, color: '#5EDDAF' },
    'SEO Basics': { icon: FaSearch, color: '#47B749' },
    'Agile/Scrum': { icon: FaClipboardList, color: '#00AFB9' },
    'Technical Writing': { icon: FaFileAlt, color: '#A259FF' },
    'React Router': { icon: SiReactrouter, color: '#CA4245' },
  };

  return icons[skill] || { icon: FaCode, color: '#666666' }; // Default icon if not found
};

// About page tabs
const tabs = [
  { id: 'personal', label: 'Personal', icon: <FaGraduationCap /> },
  { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
  { id: 'skills', label: 'Technical', icon: <FaCode /> },
  { id: 'certifications', label: 'Certifications', icon: <FaAward /> },
];


//  custom image loader function
const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

// Sample certifications
const certifications = [
  {
    id: 1,
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta (Coursera)",
    date: "October 2022",
    credentialId: "Z27S82C4K3M3",
    image: "/certifications/meta-web.png",
    skills: ["React", "React Router", "Hooks", "Tailwind CSS" ,"Figma", "UI Design", "UX Research", "Wireframing"],
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/Z27S82C4K3M3",
  },
  {
    id: 2,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "October 2023",
    credentialId: "FCC-123456789",
    image: "/certifications/js-cerft.png",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
    url: "https://www.freecodecamp.org/certification/iamahmedsoliman/javascript-algorithms-and-data-structures",  },
  {
    id: 3,
    title: "Professional Front-End Web Developmentt",
    issuer: "MCIT & Udacity",
    date: "December 2021",
    credentialId: "9HGC2GKZ",
    image: "/certifications/egfwd-web.png",
    skills: ["HTML/CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    url: "https://drive.google.com/file/d/1rIa72YPPtXXCez4Cax6GDFg8eWZafxoe/view",
  },
  {
    id: 4,
    title: "MongoDB Node.js Developer ",
    issuer: "MongoDB University",
    date: "November 2023",
    credentialId: "MDByhy1jxg89m",
    image: "/certifications/mongoDb.png",
    skills: ["MongoDB", "Node.js", "MongoDB", "Mongoose" ],
    url: "https://learn.mongodb.com/c/mbpSXWBuQKeHTw6YtBeNzQ",
  },
];


const experienceData = [
  {
    id: 1,
    role: "Web Developer",
    company: "Digital Agency ( One time project) ",
    period: "Mar  2023 - Dec 2023",
    description: "Developed responsive websites and web applications for various clients. Collaborated with designers and backend developers to implement full-stack solutions.",
    icnos: ["JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    role: "CIB Intern",
    company: "CIB Bank Learning Academy",
    period: "May 2022 - Jul 2022",
    description: "Assisted in building UI components and implementing designs. Gained hands-on experience with modern JavaScript frameworks and best practices.",
    icnos: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    id: 3,
    role: "Video Editor",
    company: "Digital agency",
    period: "May 2025 - Present",
    description: "specialized software to cut, trim, and arrange footage, add special effects, graphics, and audio, and ensure the video meets the desired vision.   .",
    icnos: ["React", "Next.js", "Tailwind CSS", "Git"]
  }
];

// Personal data
const personalDate = {
  birthday: "1 Oct 1998",
  phone: "+20 1552752823",
  email: "iamahmedslahios@gmaill.com",
  location: "Alexandria, Egypt",
  languages: ["English", "Arabic"],
  experience: "2+ Years",
  available: "For Hire",
  name: "Ahmed Soliman",
  title: "Frontend Developer",
  image: "/Avatar-1.png",
  education: [
    {
      degree: "Bachelor of Management Information Systems",
      institution: "Faculty of commerce - Alexandria University",
      year: "Jan 2019 - Sep 2023",
      description: "Graduated with a general grade: very good - GPA 3.15."
    },
    {
      degree: "Professional Front-End Web Development",
      institution: "Egfwd & Udacity - Nanodegree Program",
      year: "Feb 2022",
      description: "Intensive 4-week program focusing on web development technologies."
    }
  ]
}


const About = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-info mb-4">
            About <span className='text-accent mx-1 animate-pulse'>Me.</span>
          </h1>
          <p className="text-primary max-w-2xl mx-auto">
            Get to know more about my journey, skills, and qualifications as a web developer.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Profile Image and Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-base-300/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
              {/* Profile Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={personalDate.image}
                  alt="Ahmed Soliman"
                  loader={imageLoader}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="hover:scale-105 transition-transform duration-500 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-300/80 to-transparent"></div>
              </div>

              {/* Profile Quick Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-2 text-center">{personalDate.name}</h2>
                <p className="text-accent mb-4 text-center">{personalDate.title}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-info">Location:</span>
                    <span className="text-primary">{personalDate.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-info">Experience:</span>
                    <span className="text-primary">{personalDate.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-info">Available:</span>
                    <span className="text-green-500">{personalDate.available}</span>
                  </div>
                </div>

                {/* CV Download Button */}
                <CvBtn />
              </div>
            </div>

            {/* Personal Details */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-base-300/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 mt-6"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Personal Details</h3>

              <div className="space-y-4">
                <motion.div variants={itemVariants} className="flex justify-between">
                  <span className="text-info">Birthday:</span>
                  <span className="text-primary">{personalDate.birthday}</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex justify-between">
                  <span className="text-info">Phone:</span>
                  <span className="text-primary">{personalDate.phone}</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex justify-between">
                  <span className="text-info">Email:</span>
                  <span className="text-primary break-all">{personalDate.email}</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex justify-between">
                  <span className="text-info">Languages:</span>
                  <span className="text-primary m">{personalDate.languages[0]} {personalDate.languages[1]} </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Tabs Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            {/* Tabs Navigation */}
            <div className="flex overflow-x-auto mb-8 pb-2 no-scrollbar justify-center">
              <div className="flex space-x-2">
                {tabs.map(tab => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 cursor-pointer  ${activeTab === tab.id
                      ? "bg-accent text-base-100 shadow-md "
                      : "bg-base-300/70 text-primary hover:bg-accent/20"
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-base-300/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeTab === 'personal' && (
                  <motion.div
                    key="personal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-primary mb-4">About Me</h3>
                    <div className="space-y-4 text-primary">
                      <p>
                        Hello! I&apos;m Ahmed, a passionate frontend developer with expertise in building modern,
                        responsive web applications. My journey in web development started in 2019, and I&apos;ve
                        been constantly learning and improving my skills since then.
                      </p>
                      <p>
                        I specialize in React ecosystem and modern JavaScript. My goal is to create
                        clean, efficient, and user-friendly interfaces that provide exceptional user experiences.
                      </p>
                      <p>
                        When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                        projects, or sharing my knowledge through technical articles and tutorials.
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-primary mt-8 mb-4">Education</h3>
                    <div className="space-y-6">
                      {personalDate.education.map((edu, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: index * 0.1 }
                          }}
                          className="border-l-2 border-accent/30 pl-4"
                        >
                          <h4 className="text-lg font-semibold text-primary">{edu.degree}</h4>
                          <p className="text-accent mb-1">{edu.institution}</p>
                          <span className="text-gray-400 text-sm">{edu.year}</span>
                          <p className="text-gray-400 mt-2">{edu.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'experience' && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-primary mb-6">Work Experience</h3>
                    <div className="space-y-8">
                      {experienceData.map((job, index) => (
                        <motion.div
                          key={job.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: index * 0.1 }
                          }}
                          className="relative pl-6 border-l-2 border-accent/30"
                        >
                          <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1"></div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                            <h4 className="text-lg font-semibold text-primary">{job.role}</h4>
                            <span className="text-accent text-sm bg-accent/10 px-3 py-1 rounded-full mt-1 sm:mt-0">
                              {job.period}
                            </span>
                          </div>
                          <p className="text-accent mb-2">{job.company}</p>
                          <p className="text-gray-400 mb-3">{job.description}</p>
                          <div className="flex flex-wrap gap-2">

                            {/* {job.icnos.map((tech, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-base-300 text-primary px-3 py-1 rounded-full"
                              >
                                {tech}
                              </span>
                            ))} */}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-primary mb-6">Technical Skills</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                          <FaCode className="text-accent" /> Frontend
                        </h4>
                        <div className="space-y-6">
                          {[
                            { name: 'JavaScript', icon: FaJs, level: 90, color: '#F7DF1E' },
                            { name: 'React', icon: FaReact, level: 90, color: '#61DAFB' },
                            { name: 'Next.js', icon: SiNextdotjs, level: 80, color: '#151515' },
                            { name: 'TypeScript', icon: SiTypescript, level: 55, color: '#3178C6' },
                            { name: 'HTML/CSS', icon: FaHtml5, level: 90, color: '#E34F26' },
                            { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' }
                          ].map((skill, index) => (
                            <motion.div
                              key={index}
                              className="space-y-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <motion.div
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ color: skill.color }}
                                    className="text-xl"
                                  >
                                    <skill.icon />
                                  </motion.div>
                                  <span className="text-primary">{skill.name}</span>
                                </div>
                                <span className="text-primary font-medium">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="w-full h-2 bg-base-200 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: index * 0.1 }}
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: `${skill.color}CC` }} // CC for 80% opacity
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                          <FaTools className="text-accent" /> Backend & Tools
                        </h4>
                        <div className="space-y-6">
                          {[
                            { name: 'Node.js', icon: FaNodeJs, level: 80, color: '#339933' },
                            { name: 'Express', icon: SiExpress, level: 75, color: '#339933' },
                            { name: 'MongoDB', icon: SiMongodb, level: 70, color: '#47A248' },
                            { name: 'Git/GitHub', icon: FaGitAlt, level: 85, color: '#F05032' },
                            { name: 'REST APIs', icon: FaServer, level:70, color: '#06B6D4' },
                            { name: 'Figma', icon: FaFigma, level: 75, color: '#F24E1E' }
                          ].map((skill, index) => (
                            <motion.div
                              key={index}
                              className="space-y-2"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <motion.div
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ color: skill.color }}
                                    className="text-xl"
                                  >
                                    <skill.icon />
                                  </motion.div>
                                  <span className="text-primary">{skill.name}</span>
                                </div>
                                <span className="text-accent font-medium">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="w-full h-2 bg-base-200 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: index * 0.1 }}
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: `${skill.color}CC` }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h4 className="text-lg font-semibold text-primary mb-4">Other Skills</h4>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { name: 'Responsive Design', icon: FaMobileAlt, color: '#5EDDAF' },
                          { name: 'Performance Optimization', icon: FaBolt, color: '#FFD700' },
                          { name: 'Web Accessibility', icon: FaUniversalAccess, color: '#0076FF' },
                          { name: 'UI/UX Design', icon: FaPalette, color: '#FF7262' },
                          { name: 'Testing (Jest)', icon: SiJest, color: '#C21325' },
                          { name: 'Redux', icon: SiRedux, color: '#764ABC' },
                          { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
                          { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
                          { name: 'SEO Basics', icon: FaSearch, color: '#47B749' },
                          { name: 'Agile/Scrum', icon: FaClipboardList, color: '#00AFB9' },
                          { name: 'Technical Writing', icon: FaFileAlt, color: '#A259FF' }
                        ].map((skill, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              transition: { delay: index * 0.05 }
                            }}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: `rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.1)`,
                              color: skill.color
                            }}
                            className="px-3 py-1  text-primary rounded-full text-sm flex items-center gap-1.5 cursor-pointer "
                          >
                            <skill.icon size={14} style={{ color: skill.color }} />
                            {skill.name}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'certifications' && (
                  <motion.div
                    key="certifications"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-6">Certifications & Courses</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={cert.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: index * 0.1 }
                          }}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedCert(cert)}
                          className="bg-base-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                        >
                          <div className="h-40 relative overflow-hidden">
                            <div
                              className="absolute inset-0 bg-gray-800"
                              style={{
                                backgroundImage: `url(${cert.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-base-300/80 via-base-300/30 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                              <h4 className="text-base-200/90 font-semibold">{cert.title}</h4>
                              <p className="text-primary text-sm">{cert.issuer}</p>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-primary text-sm">{cert.date}</span>
                              <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                                Certificate
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {cert.skills.slice(0, 3).map((skill, idx) => {
                                const { icon: Icon, color } = getSkillIcon(skill);
                                return (
                                  <motion.span
                                    key={idx}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-1 text-xs bg-accent/10 text-primary px-2 py-1 rounded-full"
                                  >
                                    <Icon style={{ color }} size={12} />
                                    <span>{skill}</span>
                                  </motion.span>
                                );
                              })}
                              {cert.skills.length > 3 && (
                                <motion.span
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  className="text-xs bg-base-300 text-primary px-2 py-1 rounded-full"
                                >
                                  +{cert.skills.length - 3}
                                </motion.span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Certification Modal */}
                    <AnimatePresence>
                      {selectedCert && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 rounded-2xl backdrop-blur-md"
                          onClick={() => setSelectedCert(null)}
                        >
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-base-300 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                          >
                            <div className="h-48 sm:h-64 relative">
                              <div
                                className="absolute inset-0"
                                style={{
                                  backgroundImage: `url(${selectedCert.image})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center'
                                }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-t from-base-300 via-base-300/40 to-transparent"></div>
                              </div>
                              <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 cursor-pointer right-4 bg-base-300/80 text-primary w-8 h-8 rounded-full flex items-center justify-center hover:bg-accent/50 hover:text-base-100/70 transition-colors duration-200"
                              >
                                <PiXCircleFill  size={32} />
                              </button>
                            </div>

                            <div className="p-6">
                              <h3 className="text-2xl font-bold text-primary mb-2">
                                {selectedCert.title}
                              </h3>
                              <p className="text-primary mb-4">{selectedCert.issuer} • {selectedCert.date}</p>

                              <div className="space-y-4 mb-6">
                                <div>
                                  <h4 className="text-sm text-accent mb-1">Credential ID</h4>
                                  <p className="text-primary">{selectedCert.credentialId}</p>
                                </div>

                                <div>
                                  <h4 className="text-sm text-primary mb-1">Skills</h4>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {selectedCert.skills.map((skill, idx) => {
                                      const { icon: Icon, color } = getSkillIcon(skill);
                                      return (
                                        <motion.span
                                          key={idx}
                                          initial={{ opacity: 0, y: 10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ delay: idx * 0.05 }}
                                          className="flex items-center gap-2 text-sm bg-accent/10 text-primary px-3 py-1 rounded-full"
                                        >
                                          <Icon style={{ color }} size={16} />
                                          <span>{skill}</span>
                                        </motion.span>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>

                              <a
                                href={selectedCert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-accent text-base-100 px-5 py-2 rounded-full hover:bg-accent/20 hover:text-info transition-colors duration-200"
                              >
                                <FaLink />
                                <span>View Certificate</span>
                              </a>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;