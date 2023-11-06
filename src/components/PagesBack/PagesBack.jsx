import React from "react";
import scholar from "../../assets/images/banner_1900x700.png";
import Arrow from "../../assets/icons/TopArrow";

function PagesBack({pageName}) {
  return (
    <div
    className="lg:h-[70vh] h-[50vh] max-w-[100vw] overflow-hidden"
      style={{
        backgroundImage: `url(${scholar})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"
      }}
    >
      <div className="flex flex-col justify-center h-full">
        <h1 data-aos="zoom-out-left" className="mx-3 text-white lg:text-6xl text-4xl font-bold text-stroke">{pageName}</h1>
        <div data-aos="zoom-in-right" className="flex p-3">
          <a href="/" className="text-white mx-2 font-[900] text-stroke">
            Home
          </a>
          <div className="mx-2 text-white rotate-90 fill-white">
            <Arrow />
          </div>
          <a href="#" className="text-white mx-2 font-[900] text-stroke">
            {pageName}
          </a>
        </div>
      </div>
    </div>
  );
}

export default PagesBack;
