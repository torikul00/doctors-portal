import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-xl text-secondary text-center ">{name}</h2>
                <p className='text-center py-2'>{slots.length ? <p>{slots[0]}</p>
                    : <span className='text-red-600'>No slot available</span>
                }</p>
                <p className='text-center'>{slots.length ? <p>{slots.length} spaces Available </p>
                    : <p>0 Spaces Available</p>
                }</p>

                <div className="card-actions justify-end">

                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary mx-auto text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;