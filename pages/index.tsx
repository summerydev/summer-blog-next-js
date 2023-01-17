import { Inter } from "@next/font/google";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { metadata } from "../data/data";
import PostList from "../components/PostList";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <main className="space-y-3">
        <div className={`font-medium text-2xl dark:text-gray-200 py-3 `}>
          🧑‍💻 Recents Posts
        </div>
        <PostList posts={posts} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};
