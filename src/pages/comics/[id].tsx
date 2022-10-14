import React from "react";

export async function getServerSideProps(context: any) {
  const url = "http://gateway.marvel.com/v1/public/comics?";

  const resp = await fetch(
    `${url}title=${context.params.id}&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
  );
  const data = await resp.json();

  return {
    props: { data },
  };
}

const Comics = ({ data }: any) => {
  console.log(data);
  return <div>Comics</div>;
};

export default Comics;
