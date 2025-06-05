import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiUser, HiRectangleGroup, HiViewColumns, HiEnvelope } from 'react-icons/hi2';
import Logo from '../public/logo.png'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, container } from '../variants'



export const navbarLinks = [
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'skills', path: '/skills', icon: <HiRectangleGroup /> },
    { path: '/', icon: <Image priority={true} src={Logo} alt='A logo' className='animate-spin-slow' width={70} height={70} /> },
    { name: 'projects', path: '/projects', icon: <HiViewColumns /> },
    {name: 'contact', path: '/contact', icon: <HiEnvelope />,},

]


const Navbar = () => {
    const router = useRouter();
    const pathname = router.pathname
    return (
        <motion.nav
            variants={container}
            initial="hidden"
            animate="show"
            className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max 
        bottom-0 mt-auto  xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>
            {/* inner */}
            <motion.ul className='flex items-center text-primary w-full xl:flex-col justify-between xl:justfiy-center gap-y-10 px-4 
    md:px-40 xl:px-0 h-[80px] xl:h-max py-8 text-3xl xl:text-xl xl:rounded-full bg-base-300 shadow-xl '>
                {navbarLinks.map((link, index) => {
                    return <motion.li
                        key={index}
                        variants={staggerContainer}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.2 },
                        }}>
                        <Link className={`${link.path === pathname && 'text-amber-500'}  
        relative flex items-center group hover:text-amber-500 transition`}
                            href={link.path}>
                            {/* tooltip */}
                            <div className=' absolute pr-15 right-0 hidden xl:group-hover:flex'>
                                <div className={`bg-base-300 reletive text-amber-500 flex items-center px-5 rounded-[30px] ${link.name ? 'py-2' : ''}`}>
                                    <div className='text-[15px] font-semibold capitalize'>
                                        {link.name}
                                    </div>
                                </div>
                            </div>
                            {/* icons */}
                            <div> {link.icon} </div>
                        </Link>
                    </motion.li>
                })}
            </motion.ul>
        </motion.nav>
    );
};

export default Navbar;