import React from 'react';
import Chair from '../../assets/images/chair.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-white px-24">
            <div class="hero-content flex-col lg:flex-row-reverse ">
                <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts From Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;