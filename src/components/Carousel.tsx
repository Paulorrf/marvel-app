import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

interface Props {
  data: any;
}

function createCard(data: any) {
  return data.map((hero: any) => {
    return (
      <Link
        key={hero.data.results[0].thumbnail.path}
        href={`/characters/${hero.data.results[0].name.toLowerCase()}`}
      >
        <div
          key={hero.data.results[0].thumbnail.path}
          className="group relative cursor-pointer"
        >
          <div className="absolute top-[60%] z-20 bg-slate-900 py-2 px-1 opacity-0 group-hover:animate-fadeIn group-hover:opacity-100">
            <h2
              style={{ textShadow: "2px 2px 2px black" }}
              className="mx-2 -mt-2 text-white"
            >
              {hero.data.results[0]?.description}
            </h2>
          </div>
          <div className="group-hover:opacity-">
            <Image
              src={`${hero.data.results[0].thumbnail.path}.${hero.data.results[0].thumbnail.extension}`}
              alt="teste"
              height={"640px"}
              width={"420px"}
            />
          </div>
        </div>
      </Link>
    );
  });
}

const Carousel = ({ data }: Props) => {
  const [idx, setIdx] = useState(0);
  const allHeroes = createCard(data);

  // console.log(data);

  const nextSlide = () => {
    if (idx + allHeroes.length - 3 < allHeroes.length) {
      setIdx((prev) => prev + 1);
    } else if (idx + allHeroes.length - 3 === allHeroes.length) {
      setIdx(0);
    } else {
      setIdx((prev) => prev - 1);
    }
  };

  const prevSlide = () => {
    if (idx === 0) {
      setIdx(allHeroes.length - 4);
    } else {
      setIdx((prev) => prev - 1);
    }
  };

  // console.log(allHeroes.length);

  return (
    <div>
      <div
        className="absolute top-[60%] left-6 z-10 cursor-pointer bg-transparent"
        onClick={prevSlide}
      >
        <div>
          <BsArrowLeftCircle size="40px" color="#fff" />
        </div>
      </div>
      <div className="mx-4 grid grid-cols-1 gap-2 pt-4 child:min-h-[420px] md:grid-cols-4">
        {allHeroes[idx]}
        {allHeroes[idx + 1]}
        {allHeroes[idx + 2]}
        {allHeroes[idx + 3]}
      </div>
      <div
        className="absolute top-[60%] right-6 z-10 cursor-pointer"
        onClick={nextSlide}
      >
        <div>
          <BsArrowRightCircle size="40px" color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
