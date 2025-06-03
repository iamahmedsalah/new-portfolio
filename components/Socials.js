import Link from "next/link";

// Icons
import { RiInstagramLine } from "react-icons/ri";
import { TbBrandHackerrank } from "react-icons/tb";
import { FiLinkedin, FiGithub, FiFacebook } from "react-icons/fi";

import { motion } from 'framer-motion';
import { staggerContainer, container } from '../variants';





const Socials = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="text-primary bg-base-300 p-4 rounded-full shadow-xl "
    >
      <motion.ul className="flex items-center gap-x-5 xl:flex-row xl:gap-y-5 ">
        <motion.li variants={staggerContainer}>
          {" "}
          <Link
            href={"https://www.facebook.com/iamahmedsoliman/"}
            className="w-5 text-2xl hover:text-sky-700 "
          >
            <FiFacebook className="hover:scale-125 duration-200" />
          </Link>
        </motion.li>
        <motion.li variants={staggerContainer}>
          {" "}
          <Link
            href={""}
            className="w-5 text-2xl hover:text-pink-500 "
          >
            <RiInstagramLine className="hover:scale-125 duration-200" />
          </Link>
        </motion.li>
        <motion.li variants={staggerContainer}>
          <Link
            href={""}
            className="w-5 text-2xl hover:text-green-700 "
          >
            <TbBrandHackerrank className="hover:scale-125 duration-200" />
          </Link>
        </motion.li>
        <motion.li variants={staggerContainer}>
          {" "}
          <Link
            href={"https://github.com/iamahmedsalah"}
            className="w-5 text-2xl hover:text-slate-500 "
          >
            <FiGithub className="hover:scale-125 duration-200" />
          </Link>
        </motion.li>
        <motion.li variants={staggerContainer}>
          {" "}
          <Link
            href={"https://www.linkedin.com/in/iamahmedsoliman/"}
            className="w-5 text-2xl hover:text-sky-700 "
          >
            <FiLinkedin className="hover:scale-125 duration-200" />
          </Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Socials;
