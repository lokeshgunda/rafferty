import React from "react";
import Bg from "../../assets/images/bg_4.svg";
import TopArrow from "../../assets/icons/TopArrow";

function ContactForm() {
  const dbUrl = process.env.REACT_APP_DB_URL;

  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
      }}
      className="max-w-[100vw] overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 max-w-[1300px] mx-auto">
        <div data-aos="slide-right" className="p-4 py-16">
          <p data-aos="fade-up" className="uppercase underline text-[#B69D74]">
            Contact
          </p>
          <br />
          <p
            data-aos="fade-down"
            className="lg:text-[48px] text-[35px] font-[600] text-[#033A5B]"
          >
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.795914757091!2d-101.87484192439598!3d33.584647773336634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe12b415e6bcd3%3A0x317f44fb0078a337!2sBroadway%20W%2C%20Lubbock%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1699299547068!5m2!1sen!2sin"
              style={{ border: 0 }}
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
