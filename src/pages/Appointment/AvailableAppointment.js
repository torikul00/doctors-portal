import { format } from 'date-fns';
import React, { useState,useEffect} from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services,setServices] = useState([])
    const [treatment,setTreatment] = useState({})

    useEffect(() => {
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='my-12'>
            <p className='text-xl text-center text-secondary font-bold'>Available Appointment on {format(date, 'PP')}</p>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}  />)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment} />
            }
        </div>
    );
};

export default AvailableAppointment;