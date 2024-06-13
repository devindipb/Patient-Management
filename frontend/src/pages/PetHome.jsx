import React, { useEffect, useState } from 'react';
import BackButton from "../components/BackButton";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Footer from  '../components/footer';
import AdminNavbar from '../components/adminNav';
import { PDFDownloadLink } from "@react-pdf/renderer"
import PetPdf from "../components/PetPdf";
import backgroundImage from '../assets/OwnerAssets/back2.jpg'

const PetHome = () => {
    const [petregistration, setpetRegistration] = useState([]);
    const [loading, setLoading] = useState(false);

    const [query, setQuery] = useState("");
    const keys = [
    "petname",
   
];

const search = (data) => {
  return data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query))
  );
};

  
    useEffect(() => {
        setLoading(true);
        axios
          .get("http://localhost:5555/pet")
          .then((response) => {
            setpetRegistration(response.data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);

  console.log(petregistration);
  return (
    <div>
      <AdminNavbar/>

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
    <div className="flex justify-center items-center gap-x-4">
    </div>
    <div className="flex justify-between items-center">
      <h1 className="text-3xl my-8">Pets</h1>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
      <Link to="/petregistration/create">
        <MdOutlineAddBox className="text-sky-800 text-4xl" />
      </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Pet Name</th>
          <th className="border border-slate-600 rounded-md">Breed</th>
          <th className="border border-slate-600 rounded-md">Pet Type</th>
          <th className="border border-slate-600 rounded-md">Gender</th>
          <th className="border border-slate-600 rounded-md">Age</th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
      {search(petregistration).map((petregistration, index) => (
          <tr key={petregistration._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {petregistration.petname}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {petregistration.breed}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {petregistration.pettype}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {petregistration.gender}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {petregistration.age}
            </td>
           
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/petregistration/details/${petregistration._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/petregistration/edit/${petregistration._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/petregistration/delete/${petregistration._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
                <PDFDownloadLink
                          document={<PetPdf petregistration={petregistration} />}
                          fileName="FORM"
                        >
                          {({ loading }) =>
                            loading ? (
                              <button>loading...</button>
                            ) : (
                              <button>download</button>
                            )
                          }
                        </PDFDownloadLink>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
      )}
      </div>
      <Footer/>
      </div>
      </div>
  );
};

export default PetHome;