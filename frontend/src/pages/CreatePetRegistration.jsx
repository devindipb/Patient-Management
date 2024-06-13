import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import backgroundImage from '../assets/OwnerAssets/back7.jpg'

const CreatePetRegistration = () => {
  const [petname, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [pettype, setPetType] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSavePetRegistration = () => {
    

     const data = {
      petname,
      breed,
      pettype,
      gender,
      age,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/pet", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Pet Registration Successfully", { variant: "success" });
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
    <BackButton />
    <h1 className="text-3xl my-4">Pet Registration</h1>
    {loading ? <Spinner /> : ""}
    <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Pet Name</label>
        <input
          type="text"
          value={petname}
          onChange={(e) => setPetName(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Breed</label>
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Pet Type</label>
        <input
          type="text"
          value={pettype}
          onChange={(e) => setPetType(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Gender</label>
            <div className="flex items-center">
              <label className="mr-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>
            </div>

      <div className="my-4">
        <label className="text-xl mr-4 text-gray-500">Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <button className="p-2 bg-sky-300 m-8" onClick={handleSavePetRegistration}style={{backgroundColor:'#ffd700'}}>
        Register
      </button>
    </div>
  </div>
  </div>
);
};
export default CreatePetRegistration;
