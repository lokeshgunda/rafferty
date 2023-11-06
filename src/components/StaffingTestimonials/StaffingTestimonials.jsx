import React from "react";
import Testimonial from "../Testimonials/Testimonial";
import TopArrow from "../../assets/icons/TopArrow";
import Banner from "../../assets/images/banner_1920x530.jpg";

function StaffingTestimonials({
  isAboutUs
}) {
  return (
    <React.Fragment>
      <div
        style={!isAboutUs ? {
          backgroundImage: `url(${Banner})`,
        } : {}}
      >
        <div className={`${!isAboutUs ? "bg-[#033a5bcc]": ""} min-h-screen flex flex-col justify-center`}>
          <p data-aos="fade-up" className="uppercase underline text-[#B69D74] text-center">
            Testimonials
          </p>
          <p data-aos="fade-down" className={`lg:text-[48px] text-[35px] font-[600] text-center ${!isAboutUs ? "text-white": "text-[#033A5B]"}`}>
            Client's Testimonials
          </p>
          <br />
          <p data-aos="zoom-out" className={`leading-7 max-w-[600px] mx-auto text-center ${!isAboutUs ? "text-white" : ""}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <br />
          <div className={`md:grid grid-cols-2 max-w-[1300px] gap-4 md:mx-auto mx-2 ${!isAboutUs ? "text-white": ""}`}>
            <Testimonial />
            <Testimonial />
          </div>

          <div className={`flex justify-center items-center gap-16 ${!isAboutUs ? "text-white fill-white": ""} mt-8`}>
            <div className="flex gap-2">
              <div className="rotate-[-90deg] justify-center items-center">
                <TopArrow />
              </div>
              prev
            </div>
            <div className="text-2xl">1/5</div>
            <div className="flex gap-2">
              next
              <div className="rotate-90 justify-center items-center">
                <TopArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </React.Fragment>
  );
}

export default StaffingTestimonials;
