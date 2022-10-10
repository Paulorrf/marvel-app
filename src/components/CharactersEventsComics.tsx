import React from "react";

import { HiOutlineExternalLink } from "react-icons/hi";

const CharactersEventsComics = ({ name, data, refer }: any) => {
  //http://gateway.marvel.com/v1/public/events/116?ts=1&apikey=&hash=

  return (
    <div>
      <h2 className="pb-2">{`${name} appeared in ${data.available} ${refer}`}</h2>
      <div className="inline-block min-w-[300px]">
        {data.items.map((item: any) => {
          return (
            <div className="border" key={item.name}>
              <div
                className="mx-2 flex items-center justify-between"
                style={{ textShadow: "2px 2px 2px black" }}
              >
                <p>{item.name}</p>
                <span className="ml-4 cursor-pointer ">
                  <HiOutlineExternalLink color="#0284c7" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharactersEventsComics;
