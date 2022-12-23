import { Inter } from "@next/font/google";
import Head from "next/head";
import metadata from "../data/metadata";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>a</main>
    </>
  );
}
