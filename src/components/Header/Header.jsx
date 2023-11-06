import React from "react";
import LogoMainNav from "../../assets/images/Logo_main_nav.png";
import LocationSolid from "../../assets/icons/LocationSolid";
// import Phone from "../../assets/icons/Phone";
import Whatsapp from "../../assets/icons/Whatsapp";
// import Clock from "../../assets/icons/Clock";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      data-aos="slide-down"
      className="header_wrap text-[16px] header_1 w-full absolute z-[9999] top-0 left-0 xl:block hidden"
    >
      <div className="max-w-[1320px] mx-auto my-auto w-full pr-[var(--bs-gutter, .75rem)] pl-[var(--bs-gutter, .75rem)]">
        <div className="flex flex-wrap nav-top text-white">
          <div className="xl:w-full max-w-full px-[calc(var(--bs-gutter-x) * .5)] mt-[var(--bs-gutter-y)] flex justify-between items-center">
            <div className="py-[10px] hidden xl:block">
              <ul>
                <li className="flex gap-2 items-center justify-center">
                  <div className="fill-black">
                    <LocationSolid />
                  </div>
                  <a className="font-[900] text-stroke" href="#">
                  Texas Tech, Broadway West, Lubbock, Texas, 79406
                  </a>
                </li>
              </ul>
            </div>

            <div className="absolute top-0 nav-logo hidden xl:block">
              <div className="logo_1">
                <Link to="/">
                  <img className="block mx-auto w-[252px]" src={LogoMainNav} alt="logo" />
                </Link>
              </div>
            </div>

            <div className="py-[10px] none xl:block">
              <ul>
                <li className="flex justify-center items-center gap-2 fill-white font-[900] text-stroke">
                  {/* <div className="fill-black">
                    <Clock />
                  </div>
                  <a
                    data-aos="fade-up"
                    href="#"
                    className="underline font-[900] text-stroke"
                  >
                    Mon – Fri: 8.00 – 18.00
                  </a>{" "} */}
                  Email: rafferty.pvt.solutions@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF] rounded-[6px]">
          <div className="flex flex-wrap mt-[calc(-1*var(--bs-gutter-y))] mx-[calc(-.5 * var(--bs-gutter-x))] items-center px-4">
            <div className="col-12 w-full flex justify-between items-center">
              <div className="logo max-w-[200px] h-auto block xl:hidden">
                <Link to="/">
                  <img src={LogoMainNav} alt="logo" />
                </Link>
              </div>
              <div className="main-menu uppercase">
                <ul className="flex gap-3 py-7">
                  <li>
                    <Link to="about">About Us </Link>
                  </li>
                  <li>
                    <Link to="service">Service</Link>
                  </li>
                  <li>
                    <Link to="staffing">Staffing</Link>
                  </li>

                  {/* <li>
                    <Link to="testimonials">Testimonials</Link>
                  </li> */}
                </ul>
              </div>

              <div className="w-[280px]"></div>

              <div className="main-menu_2 flex items-center justify-center">
                <ul className="flex gap-3 uppercase">
                  <li>
                    <Link to="clients">Clients</Link>
                  </li>
                  <li>
                    <Link to="contact">Contact</Link>
                  </li>
                </ul>

                <a
                target="_blank"
                  href="https://api.whatsapp.com/send?phone=919346022733&text=Hi there, I'm a bit unsure about how to approach this..."
                  className="right_button flex justify-center items-center ml-[80px]"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
