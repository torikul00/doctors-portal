import React from 'react';
import treatmentImg from '../../assets/images/treatment.png'
const Treatment = () => {
    return (
        <div class="hero min-h-screen px-20">
        <div class="hero-content flex-col lg:flex-row">
            <img src={treatmentImg} class="max-w-sm rounded-lg shadow-2xl md:mx-14" alt='' />
            <div>
                <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </div>
    </div>
    );
};

export default Treatment;