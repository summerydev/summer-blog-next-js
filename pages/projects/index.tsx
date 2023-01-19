import { Inter } from "@next/font/google";
import Head from "next/head";
import { metadata, projects, social } from "../../data/data";
import Image from "next/image";
import Link from "next/link";

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
        <div className={`text-center font-mono text-5xl font-extrabold`}>
          🚧 개발중 🚜
        </div>
        <div className="flex flex-row flex-wrap grow justify-evenly">
          {projects.map((project) => (
            <div key={project.name} className={`basis-${projects.length}`}>
              <Image
                src={project.thumbNail}
                alt={project.name}
                width={`20`}
                height={`20`}
              ></Image>
              <div>{project.name}</div>
              <div className="flex flex-row space-x-1">
                <Link href={project.repo}>
                  <Image
                    src={social.filter((el) => el.name == "github")[0].svg}
                    alt={social.filter((el) => el.name == "github")[0].name}
                    width={`20`}
                    height={`20`}
                  ></Image>
                </Link>
                <Link href={project.demo}>🔗</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
