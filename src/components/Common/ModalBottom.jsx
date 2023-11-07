import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function ModalBottom(props) {
  const [openAnimation, setOpenAnimation] = useState(false);

  useEffect(() => {
    setOpenAnimation(props.isOpen);
  }, [props.isOpen]);

  return ReactDOM.createPortal(
    props.isOpen && (
      <div
        className={`${props.className} transition mx-2 ${
          openAnimation ? "opacity-100 scale-100" : "opacity-0 scale-75"
        } fixed bottom-0 z-[50000] p- rounded-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`absolute right-0 top-0 p-1 rounded-full hover:cursor-pointer hover:bg-[#033A5B26]`}
          onClick={props.handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4 h-4"
          >
            <path
              className="stroke-[#033A5B]"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </div>
        {props.children}
      </div>
    ),
    document.getElementsByTagName("body")[0]
  );
}

export default ModalBottom;
