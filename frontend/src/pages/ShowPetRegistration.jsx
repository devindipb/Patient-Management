import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton4 from "../components/BackButton4";
import Spinner from "../components/Spinner";
import backgroundImage from '../assets/OwnerAssets/back8.jpg'

const ShowpetRegistration = () => {
  const [petregistration, setpetRegistration] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/pet/${id}`)
      .then((response) => {
        setpetRegistration(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
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

    <div className="p-4">
      <BackButton4 />
      <h1 className="text-3xl my-4">Show Pet Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{petregistration._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Pet Name</span>
            <span>{petregistration.petname}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Breed</span>
            <span>{petregistration.breed}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Pet Type</span>
            <span>{petregistration.pettype}</span>
          </div> 
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Gender</span>
            <span>{petregistration.gender}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">age</span>
            <span>{petregistration.age}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(petregistration.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(petregistration.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default ShowpetRegistration;
