import React from "react";
import Logo from '../../assets/images/Logo_main_nav.png'
import { Link } from "react-router-dom";

function HeaderSmallScreen() {
  return (
    <React.Fragment>
      <div data-aos="slide-down" className="xl:hidden lg:block hidden absolute top-0 left-0 w-full z-50">
        <div className="flex items-center px-3">
          <div className="w-full flex justify-between items-center">
            <div className="logo block">
              <Link to="/">
                <img className="h-[135px] w-[200px]" src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="main-menu">
              <ul className="flex uppercase text-white">
                <li className="px-4">
                  <Link to="about" className="font-[900] text-[15px] text-stroke">About Us </Link>
                </li>
                <li className="px-4">
                  <Link to="service" className="font-[900] text-[15px] text-stroke">Service</Link>
                </li>
                <li className="px-4">
                  <Link to="staffing" className="font-[900] text-[15px] text-stroke">Staffing</Link>
                </li>

                {/* <li className="px-4">
                  <Link to="testimonials" className="font-[900] text-[15px] text-stroke">Testimonials</Link>
                </li> */}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderSmallScreen;
