import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div className='my-12'>
            <p className='text-xl text-center text-secondary font-bold'>Available Appointment on { format(date,'PP')}</p>
        </div>
    );
};

export default AvailableAppointment;