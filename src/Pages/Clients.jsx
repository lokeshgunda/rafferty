import React from "react";
import Companies from "../components/Companies/Companies";
import PagesBack from "../components/PagesBack/PagesBack";

function Clients() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <PagesBack pageName={"Clients"}/>
      <br />
      <br />
      <p data-aos="fade-up" className="uppercase underline text-[#B69D74] text-center">CLIENT'S</p>
      <br />
      <div className="text-center">
        <p data-aos="fade-down" className="lg:text-[48px] text-[35px] font-[600] text-[#033A5B]">Partners</p>
        <br />
        <p data-aos="zoom-out" className="leading-7 max-w-[600px] md:mx-auto mx-2">
        We have forged robust partnerships with numerous prominent corporations, leading consulting firms, system integrators, and vendors. We hold each of these companies in high regard, recognizing them as global leaders in their specific domains. Collaborating closely with them is a genuine privilege for us. In our organization, we gauge the effectiveness of our technological solutions by their impact on our clients' businesses, evaluating factors such as efficiency, innovation, and financial returns.
        </p>
      </div>
      <Companies className="bg-white"/>
    </div>
  );
}

export default Clients;
