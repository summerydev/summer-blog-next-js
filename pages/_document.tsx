import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-neutral-100 dark:bg-slate-800 text-indigo-900  dark:text-slate-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
