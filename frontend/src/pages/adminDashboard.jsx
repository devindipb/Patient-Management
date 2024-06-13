import React from 'react';
import Footer from '../components/footer'; // Corrected the import
import Navbar from '../components/Navbar';
import petOwnerImage from '../images/petowner.png';
import appointmentImage from '../images/appointment.png';
import telemedImage from '../images/telemed.png';
import inventoryImage from '../images/inventory.png';
import paymentImage from '../images/payment.png';
import healthRecordImage from '../images/healthrecord.png';
import petShopImage from '../images/petshop.png';
import staffImage from '../images/staff.png';
import backgroundImage from '../assets/OwnerAssets/back5.jpg'


function AdminDashboard() {
  return (
    <div>
      <Navbar />

      <div
      className='p-4'
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: 'cover', // Adjust background image size
        backgroundPosition: 'center', // Adjust background image position
        minHeight: '100vh', // Ensure the background covers the entire screen
      }}
    >

      <span className="text" style={{ marginLeft: '340px' }}>Hello Admin, Get Your Features Here</span>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px', width: '100%', marginLeft: '-20px' }}>

        <div className="card" style={{ width: '100%', maxWidth: '200px',height:'200px', margin: 'auto', backgroundColor: '#FFFAA0', borderRadius: '18px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: 'transform 0.3s ease', transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={petOwnerImage} alt='Item2' style={{ width: '100%', height: '120px' }} />
          </div>
          <div className="card-content" style={{ marginTop: '10px',marginLeft:'20px' }}>
            <h4 >Patient Management</h4>
            <p> <h4><a className="forget" href="/home" style={{ marginLeft: '60px',color:'blue',fontStyle:'bold' }}>Click</a></h4></p>
          </div>
        </div>

        
        <div className="card" style={{ width: '100%', maxWidth: '200px',height:'200px', margin: 'auto', backgroundColor: '#FFFAA0', borderRadius: '18px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: 'transform 0.3s ease', transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={appointmentImage} alt='Item2' style={{ width: '100%', height: '120px' }} />
          </div>
          <div className="card-content" style={{ marginTop: '8px',marginLeft:'50px' }}>
            <h4 >Appointments</h4>
            <p> <h4><a className="forget" href="/" style={{ marginLeft: '30px',color:'blue' }}>Click</a></h4></p>
          </div>
        </div>
        
        <div className="card" style={{ width: '100%', maxWidth: '200px',height:'200px', margin: 'auto', backgroundColor: '#FFFAA0', borderRadius: '18px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: 'transform 0.3s ease', transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={telemedImage} alt='Item2' style={{ width: '100%', height: '120px' }} />
          </div>
          <div className="card-content" style={{ marginTop: '3px',marginLeft:'50px' }}>
            <h4 >Telemedicine</h4>
            <p> <h4><a className="forget" href="/" style={{ marginLeft: '30px',color:'blue' }}>Click</a></h4></p>
          </div>
        </div>
        
        <div className="card" style={{ width: '100%', maxWidth: '200px',height:'200px', margin: 'auto', backgroundColor: '#FFFAA0', borderRadius: '18px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: 'transform 0.3s ease', transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={inventoryImage} alt='Item2' style={{ width: '100%', height: '120px' }} />
          </div>
          <div className="card-content" style={{ marginTop: '6px',marginLeft:'70px' }}>
            <h4 >Inventory</h4>
            <p> <h4><a className="forget" href="/" style={{ marginLeft: '15px',color:'blue' }}>Click</a></h4></p>
          </div>
        </div>
        
        <div className="card" style={{ width: '100%', maxWidth: '200px',height:'200px', margin: 'auto', backgroundColor: '#FFFAA0', borderRadius: '18px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: 'transform 0.3s ease', transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={paymentImage} alt='Item2' style={{ width: '100%', height: '120px' }} />
          </div>
          <div className="card-content" style={{ marginTop: '10px',marginLeft:'30px' }}>
            <h4 >Payment & Income</h4>
            <p> <h4><a className="forget" href="/" style={{ marginLeft: '50px',color:'blue' }}>Click</a></h4></p>
          </div>
        </div>
        
        <div className="card" style={{ width: '100%', maxWidth: '200px',height:'200px', margin: 'auto', backgroundColor: '#FFFAA0', borderRadius: '18px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: 'transform 0.3s ease', transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={healthRecordImage} alt='Item2' style={{ width: '100%', height: '120px' }} />
          </div>
          <div className="card-content" style={{ marginTop: '10px',marginLeft:'50px' }}>
            <h4 >Health Records</h4>
            <p> <h4><a className="forget" href="/" style={{ marginLeft: '30px',color:'blue' }}>Click</a></h4></p>
          </div>
        </div>
        
        <div className="card" style={{ width: '100%', maxWidth: '200px',height:'200px', margin: 'auto', backgroundColor: '#FFFAA0', borderRadius: '18px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: 'transform 0.3s ease', transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={petShopImage} alt='Item2' style={{ width: '100%', height: '120px' }} />
          </div>
          <div className="card-content" style={{ marginTop: '10px',marginLeft:'60px' }}>
            <h4 >Pet Shop</h4>
            <p> <h4><a className="forget" href="/" style={{ marginLeft: '20px',color:'blue' }}>Click</a></h4></p>
          </div>
        </div>
        <div className="card" style={{ width: '100%', maxWidth: '200px',height:'200px', margin: 'auto', backgroundColor: '#FFFAA0', borderRadius: '18px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: 'transform 0.3s ease', transform: 'translateY(-5px)' }}>
          <div className="card-image">
          <img src={staffImage} alt='Item2' style={{ width: '100%', height: '120px' }} />
          </div>
          <div className="card-content" style={{ marginTop: '10px',marginLeft:'35px' }}>
            <h4 >Staff Management</h4>
            <p> <h4><a className="forget" href="/" style={{ marginLeft: '50px',color:'blue' }}>Click</a></h4></p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
    </div>
  );
}

export default AdminDashboard;
