import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="container bg-neutral-100 dark:bg-slate-800 text-indigo-900 dark:text-slate-300 dark: transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
