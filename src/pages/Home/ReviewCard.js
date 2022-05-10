import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, img, desc,location } = review
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-14">
            <div class="card-body">

                <p>{desc}</p>
                <div class="flex items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt=''/>
                        </div>
                    </div>
                    <div className='ml-8'>
                        <h1 className='font-bold'>{name}</h1>
                        <p>{ location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;