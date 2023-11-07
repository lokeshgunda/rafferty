import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Staffing from "./Pages/Staffing";
import Testimonials from "./Pages/Testimonials";
import Clients from "./Pages/Clients";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import AboutUs from "./Pages/AboutUs";
import HeaderSmallScreen from "./components/Header/HeaderSmallScreen";
import HeaderMobile from "./components/Header/HeaderMobile";
import Aos from 'aos'
import "aos/dist/aos.css"
import ModalTop from "./components/Common/ModalTop";
import UnstopAddDesktop from "./components/UnstopAdd/UnstopAddDesktop";
import ModalBottom from "./components/Common/ModalBottom";
import UnstopMobile from "./components/UnstopAdd/UnstopMobile";

function App() {
  useEffect(()=>{
    Aos.init({ duration: 2000 });
  },[]);

  const [modalD, setModalD] = useState(true)
  const [modalM, setModalM] = useState(true)

  setTimeout(()=>{
    setModalD(false)
    setModalM(false)
  }, 5000)

  return (
    <React.Fragment>

      <ModalTop className="sm:block hidden" isOpen={modalD} handleClose={()=>setModalD(false)}>
        <UnstopAddDesktop handleClose={()=>setModalD(false)}/>
      </ModalTop>

      <ModalBottom className="sm:hidden block" isOpen={modalM} handleClose={()=>setModalM(false)}>
        <UnstopMobile handleClose={()=>setModalM(false)}/>
      </ModalBottom>

      <div className="flex justify-center items-center">
        <Header/>
        <HeaderSmallScreen/>
        <HeaderMobile/>
      </div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/staffing" element={<Staffing/>}/>
        {/* <Route path="/testimonials" element={<Testimonials/>}/> */}
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export default App;
