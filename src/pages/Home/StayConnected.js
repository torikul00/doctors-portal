import React from 'react';
import background from '../../assets/images/appointment.png'

const StayConnected = () => {
    return (
        <div className='flex justify-center items-center' style={{
            background: `url(${background})`
        }}>
            <div className="md:w-1/3 lg:w-1/3 w-1/2  py-8">
                <h2 className='text-center text-secondary text-xl font-bold'>Contact Us</h2>
                <h1 className='text-center text-3xl text-base-100 my-8'>Stay Connected With Us</h1>
                <input className='block my-8 w-full p-2 rounded' type="text" placeholder="Email Address" class="input w-full my-4" />

                <input className='block my-8 w-full p-2 rounded' type="text" placeholder="Subject" class="input w-full" />
                <textarea class="textarea textarea-bordered h-24 block my-8 w-full p-2" placeholder="Your Message"></textarea>
                <button class="btn btn-primary px-8 mx-auto block my-12 text-base-100">Submit</button>
            </div>
        </div>
    );
};

export default StayConnected;