import React from 'react';

import Socials from './Socials';
import Themes from './Themes';


const Header = () => {
    return (
        <header className='flex flex-row justify-around items-center flex-nowrap gap-4 pt-7'>
            {/* Themes */}
            <div>
                <Themes />
            </div>
            {/* Socials */}
            <div>
                <Socials />
            </div>
        </header>
    );
};

export default Header;