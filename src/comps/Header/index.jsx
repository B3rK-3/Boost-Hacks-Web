import React, { useState, useEffect, useRef } from 'react';
import banner from './logo-banner.png';
import logo from './logo-2.png';
import './index.css';

const Header = () => {
    const [sticked, setSticked] = useState(false);
    const navbarRef = useRef(null);

    const changeStickState = () => {
        if (window.scrollY > 50) {
            setSticked(true);
        } else {
            setSticked(false);
        }
    };

    const toggleMenu = () => {
        if (navbarRef.current && window.innerWidth > 768) {
            navbarRef.current.classList.remove('hidden');
            navbarRef.current.classList.remove('bg-gray-800');
            navbarRef.current.classList.remove('elements');
        }
        else if (navbarRef.current && window.innerWidth <= 768) {
            navbarRef.current.classList.add('hidden');
            navbarRef.current.classList.add('bg-gray-800');
            navbarRef.current.classList.add('elements');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeStickState);
        window.addEventListener('resize', toggleMenu);
        return () => {
            window.removeEventListener('scroll', changeStickState);
            window.removeEventListener('resize', toggleMenu);
        };
    }, []);

    return (
        <>
            <div>
                <nav className={`my-[-20px] ${sticked ? 'sticked backdrop-blur-[1px] mt-[-35px] fixed top-0 left-0 right-0' : 'mb-[-25px] sticky z-[100] relative'}`}>
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse my-2">
                            <img src={banner} className="h-[100px]" alt="Boost Hacks Logo" />
                        </a>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 my-4" aria-controls="navbar-default" aria-expanded={sticked ? "true" : "false"} id="burger" onClick={toggleMenu}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default" ref={navbarRef}>
                            <ul className="font-medium flex flex-col p-3 pt-0 pb-1 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 mt-3 mb-[10px]">
                                <li>
                                    <a href="#" className="block py-2 px-2 text-white rounded no-underline" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-2 text-white no-underline">Past Hacks</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-2 text-white no-underline">Sponsors</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-2 text-white no-underline">Judges</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-2 text-white no-underline">Hack In!</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className={`body mx-auto absolute ${sticked ? 'mt-[100px]' : ''}`}>
                    <div className="boost-logo-div">
                        <img className="boost-logo md:h-54" src={logo} alt="Logo" />
                    </div>
                    <span className="boost-text mb-0 bg-blue-400 px-[5px] py-[2px] sm:px-[10px] sm:py-[10px]">
                        <span className='px-[2px] py-[-10px] xxs:px-[2px] xxs:py-[5px]'>June 17th - 25th, 2024</span>
                        Online Hackathon
                    </span>
                    <div className="absolute inset-0 items-center justify-center mx-0 mt-[410px] sm:w-3/4 md:w-[99dvw] mx-auto">
                        <div className="container items-center justify-center text-white">
                            <div className="row justify-center text-center gap-1">
                                <span className="col-sm bg-blue-400 rounded-[20px] hover:cursor-pointer">June 17th - 25th, 2024</span>
                                <span className="col-sm rounded-[20px] bg-blue-400 hover:cursor-pointer">Online hackathon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
