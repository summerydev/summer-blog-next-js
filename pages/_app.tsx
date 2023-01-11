import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
