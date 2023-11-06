import React, { useState, useEffect } from "react";
import Leaf from "../../assets/images/leaf.svg";
import LawHammer from "../../assets/images/law_hamer.svg";
import Aos from 'aos'
import "aos/dist/aos.css"

function Features() {
  const [content, setContent] = useState([
    {
      head: "IT Staffing",
      content:
        "In addition to tech roles, we offer a diverse array of opportunities for candidates who pass our interview process and make it to the shortlist. This ensures a wider range of options for potential placements.",
      image: "ITStaffing.png",
    },
    {
      head: "Training",
      content:
        "We'll start by clearly stating the specific objectives and learning outcomes we aim to achieve through this training. This will serve as a roadmap for our session, ensuring that we're all on the same page regarding what we hope to accomplish. Encorporating exercises, discussions, quizzes, and group activities is a crucial aspect of our training approach.",
      image: "Training.png",
    },
    {
      head: "Outsourcing",
      content:
      "We benefit from outsourcing as it enables us to access specialized skills and resources without the overhead costs associated with hiring full-time employees. Additionally, it allows us to tap into the expertise of specialists in specific fields like IT, marketing, accounting, and more.",
      image: "Outsourcing.png",
    },
  ]);
  
  useEffect(()=>{
    Aos.init({ duration: 2000 });
  },[]);

  return (
    <div className="ps-3 max-w-[1300px] block mx-auto relative top-[-10vh]">
      <div className="lg:grid grid-cols-3 text-white">
        {content.map((e, i) => (
          <div data-aos="zoom-in" key={i} className="px-2 w-full text-center lg:my-2 my-4">
            <div className="bg-[#033A5B] p-3 rounded relative">
              <div className="p-10 hover:border-2 border-[#B69D74] rounded">
                <img src={Leaf} className="absolute top-0 right-0" alt="" />
                <img
                  src={LawHammer}
                  className="absolute bottom-0 left-0"
                  alt=""
                />
                <div className="flex justify-center">
                  <div className="bg-white rounded-full p-6">
                    <img
                      width={40}
                      src={require(`../../assets/images/${e.image}`)}
                      alt=""
                    />
                  </div>
                </div>
                <br />
                <p className="text-[30px]">{e.head}</p>
                <br />
                <p className="">{e.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
