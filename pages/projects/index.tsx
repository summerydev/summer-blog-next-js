import { Inter } from "@next/font/google";
import Head from "next/head";
import { metadata } from "../../data/metadata";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
          <div className={`text-center font-mono text-5xl font-extrabold`}>
            🚧 개발중 🚜
          </div>
        </>
      </main>
    </>
  );
}
