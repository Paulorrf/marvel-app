import Image from "next/image";
import React, { useState } from "react";

import CharactersEventsComics from "../../components/CharactersEventsComics";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "iron man" } },
      { params: { id: "thor" } },
      { params: { id: "hulk" } },
      { params: { id: "thanos" } },
      { params: { id: "wolverine" } },
      { params: { id: "vision" } },
      { params: { id: "ultron" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const url = "http://gateway.marvel.com/v1/public/characters?";

  const resp = await fetch(
    `${url}name=${params.id}&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
  );

  return { props: { data: await resp.json() } };
}

const Character = ({ data }: any) => {
  const [selectedOption, setSelectedOption] = useState("description");
  console.log(data);
  return (
    <div className="mx-2 grid min-h-[600px] grid-cols-[40%_minmax(40%,_1fr)_20%] pt-2">
      <div className="relative">
        <Image
          src={`${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`}
          alt="teste"
          layout="fill"
        />
      </div>
      <div className="p-4 text-white">
        <h2 className="mb-4 text-center text-lg font-bold">
          {data.data.results[0].name.toUpperCase()}
        </h2>
        {selectedOption.toLowerCase() === "description" &&
          data.data.results[0].description}

        {selectedOption.toLowerCase() === "comics" && (
          <CharactersEventsComics
            name={data.data.results[0].name}
            data={data.data.results[0].comics}
            refer="comics"
          />
        )}

        {selectedOption.toLowerCase() === "events" && (
          <CharactersEventsComics
            name={data.data.results[0].name}
            data={data.data.results[0].events}
            refer="events"
          />
        )}
      </div>
      <div className="relative z-10 h-full bg-slate-400 bg-blured bg-cover bg-center bg-no-repeat text-white bg-blend-multiply">
        <ul className="z-20 h-full  pt-16 text-center child:mb-4 child:cursor-pointer child:border child:p-2 child:uppercase">
          <li onClick={() => setSelectedOption("description")}>Description</li>
          <li onClick={() => setSelectedOption("comics")}>Comics</li>
          <li onClick={() => setSelectedOption("events")}>Events</li>
        </ul>
      </div>
    </div>
  );
};

export default Character;
