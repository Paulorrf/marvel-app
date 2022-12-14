import React from "react";

import Link from "next/link";

import Background from "./Background";

function createCard(route: string, name: string, imgName: string) {
  return (
    <Background card bgImage={imgName} bgColor="bg-slate-500">
      <Link href={`${route}`}>
        <div className="h-full cursor-pointer text-xl child:hover:px-8 child:hover:text-2xl">
          <h2 className="gray-400 gray-500 absolute bottom-6 left-2 bg-gradient-to-r from-transparent to-gray-700 px-4">
            {name}
          </h2>
        </div>
      </Link>
    </Background>
  );
}

const ImgNavbar = () => {
  const routes = [
    { route: "/characters", name: "Characters", imgName: "bg-character" },
    { route: "/creators", name: "Creators", imgName: "bg-creator" },
    { route: "/comics", name: "Comics", imgName: "bg-comics" },
    { route: "/events", name: "Events", imgName: "bg-events" },
  ];

  return (
    <div className="relative mx-2 flex gap-2 pt-2 child:min-h-[400px] child:w-1/4">
      {routes.map(({ route, name, imgName }) => {
        return createCard(route, name, imgName);
      })}
    </div>
  );
};

export default ImgNavbar;
