import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        {
            id: 1,
            text: 'Link Number 1',
            href: 'https://www.youtube.com'
        }
    ];

    return (
        <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-blue-500'>
            <img src="https://picsum.photos/64" alt="" />

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <a href={item.href} key={item.id} className="block">
                        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                            {item.text}
                        </li>
                    </a>
                ))}
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <ul
                className={
                    nav
                        ? 'z-[999] text-center fixed md:hidden left-0 top-0 w-[60%] h-full border-r white bg-white ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                <img src="https://picsum.photos/128" alt="" className='m-4 mx-auto rounded-full'/>

                {navItems.map(item => (
                    <a href={item.href} className="block">
                        <li className='p-4 cursor-pointer'>{item.text}</li>
                    </a>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
