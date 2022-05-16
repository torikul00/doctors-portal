
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Navbar from './pages/Navbar/Navbar';
import Review from './pages/Review/Review';
import RequireAuth from './pages/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>

        } />
        <Route path='/review' element={<Review />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
              <Route path='/dashboard' element={
          <RequireAuth> <Dashboard /></RequireAuth>} >

                <Route index element={<MyAppointment />} />
                <Route path='review' element={<MyReview />} />
              </Route>
      </Routes>


    </div>
  );
}

export default App;
