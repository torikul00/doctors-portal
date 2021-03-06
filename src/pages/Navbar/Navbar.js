import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    const navigate = useNavigate()
    const menuItem = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/contactUs'>Contact Us</Link></li>
        <li>{
            user && <Link to='/dashboard'>Dashboard</Link>
        }</li>
        <li>{user? <button onClick={handleSignOut} className='btn text-primary'>Sign Out</button> :<button className='btn text-primary' onClick={()=>navigate('/login')}>Login</button> }</li>

    </>
    return (

        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl ml-24">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-8">
                    {menuItem}


                </ul>
            </div>

            <div className="navbar-end lg:hidden">
                 <label for="my-drawer-2" class="btn btn-primary btn-sm drawer-button lg:hidden">Dashboard Menu</label>
          </div>
            
        </div>

    );
};

export default Navbar;