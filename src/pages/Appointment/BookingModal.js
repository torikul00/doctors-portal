
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const BookingModal = ({ date, treatment, setTreatment ,formatedDate,refetch}) => {

    const [user] = useAuthState(auth)


    const handleSubmit = e => {


        e.preventDefault()

        const booking = {
            treatmentId: treatment?._id,
            treatment: treatment?.name,
            userEmail: user.email,
            phoneNumber: e.target.number.value,
            slot: e.target.slot.value,
            date: formatedDate,
            patientName: user.displayName

        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {

                    toast(`Successful booking`)
                }
                if (data.success === false) {
                    
                    toast.error(`Already booked ${data.exist.treatment}`)
                }

                refetch()
                setTreatment(null)

            })



    }


    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{treatment?.name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center'>

                        <input type="text" value={formatedDate} disabled className="input input-bordered input-sm w-full max-w-xs my-2" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                treatment?.slots?.map((s) => <option value={s} >{s}</option>)
                            }

                        </select>


                        <input name='name' type="text" disabled value={user.displayName} className="input input-bordered input-sm w-full max-w-xs my-2" />
                        <input name='email' type="text" disabled value={user.email} className="input input-bordered input-sm w-full max-w-xs my-2" />
                        <input name='number' type="number" placeholder="Phone Number" className="input input-bordered input-sm w-full max-w-xs my-2" required />

                        <input className='text-white font-xl block py-2 my-4 bg-accent w-full cursor-pointer' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;