import "../styles/globals.css";
import type { AppProps } from "next/app";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{ fontFamily: "Alkalami, serif" }}
      className="h-screen bg-slate-900"
    >
      <Background bgImage="bg-banner">
        <Navbar />
      </Background>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
