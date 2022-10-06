import type { NextPage } from "next";
import Head from "next/head";

import Background from "../components/Background";
import Navbar from "../components/Navbar";
import ImgNavbar from "../components/ImgNavbar";

const Home: NextPage = () => {
  return (
    <div>
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
