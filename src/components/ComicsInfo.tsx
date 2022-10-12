import React from "react";
import Image from "next/image";

const ComicsInfo = (comic: any) => {
  console.log(comic);
  return (
    <div className="flex">
      <div>
        <Image
          src={`${comic.comic.thumbnail.path}.jpg`}
          alt={comic.comic.title}
          height={"300px"}
          width={"200px"}
        />
      </div>
      <div className="p-4">
        <p className="font-bold">{comic.comic.title}</p>
        <p>
          Number of pages:{" "}
          <span className="font-bold">{comic.comic.pageCount}</span>
        </p>
        <p className="mt-4 mb-2 text-center font-bold">Creators</p>
        <div className="grid grid-cols-3">
          {comic.comic.creators.items.map((creator: any) => {
            return <p key={creator.name}>{creator.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ComicsInfo;
