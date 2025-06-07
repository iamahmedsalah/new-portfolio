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
    { name: 'skills', path: '/skills', icon: <HiViewColumns /> },
    { path: '/', icon: <Image priority={true} src={Logo} alt='A logo' className='animate-spin-slow' width={70} height={70} /> },
    { name: 'projects', path: '/projects', icon: <HiRectangleGroup /> },
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
            className='fixed bottom-0 w-full z-50 
            xl:bottom-auto xl:right-[2%] xl:top-0 xl:w-16 xl:max-w-md xl:h-screen 
            xl:flex xl:flex-col xl:items-center xl:justify-center xl:gap-y-4 '>
            {/* inner */}
            <motion.ul className='flex items-center justify-between w-full h-[80px] px-4 md:px-40 text-primary text-3xl
                bg-base-300/85 backdrop-blur-xs shadow-xl
                xl:flex-col xl:justify-center xl:gap-y-10 xl:px-0 xl:h-max xl:py-8 xl:text-xl xl:rounded-full '>
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