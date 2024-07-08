import './index.css';
import Carousel from './carousel'
const Sponsor = () => {
    return (
        <div className="color12 pt-1 h-[320px] " id='sponsors'>
            <div className='flex flex-col items-center text-[40px] text-white roboto-slab-100 mb-2'>
                <h>Sponsors</h>
                <div className='grad1 mt-0 w-[150px]'></div>
            </div>
            <div className='carousel w-full'>
                <Carousel/>
            </div>
        </div>
    );
};
export default Sponsor;