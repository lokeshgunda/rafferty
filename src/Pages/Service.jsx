import React, { useState } from "react";
import Services from "../components/Services/Services";
import PagesBack from "../components/PagesBack/PagesBack";

function Service() {
  const [services, setServices] = useState([{
    name: "Projects",
    content: "Projects",
    image: "services1.jpg"
  },{
    name: "IT Staffing",
    content: "IT Staffing",
    image: "services2.jpg"
  },{
    name: "Training",
    content: "Training",
    image: "services3.jpg"
  },{
    name: "Outsourcing",
    content: "Outsourcing",
    image: "services4.jpg"
  }])
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <PagesBack pageName={"Service"}/>
      <br/>
      <br/>
      <p data-aos="fade-up" className="uppercase underline text-[#B69D74] text-center">
        OUR SERVICES
      </p>
      <br />
      <p data-aos="fade-down" className="lg:text-[48px] text-[35px] font-[600] text-[#033A5B] max-w-[700px] mx-auto text-center">
        Rafferty Is Proud To Offer Support On All IT Services You Need.
      </p>
      <br />
      <br />

      <div className="max-w-[1300px] lg:mx-auto mx-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {
          services.map((e, i) => <Services key={i} {...e}/>)
        }
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default Service;
