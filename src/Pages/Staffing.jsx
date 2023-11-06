import React, { useState } from "react";
import StaffingTestimonials from "../components/StaffingTestimonials/StaffingTestimonials";
import Companies from "../components/Companies/Companies";
import PagesBack from "../components/PagesBack/PagesBack";

function Staffing() {
  const [works,setWorks] = useState([{
    name: "Identify Candidates",
    content: "Our mission is to pinpoint candidates who exhibit a genuine enthusiasm and dedication towards technology and management. Once identified, we expedite their progression into our shortlist, laying the foundation for us to initiate further follow-up steps."
  },{
    name: "Shortlist And Filter",
    content: "Once we've identified a suitable pool of candidates, we meticulously curate a shortlist based on their specific skills and experience. Our screening process may encompass thorough background checks, as well as face-to-face meetings or video calls to ensure a comprehensive evaluation."
  },{
    name: "Placement And Follow Up",
    content: "We commence with an internship program for our candidates, offering them a solid starting point. Following this, we assess their performance and filter accordingly. Those who excel have the opportunity to transition into full-time positions."
  },{
    name: "Our projects to employees",
    content: "We actively engage our candidates in real-time projects, providing them with invaluable hands-on technical experience and knowledge that proves instrumental in shaping their careers."
  },{
    name: "STAFFING",
    content: "In addition to tech roles, we offer a diverse array of opportunities for candidates who pass our interview process and make it to the shortlist. This ensures a wider range of options for potential placements." 
  }])
  return (
    <div className="overflow-hidden mx-auto">
      <PagesBack pageName={"Staffing"}/>
      <br />
      <br />

      <div className="max-w-[600px] text-center mx-auto">
        <p data-aos="fade-up" className="uppercase underline text-[#B69D74]">Staffing</p>
        <p data-aos="zoom-out">
          Agile is the core of our corporate DNA and the foundation of our past
          performance. We use agile methods, tools, and automation to develop,
          deliver, orchestrate, and manage all of our solutions—precisely
          because they’re proven in government transformations.
        </p>
      </div>
      <br />
      <br />
      
      <div className="grid sm:grid-cols-2 xl:max-w-[1300px] max-w-[100vw] mx-auto gap-4">
        {
          works.map((e, i) => <div data-aos={`${i&1 ? "slide-left":"slide-right"}`} key={i} className="lg:p-8 p-6 bg-[#b69d741a] rounded lg:mx-0 mx-2">
            <p className="text-[24px] text-[#033A5B] font-bold">{e.name}</p>
            <p>{e.content}</p>
          </div>)
        }
      </div>

      <br/>
      <br/>
      {/* <StaffingTestimonials/> */}
      <Companies className="bg-white"/>
    </div>
  );
}

export default Staffing;
