import React from "react";
import Image from "next/image";

const EventsInfo = (comic: any) => {
  return (
    <div className="flex">
      <div>
        <Image
          src={`${comic.comic.thumbnail.path}.jpg`}
          alt={comic.comic.title}
          height={"400px"}
          width={"200px"}
        />
      </div>
      <div className="p-4">
        <p className="font-bold">Title: {comic.comic.title}</p>

        <div className="grid grid-cols-2 gap-x-12">
          <div>
            <p className="mt-4 mb-2 text-center font-bold">Characters</p>
            <div className="grid grid-cols-2">
              {comic.comic.characters.items.map((character: any) => {
                return (
                  <p key={character.name} className="w-40">
                    {character.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <p className="mt-4 mb-2 text-center font-bold">Creators</p>
            <div className="grid grid-cols-2">
              {comic.comic.creators.items.map((creator: any) => {
                return (
                  <p key={creator.name} className="w-40">
                    {creator.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsInfo;
