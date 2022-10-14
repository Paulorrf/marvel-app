import "../styles/globals.css";
import type { AppProps } from "next/app";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Background bgImage="bg-banner"> */}
      <Navbar />
      {/* </Background> */}
      <div
        style={{ fontFamily: "Alkalami, serif" }}
        className="h-full bg-slate-800 bg-background bg-cover bg-no-repeat bg-blend-multiply"
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
