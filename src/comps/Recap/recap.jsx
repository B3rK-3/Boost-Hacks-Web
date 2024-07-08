import './recap.scss';
import { FaUser } from 'react-icons/fa';
import { GoProjectRoadmap } from 'react-icons/go';
import { HiTrophy } from "react-icons/hi2";
import { FaEarthAmericas } from "react-icons/fa6";

const Recap = () => {
    return (
        <div className='color pt-5' id='recap'>
            <div className='color flex justify-center text-center'>
                <span className='text-white text-[40px] roboto-slab-100 mb-2 mt-[-25px]'>Recap of Boost Hacks I</span>
            </div>
            <div className='flex justify-center mb-[60px]'>
                <div className='grad1'></div>
            </div>
            <div className='grid grid-cols-1 xss:grid-cols-2 w-[320px] xss:w-[70%] max-w-[600px] mx-auto gap-y-[30px] scale'>
                <span className='flex bb br'>
                    <FaUser className='h-[80px] w-[80px] bg-gray-800 bg-opacity-60 p-2 rounded-lg mr-0 xss:mr-[3px]' color='#4d43c4' />
                    <p className='flex flex-col mx-auto mt-[3px]'>
                        <p className='text-white text-4xl font-bold self-center'>750+</p>
                        <p className='mt-[-8px] text-white text-lg mx-auto'>Participants</p>
                    </p>
                </span>
                <span className='bb'>
                    <GoProjectRoadmap className='h-[80px] w-[80px] bg-gray-800 bg-opacity-60 p-[2px] rounded-lg ml-0 xss:ml-0 float-left xss:float-right' color='#4d43c4' />
                    <p className='flex flex-col justify-center mt-[3px]'>
                        <p className='text-4xl text-white font-bold self-center'>80+</p>
                        <p className='text-white self-center text-lg mt-[-8px]'>Submissions</p>
                    </p>
                </span>
                <span className='flex bb br'>
                    <HiTrophy className='h-[80px] w-[80px] bg-gray-800 bg-opacity-60 p-2 rounded-lg mr-0 xss:mr-[3px]' color='#4d43c4' />
                    <p className='flex flex-col mx-auto mt-[-1px]'>
                        <p className='text-white text-[33px] font-bold self-center'>$190K</p>
                        <p className='mt-[-14px] text-white text-lg mx-auto'>In Prizes</p>
                    </p>
                </span>
                <span className='bb'>
                    <FaEarthAmericas className='h-[80px] w-[80px] bg-gray-800 bg-opacity-60 p-[6px] rounded-lg ml-0 xss:ml-0 float-left xss:float-right' color='#4d43c4' />
                    <p className='flex flex-col justify-center mt-[3px]'>
                        <p className='text-4xl text-white font-bold self-center'>22</p>
                        <p className='text-white self-center text-lg mt-[-8px]'>Countries</p>
                    </p>
                </span>
            </div>
            <div className='color w-[80%] xss:w-[50%] md:w-[60%] mx-auto text-white text-2xl text-center mt-[70px] p-0 scale font-semibold max-w-[700px]'>
                <span className='font-bold grad'>Boost Hacks</span> is a global virtual hackathon welcoming participants from all backgrounds - college, high school, middle school, and even professionals. Get the chance to win from a whopping pool of $180,000+ in sponsor prizes!
                <br/>
                <br/>
                Dive deep into the realm of coding, harness your creativity, and collaborate to drive innovation and success. Our mission is to make tech accessible for all and provide opportunities to learn, grow, and have fun!
            </div>
        </div>
    );
};
export default Recap;
