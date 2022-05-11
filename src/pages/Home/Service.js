import React from 'react';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'

const Service = () => {
    return (
        <div className='mt-28'>
            <p className='text-primary text-center font-bold uppercase text-xl'>Our Services</p>
            <p className='text-accent text-center text-4xl mb-8'>Services We Provide</p>
        <div className='flex justify-center	flex-col md:flex-row items-center'>
            <div className="card w-96 bg-base-100 shadow-xl m-4">
                <figure className="px-10 pt-10">
                        <img src={ fluoride} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Fluoride Treatment</h2>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl  m-4">
                <figure className="px-10 pt-10">
                    <img src={cavity} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cavity Filling </h2>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl m-4">
                <figure className="px-10 pt-10">
                        <img src={ whitening} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Teeth Whitening</h2>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    
                </div>
            </div>
            </div>
            </div>
    ); 
};

export default Service;