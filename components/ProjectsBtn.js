import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const ProjectsBtn = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      animate="show"
      className="mx-auto xl:mx-0">
      <Link
        href="/projects"
        className="relative flex justify-center items-center group z-10  "
      >
        {/* Spinning text image */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px]"
        >
          <Image
            src="/rounded-text.png"
            width={135}
            height={135}
            priority={true}
            alt="Projects"
            className="w-full h-full"
          />
        </motion.div>

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


        {/* Inner circle */}
        <div className="absolute inset-0 flex items-center justify-center   ">
          <motion.div
            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] 
                      rounded-full bg-base-300/85 flex items-center justify-center  
                      border-2 border-amber-500 hover:bg-amber-500  hover:text-base-100
                      transition-colors duration-300 ease-in-out text-accent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <HiArrowRight className=" text-xl sm:text-2xl " />
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectsBtn;