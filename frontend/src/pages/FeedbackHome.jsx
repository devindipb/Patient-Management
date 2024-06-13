import React, { useEffect, useState } from 'react';
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Footer from  '../components/footer';
import AdminNavbar from '../components/adminNav';
import { PDFDownloadLink } from "@react-pdf/renderer"
import FeedbackPdf from "../components/FeedbackPdf";
import backgroundImage from '../assets/OwnerAssets/back2.jpg'

const FeedbackHome = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState("");
  const keys = [
    "Name",
    "Email"
];

const search = (data) => {
  return data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query))
  );
};

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(books);

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
        <h1 className="text-3xl my-8">FeedBack</h1>

        <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
        <Link to="/books/create">
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
            <th className="border border-slate-600 rounded-md">Name</th>
            <th className="border border-slate-600 rounded-md">Email</th>
            <th className="border border-slate-600 rounded-md">Feedbacks</th>
            <th className="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
        {search(books).map((books, index) => (
            <tr key={books._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {books.Name}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {books.Email}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {books.Feedback}
              </td>
             
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${books._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/books/delete/${books._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                  <PDFDownloadLink
                          document={<FeedbackPdf books={books} />}
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
  

export default FeedbackHome;
