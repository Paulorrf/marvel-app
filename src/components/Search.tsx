import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = ({ setShowModal }: any) => {
  const [radioValue, setRadioValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [alert, setAlert] = useState(false);
  const router = useRouter();

  const handleChange = (event: any) => {
    setRadioValue(event.target.value);
  };

  const handleSearch = (event: any) => {
    event.preventDefault();
    if (radioValue !== "") {
      router.push(`/${radioValue}/${searchValue}`);
      setShowModal(false);
    } else {
      setAlert(true);
    }
  };

  return (
    <div>
      <div className="mx-4 flex justify-around pt-4">
        <div className="child:cursor-pointer">
          <input
            type="radio"
            value="characters"
            id="characters"
            name="search"
            onChange={handleChange}
          />{" "}
          <label htmlFor="characters">Characters</label>
        </div>

        <div className="child:cursor-pointer">
          <input
            type="radio"
            value="comics"
            id="comics"
            name="search"
            onChange={handleChange}
          />{" "}
          <label htmlFor="comics">Comics</label>
        </div>
        <div className="child:cursor-pointer">
          <input
            type="radio"
            value="events"
            id="events"
            name="search"
            onChange={handleChange}
          />{" "}
          <label htmlFor="events">Events</label>
        </div>
      </div>
      <div className="mt-8 h-[60%] text-center">
        {alert && (
          <p className="mb-4 text-red-700">
            Please choose one of the options above.
          </p>
        )}
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className={`rounded-lg ${
              alert ? "border-2 border-red-700" : "border border-black"
            }  p-2`}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default Search;
