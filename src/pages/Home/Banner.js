import React from 'react';
import Chair from '../../assets/images/chair.png'
import background from '../../assets/images/bg.png'
const Banner = () => {
    return (
        <div style={{
            background: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPositionY:'-150px'
        }} className="hero min-h-screen bg-white px-24">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={Chair} className="max-w-sm md:max-w-lg rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts From Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;