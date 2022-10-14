import React, { useState } from "react";

import Link from "next/link";

import Modal from "./Modal";

import { useRouter } from "next/router";
import Search from "./Search";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  let { pathname } = useRouter();

  function handleChange() {
    setShowModal(true);
  }

  return (
    <nav className="relative h-48 bg-slate-700 bg-banner text-white bg-blend-multiply">
      <ul className="absolute bottom-2 left-8 flex w-2/4 items-center justify-around text-xl child:decoration-4 child:underline-offset-4">
        <li className={pathname === "/" ? "underline" : ""}>
          <Link href="/">HOME</Link>
        </li>
        <li
          className={
            pathname === "/characters" || pathname === "/characters/[id]"
              ? "underline"
              : ""
          }
        >
          <Link href="/characters">CHARACTERS</Link>
        </li>
        <li className={pathname === "/creators" ? "underline" : ""}>
          <Link href="/creators">CREATORS</Link>
        </li>
        <li className={pathname === "/comics" ? "underline" : ""}>
          <Link href="/comics">COMICS</Link>
        </li>
        <li className={pathname === "/events" ? "underline" : ""}>
          <Link href="/events">EVENTS</Link>
        </li>

        <li>
          {/* <button onClick={() => setShowModal(true)} className=""> */}
          <button onClick={handleChange} className="">
            SEARCH
          </button>
        </li>
      </ul>

      <Modal
        width={"w-[500px]"}
        height={"h-[200px]"}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <Search setShowModal={setShowModal} />
      </Modal>
    </nav>
  );
};

export default Navbar;
