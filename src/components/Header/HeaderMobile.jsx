import React, { useState } from "react";
import Logo from "../../assets/images/Logo_main_nav.png";
import Bars from "../../assets/icons/Bars";
import Xmark from "../../assets/icons/Xmark";
import { Link } from "react-router-dom";
import Phone from "../../assets/icons/Phone";
import Whatsapp from "../../assets/icons/Whatsapp";

function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavButton = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <div
        data-aos="slide-down"
        className="lg:hidden block absolute top-0 left-0 w-full z-50"
      >
        <div className="flex items-center px-3">
          <div className="w-full flex justify-between items-center">
            <div className="logo block">
              <Link to="/">
                <img className="h-[135px] w-[200px]" src={Logo} alt="logo" />
              </Link>
            </div>
            <button onClick={handleNavButton} className="fill-white">
              <Bars />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden block main-menu fixed top-0 right-0 z-50 ${
          isOpen ? "w-screen h-screen bg-[#000000a3]" : "w-0"
        } duration-500`}
      >
        <div className={`${isOpen ? "w-[320px]" : "w-0"} duration-500 absolute right-0 bg-[#033A5B] h-screen`}>
          <button
            onClick={handleNavButton}
            className="border-2 border-white fill-white w-[25px] h-[25px] flex justify-center items-center m-4 text-white rounded-full"
          >
            <Xmark />
          </button>
          <ul onClick={handleNavButton} className="text-white m-4 w-full">
            <li className="p-3 font-bold border-b border-black w-full">
              <Link to="about" className="font-[600] text-[15px] w-[300px]">
                About Us
              </Link>
            </li>
            <li className="p-3 font-bold border-b border-black w-full">
              <Link to="service" className="font-[600] text-[15px] w-[300px]">
                Service
              </Link>
            </li>
            <li className="p-3 font-bold border-b border-black w-full">
              <Link to="staffing" className="font-[600] text-[15px] w-[300px]">
                Staffing
              </Link>
            </li>

            {/* <li className="p-3 font-bold border-b border-black w-full">
              <Link
                to="testimonials"
                className="font-[600] text-[15px] w-[300px]"
              >
                Testimonials
              </Link>
            </li> */}

            <li className="p-3 font-bold border-b border-black w-full">
              <Link to="clients" className="font-[600] text-[15px] w-[300px]">
                Clients
              </Link>
            </li>

            <li className="p-3 font-bold border-b border-black w-full">
              <Link to="contact" className="font-[600] text-[15px] w-[300px]">
                Contact
              </Link>
            </li>

            <a
            target="_blank"
              href="https://api.whatsapp.com/send?phone=919346022733&text=Hi there, I'm a bit unsure about how to approach this..."
              className="right_button flex items-center py-4"
            >
              <div className="right_icon px-[10px] pt-[10px] pb-[6px]">
                <div className="border p-3 rounded-md fill-[#B69D74]">
                  <Whatsapp/>
                </div>
              </div>
              <div className="content_top">
                <p>Need help? Let’s Talk</p>
                <h5 className="text-xl"> +91 93460 22733</h5>
              </div>
            </a>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderMobile;
