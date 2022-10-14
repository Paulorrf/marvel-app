import React, { useState } from "react";

import { HiOutlineExternalLink } from "react-icons/hi";

import ComicsInfo from "../../components/ComicsInfo";
import Modal from "../../components/Modal";

export async function getStaticProps() {
  const url = "http://gateway.marvel.com/v1/public/comics?";
  const res = await fetch(
    `${url}offset=2&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
  );
  const comics = await res.json();

  return {
    props: {
      comics,
    },
  };
}

const Comics = ({ comics }: any) => {
  const [selectedComic, setSelectedComic] = useState<any>();
  const [showModal, setShowModal] = useState(false);

  const handleComic = (comic: any) => {
    setSelectedComic(comic);
    setShowModal(true);
  };

  return (
    <div className="flex h-[120vh] justify-center">
      <div className="mt-8 h-96 bg-rgba-darker  p-4 text-white">
        <p className="mb-4 text-center text-lg font-bold">
          Marvel currently has {comics.data.total} comics.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {comics.data.results.map((comic: any) => {
            return (
              <div key={comic.title} className="flex items-center">
                <p className="mr-2">{comic.title}</p>
                <span onClick={() => handleComic(comic)}>
                  <HiOutlineExternalLink color="#0284c7" />
                </span>
              </div>
            );
          })}
          <Modal
            width="1000px"
            showModal={showModal}
            setShowModal={setShowModal}
          >
            <ComicsInfo comic={selectedComic} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Comics;
