import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/DashBoard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from  '../components/footer';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/OwnerAssets/dashboard.jpg'


function Dashboard() {
  return (
    <div>
      <Navbar/>

      <div
      className='p-4'
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: 'cover', // Adjust background image size
        backgroundPosition: 'center', // Adjust background image position
        minHeight: '100vh', // Ensure the background covers the entire screen
      }}
    >

      <div className="container">
        <span className="text">Hello User, Get Your Features Here</span>

        <div className="rectangle-container1">
          <div className="rectangle">
            <i className="fas fa-user"></i>
           
            <span className="text1">Profile</span>
            <br />
            <Link to = "/profile"> <button className="button">Click</button></Link>
          </div>
          <div className="rectangle">
            <i className="far fa-calendar-alt"></i>
            <span className="text1">Add Pets</span>
            <br />
            <Link to="/petregistration/create" className="button">Click</Link>
          </div>
          <div className="rectangle">
            <i className="fas fa-sign-out-alt"></i>
            <span className="text1">Feedback</span>
            <br />
            <Link to="/books/create" className="button">Click</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
}

export default Dashboard;
