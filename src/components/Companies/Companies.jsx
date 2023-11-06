import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Companies({ className }) {
  const [images, setImages] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    const images = require.context("../../assets/images/clients", true);
    setImages(images.keys().map((image) => images(image)));
  }, []);
  return (
    <React.Fragment>
      <div data-aos="zoom-in" className={className ? className : "bg-[#033a5bcc]"}>
        <Carousel
          className="max-w-[1300px] min-h-[250px] block mx-auto"
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {images.map((e, i) => (
            <img key={i} className="block mx-auto" src={e} alt="" />
          ))}
        </Carousel>
      </div>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default Companies;
