import React, { useState, useEffect, useRef } from 'react';
import banner from './logo-banner.png';
import logo from './logo-2.png';
import './index.css';
import { NavbarBrand } from 'react-bootstrap';
import Bg from './bg';
import ReactDOM from 'react-dom';
import { FaDiscord } from 'react-icons/fa'



const Header = () => {
    const [sticked, setSticked] = useState(false);
    const navbarRef = useRef(null);
    const burgerRef = useRef(null);
    const widthRef = useRef(null);
    const menu = useRef(null);
    const [toggled, setToggled] = useState(false);
    var x = 0;
    const widthElement = document.getElementById("width");


    const changeStickState = () => {
        if (window.scrollY > 0) {
            setSticked(true);
        } else {
            setSticked(false);
        }
    };


    const toggleMenu = () => {
        if (navbarRef.current) {
            navbarRef.current.classList.toggle('hidden');
            navbarRef.current.classList.toggle('bg-gray-800');
            navbarRef.current.classList.toggle('elements');
            setToggled(prev => !prev);
        }
    };

    const handleResize = () => {
        if (navbarRef.current) {
            navbarRef.current.classList.remove('hidden');
            navbarRef.current.classList.remove('bg-gray-800');
            navbarRef.current.classList.remove('elements');
        }
        if (navbarRef.current && window.innerWidth >= 768) {
            navbarRef.current.classList.remove('hidden');
            navbarRef.current.classList.remove('bg-gray-800/50');
            navbarRef.current.classList.remove('elements');
            if (burgerRef) {
                burgerRef.current.classList.add("hidden");
            }
            if (menu) {
                menu.current.classList.remove("flex-col");
                menu.current.classList.add("flex-row");
            }
        }
        else if (navbarRef.current && window.innerWidth <= 768) {
            navbarRef.current.classList.add('hidden');
            if (burgerRef) {
                burgerRef.current.classList.remove("hidden");
            }
            if (menu) {
                menu.current.classList.add("flex-col");
                menu.current.classList.remove("flex-row");
            }
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', changeStickState);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('scroll', changeStickState);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Bg />
            <div className=''>
                <div>
                <nav className={`${sticked ? 'sticked backdrop-blur-[3px] mt-[-40px]' : 'z-yes mb-[-120px] mt-[-30px]'} h-[120px]`}>
                    <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-0`}>
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse my-2">
                            <img src={banner} className="h-[100px]" alt="Boost Hacks Logo" />
                        </a>
                        <div className={`mt-[11px]`}>
                            <button data-collapse-toggle="navbar-default" ref={burgerRef} type="button" className={`${toggled ? "hambr" : ''} flex flex-col justify-center transition-all text-sm text-gray-500 rounded-lg h-10 w-10 hover:bg-gray-100 hover:bg-gray-700`} aria-controls="navbar-default" aria-expanded={sticked ? "true" : "true"} id="burger" onClick={toggleMenu}>
                                <span className="bar mb-1"></span>
                                <span className="bar"></span>
                                <span className="bar mt-[4px]"></span>
                            </button>
                        </div>
                        <div className="hidden md:block w-auto" id="navbar-default" ref={navbarRef}>
                            <ul ref={menu} className="gap-x-[-1px] mx-0 sm2:gap-x-[16.5px] font-medium flex flex-col p-3 pt-0 pb-1 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 mt-3 mb-[7px] ">
                                <li className="flex ">
                                    <a href="#" className="under block py-2 px-2 text-white no-underline font-bold md2:text-lg" aria-current="page">Home</a>
                                </li>
                                <li className="flex">
                                    <a href="#recap" className="under block py-2 px-2 text-white no-underline font-bold md2:text-lg">Past Hacks</a>
                                </li>
                                <li className="flex">
                                    <a href="#sponsors" className="under block py-2 px-2 text-white no-underline font-bold md2:text-lg">Sponsors</a>
                                </li>
                                <li className="flex">
                                    <a href="https://boost-hacks-ii.devpost.com/#judges" target="_blank" className="under block py-2 px-2 text-white no-underline font-bold md2:text-lg">Judges</a>
                                </li>
                                <li className="flex">
                                    <a href="https://boost-hacks-ii.devpost.com/" target="_blank" className="under block py-2 px-2 text-white no-underline font-bold md2:text-lg mr-[-10px]">Hack In!</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className={`body mx-auto absolute z-50 mt-[80px]`}>
                    <p className='block mt-20 p-0 align-middle text-center'>
                        <span className='mb-[-16px] text-white text-[50px] roboto-slab-100 flex justify-center'>Boost Hacks II</span>
                        <img className="h-[360px] sm:h-[400px] mx-auto p-0" src={logo} alt="Logo" />
                    </p>
                    <span id='yes' className="absolute boost-text top-[495px] sm:top-[540px] mb-0 bg-blue-400 py-0 px-0 xxxs:px-[0.2px] sm:p-2 w-[315px] sm:w-[315px] chip">
                        <span className='pl-[10px] py-[2px] xxxs:ml-[2px] xxxs:px-[3px] sm:py-[3px] sm:px-[3.5px]'>June 17th - 25th, 2024</span>
                        <span className='p-0 xxxs:px-[0.1px] sm:p-1 ml-[0px] mr-1'>Online Hackathon</span>
                    </span>
                    <div className="absolute flex items-center justify-center top-[547px] sm:top-[590px] w-full">
                        <div className="container flex flex-col items-center justify-center text-white items-center align-middle w-100">
                            <div className="row flex justify-center text-center w-full h-12 gap-x-4 gap-y-3 xs:gap-y-0 max-w-[315px] xs:max-w-[800px] mt-2">
                                <span className="hRaise col-sm bg-blue-500 rounded-[12px] hover:cursor-pointer content-center py-2 text-[17px] flex justify-center items-center"><a href='https://boost-hacks-ii.devpost.com/' target='_blank' className='format flex hover:cursor-pointer'>Register On Devpost</a></span>
                                <span ref={widthRef} className="hRaise col-sm bg-blue-500 rounded-[12px] content-center py-2 flex items-center justify-center text-[17px]">
                                    <a href='https://discord.gg/FpgReGv4qp' target='_blank' className='format flex hover:cursor-pointer'>
                                    <span>Join Our</span>
                                    <FaDiscord id='width' color='white' className="ml-[4px] mt-[6px] spin" /></a>
                                </span>
                                <span className="hRaise col-sm bg-blue-500 rounded-[12px] content-center py-2 text-[17px] flex justify-center items-center"><a href='https://7y7w1tjdbbj.typeform.com/to/xgCXZ65q?typeform-source=boost-hacks-ii.devpost.com' target='_blank' className='format flex hover:cursor-pointer'>Be a Judge</a></span>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </>
    );
};

export default Header;