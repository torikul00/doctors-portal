import React from 'react';
import InfoCard from './InfoCard';
import clock  from '../../assets/icons/clock.svg'
import marker  from '../../assets/icons/marker.svg'
import phone  from '../../assets/icons/phone.svg'


const Info = () => {
    const colorAccent = 'bg-accent'
    const gradientColor = 'bg-gradient-to-r from-secondary to-primary'
    
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-20'>
            <InfoCard title='Opening Hours' color={gradientColor} img={clock}  />
            <InfoCard title='Our Locations' color={colorAccent}img={marker}  />
            <InfoCard title='Contact Us'  color={gradientColor} img={phone}  />
        </div>
    );
};

export default Info;