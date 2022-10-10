import React, { KeyboardEvent } from "react";

import Link from "next/link";

import { useRouter } from "next/router";

const Navbar = () => {
  let { pathname } = useRouter();
  const router = useRouter();

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key.toLowerCase() === "enter") {
      let element = event.target as HTMLInputElement;
      router.push(`/characters/${element.value.toLowerCase()}`);
      element.value = "";
    }
  };

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
            onKeyDown={handleSearch}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
