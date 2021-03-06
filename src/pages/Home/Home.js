import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import PatientReview from './PatientReview';
import Service from './Service';
import StayConnected from './StayConnected';
import Treatment from './Treatment';



const Home = () => {
    return (

        <div>
            <Banner />
            <Info />
            <Service />
            <Treatment />
            <MakeAppoinment />
            <PatientReview />
            <StayConnected />
            <Footer />
            
           
        </div>
    );
};

export default Home;