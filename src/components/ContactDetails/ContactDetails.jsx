import React from "react";
import Location from "../../assets/icons/Location";
import Phone from "../../assets/icons/Phone";
import Envelope from "../../assets/icons/Envelope";

function ContactDetails() {
  return (
    <div className="grid lg:grid-cols-2 max-w-[1300px] lg:mx-auto mx-3 gap-4">
      <div data-aos="zoom-in">
        <p data-aos="fade-up" className="uppercase underline text-[#B69D74]">
          CONTACT US WITH EASE
        </p>
        <br />
        <div>
          <p data-aos="fade-down" className="lg:text-[48px] text-[35px] font-[600] text-[#033A5B]">Get In Touch</p>
          <p className="leading-7 lg:max-w-[370px] max-w-[770px] mt-3">
          Feel free to reach out with any further inquiries or questions at support@raffertypvt.in. We look forward to hearing from you!
          </p>
        </div>
      </div>
      <div data-aos="zoom-in">
        <div className="leading-10 my-3">
          <div className="flex items-center fill-[#B69D74] gap-3 text-lg">
            <Location />
            <p className="text-[#033A5B] font-bold">Texas</p>
          </div>
          Texas Tech, Broadway West, Lubbock, Texas, 79406
        </div>

        <br />

        <div className="grid md:grid-cols-2 ">
          <div className="leading-10 my-3">
            <div className="flex items-center fill-[#B69D74] gap-3 text-lg">
              <Phone />
              <p className="text-[#033A5B] font-bold">Call Us</p>
            </div>
            +91 93460 22733
          </div>
          <div className="leading-10 my-3">
            <div className="flex items-center fill-[#B69D74] gap-3 text-lg">
              <Envelope />
              <p className="text-[#033A5B] font-bold">Email Us</p>
            </div>
            support@raffertypvt.in
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default ContactDetails;
