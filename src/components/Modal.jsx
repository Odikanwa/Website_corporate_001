/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useModalContext } from "../contexts/ModalContext";
import ReactDOM from 'react-dom';
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const { modalOpen, setModalOpen } = useModalContext();

  useEffect(() => {
    if(modalOpen == true){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  });
  


  if (!modalOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="h-auto w-auto  fixed inset-0 bg-black opacity-75 backdrop-blur-md flex justify-center items-center z-1000"
      onClick={() => setModalOpen(false)}
    >
      <div className="flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => setModalOpen(false)}
        >
          X
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
