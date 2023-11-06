import React from "react";
import ContactDetails from "../components/ContactDetails/ContactDetails";
import ContactForm from "../components/ContactForm/ContactForm";
import PagesBack from "../components/PagesBack/PagesBack";

function Contact() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <PagesBack pageName={"Contact Us"}/>
      <br />
      <br />

      <ContactDetails/>
      <ContactForm/>
    </div>
  );
}

export default Contact;
