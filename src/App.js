import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ShowCase from "./components/showcase/ShowCase";
import OurInstructors from "./components/ourinstructors/OurInstructors";
import Questions from "./components/questions/Questions";
import SignUp from "./components/signup/SignUp";
import Contacts from "./components/contacts/Contacts";
import Abilities from "./components/abilities/Abilities";
import Copyright from "./components/copyright/Copyright";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Showcase */}
      <ShowCase />

      {/* What Can We Do */}
      <Abilities />

      {/* Our Instructors */}
      <OurInstructors />

      {/* Questions */}
      <Questions />

      {/* sign up */}
      <SignUp />

      {/* Contacts */}
      <Contacts />

      {/* copyright */}
      <Copyright />
    </>
  );
};

export default App;
