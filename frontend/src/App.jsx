import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateRegistration from "./pages/CreateRegistration";
import ShowRegistration from "./pages/ShowRegistration";
import EditRegistration from "./pages/EditRegistration";
import DeleteRegistration from "./pages/DeleteRegistration";
import Dashboard from "./pages/DashBoard";
import PetHome from "./pages/PetHome";
import CreatePetRegistration from "./pages/CreatePetRegistration";
import ShowPetRegistration from "./pages/ShowPetRegistration";
import EditPetRegistration from "./pages/EditPetRegistration";
import DeletePetRegistration from "./pages/DeletePetRegistration";
import FeedbackHome from "./pages/FeedbackHome";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import AdminDashboard from "./pages/adminDashboard";
import Profile from "./pages/profile";






const App = () => {
    return (
    
  
       <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registration/create" element={<CreateRegistration/>} />
        <Route path="/registration/details/:id" element={<ShowRegistration/>} />
        <Route path="/registration/edit/:id" element={<EditRegistration/>} />
        <Route path="/registration/delete/:id" element={<DeleteRegistration/>} />
        <Route path ="/dashboard" element={<Dashboard />} /> 
        <Route path="/pethome" element={<PetHome />} />
        <Route path="/petregistration/create" element={<CreatePetRegistration/>} />
        <Route path="/petregistration/details/:id" element={<ShowPetRegistration/>} />
        <Route path="/petregistration/edit/:id" element={<EditPetRegistration/>} />
        <Route path="/petregistration/delete/:id" element={<DeletePetRegistration/>} />
        <Route path="/Feedbackhome" element={<FeedbackHome />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/admindash" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
     
    );
};

export default App;