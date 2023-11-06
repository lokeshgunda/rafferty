import React, { useState } from "react";
import scholar from "../assets/images/Designer.png";
import about from "../assets/images/about_570x550.jpg";
import Services from "../components/Services/Services";
// import StaffingTestimonials from "../components/StaffingTestimonials/StaffingTestimonials";
import Companies from "../components/Companies/Companies";
import PagesBack from "../components/PagesBack/PagesBack";

function AboutUs() {
  const [services, setServices] = useState([
    {
      name: "Projects",
      content: "Projects",
      image: "services1.jpg",
    },
    {
      name: "IT Staffing",
      content:
        "Our approach provides your business with dedicated staffing consultants.",
      image: "services2.jpg",
    },
    {
      name: "Training",
      content: "Training",
      image: "services3.jpg",
    },
    {
      name: "Outsourcing",
      content: "Outsourcing",
      image: "services4.jpg",
    },
  ]);
  const [percentages, setPercentages] = useState([
    {
      name: "IT Staffing",
      percentage: 90,
    },
    {
      name: "Training",
      percentage: 75,
    },
    {
      name: "Outsourcing",
      percentage: 80,
    },
  ]);
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <PagesBack pageName={"About Us"} />

      <div className="lg:grid grid-cols-2 bg-[#F8F6F2]">
        <div
          data-aos="flip-right"
          className="lg:max-w-[600px] lg:ml-auto mx-2 pr-8"
        >
          <br />
          <br />
          <br />
          <p data-aos="fade-up" className="uppercase underline text-[#B69D74]">
            ABOUT US
          </p>
          <br />
          <div>
            <p className="text-[44px] font-[600] text-[#033A5B]">
              Welcome To Rafferty
            </p>
            <br />
            <p className="leading-7">
              At Rafferty, we pride ourselves on being a leading software
              company dedicated to delivering top-tier excellence to our
              employees. With a wealth of experience spanning over 19 years, we
              have honed our expertise in providing high-end solutions that set
              the standard in the industry.
              <br />
              <br />
              Our commitment to employee excellence is unwavering. We understand
              that a skilled and motivated workforce is the key to success in
              the fast-paced world of software development. That's why we invest
              in our team members, providing them with the tools, training, and
              support they need to thrive and excel.
              <br />
              <br />
              When you partner with Rafferty, you're not just getting a software
              solution; you're gaining a team of passionate professionals who
              are committed to pushing the boundaries of what's possible. We
              take pride in delivering innovative and cutting-edge solutions
              that meet and exceed your business needs.
              <br />
              <br />
              Experience the difference with Rafferty, where employee excellence
              and high-end software solutions converge to drive success in the
              digital landscape.
              <br />{" "}
            </p>
          </div>

          {percentages.map((e, i) => (
            <React.Fragment key={i}>
              <br />
              <div>
                <div className="flex justify-between">
                  <p className="text-[#033A5B] text-[18px] font-bold">
                    {e.name}
                  </p>
                  <p className="text-[#033A5B] text-[18px] font-bold">
                    {e.percentage}%
                  </p>
                </div>
                <br />

                <div className="w-full rounded-full bg-slate-400">
                  <div
                    className="bg-[brown] rounded-full"
                    style={{
                      width: e.percentage + "%",
                      height: "10px",
                    }}
                  ></div>
                </div>
              </div>
            </React.Fragment>
          ))}

          <br />
          <br />
          <br />
        </div>

        <div
          data-aos="fade"
          className="lg:block hidden m-4 rounded-3xl"
          style={{
            backgroundImage: `url(${about})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            opacity: 0.4,
          }}
        ></div>
      </div>

      <div
        style={{
          backgroundImage: `url(${scholar})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="pt-[70px] bg-[#033A5BCC]">
          <h1 data-aos="fade-up" className="text-white text-center underline">
            OUR SERVICES
          </h1>
          <br />
          <br />
          <br />
          <h2
            data-aos="fade-down"
            className="lg:text-[48px] text-[35px] text-center text-white max-w-[650px] mx-auto"
          >
            Rafferty Is Proud To Offer Support On All IT Services You Need.
          </h2>

          <br />
          <br />
          <br />

          <div className="">
            <div className="max-w-[1300px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {services.map((e, i) => (
                <div className="xl:mx-auto mx-2" key={i}>
                  <Services {...e} />
                </div>
              ))}
            </div>
          </div>

          <br />
          <br />
          <br />
        </div>
      </div>

      {/* <StaffingTestimonials isAboutUs/> */}
      <Companies className="bg-white" />
    </div>
  );
}

export default AboutUs;
