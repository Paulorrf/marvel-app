import React from "react";

const CharactersEventsComics = ({ name, data, refer }: any) => {
  //http://gateway.marvel.com/v1/public/events/116?ts=1&apikey=&hash=

  return (
    <div>
      <h2>{`${name} appeared in ${data.available} ${refer}`}</h2>
      {data.items.map((item: any) => {
        return <p key={item.name}>{item.name}</p>;
      })}
    </div>
  );
};

export default CharactersEventsComics;
