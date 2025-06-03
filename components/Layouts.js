import React from 'react';


import { Josefin_Sans, Audiowide  } from "next/font/google";
// Fonts
const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    variable: '--font-josefin-sans',
});

const audiowide = Audiowide({
    weight: "400",
    variable: "--font-audiowide",
    subsets: ["latin"],
});

// Components
import Navbar from './Navbar';
import Header from './Header';
import Preloader from './Preloader';
const Layouts = ({children}) => {
    return (
        <div>
            <Navbar />
            <Header />
            <Preloader />
                {children}
        </div>
        
    );
};

export default Layouts;