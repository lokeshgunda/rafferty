import React from "react";
import Logo_main from "../../assets/images/logo.jpg";
import Banner from "../../assets/images/footer.png";
import DoubleRight from "../../assets/icons/DoubleRight";
import Location from "../../assets/icons/Location";
import Envelope from "../../assets/icons/Envelope";
import Phone from "../../assets/icons/Phone";
import Whatsapp from '../../assets/icons/Whatsapp'

function Footer() {
  return (
    <footer
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundPosition: "center center"
      }}
    >
      <div className="xl:px-28 lg:pt-20 lg:pb-10 bg-[#033a5bcc] text-base">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 text-white justify-center">
          <div className="px-4">
            <img className="rounded-lg shadow-lg shadow-white" width={100} height={100} src={Logo_main} alt="" />
            <br/>
            <p className="font-[600] leading-7">
            We are the scholars for all your technology-related staffing and service needs. We understand that we cannot just be anything without a keen consideration of any available understanding.
            </p>
          </div>

          <div className="px-4">
            <div>
              <h4 className="text-3xl py-2.5">Quick Link</h4>
              <div className="single_footer_link">
                <ul className="font-[500]">
                  <li className="py-2.5">
                    <a
                      className="flex items-center gap-3 fill-white hover:fill-slate-400 hover:text-slate-400 hover:ps-4 duration-700"
                      href="about"
                    >
                      <DoubleRight />
                      About Us
                    </a>
                  </li>
                  <li className="py-2.5">
                    <a
                      className="flex items-center gap-3 fill-white hover:fill-slate-400 hover:text-slate-400 hover:ps-4 duration-700"
                      href="service"
                    >
                      <DoubleRight />
                      Service
                    </a>
                  </li>
                  <li className="py-2.5">
                    <a
                      className="flex items-center gap-3 fill-white hover:fill-slate-400 hover:text-slate-400 hover:ps-4 duration-700"
                      href="staffing"
                    >
                      <DoubleRight />
                      Staffing
                    </a>
                  </li>

                  {/* <li className="py-2.5">
                    <a
                      className="flex items-center gap-3 fill-white hover:fill-slate-400 hover:text-slate-400 hover:ps-4 duration-700"
                      href="testimonials"
                    >
                      <DoubleRight />
                      Testimonials
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="px-4">
            <div>
              <h4 className="text-3xl py-2.5">Service Offerings</h4>
              <div className="single_footer_link">
                <ul className="font-[500]">
                  <li className="py-2.5">
                    <a
                      className="flex items-center gap-3 fill-white hover:fill-slate-400 hover:text-slate-400 hover:ps-4 duration-700"
                      href="#"
                    >
                      <DoubleRight />
                      IT Staffing
                    </a>
                  </li>
                  <li className="py-2.5">
                    <a
                      className="flex items-center gap-3 fill-white hover:fill-slate-400 hover:text-slate-400 hover:ps-4 duration-700"
                      href="#"
                    >
                      <DoubleRight />
                      Training
                    </a>
                  </li>
                  <li className="py-2.5">
                    <a
                      className="flex items-center gap-3 fill-white hover:fill-slate-400 hover:text-slate-400 hover:ps-4 duration-700"
                      href="#"
                    >
                      <DoubleRight />
                      Outsourcing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="px-4">
            <div>
              <h4 className="text-3xl py-2.5">Head Office</h4>
              <div className="single_footer_link">
                <ul className="font-[500]">
                  <li className="py-2.5">
                    <div className="flex items-center gap-3 fill-white">
                      <div className="fill-[#B69D74]">
                        <Location />
                      </div>
                      <p>
                      Texas Tech, Broadway West, 
                        <br />
                        Lubbock, Texas, 79406
                      </p>
                    </div>
                  </li>
                  <li className="py-2.5">
                    <a
                      className="flex items-center gap-3 fill-white"
                      href="mailto:rubelmah55@gmail.com"
                    >
                      <div className="fill-[#B69D74]">
                        <Envelope />
                      </div>
                      <p className="hover:fill-slate-400 hover:text-slate-400 duration-700">
                        support@raffertypvt.in
                      </p>
                    </a>
                  </li>
                  <li className="py-2.5">
                    <a
                      className="flex items-center gap-3 fill-white"
                      href="tel:232-456-7890"
                    >
                      <div className="fill-[#B69D74]">
                        <Whatsapp/>
                      </div>
                      <p className="hover:fill-slate-400 hover:text-slate-400 duration-700">
                        +91 93460 22733
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
