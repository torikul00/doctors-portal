import React from 'react';
import quote from '../../assets/icons/quote.svg'
import img1 from '../../assets/images/people1.png'
import img2 from '../../assets/images/people2.png'
import img3 from '../../assets/images/people3.png'
import ReviewCard from './ReviewCard';
const PatientReview = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Wilson Henry',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: img1,
            location: 'Califormia'

        },
        {
            _id: 2,
            name: 'Lawray doe',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: img2,
            location: 'Los angels'

        },
        {
            _id: 3,
            name: 'Henry ford',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: img3,
            location: 'Florida'

        }
    ]
    return (
        <section className='pt-24'>
            <div className='flex justify-between px-16'>
                <div>
                    <p className='font-bold text-primary'>Testemonial</p>
                    <h1 className='text-accent text-2xl lg:text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    reviews.map(review => <ReviewCard review={review} key={review._id} />)
                }

            </div>
        </section>
    );
};

export default PatientReview;