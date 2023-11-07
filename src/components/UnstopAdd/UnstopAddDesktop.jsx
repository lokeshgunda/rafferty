import React from "react";
import UnstopEvent from "../../assets/images/UnstopEvent.png";

function UnstopAddDesktop({handleClose}) {
  return (
    <div className="min-w-[320px] md:block hidden">
      <a href="https://unstop.com/p/rafferty-company-hackathon-win-exciting-awards-internship-and-full-time-opportunity-rafferty-814622">
        <img width={500} className="rounded-lg shadow-md shadow-slate-800" src={UnstopEvent} alt="Unstop" />
      </a>
    </div>
  );
}

export default UnstopAddDesktop;
