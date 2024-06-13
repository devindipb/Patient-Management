import { useEffect, useState,useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton3 from "../components/BackButton3";
import Spinner from "../components/Spinner";
import { useReactToPrint } from "react-to-print";
import backgroundImage from '../assets/OwnerAssets/back8.jpg'

const ShowRegistration = () => {
  const [registration, setRegistration] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/registration/${id}`)
      .then((response) => {
        setRegistration(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

    const ComponentsRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => ComponentsRef.current,
      DocumentTitle:"Registration Report",
      onafterprint:()=>alert("Registration Report Successfully Download !"), 

    })

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
      <BackButton3 />
      <h1 className="text-3xl my-4">Show Pet Owner Details</h1>
      <div ref={ComponentsRef}>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{registration._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Name</span>
            <span>{registration.name}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Address</span>
            <span>{registration.address}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Phone Number</span>
            <span>{registration.phonenumber}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Email</span>
            <span>{registration.email}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Password</span>
            <span>{registration.password}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(registration.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(registration.updatedAt).toString()}</span>
          </div>
          <button onClick={handlePrint} style={{backgroundColor:'#ffd700'}}>Download Report</button>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default ShowRegistration;
