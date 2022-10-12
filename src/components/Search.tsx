import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import Context from "../context/context";

const Search = () => {
  const [radioValue, setRadioValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const [showModal, setShowModal] = useContext(Context);

  const handleChange = (event: any) => {
    setRadioValue(event.target.value);
  };

  const handleSearch = (event: any) => {
    event.preventDefault();
    router.push(`/${radioValue}/${searchValue}`);
    setShowModal(false);
  };
  return (
    <div>
      <div className="mx-4 flex justify-between pt-4">
        <div>
          <input
            type="radio"
            value="characters"
            id="characters"
            name="search"
            onChange={handleChange}
          />{" "}
          <label htmlFor="characters">Characters</label>
        </div>

        <div>
          <input
            type="radio"
            value="creators"
            id="creators"
            name="search"
            onChange={handleChange}
          />{" "}
          <label htmlFor="creators">Creators</label>
        </div>

        <div>
          <input
            type="radio"
            value="comics"
            id="comics"
            name="search"
            onChange={handleChange}
          />{" "}
          <label htmlFor="comics">Comics</label>
        </div>
      </div>
      <div className="flex h-[60%] items-center justify-center">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="rounded-lg border border-black p-2"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default Search;
