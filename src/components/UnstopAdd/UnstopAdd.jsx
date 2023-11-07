import React from "react";
import UnstopEvent from "../../assets/images/UnstopEvent.png";

function UnstopAdd() {
  return (
    <div className="md:min-w-[320px] p-4 bg-slate-300">
      <br className="md:block hidden"/>
      <a href="">
        <center className="sm:text-2xl text-lg font-serif p-2">
          Win exciting awards, internships, and full-time opportunities by
          participating in our hackathon!
        </center>
        <br className="md:block hidden"/>
        <img className="rounded-lg" src={UnstopEvent} alt="Unstop" />
      </a>
    </div>
  );
}

export default UnstopAdd;
