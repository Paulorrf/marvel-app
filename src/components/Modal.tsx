import React, { useRef, MouseEvent, useContext } from "react";
import Context from "../context/context";

interface Props {
  width?: String;
  height?: String;
  children: any;
}

const Modal = ({ children, width = "400px", height = "300px" }: Props) => {
  const [showModal, setShowModal] = useContext(Context);

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-rgba-darker bg-center"
          onClick={closeModal}
          ref={modalRef}
        >
          <div className={`h-[${height}] w-[${width}] bg-white text-black`}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
