import React, { useState } from "react";
import GlowButton from "../ui/GlowButton";
import { TfiMenu } from "react-icons/tfi";
import { FaTimes } from "react-icons/fa";


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    const navItems = [
        {
            'id': 1,
            'name': 'Home',
            'href': '/'
        },
        {
            'id': 2,
            'name': 'About',
            'href': '/#about'
        },
        {
            'id': 3,
            'name': 'Projects',
            'href': '/#projects'
        },
        {
            'id': 4,
            'name': 'Skills',
            'href': '/#skills'
        }
    ];

    return (
        <div>
            <header className=" 
                            w-full px-4 md:px-16 py-4 
                            flex justify-between items-center 
                            text-white
                            h-full md:h-fit
                            overflow-x-hidden">

                <a href="/" className="text-c-xl font-bold flex w-fit h-full">Yah <span className="text-pr-sml">Lim</span></a>

                <nav className="hidden md:flex items-center gap-8 
                                h-full 
                                *:text-pr-l *:hover:text-pr *:duration-300">
                    {navItems.map(item => (
                        <a href={item.href} key={item.id} id={`nav${item.id}`}>{item.name}</a>
                    ))}
                </nav>

                <TfiMenu className="text-2xl
                                    focus:text-pr
                                    md:hidden
                                    cursor-pointer"
                        onClick={toggleMenu}/>

                {/* Contact me button */}
                <GlowButton children="Contact Me" href="/contact" className="hidden"/>
            </header>

            {isOpen && 
                <div className="absolute z-121 top-0 left-0 right-0 bottom-0 
                                w-full h-full 
                                bg-pr-spd">
                    <div className="p-4 
                                    flex flex-row-reverse">
                        <FaTimes className="text-3xl font-extrabold
                                    text-white
                                    md:hidden
                                    cursor-pointer"
                            onClick={toggleMenu}/>
                    </div>

                    <ul className={`flex flex-col items-center 
                                    divide-y divide-solid divide-pr-spl/10
                                    font-medium text-pr-sml
                                    *:w-full *:py-4 *:text-center`}>
                        {navItems.map(item => (
                            <a href={item.href} key={item.id} id={`nav${item.id}`}>{item.name}</a>
                        ))}
                        <a href="/#contact">Contact Me</a>
                    </ul>
                </div>
            }
        </div>
    );
};

export default Navbar;
