import type { NextPage } from "next";
import Head from "next/head";

import ImgNavbar from "../components/ImgNavbar";

const Home: NextPage = () => {
  return (
    <div className="h-[80vh]">
      <Head>
        <title>Marvel App</title>
        <meta name="description" content="Marvel App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImgNavbar />
    </div>
  );
};

export default Home;
