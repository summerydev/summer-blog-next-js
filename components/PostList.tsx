import Link from "next/link";

export default function PostLists({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Link key={post._id} href={`/posts/${post._raw.flattenedPath}`} passHref>
          <div className={`font-medium text-xl`}>{post.title}</div>
          <div className={`font-light`}>{post.description}</div>
        </Link>
      ))}
    </>
  );
}
