import React from "react";
import HeroWrapper from "../components/HeroWrapper/HeroWrapper";
import Features from "../components/Features/Features";
import AboutUs from "../components/AboutUs/AboutUs";
import Companies from "../components/Companies/Companies";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <React.Fragment>
      <HeroWrapper />
      <Features />
      <AboutUs />
      <Companies />
      {/* <Testimonials /> */}
    </React.Fragment>
  );
}

export default Home;
