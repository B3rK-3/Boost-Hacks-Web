import logo from './logo-2.png'
import { LuMails } from "react-icons/lu";
import { SiDevpost } from "react-icons/si";
import './index.css';

const Footer = () => {
    return (
        <div className=" text-white px-3 z-[69]">
            <div className='grid w-100 grid-cols-1 2xxs:grid-cols-2'>
                <div className='ml-[-5px]'>
                    <div className='flex self-center items-center px-0 md:w-max-[300px] justify-center 2xxs:justify-start'>
                        <img src={logo} className='self-center w-[100px] h-[100px] md:w-[150px] md:h-[150px]' />
                        <p className='text-[10px] md:text-xs mt-4 font-semibold w-[100px] md:w-[150px]'>Elevating Innovation to New Heights! Dive Deeper, Innovate Further, Win Bigger, Learn More, and Connect Like Never Before!</p>
                    </div>
                </div>
                <div className='grid grid-rows-1 grid-cols-3 h-[200px] gap-4 mr-1'>
                    <div className='h-[200px] flex flex-col items-center text-center'>
                        <p className='roboto-slab-100 mb-3 md:text-[20px]'>Organization</p>
                        <a href='#sponsors' className='roboto-slab-100 under format block mb-2 text-[15px] md:text-[17px]'>Sponsors</a>
                        <a href='https://boost-hacks-ii.devpost.com/#judges' target='_blank' className='roboto-slab-100 under format block mb-2 text-[15px] md:text-[17px]'>Judges</a>
                        <a href='https://7y7w1tjdbbj.typeform.com/to/xgCXZ65q?typeform-source=boost-hacks-ii.devpost.com' target='_blank' className='roboto-slab-100 under format block text-[15px] md:text-[17px] mx-auto'>Judge Signup</a>
                    </div>
                    <div className='h-[200px] flex flex-col items-center'>
                        <p className='roboto-slab-100 mb-3 md:text-[20px]'>Event</p>
                        <a href='https://boost-hacks-ii.devpost.com/details/dates' target="_blank" className='roboto-slab-100 under format block mb-2 text-[15px] md:text-[17px]'>Schedule</a>
                        <a href='https://boost-hacks-ii.devpost.com/#challenge-requirements' target="_blank" className='roboto-slab-100 under format block text-[15px] md:text-[17px]'>Criteria</a>
                    </div>
                    <div className='h-[200px] flex flex-col items-center'>
                        <p className='roboto-slab-100 mb-3 md:text-[20px]'>Contact</p>
                        <a href='https://discord.gg/FpgReGv4qp' target="_blank" className='roboto-slab-100 under format block mb-2 text-[15px] md:text-[17px]'>Discord</a>
                        <a href='mailto:boost-hacks@scilite.org' target="_blank" className='roboto-slab-100 under format block text-[15px] md:text-[17px]'>Email us</a>
                    </div>
                </div>
            </div>
            <div className='flex ml-[15px] mt-[-30px]'>
                <a href='https://boost-hacks-ii.devpost.com/' target='_blank'>
                <SiDevpost className='hover:translate-y-[-3px] hover:cursor-pointer transition-all h-6 w-6 mr-4' color='#546E7A' /></a>
                <a href='mailto:boost-hacks@scilite.org' target='_blank'>
                <LuMails className='hover:translate-y-[-3px] hover:cursor-pointer transition-all h-6 w-6' color='#546E7A' /></a>
            </div>
        </div>
    );
};
export default Footer;