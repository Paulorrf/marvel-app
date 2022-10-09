import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
    fallback: true,
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
  const router = useRouter();

  //if character doesn't have info
  useEffect(() => {
    if (data.data.results[0] === undefined) {
      router.push("/");
    }
  }, []);

  return (
    <div className="mx-2 grid min-h-[600px] grid-cols-[45%_minmax(45%,_1fr)_10%] pt-2">
      <div className="relative max-h-[600px]">
        <Image
          src={`${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`}
          alt={data.data.results[0].name}
          layout="responsive"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div
        className={`mx-auto ${
          selectedOption === "description" ? "pt-12" : "py-4"
        } px-8 text-white`}
      >
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
      <div className="relative relative h-full text-white backdrop-blur-lg">
        <div className="h-full bg-slate-800 bg-cover bg-center bg-no-repeat blur"></div>
        <ul className="absolute top-0 left-4 h-full pt-16 text-center child:mb-4 child:cursor-pointer child:p-2 child:uppercase">
          <li
            className={`absolute ${
              selectedOption.toLowerCase() === "description"
                ? "-left-6 underline decoration-2 underline-offset-4"
                : ""
            }`}
            onClick={() => setSelectedOption("description")}
          >
            Description
          </li>
          <li
            className={`absolute top-[20%] ${
              selectedOption.toLowerCase() === "comics"
                ? "-left-6 underline decoration-2 underline-offset-4"
                : ""
            }`}
            onClick={() => setSelectedOption("comics")}
          >
            Comics
          </li>
          <li
            className={`absolute top-[30%] ${
              selectedOption.toLowerCase() === "events"
                ? "-left-6 underline decoration-2 underline-offset-4"
                : ""
            }`}
            onClick={() => setSelectedOption("events")}
          >
            Events
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Character;
