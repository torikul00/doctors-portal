
import React from 'react';


const BookingModal = ({ date, treatment, setTreatment }) => {


    const handleSubmit = e => {

        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const number = e.target.number.value
        console.log(email, name, number)
        setTreatment(null)

    }


    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{treatment?.name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center'>

                        <input type="text" value={date} disabled className="input input-bordered input-sm w-full max-w-xs my-2" />

                        <select className="select select-bordered w-full max-w-xs">
                            {
                                treatment?.slot?.map(s => <option value={s} >{s}</option>)
                            }

                        </select>


                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered input-sm w-full max-w-xs my-2" />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered input-sm w-full max-w-xs my-2" />
                        <input name='number' type="text" placeholder="Phone Number" className="input input-bordered input-sm w-full max-w-xs my-2" />

                        <input className='text-white font-xl block py-2 my-4 bg-primary w-full cursor-pointer' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;