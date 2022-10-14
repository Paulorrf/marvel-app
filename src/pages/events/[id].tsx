import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { HiOutlineExternalLink } from "react-icons/hi";

export async function getServerSideProps(context: any) {
  const url = "http://gateway.marvel.com/v1/public/events?";

  const resp = await fetch(
    `${url}name=${context.params.id}&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
  );
  const events = await resp.json();

  return {
    props: { events },
  };
}

const Events = ({ events }: any) => {
  const router = useRouter();

  console.log(events);

  useEffect(() => {
    if (events === undefined || events.data.results.length === 0) {
      router.push("/");
    }
  }, []);

  return events === undefined || events.data.results.length === 0 ? (
    <div>dasdsa</div>
  ) : (
    <div className="flex h-[120vh] justify-center">
      <div className="mt-8 flex max-h-[80vh] w-[800px] items-center justify-center bg-rgba-darker p-4 text-white">
        <div>
          <Image
            src={`${events.data.results[0].thumbnail.path}.jpg`}
            alt={events.data.results[0].title}
            height={"400px"}
            width={"300px"}
          />
        </div>
        <div className="w-[60%] px-4 text-center">
          <h2 className="mb-4 text-xl font-bold">
            {events.data.results[0].title}
          </h2>
          <p className="mb-8">{events.data.results[0].description}</p>
          <div className="flex items-center justify-center">
            <a
              href={events.data.results[0].urls[0].url}
              target="_blank"
              rel="noreferrer"
              className="mr-2 flex items-center text-lg hover:underline"
            >
              More about this event
              <span className="ml-2">
                <HiOutlineExternalLink color="#0284c7" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
