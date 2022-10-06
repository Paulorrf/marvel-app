import React from "react";

import Link from "next/link";

import Background from "./Background";

const ImgNavbar = () => {
  return (
    <div className="relative mx-2 mt-2 flex gap-2 child:min-h-[400px] child:w-1/4">
      <Background bgImage="bg-banner">
        <Link href="/characters">
          <div className="h-full cursor-pointer child:hover:bottom-[50%] child:hover:left-[40%]">
            <h2 className=" gray-400 gray-500 absolute bottom-4 left-2 bg-gradient-to-r from-transparent to-gray-700 px-4">
              Characters
            </h2>
          </div>
        </Link>
      </Background>
      <Background bgImage="bg-banner">
        <Link href="/characters">
          <div className="h-full cursor-pointer child:hover:bottom-[50%] child:hover:left-[40%]">
            <h2 className="absolute bottom-4 left-2 bg-gradient-to-r from-gray-500 to-gray-700 px-4">
              teste
            </h2>
          </div>
        </Link>
      </Background>
      <Background bgImage="bg-banner">
        <h2>teste</h2>
      </Background>
      <Background bgImage="bg-banner">
        <h2>teste</h2>
      </Background>
    </div>
  );
};

export default ImgNavbar;
