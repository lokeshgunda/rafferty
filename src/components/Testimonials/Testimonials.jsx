import React from "react";
import Phone from "../../assets/icons/Phone";
import Testimonial from "./Testimonial";
import TestimonialImg from "../../assets/images/testimonial.jpg";

function Testimonials() {
  return (
    <React.Fragment>
      <div className="lg:grid grid-cols-2 xl:max-w-[1300px] max-w-[100vw] md:mx-auto mx-2 gap-12 overflow-hidden">
        <div
          data-aos="fade-right"
          className="relative"
          style={{
            backgroundImage: `url(${TestimonialImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        >
          <img
            src={TestimonialImg}
            className="lg:hidden px-2 w-full bg-white"
            alt=""
          />
          <div className="absolute bottom-0 bg-white p-4 flex rounded gap-6 items-center justify-center">
            <div className="bg-[#B69D74] p-4 fill-white rounded">
              <Phone />
            </div>
            <div>
              <p>Need help? Let's Talk</p>
              <p className="text-2xl">+91 93460 22733</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <p data-aos="fade-up" className="uppercase underline text-[#B69D74]">
            <br />
            TESTIMONIALS
          </p>
          <br />
          <p data-aos="fade-down" className="lg:text-[48px] text-[35px] font-[600] text-[#033A5B]">
            Client's Testimonials
          </p>
          <br />
          <p className="leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <br />
          {[1, 2].map((e, i) => (
            <Testimonial key={i} />
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default Testimonials;
