import React, { useState } from "react";
import Image from "next/image";

interface Props {
  data: any;
}

function createCard(data: any) {
  return data.map((hero: any) => {
    return (
      <div key={hero.data.results[0].thumbnail.path} className="relative">
        <div className="absolute top-[60%] z-20">
          <h2
            style={{ textShadow: "1px 1px 1px black" }}
            className="mx-2 -mt-2 text-white"
          >
            {hero.data.results[0].description}
          </h2>
        </div>
        <Image
          src={`${hero.data.results[0].thumbnail.path}.${hero.data.results[0].thumbnail.extension}`}
          alt="teste"
          height={"600px"}
          width={"420px"}
        />
      </div>
    );
  });
}

const Carousel = ({ data }: Props) => {
  // console.log(data);
  const [idx, setIdx] = useState(0);
  const allHeroes = createCard(data);

  console.log(allHeroes);

  const nextSlide = () => {
    if (idx + 4 < allHeroes.length) {
      setIdx((prev) => prev + 1);
    } else if (idx + 4 === allHeroes.length) {
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

  return (
    <div>
      <div
        className="absolute top-[60%] left-4 z-10 bg-transparent"
        onClick={prevSlide}
      >
        <h2>LEFT</h2>
      </div>
      <div className="mx-4 mt-2 grid grid-cols-4 gap-2 child:min-h-[420px]">
        {allHeroes[idx]}
        {allHeroes[idx + 1]}
        {allHeroes[idx + 2]}
        {allHeroes[idx + 3]}

        {/* {data.map((hero: any) => {
          return (
            <div key={hero.data.results[0].thumbnail.path} className="relative">
              <div className="absolute top-[60%] z-20">
                <h2
                  style={{ textShadow: "1px 1px 1px black" }}
                  className="mx-2 -mt-2 text-white"
                >
                  {hero.data.results[0].description}
                </h2>
              </div>
              <Image
                src={`${hero.data.results[0].thumbnail.path}.${hero.data.results[0].thumbnail.extension}`}
                alt="teste"
                height={"600px"}
                width={"420px"}
              />
            </div>
          );
        })} */}
      </div>
      <div className="absolute top-[60%] right-4 z-10" onClick={nextSlide}>
        <h2>RIGHT</h2>
      </div>
    </div>
  );
};

export default Carousel;
