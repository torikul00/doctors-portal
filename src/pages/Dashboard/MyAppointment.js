import React, { useState, useEffect } from 'react';
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';

const MyAppointment = () => {
    const [user]  = useAuthState(auth)
    const [appoinments, setAppointmnets] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setAppointmnets(data))
        }
    },[user])
    return (
        <div>
          <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Slot</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
        {
            appoinments.map((a,index) =><tr>
                <th>{ index + 1}</th>
                <td>{ a.patientName}</td>
                <td>{ a.date}</td>
                <td>{ a.slot}</td>
                <td>{ a.treatment}</td>
              </tr> )
        }
      
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;