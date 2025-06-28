import { ToastContainer } from 'react-toastify';
import herobanner from '../../assets/banner-main.png'
import PropTypes from 'prop-types';

const Herobanner = ({handleFreeCridt}) => {
    return (
        <div className="flex justify-center text-center rounded py-16 -mx-2 bg-gradient-to-r from-gray-700 from-30% via-gray-600 via-100%">
            <div>
                <img className='w-80 mx-auto' src={herobanner} alt="Hero-Banner_img" />
                <h1 className='md:text-4xl my-5 text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Teams</h1>
                <p className='text-gray-200 mb-4'>Beyond Boundaries Beyond Limits</p>
                <button onClick={()=> handleFreeCridt(0)} className='border-2 border-amber-200 rounded-lg'>
                    <p className='bg-yellow-400 rounded-lg p-2 font-semibold m-1'>Clain Free Credit</p>
                    <ToastContainer></ToastContainer>
                </button>
            </div>
        </div>
    );
};

Herobanner.propType = {
    ToastContainer : PropTypes.func
}

export default Herobanner;