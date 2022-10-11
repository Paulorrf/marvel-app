import React, { useRef, MouseEvent } from "react";

const Modal = ({ showModal, setShowModal, children }: any) => {
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
          <div className="h-[300px] w-[400px] bg-white text-black">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
