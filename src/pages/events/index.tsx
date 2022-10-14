import React, { useContext, useState } from "react";

import { HiOutlineExternalLink } from "react-icons/hi";

import EventsInfo from "../../components/EventsInfo";
import Modal from "../../components/Modal";
import Context from "../../context/context";

export async function getStaticProps() {
  const url = "http://gateway.marvel.com/v1/public/events?";
  const res = await fetch(
    `${url}&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
  );
  const events = await res.json();

  return {
    props: {
      events,
    },
  };
}

const Events = ({ events }: any) => {
  const [selectedComic, setSelectedComic] = useState<any>();
  const [showModal, setShowModal] = useContext(Context);

  const handleComic = (comic: any) => {
    setSelectedComic(comic);
    setShowModal(true);
  };

  return (
    <div className="flex h-[120vh] justify-center">
      <div className="mt-8 h-96 bg-rgba-darker p-4 text-white">
        <p className="mb-4 text-center text-lg font-bold">
          Marvel currently has {events.data.total} big events.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {events.data.results.map((comic: any) => {
            return (
              <div
                key={comic.title}
                className="mx-4 flex items-center justify-between"
              >
                <p className="mr-2">{comic.title}</p>
                <span
                  className="cursor-pointer"
                  onClick={() => handleComic(comic)}
                >
                  <HiOutlineExternalLink color="#0284c7" />
                </span>
              </div>
            );
          })}
          <Modal width="1000px">
            <EventsInfo comic={selectedComic} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Events;
