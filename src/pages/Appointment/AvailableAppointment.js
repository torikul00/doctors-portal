import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
  
    const [treatment, setTreatment] = useState({})

    const formatedDate = format(date, 'PP')
    
    
    const { isLoading, data,refetch} = useQuery(['available',formatedDate], () =>
     fetch(`http://localhost:5000/available?date=${formatedDate}`).then(res =>
       res.json()
     )
   )


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='my-12'>
            <p className='text-xl text-center text-secondary font-bold my-24'>Available Appointment on {format(date, 'PP')}</p>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
                {
                    data?.map((service, index) => <Service key={index} service={service} setTreatment={setTreatment} />)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    setTreatment={setTreatment}
                    date={date}
                    treatment={treatment}
                        formatedDate={formatedDate}
                        refetch={refetch}
                >

                </BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;