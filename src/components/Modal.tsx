import React, { useRef, MouseEvent } from "react";

const Modal = ({ showModal, setShowModal }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      console.log(modalRef.current);
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-center"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={closeModal}
          ref={modalRef}
        >
          <div className="w-[700px] bg-slate-400">
            <div>teste</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
