import React from 'react';
// Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobephotoshop,
  SiBootstrap,
  SiExpress,
  SiGithub,
  SiTailwindcss
} from "react-icons/si";


// Skills Data
const skillsData = [
  {
    icon: <FaHtml5/>,
    title: 'HTML',
    description: 'Tag:(nav, section, article, aside, footer, header, main)',
  },
  {
    icon: <FaCss3 />,
    title: 'CSS',
    description: 'CSS Grid, Flexbox, Media Queries, CSS Variables, CSS Animations',
  },
  {
    icon: <FaJs />,
    title: 'JavaScript',
    description: 'javascript ES6, DOM Manipulation, Fetch API, Async/Await, OOP',
  },
  {
    icon: <FaReact />,
    title: 'React',
    description: 'React Hooks, Context API, Redux, Statless Components, React Router',
  },
  {
    icon: <SiTailwindcss />,
    title: 'Tailwindcss',
    description: 'The process of making your site better for search engines.',
  },
  {
    icon: <FaNodeJs />,
    title: 'Node.js',
    description: 'Node.js is a JavaScript runtime built on Chrome V8 JavaScript engine.',
  },
  {
    icon: <SiExpress />,
    title: 'Express.js',
    description: 'Express is a minimal and flexible Node.js web application framework.',
  },
    {
    icon: <SiNextdotjs />,
    title: 'Next.js',
    description: 'Nextk.js is a React framework that enables functionality ',
  },
  {
    icon: <SiGithub />,
    title: 'GitHub',
    description: 'Github is a web-based platform used for version control.',
  },
  {
    icon: <SiFramer/>,
    title: 'Framer',
    description: 'Framer Motion is a production-ready motion library for React.',
  },
  ,
  {
    icon: <SiBootstrap/>,
    title: 'Bootstrap',
    description: 'Framer Motion is a production-ready motion library for React.',
  },
  
  
];


const Skills = () => {
  return (
    <div>
      Skills
    </div>
  );
};

export default Skills;
