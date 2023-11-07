import React from "react";
import UnstopEvent from "../../assets/images/UnstopEvent.png";

function UnstopAdd() {
  return (
    <div className="md:min-w-[320px] md:p-4 p-3 bg-slate-300">
      <br/>
      <a href="https://unstop.com/p/rafferty-company-hackathon-win-exciting-awards-internship-and-full-time-opportunity-rafferty-814622">
        <center className="sm:text-2xl text-lg font-serif md:p-2">
          Win exciting awards, internships, and full-time opportunities by
          participating in our hackathon!
        </center>
        <br/>
        <img className="rounded-lg" src={UnstopEvent} alt="Unstop" />
      </a>
    </div>
  );
}

export default UnstopAdd;
