import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";

import Deal from "./Components/Deal";
import Contact from "./Components/Contact";
import BMI from "./Components/BMI";
import { Toaster } from "react-hot-toast";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import Navbar from "./Components/Navbar";
import DietPlanForm from "./Components/DietPlanForm";
import { useAuth } from "./context/AuthProvider";
import FirstAuth from "./Components/FirstAuth";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import OurServices from "./Components/OurServices";
export default function App() {
  const {isAuth} = useAuth()

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}>
          {" "}
        </Route>

        <Route exact path="/memberships" element={<Deal />}>
          {" "}
        </Route>
        <Route exact path="/contacts" element={<Contact />}>
          {" "}
        </Route>
        <Route exact path="/bmi's" element={ isAuth ? <BMI /> : <FirstAuth/>}>
          {" "}
        </Route>
        <Route exact path="/register" element={<Register />}>
          {" "}
        </Route>
        <Route exact path="/login" element={<Login />}>
          {" "}
        </Route>
        <Route exact path="/dietplan" element={isAuth ? <DietPlanForm /> : <FirstAuth/>}>
          {" "}
        </Route>
        <Route exact path="/aboutus" element=<AboutUs/>>
          {" "}
        </Route>
        <Route exact path="/ourservices" element=<OurServices/>  >
          {" "}
        </Route>
 
      </Routes>
<Footer/>
      <Toaster />
    </>
  );
}
