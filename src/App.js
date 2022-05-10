
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navbar from './pages/Navbar/Navbar';
import Review from './pages/Review/Review';

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/review' element={<Review />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
