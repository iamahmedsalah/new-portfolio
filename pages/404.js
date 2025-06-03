import React from "react";
import { motion } from "framer-motion";
import {  staggerContainer ,container } from '../variants'


const text = '404'

const notFound = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className=" mt-5 xl:mt-20"
    >
      <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <motion.h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-amber-500"> 
            {text.split("").map((char, index) => (
              <motion.span variants={staggerContainer} key={index}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            variants={staggerContainer}
            className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl text-primary  "
          >
            Page is missing.
          </motion.p>
          <motion.p
            variants={staggerContainer}
            className="mb-4 text-lg font-light text-primary  "
          >
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.
          </motion.p>
          <motion.button variants={staggerContainer} onClick={()=> {window.history.back()}}
          className="bg-base-300 shadow-xl mt-12 xl:mt-0 text-center w-48 rounded-full h-14 relative  cursor-pointer text-xl font-semibold group"
          type="button" 
        >
          <div className="bg-amber-500 rounded-full h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="25px"
              width="25px"
            >
              <path
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                fill="#000000"
              ></path>
              <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <p className="translate-x-2 text-primary ">Go Back</p>
        </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default notFound;
