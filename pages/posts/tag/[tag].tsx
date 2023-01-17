import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { metadata, tags } from "../../../data/data";
import PostList from "../../../components/PostList";
import Link from "next/link";
import { useRouter } from "next/router";

let pathName: string;

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
  };

  const router = useRouter();
  pathName = router.asPath.split("/")[3];

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="space-y-3">
        <div className={`font-medium text-2xl dark:text-gray-200`}>
          💻 All Posts
        </div>
        <div className="space-x-4 pt-3 text-sm font-light py-3">
          {tags.map((tag) => (
            <Link
              className={`menuLink ${
                pathName == tag ? "clicked" : ""
              }`}
              key={tag}
              href={`/posts/tag/${tag}`}
            >
              {tag}
            </Link>
          ))}
        </div>
        <PostList
          tag={pathName}
          posts={posts.filter((post) => {
            if (pathName == "all") {
              return post;
            } else if (
              post.tag1 == pathName ||
              post.tag2 == pathName ||
              post.tag3 == pathName
            ) {
              return post;
            }
          })}
        />
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
      posts: posts,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: tags.map((tag) => ({ params: { tag: tag } })),
    fallback: false,
  };
};
