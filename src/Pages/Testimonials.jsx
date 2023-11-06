import React from "react";
import Testimonial from "../components/Testimonials/Testimonial";
import PagesBack from "../components/PagesBack/PagesBack";

function Testimonials() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <PagesBack pageName={"Testimonials"}/>
      <br />
      <br />
      <p data-aos="fade-up" className="uppercase underline text-[#B69D74] text-center">Testimonials</p>
      <br />
      <div className="text-center">
        <p data-aos="fade-down" className="lg:text-[48px] text-[35px] font-[600] text-[#033A5B]">
          Client's Testimonials
        </p>
        <br />
        <p data-aos="zoom-out" className="leading-7 max-w-[600px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-[1300px] lg:mx-auto mx-2">
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
        </div>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Testimonials;
