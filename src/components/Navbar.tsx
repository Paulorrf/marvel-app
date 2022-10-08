import React from "react";

import Link from "next/link";

import { useRouter } from "next/router";

const Navbar = () => {
  let { pathname } = useRouter();

  return (
    <nav>
      <ul className="absolute bottom-2 left-8 flex w-2/4 items-center justify-around text-xl child:decoration-4 child:underline-offset-4">
        <li className={pathname === "/" ? "underline" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/characters" ? "underline" : ""}>
          <Link href="/characters">Characters</Link>
        </li>
        <li className={pathname === "/characters" ? "underline" : ""}>
          Characters
        </li>
        <li className={pathname === "/characters" ? "underline" : ""}>
          Characters
        </li>
        <li
          className={pathname === "/characters" ? "-mb-2 underline" : "-mb-2 "}
        >
          <input
            type="text"
            name="search character"
            placeholder="Search Character"
            className=" w-40 rounded-lg border px-2 text-base text-black"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
