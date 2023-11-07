import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal(props){
  const [openAnimation, setOpenAnimation] = useState(false);

  useEffect(() => {
    setOpenAnimation(props.isOpen);
  }, [props.isOpen]);

  const twStyles = {
    backdrop: `transition ${
      openAnimation ? 'opacity-100' : 'opacity-0'
    } z-50 bg-[#000000BF] fixed flex min-h-screen min-w-screen top-0 left-0 right-0 bottom-0 overflow-y-auto p-8`,
    modal: `transition ${
      openAnimation ? 'scale-100' : 'scale-75'
    } min-h-[60px] min-w-[120px] m-auto relative bg-white rounded-xl overflow-hidden shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]`,
    close:
      'absolute top-[8px] right-[8px] p-2 cursor-pointer rounded-full transition hover:bg-[#033A5B26]'
  };

  return ReactDOM.createPortal(
    props.isOpen && (
      <div className={twStyles.backdrop} onClick={props.handleClose}>
        <div className={twStyles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={twStyles.close} onClick={props.handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6"
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
      </div>
    ),
    document.getElementsByTagName("body")[0]
  );
};

export default Modal;
