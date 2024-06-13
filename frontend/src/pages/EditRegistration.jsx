import { useState, useEffect } from "react";
import BackButton9 from "../components/BackButton9";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import backgroundImage from '../assets/OwnerAssets/back10.jpg'

const EditRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/registration/${id}`)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setAddress(response.data.address);
        setPhoneNumber(response.data.phonenumber);
        setPassword(response.data.password);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        //alert(`An error happend. Please Check console`);
        console.log(error);
      });
  }, []);

  const handleEditRegistration = () => {
    const data = {
      name,
      email,
      address,
      phonenumber,
      password,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/registration/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar(" Pet Owner Registration Edited Successfully", {
          variant: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        //alert("An Error happend Please check the console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

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

    <div className="p-4">
      <BackButton9 />
      <h1 className="text-3xl my-4">Edit Registration</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Phone Number</label>
          <input
            type="text"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditRegistration} style={{backgroundColor:'#ffd700'}}>
          Submit
        </button>
      </div>
    </div>
    </div>
  );
};

export default EditRegistration;
