import React, { useContext, useState } from "react";

import Link from "next/link";

import Modal from "./Modal";

import Context from "../context/context";

import { useRouter } from "next/router";
import Search from "./Search";

const Navbar = () => {
  const [showModal, setShowModal] = useContext(Context);
  let { pathname } = useRouter();

  return (
    <nav>
      <ul className="absolute bottom-2 left-8 flex w-2/4 items-center justify-around text-xl child:decoration-4 child:underline-offset-4">
        <li className={pathname === "/" ? "underline" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li
          className={
            pathname === "/characters" || pathname === "/characters/[id]"
              ? "underline"
              : ""
          }
        >
          <Link href="/characters">Characters</Link>
        </li>
        <li className={pathname === "/creators" ? "underline" : ""}>
          <Link href="/creators">Creators</Link>
        </li>
        <li className={pathname === "/comics" ? "underline" : ""}>
          <Link href="/comics">Comics</Link>
        </li>
        <li className={pathname === "/events" ? "underline" : ""}>
          <Link href="/events">Events</Link>
        </li>

        <li>
          <button onClick={() => setShowModal(true)} className="">
            Search
          </button>
        </li>
      </ul>

      <Modal>
        <Search />
      </Modal>
    </nav>
  );
};

export default Navbar;
