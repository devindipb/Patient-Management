/*import { useState } from "react";
import Footer from  '../components/footer';
import Navbar from '../components/Navbar';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      //const response =  axios.post('http://localhost:5555/login/', { email, password });
      //console.log(response.data); // You can handle authentication success here
      axios
        .get("http://localhost:5555/login/", { email, password })
        .then(console.log("sdfs"))
        .then((res) =>{ 
          const{name,phonenumber,address}=res.data;
          localStorage.setItem('name',name);
          localStorage.setItem('phonenumber',phonenumber);
          localStorage.setItem('address',address);
          localStorage.setItem('email',email);
          console.log(res)})
        .then(navigate("/dashboard"))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Error during login:", error.response.data);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="p-4">
      <h1 className="text-3xl my-4" style={{textAlign:'center',fontStyle:'bold'}}>Login to Pet Owner's Account</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
                required
              />
            </label>
          </div>
          <br />
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
                required
              />
            </label>
          </div>
          <br />
          <button className="p-2 bg-sky-300 m-8" type="submit" style={{backgroundColor:'#ffd700'}}>
            Login
          </button>
          
            <div><span>Don't have an account?<a href="/registration/create" style={{color:'blue'}}>Sign Up</a></span></div>
          
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;*/
import { useState } from "react";
import Footer from  '../components/footer';
import Navbar from '../components/Navbar';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from '../assets/OwnerAssets/back6.jpg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5555/login/", { params: { email, password } });
      const { data } = response;
      localStorage.setItem('name', data.name);
      localStorage.setItem('phoneNumber', data.phonenumber);
      localStorage.setItem('address', data.address);
      localStorage.setItem('email', data.email);
      console.log(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during login:", error.response.data);
      setErrorMessage(error.response.data.message);
    }
  };

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

    <div className="p-4">
      <h1 className="text-3xl my-4" style={{textAlign:'center',fontStyle:'bold'}}>Login to Pet Owner's Account</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
                required
              />
            </label>
          </div>
          <br />
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
                required
              />
            </label>
          </div>
          <br />
          <button className="p-2 bg-sky-300 m-8" type="submit" style={{backgroundColor:'#ffd700'}}>
            Login
          </button>
          
            <div><span>Don't have an account?<a href="/registration/create" style={{color:'blue'}}>Sign Up</a></span></div>
          
        </div>
      </form>
    </div>
    <Footer/>
    </div>
    </div>
  );
};

export default Login;

