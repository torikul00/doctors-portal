import React from 'react';
import background from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor-small.png'

const MakeAppoinment = () => {
    return (
        <section className='flex justify-center items-center mt-24' style={{
            background: `url(${background})`,
            backgroundSize:'cover'
        }}>

        <div className=''>
            <img style={{marginTop:'-50px'}} className='hidden lg:block' src={doctor} alt="" />
        </div>
            <div className='w-2/3 py-4'>
            <h3 className='text-primary'>Appointment</h3>
                <h3 className='text-white text-4xl'>Make an appointment Today</h3>
                <p className='text-white py-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>  
                <button className='btn btn-primary text-white bg-gradient-to-r from-secondary to-primary'>GET STARTED</button>
        </div>

        </section>
    );
};

export default MakeAppoinment;