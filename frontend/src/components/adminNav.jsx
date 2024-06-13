import React from "react";
import Peticon from "./icon";

const AdminNavbar = () => {
  return (
    <div>
      <nav className="navbar" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="peticon" style={{ marginLeft: '60px' }}>
          <Peticon />
        </div>

        <div className="links" style={{ display: 'flex',marginLeft:'600px' }}>
          <a href="/home" style={{ marginRight: '50px' }}>Pet Owners</a>
          <a href="/pethome" style={{ marginRight: '50px' }}>Pets</a>
          <a href="/Feedbackhome" style={{ marginRight: '50px' }}>Feedback</a>
         
          <a href="/">About Us</a>
        </div>
      </nav>
      <hr className="top-boarder" style={{marginTop:'30px',marginLeft:'100px'}} />
    </div>
  );
};

export default AdminNavbar;