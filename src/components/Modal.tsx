import React, { useRef, MouseEvent, useState } from "react";
import { useRouter } from "next/router";

const Modal = ({ showModal, setShowModal }: any) => {
  const [radioValue, setRadioValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const handleChange = (event: any) => {
    setRadioValue(event.target.value);
  };

  const handleSearch = (event: any) => {
    event.preventDefault();
    router.push(`/${radioValue}/${searchValue}`);
    setShowModal(false);
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
            <div className="mx-4 flex justify-between pt-4">
              <div>
                <input
                  type="radio"
                  value="characters"
                  id="characters"
                  name="search"
                  onChange={handleChange}
                />{" "}
                <label htmlFor="characters">Characters</label>
              </div>

              <div>
                <input
                  type="radio"
                  value="creators"
                  id="creators"
                  name="search"
                  onChange={handleChange}
                />{" "}
                <label htmlFor="creators">Creators</label>
              </div>

              <div>
                <input
                  type="radio"
                  value="comics"
                  id="comics"
                  name="search"
                  onChange={handleChange}
                />{" "}
                <label htmlFor="comics">Comics</label>
              </div>
            </div>
            <div className="flex h-[60%] items-center justify-center">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="rounded-lg border border-black p-2"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button type="submit"></button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
