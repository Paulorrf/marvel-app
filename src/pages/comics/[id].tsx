import { useRouter } from "next/router";
import React, { useEffect } from "react";

export async function getServerSideProps(context: any) {
  const url = "http://gateway.marvel.com/v1/public/comics?";

  const resp = await fetch(
    `${url}title=${context.params.id}&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
  );
  const comics = await resp.json();

  return {
    props: { comics },
  };
}

const Comics = ({ comics }: any) => {
  const router = useRouter();

  useEffect(() => {
    if (comics === undefined || comics.data.results.length === 0) {
      router.push("/");
    }
  }, []);

  return (
    <div className="flex h-[120vh] justify-center">
      <div className="mt-8 max-h-[80vh] bg-rgba-darker  p-4 text-white">
        <h2>Comics related:</h2>
        <br />
        <div className="grid grid-cols-2 gap-x-16 gap-y-2">
          {comics.data.results.map((comic: any) => {
            return (
              <div key={comic.title}>
                <p>{comic.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comics;
