/*import React from "react";
import Peticon from "./icon";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="peticon">
          <Peticon />
        </div>

        <div className="links" style={{marginLeft:'200px'}}>
          <a href="/">Home</a>
          <a href="/">Our Services</a>
          <a href="/">Products</a>

          <a href="/">FAQ</a>
          <a href="/">Contact</a>
          <a href="/">About Us</a>
        </div>
      </nav>
      <hr className="top-boarder" />
    </div>
  );
};

export default Navbar;*/
import React from "react";
import Peticon from "./icon";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="peticon" style={{ marginLeft: '60px' }}>
          <Peticon />
        </div>

        <div className="links" style={{ display: 'flex',marginLeft:'600px' }}>
          <a href="/" style={{ marginRight: '50px' }}>Home</a>
          <a href="/" style={{ marginRight: '50px' }}>Our Services</a>
          <a href="/" style={{ marginRight: '50px' }}>Products</a>
          <a href="/" style={{ marginRight: '50px' }}>FAQ</a>
          <a href="/" style={{ marginRight: '50px' }}>Contact</a>
          <a href="/">About Us</a>
        </div>
      </nav>
      <hr className="top-boarder" style={{marginTop:'30px',marginLeft:'100px'}} />
    </div>
  );
};

export default Navbar;

