import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import ShowCase from "./components/showcase/ShowCase";
import OurInstructors from "./components/ourinstructors/OurInstructors";
import Questions from "./components/questions/Questions";
import SignUp from "./components/signup/SignUp";
import Contacts from "./components/contacts/Contacts";

const App = () => {
  

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Showcase */}
      <ShowCase />

      {/* Our Instructors */}
      <OurInstructors />

      {/* Questions */}
      <Questions />

      {/* sign up */}
      <SignUp />

      {/* Contacts */}
      <Contacts />
    </>
  );
};

export default App;
