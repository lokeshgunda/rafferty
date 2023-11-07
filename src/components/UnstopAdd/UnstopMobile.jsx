import React from "react";
import UnstopEvent from "../../assets/images/UnstopEvent.png";

function UnstopMobile({handleClose}) {
  return (
    <div className="md:min-w-[320px]">
      <a href="https://unstop.com/p/rafferty-company-hackathon-win-exciting-awards-internship-and-full-time-opportunity-rafferty-814622">
        <img className="rounded-lg sm:w-[500px] w-[300px] border border-black shadow-md shadow-black" src={UnstopEvent} alt="Unstop" />
      </a>
    </div>
  );
}

export default UnstopMobile;
