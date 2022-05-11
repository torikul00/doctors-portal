import React from 'react';

const Service = ({ service }) => {
    const { name, _id, slot } = service
    return (
        <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary text-center ">{name}</h2>
                <p className='text-center py-2'>{slot.length ? <p>{slot[0]}</p>
                    : <span className='text-red-600'>No slot available</span>
                }</p>
                <p className='text-center'>{slot.length ? <p>{slot.length} spaces Available </p>
            :<p>0 Spaces Available</p>    
            }</p>

                <div class="card-actions justify-end">
                    <button disabled={slot.length === 0} class="btn btn-primary mx-auto text-white uppercase">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;