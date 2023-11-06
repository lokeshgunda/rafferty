import React from "react";
import Bg from "../../assets/images/bg_4.svg";
import TopArrow from "../../assets/icons/TopArrow";

function ContactForm() {
  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
      }}
      className="max-w-[100vw] overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 max-w-[1300px] mx-auto">
        <div data-aos="slide-right" className="p-4 py-16">
          <p data-aos="fade-up" className="uppercase underline text-[#B69D74]">Contact</p>
          <br />
          <p data-aos="fade-down" className="lg:text-[48px] text-[35px] font-[600] text-[#033A5B]">
            Have A Deal? Get In Touch!
          </p>

          <br />

          <div className="grid grid-cols-2 gap-3">
            <input
              className="border p-2.5 rounded"
              placeholder=" Your Name"
              type="text"
            />
            <input
              className="border p-2.5 rounded"
              placeholder=" Your Email"
              type="text"
            />
          </div>
          <br />

          <div className="grid grid-cols-1 gap-3">
            <input
              className="border p-2.5 rounded"
              placeholder=" Subject"
              type="text"
            />
          </div>
          <br />

          <div className="grid grid-cols-1">
            <textarea
              className="border p-2.5 rounded"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <br />
          <button className="bg-[#B69D74] fill-white text-white py-3 px-8 rounded flex gap-3 justify-center items-center">
            Send Your Message
            <div className="rotate-90">
              <TopArrow />
            </div>
          </button>
        </div>
        <div data-aos="slide-left">
            <div className="w-full lg:h-full h-[75vh]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8048323173093!2d-84.15840932512906!3d34.02322031926371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5989ae3979df9%3A0xb688c22e4bd93c0b!2s3057%20Peachtree%20Industrial%20Blvd%20STE%20110%2C%20Duluth%2C%20GA%2030097%2C%20USA!5e0!3m2!1sen!2sin!4v1682485003450!5m2!1sen!2sin"
                style={{border:0}}
                className="w-full h-full"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ContactForm;
