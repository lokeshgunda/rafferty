import React, { useEffect, useState } from "react";
import ArrowTrendUp from "../../assets/icons/ArrowTrendUp";
import TopArrow from "../../assets/icons/TopArrow";

function HeroWrapper() {
  const [data, setData] = useState([
    {
      head: "Inspired to Bridge the Gap between Requirement and Resource",
      content:
        "We are a trusted Technical Staffing Firm which gives 100% assurance for your every Requirement. We yearn to build a firm path between the Requirement and the Resource.",
    },
    {
      head: "The Key to our Success -- Expertise Training and Skills",
      content:
        "We are known for the most experienced Trainers and the most advanced Training Tools. Associate with us, and we promise we will be the end of your Search.",
    },
    {
      head: "Right Resource, Right Requirement, Right Time",
      content:
        "Our mission is to give equal importance to both the Employer requiring the right Resource and the Employee requiring the right Opportunity. Our Team has built over 14 years of experience in doing the right thing at the right time.",
    },
  ]);

  const [idx, setIdx] = useState(0);
  
  return (
    <div
      data-aos="zoom-out"
      className="min-h-[110vh] max-w-[100vw] overflow-hidden w-full md:grid flex grid-cols-5 justify-center items-center bg-[#033a5bcc] text-white"
    >
      <div className="col-span-1">
        <div className="text-9xl md:block hidden">
          {idx + 1 <= 9 ? "0" + (idx + 1) : idx + 1}
        </div>
        <br />
        <div className="md:flex hidden lg:px-6">
          {data.map((e, i) => (
            <button
              onClick={() => setIdx(i)}
              key={i}
              className="border p-1 rounded-full m-0.5"
            >
              <div
                className={`${idx == i && "bg-white "} p-1.5 rounded-full`}
              ></div>
            </button>
          ))}
        </div>
      </div>
      <div className="col-span-3 flex flex-col justify-center md:items-center text-center gap-6">
        <p className="spacin">WE ARE THE BEST</p>
        <p className="md:text-6xl text-5xl capitalize md:px-0 px-5">
          {data[idx].head}
        </p>
        <p className="text-xl">{data[idx].content}</p>

        <div className="flex px-6 md:hidden">
          {data.map((e, i) => (
            <button
              onClick={() => setIdx(i)}
              key={i}
              className="border p-1 rounded-full m-0.5"
            >
              <div
                className={`${idx == i && "bg-white "} p-1.5 rounded-full`}
              ></div>
            </button>
          ))}
        </div>
        <a href="https://api.whatsapp.com/send?phone=919346022733&text=Hi there, I'm a bit unsure about how to approach this..." target="_blank" className="mx-auto flex justify-center items-center gap-3 fill-white text-white py-3 px-6 border border-white rounded hover:bg-[#033a5bcc]">
          <p>contact us</p>
          <ArrowTrendUp />
        </a>
      </div>
      <div className="col-span-1 md:flex hidden flex-col gap-3 fill-white justify-end items-end p-10">
        <button
          onClick={() => setIdx((idx + 1) % data.length)}
          className="w-[50px] h-[50px] flex justify-center items-center border border-white rounded-full rotate-90 hover:bg-[#033a5bcc]"
        >
          <TopArrow />
        </button>
        <button
          onClick={() => setIdx(idx == 0 ? data.length - 1 : idx - 1)}
          className="w-[50px] h-[50px] flex justify-center items-center border border-white rounded-full rotate-[-90deg] hover:bg-[#033a5bcc]"
        >
          <TopArrow />
        </button>
      </div>
    </div>
  );
}

export default HeroWrapper;
