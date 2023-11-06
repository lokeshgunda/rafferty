import React from "react";
import DoubleRight from "../../assets/icons/DoubleRight";
import About from "../../assets/images/about_570x550.jpg";

function AboutUs() {
  return (
    <React.Fragment>
      <div className="xl:max-w-[1300px] block mx-auto lg:mb-16 p-3 max-w-[100vw] overflow-hidden">
        <p data-aos="fade-up" className="uppercase underline text-[#B69D74]">
          About Us
        </p>
        <br />
        <div className="lg:grid grid-cols-2 gap-4">
          <div data-aos="fade-right">
            <p
              data-aos="fade-down"
              className="lg:text-[48px] text-[35px] font-[600] text-[#033A5B]"
            >
              We're Very Experience In IT Staffing And Solution Requirements.
            </p>
            <br />
            <p className="leading-7">
              We, as an IT staffing and solutions company with over 19 years of
              experience, offer a comprehensive solution to our clients. We take
              pride in our ability to bridge the gap between the right employer
              and the right talent. Our team consists of experienced recruiters
              and industry experts who are constantly updated on the latest
              technologies.
              <br />
              <br />
              Our team of expert recruiters and industry experts can provide you
              with a complete solution for all your IT staffing needs. We excel
              at bridging the gap between the right employers and the right
              talent, and we stay up to date on the latest market trends to
              ensure that our clients have access to the best possible
              candidates.
              <br />
              <br />
              Whether you are a business looking to hire top IT talent or a job
              seeker searching for your next opportunity, we are here to help
              you achieve your goals.{" "}
            </p>
            <br />
            <b>In other words:</b>
            <br />
            <br />
            What do you need from us today?
            <div className="flex items-center gap-3 leading-7">
              <div className="w-[25px]">
                <DoubleRight />
              </div>

              <p>
                We are the best at what we do because we have the experience,
                the expertise, and the network. We understand the IT industry
                inside and out, and we are committed to helping our clients
                succeed.
              </p>
            </div>
            <br />
            <div className="flex items-center gap-3 leading-7">
              <div className="w-[25px]">
                <DoubleRight />
              </div>
              <p>What do you need from us today?</p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="relative"
          >
            {/* <div className="relative h-full" style={{
              backgroundImage: `url(${About})`
          }}>
          </div> */}
            <img
              className="lg:absolute top-0 right-0 lg:w-auto w-[90vw] mx-auto"
              src={About}
            />
            <div className="lg:w-[400px] lg:h-[300px] w-[200px] h-[200px] flex flex-col items-center justify-center rounded-[6px] absolute left-[10px] lg:bottom-[10px] bottom-[-10px] z-[1] bg-[#033A5B] text-white">
              <p className="lg:text-7xl text-5xl text-center">19+</p>
              <p className="lg:text-[40px] text-[20px] text-center">Years</p>
              <p className="lg:text-[40px] text-[20px] text-center">
                Of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default AboutUs;
