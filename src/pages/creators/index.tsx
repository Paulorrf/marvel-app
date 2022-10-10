import React from "react";

export async function getServerSideProps() {
  const url = "http://gateway.marvel.com/v1/public/creators?";

  const promises = await Promise.all([
    fetch(
      `${url}firstName=stan&lastName=lee&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
    ),
    fetch(
      `${url}firstName=jack&lastName=kirby&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
    ),
    fetch(
      `${url}firstName=steve&lastName=ditko&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
    ),
    fetch(
      `${url}firstName=roy&lastName=thomas&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
    ),
  ]).then((res) => {
    return res;
  });

  let data = [];

  for (let i = 0; i < promises.length; i++) {
    data.push(await promises[i].json());
  }

  return { props: { data } };
}

const index = ({ data }: any) => {
  const creatorsImgs = [
    "bg-stanLee",
    "bg-jackKirby",
    "bg-steveDitko",
    "bg-royThomas",
  ];
  return (
    <div className="child: mx-2 grid h-screen grid-cols-4 gap-2 pt-2 child:h-[540px] child:bg-cover child:bg-center child:bg-no-repeat">
      {data.map((creator: any, index: number) => {
        return (
          <div
            key={creator.data.results[0].fullName}
            className={`bg-slate-400 ${creatorsImgs[index]} relative bg-blend-multiply`}
          >
            <p
              className="absolute bottom-4 mx-2 text-white"
              style={{
                textShadow: "2px 2px 2px black",
                backgroundColor: "rgba(0,0,0,0.4)",
              }}
            >
              {creator.data.results[0].fullName} created{" "}
              {creator.data.results[0].comics.available} comics and participated
              in the creation of {creator.data.results[0].events.available} big{" "}
              {creator.data.results[0].events.available === 1
                ? "event"
                : "events"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default index;
