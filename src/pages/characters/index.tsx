import React from "react";

import Carousel from "../../components/Carousel";

export async function getServerSideProps() {
  const url = "http://gateway.marvel.com/v1/public/characters?";

  const promises = await Promise.all([
    fetch(
      `${url}name=iron man&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
    ),
    fetch(
      `${url}name=thor&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
    ),
    fetch(
      `${url}name=hulk&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
    ),
    fetch(
      `${url}name=thanos&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
    ),
    fetch(
      `${url}name=wolverine&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
    ),
    fetch(
      `${url}name=daredevil&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
    ),
  ]).then((res) => {
    return res;
  });

  let data = [];

  data.push(await promises[0].json());
  data.push(await promises[1].json());
  data.push(await promises[2].json());
  data.push(await promises[3].json());
  data.push(await promises[4].json());
  data.push(await promises[5].json());

  return { props: { data } };
}

const Characters = ({ data }: any) => {
  return (
    <div>
      <Carousel data={data} />
    </div>
  );
};

export default Characters;
