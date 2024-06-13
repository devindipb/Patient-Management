/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

const Profile = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // Retrieve user profile data from localStorage
    const storedName = localStorage.getItem("name");
    const storedPhoneNumber = localStorage.getItem("phonenumber");
    const storedAddress = localStorage.getItem("address");
    const storedEmail = localStorage.getItem("email");

    // Set the state with the retrieved data
    setName(storedName || "");
    setPhoneNumber(storedPhoneNumber || "");
    setAddress(storedAddress || "");
    setEmail(storedEmail || "");

    axios
      .get("http://localhost:5555/user/name",{withCredentials:true})
      .then ((response)=>{
        const{name}=response.data;
        setName(name);
        setPhoneNumber(phonenumber);
        setAddress(address);
        setEmail(email);
      })


  }, []);

  

  return (
    <div>
      <h1>Profile</h1>
     
       
          <p>  {name}
          
      
            value={phonenumber}
         
      
            value={address}
         
            value={email}</p>
      
      
    </div>
  );
};

export default Profile;*/

/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

const Profile = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // Retrieve user profile data from localStorage
    const storedName = localStorage.getItem("name");
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    const storedAddress = localStorage.getItem("address");
    const storedEmail = localStorage.getItem("email");

    // Set the state with the retrieved data
    setName(storedName || "");
    setPhoneNumber(storedPhoneNumber || "");
    setAddress(storedAddress || "");
    setEmail(storedEmail || "");

    axios
      .get("http://localhost:5555/login/", { withCredentials: true })
      .then((response) => {
        const { name, phonenumber, address, email } = response.data; // Destructuring response data
        setName(name);
        setPhoneNumber(phonenumber);
        setAddress(address);
        setEmail(email);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Address: {address}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;*/

/*import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5173/user", { withCredentials: true });
        const { data } = response;

        setName(data.name || "");
        setPhoneNumber(data.phonenumber || "");
        setAddress(data.address || "");
        setEmail(data.email || "");
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: <span>{name}</span></p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Address: {address}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;*/
/*import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile data from the backend
        const response = await axios.get("http://localhost:5173/user", { withCredentials: true });
        const { data } = response;

        setName(data.name || "");
        setPhoneNumber(data.phoneNumber || "");
        setAddress(data.address || "");
        setEmail(data.email || "");
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Address: {address}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import backgroundImage from '../assets/OwnerAssets/back5.jpg'

const Profile = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // Retrieve user profile data from localStorage
    const storedName = localStorage.getItem("name");
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    const storedAddress = localStorage.getItem("address");
    const storedEmail = localStorage.getItem("email");

    // Set the state with the retrieved data
    setName(storedName || "");
    setPhoneNumber(storedPhoneNumber || "");
    setAddress(storedAddress || "");
    setEmail(storedEmail || "");

    // Fetch user profile data from backend
    axios
      .get("http://localhost:5555/user/", { withCredentials: true })
      .then((response) => {
        const { name, phoneNumber, address, email } = response.data; // Destructuring response data
        setName(name);
        setPhoneNumber(phoneNumber);
        setAddress(address);
        setEmail(email);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  return (
    <div
      className='p-4'
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: 'cover', // Adjust background image size
        backgroundPosition: 'center', // Adjust background image position
        minHeight: '100vh', // Ensure the background covers the entire screen
      }}
    >


    <div>
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Address: {address}</p>
      <p>Email: {email}</p>
    </div>
    </div>
  );
};

export default Profile;


