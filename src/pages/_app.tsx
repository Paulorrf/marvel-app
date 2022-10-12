import "../styles/globals.css";
import type { AppProps } from "next/app";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

import Context from "../context/context";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Context.Provider value={[showModal, setShowModal]}>
        <Background bgImage="bg-banner">
          <Navbar />
        </Background>
        <div
          style={{ fontFamily: "Alkalami, serif" }}
          className="h-full bg-slate-800 bg-background bg-cover bg-no-repeat bg-blend-multiply"
        >
          <Component {...pageProps} />
        </div>
      </Context.Provider>
    </>
  );
}

export default MyApp;
