import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Link key={post._id} href={`/blog/${post._raw.flattenedPath}`} passHref>
          <div className={`font-medium text-xl`}>{post.title}</div>
          <div className={`font-light`}>{post.description}</div>
        </Link>
      ))}
    </>
  );
}
