import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import background from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date,setDate}) => {
    
    return (
        <div style={{
            background: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPositionY: '-150px'
        }} className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-lg max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='px-12'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    
                </div>
            </div>
        </div>

    );
};

export default AppointmentBanner;